import { useAppContext } from '~/context/state'
import { TTerminalSelectedItem } from '~/context/types'
import { TExtendedSchema } from '~/open-api/types'
import React, { CSSProperties, useMemo } from 'react'
import SchemaIcon from './icon'
import S from './styles'
import { ExtendedSchemaObject } from '@open-api-parser/types'
interface SchemaProps {
  title: string
  style?: CSSProperties
}

export const Schema: React.FC<SchemaProps> = ({ title, style }) => {
  const context = useAppContext()

  const schema = useMemo(() => {
    const schema = context.parser.getSchema(title) as ExtendedSchemaObject<any>
    return schema
  }, [title])

  if (!schema) return <></>

  const final_title = schema.extension?.title ?? schema.title ?? title
  const final_description = schema.extension?.description ?? schema.description

  const onClick = () => {
    const selected_item: TTerminalSelectedItem = {
      key: { type: 'schema', title },
      value: schema
    }

    context.setTerminalState({ selected_item })
    context.setTerminalOpen(true)
  }

  return (
    <S.Container onClick={onClick} style={style}>
      <SchemaIcon icon={schema.extension?.getIcon ? schema.extension?.getIcon() : undefined} />
      <S.Title>{final_title}</S.Title>
      {/* {final_description && <S.Description> {final_description}</S.Description>} */}
    </S.Container>
  )
}

export default Schema
