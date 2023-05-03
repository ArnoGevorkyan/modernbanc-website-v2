import React, { forwardRef } from 'react'
import SearchSchemaRow from './schema-row'
import SearchOperationRow from './operation-row'
import { TExtendedOperation, TExtendedSchema } from '~/open-api/types'
import { TSelectRowKey } from '../types'
import * as S from './styles'

type SearchRowProps = React.ComponentPropsWithoutRef<'div'> & {
  value: string
  data: TExtendedSchema | TExtendedOperation
}

export const SearchRow = forwardRef<HTMLDivElement, SearchRowProps>((props: SearchRowProps, ref) => {
  const { value: key, data, ...div_props } = props
  const select_row_key: TSelectRowKey = JSON.parse(key)

  if (select_row_key.type === 'schema') {
    const schema = data as TExtendedSchema

    return (
      <S.Container ref={ref} {...div_props}>
        <SearchSchemaRow title={select_row_key.title} schema={schema} />
      </S.Container>
    )
  } else {
    const operation = data as TExtendedOperation
    const title = operation.extension?.title ?? operation.description ?? ''

    return (
      <S.Container ref={ref} {...div_props}>
        <SearchOperationRow method={select_row_key.method} path={select_row_key.path} title={title} />
      </S.Container>
    )
  }
})

export default SearchRow
