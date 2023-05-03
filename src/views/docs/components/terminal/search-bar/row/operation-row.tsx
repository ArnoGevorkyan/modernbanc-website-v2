import { OpenAPIV3 } from 'openapi-types'
import React from 'react'
import { OperationPathText, OperationRow, OperationRowMethodContainer, OperationRowMethodText, OperationRowTitle } from './styles'

type TSearchOperationRowProps = {
  title?: string
  path: string
  method: OpenAPIV3.HttpMethods
}

const SearchOperationRow: React.FC<TSearchOperationRowProps> = ({ path, title, method }) => {
  return (
    <OperationRow>
      <OperationRowMethodContainer>
        <OperationRowMethodText>{method}</OperationRowMethodText>
      </OperationRowMethodContainer>
      <OperationPathText>{path}</OperationPathText>
      {title && <OperationRowTitle>{title}</OperationRowTitle>}
    </OperationRow>
  )
}

export default SearchOperationRow
