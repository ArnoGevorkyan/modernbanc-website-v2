import { CodeIcon } from '@heroicons/react/solid'
import { upperCase } from 'lodash'
import { OpenAPIV3 } from 'openapi-types'
import React, { CSSProperties, useMemo } from 'react'
import { useAppContext } from '~/context/state'
import { TTerminalSelectedItem } from '~/context/types'
import S from './styles'
export interface OperationProps {
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  title: string
  path: string
  inline?: boolean
  style?: CSSProperties
}

export const Operation: React.FC<OperationProps> = ({ method, title, path, inline = false, style }) => {
  const context = useAppContext()

  const operation = useMemo(() => {
    return context.parser.getOperation(path, method as OpenAPIV3.HttpMethods)
  }, [method, title, path])

  if (!operation) return <></>

  const onClick = () => {
    const selected_item: TTerminalSelectedItem = {
      key: { type: 'operation', method: method as OpenAPIV3.HttpMethods, path },
      value: operation
    }

    context.setTerminalState({ selected_item })
    context.setTerminalOpen(true)
  }

  if (inline) {
    return (
      <S.InlineContainer onClick={onClick} style={style}>
        <S.Method>{upperCase(method)}</S.Method>
        <S.Title>{title}</S.Title>
        <S.Path>{path}</S.Path>
      </S.InlineContainer>
    )
  } else {
    return (
      <S.Container onClick={onClick} style={style}>
        <S.LeftPart>
          <S.Method>{upperCase(method)}</S.Method>
          <S.Title>{title}</S.Title>
          <S.Path>{path}</S.Path>
        </S.LeftPart>

        <CodeIcon width={17.5} color="#D4D4D8" />
      </S.Container>
    )
  }
}

export default Operation
