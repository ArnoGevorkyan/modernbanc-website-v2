import { TExtendedSchema } from '~/open-api/types'
import React from 'react'
import AttributeList from '../attribute-list'
import S from './styles'

type TSchemaContentProps = { schema: TExtendedSchema }

const SchemaContent: React.FC<TSchemaContentProps> = ({ schema }) => {
  const title = schema?.extension?.title || schema.title
  const description = schema?.extension?.description || schema.description
  return (
    <S.Container>
      {(title || description) && (
        <S.Header>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.Header>
      )}

      {schema.extension?.getBody && <S.ExtraData>{schema.extension.getBody()}</S.ExtraData>}
      <S.AttributesContainer>
        <AttributeList title="Attributes" schema={schema} />
      </S.AttributesContainer>
    </S.Container>
  )
}

export default SchemaContent
