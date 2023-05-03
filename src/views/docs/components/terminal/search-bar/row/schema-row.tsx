import { TExtendedSchema } from '~/open-api/types'
import React from 'react'
import { SchemaIconContainer, SchemaRow, SchemaRowDescription, SchemaRowTitle } from './styles'
import { SchemaIcon } from '~/views/docs/components/content/schema/icon'

type TSearchSchemaRowProps = {
  title: string
  schema: TExtendedSchema
}

const SearchSchemaRow: React.FC<TSearchSchemaRowProps> = ({ title, schema }) => {
  const description = schema.extension?.description ?? schema.description ?? ''
  return (
    <SchemaRow>
      <SchemaIconContainer>
        <SchemaIcon icon={schema.extension?.getIcon ? schema.extension?.getIcon() : undefined} is_search_item size="sm" color="#9CA3AF" />
      </SchemaIconContainer>
      <SchemaRowTitle>{schema.extension?.title ?? title}</SchemaRowTitle>
      {/* <SchemaRowDescription>{description}</SchemaRowDescription> */}
    </SchemaRow>
  )
}

export default SearchSchemaRow
