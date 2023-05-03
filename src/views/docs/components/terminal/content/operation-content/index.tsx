import { TExtendedOperation, TExtendedParameter, TExtendedSchema } from '~/open-api/types'
import Label from '~/views/docs/components/content/label'
import { MDXProvider } from '@mdx-js/react'
import { merge } from 'lodash'
import React, { useMemo, useState } from 'react'
import { CodeBlock } from '../../../content/code-block'
import { Tab } from '../../../content/tab'
import Tabs from '../../../content/tabs'
import AttributeList from '../attribute-list'
import CustomCodeBlock2 from './custom-code-block'
import S from './styles'
import { generateRequestSnippets, TTarget } from './utils'
import { useAppContext } from '~/context/state'

type TOperationContentProps = {
  operation: TExtendedOperation
}

const OperationContent: React.FC<TOperationContentProps> = ({ operation: original_operations }) => {
  const [current_request_target_id, setCurrentRequestTarget] = useState<TTarget>('shell_curl')
  const context = useAppContext()
  const operation = context.parser.getOperation(original_operations.path, original_operations.method, true)

  const body = useMemo(() => {
    if (!operation.requestBody) return
    if ('$ref' in operation.requestBody) return
    const content_type = 'application/json'
    const schema = operation.requestBody.content?.[content_type]?.schema as TExtendedSchema
    return schema
  }, [operation.requestBody])

  const request_snippets = useMemo(() => {
    const snippets = generateRequestSnippets(context.parser, operation.path, operation.method)
    return snippets
  }, [operation])

  const current_snippet = useMemo(() => {
    if (!request_snippets) return
    const snippet = request_snippets.find((s) => s.id === current_request_target_id)
    if (!snippet) return
    return snippet
  }, [current_request_target_id, request_snippets])

  const query_params = useMemo(() => {
    const extended_parameters = (operation.parameters ?? []) as TExtendedParameter[]
    return extended_parameters.filter((param: any) => param?.in === 'query')
  }, [operation.parameters])

  const path_params = useMemo(() => {
    const extended_parameters = (operation.parameters ?? []) as TExtendedParameter[]
    return extended_parameters.filter((param: any) => param?.in === 'path')
  }, [operation.parameters])

  const responses = useMemo(() => {
    const response_map: { code: number; schema?: TExtendedSchema }[] = []
    Object.entries(operation.responses).map(([code, response]) => {
      if ('$ref' in response) return
      const content_type = 'application/json'
      const schema = response.content?.[content_type]?.schema as TExtendedSchema | undefined
      let final_schema = schema
      if (schema?.allOf) {
        schema.allOf.reduce(function (acc, x) {
          for (var key in x) acc[key] = x[key]
          return acc
        }, {})

        final_schema = schema.allOf.reduce((previous, current) => merge(previous, current))
        // final_schema = merge(undefined, [...schema.allOf])
      }

      response_map.push({ code: parseInt(code), schema: final_schema })
    })
    return response_map
  }, [operation.responses])

  const title = operation?.extension?.title
  const description = operation.extension?.description || operation.description

  return (
    <S.Container>
      <MDXProvider>
        {(title || description) && (
          <S.Header>
            {title && <S.Title>{title}</S.Title>}
            {description && <S.Description>{description}</S.Description>}
          </S.Header>
        )}

        <Tabs size="sm" isBorderRadius={false} bordered={!!title || !!description}>
          <Tab title="Request">
            {query_params?.length > 0 && (
              <S.SubContainer>
                <AttributeList title="Query Params" parameters={query_params} />
              </S.SubContainer>
            )}
            {path_params?.length > 0 && (
              <S.SubContainer>
                <AttributeList title="Path Params" parameters={path_params} />
              </S.SubContainer>
            )}
            {body && (
              <S.SubContainer>
                <AttributeList title={body.type === 'array' ? 'Body (Array)' : 'Body'} schema={body} />
              </S.SubContainer>
            )}
            <S.SubContainer>
              <Label text="Example" />

              <CodeBlock
                tabs={{
                  setCurrentTabId: (id) => setCurrentRequestTarget(id as TTarget),
                  current_tab_id: current_request_target_id,
                  all: request_snippets.map((snippet) => ({ id: snippet.id, title: snippet.friendly_target_name }))
                }}
                code={current_snippet?.content}
              >
                {current_snippet && <CustomCodeBlock2 code={current_snippet?.content} language={current_snippet?.language} />}
              </CodeBlock>
            </S.SubContainer>
          </Tab>
          <Tab title="Response">
            {responses.map(({ code, schema }) => (
              <S.SubContainer key={code}>
                <S.ResponseHeaderContainer>
                  <S.ResponseCodeCircle code={code} />
                  <Label text={code.toString()} />
                </S.ResponseHeaderContainer>
                {schema && <AttributeList schema={schema} />}
              </S.SubContainer>
            ))}
          </Tab>
        </Tabs>
      </MDXProvider>
    </S.Container>
  )
}

export default OperationContent
