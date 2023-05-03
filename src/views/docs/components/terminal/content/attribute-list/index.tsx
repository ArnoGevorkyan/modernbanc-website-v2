import { TExtendedParameter, TExtendedSchema, TSchemaExtension } from '~/open-api/types'
import React from 'react'
import Label from '~/views/docs/components/content/label'
import AttributeRow, { TAttributeRowProps } from './row'
import S from './styles'
import { ExtendedSchemaOrReference } from '@open-api-parser/types'

type AttributeListProps =
  | {
      title?: string
      schema: TExtendedSchema
    }
  | {
      title?: string
      parameters: TExtendedParameter[]
    }

const AttributeList: React.FC<AttributeListProps> = (props) => {
  let attributes: TAttributeRowProps[] = []
  if ('schema' in props) {
    let properties:
      | {
          [name: string]: ExtendedSchemaOrReference<TSchemaExtension>
        }
      | undefined

    if (props.schema.type === 'array') {
      if (!('$ref' in props.schema.items)) {
        properties = props.schema.items.properties
      }
    } else {
      properties = props.schema.properties
    }
    if (properties) {
      attributes = Object.entries(properties).map(([title, schema]) => ({
        title,
        schema
      }))
    }
  } else {
    attributes = props.parameters.map((parameter) => ({ title: parameter.name, parameter }))
  }

  return (
    <S.AttributesContainer>
      {props.title && <Label text={props.title} />}
      <S.AttributesListContainer>
        {attributes.map((attribute) => {
          return <AttributeRow key={attribute.title} {...attribute} />
        })}
      </S.AttributesListContainer>
    </S.AttributesContainer>
  )
}

export default AttributeList
