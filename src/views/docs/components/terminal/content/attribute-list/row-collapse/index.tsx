import React from 'react'
import { Collapse } from '@mantine/core'
import { TExtendedSchemaOrReference } from '~/open-api/types'
import S from './styles'
import AttributeList from '..'

export type AttributeRowCollapseProps = {
  is_open: boolean
  schema: TExtendedSchemaOrReference
}

const AttributeRowCollapse: React.FC<AttributeRowCollapseProps> = ({ schema, is_open }) => {
  const is_schema = !('$ref' in schema)
  let enum_values: string[] | undefined
  let description: string | undefined

  if (is_schema) {
    description = schema.extension?.description ?? schema.description
    enum_values = schema.enum
  } else {
    schema.extension?.description
  }

  return (
    <Collapse in={is_open} transitionDuration={240} transitionTimingFunction="ease">
      {enum_values && <S.EnumValues>{enum_values.join(', ')}</S.EnumValues>}
      {description && <S.Description>{description}</S.Description>}
      {schema.extension?.getBody && <S.ExtraData>{schema.extension.getBody()}</S.ExtraData>}
      {is_schema && schema.properties && (
        <S.AttributesContainer>
          <AttributeList schema={schema} />
        </S.AttributesContainer>
      )}
    </Collapse>
  )
}

export default AttributeRowCollapse
