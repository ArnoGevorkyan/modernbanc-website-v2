import { TTerminalState } from '~/context/types'
import { TExtendedOperation } from '~/open-api/types'
import { FC } from 'react'
import Loader from './loader'
import OperationContent from './operation-content'
import SchemaContent from './schema-content'

type TContentProps = { terminal_state?: TTerminalState }

const Content: FC<TContentProps> = ({ terminal_state }) => {
  const selected_item = terminal_state?.selected_item
  if (!selected_item) return <Loader />

  switch (selected_item.key.type) {
    case 'schema':
      return <SchemaContent schema={selected_item.value} />
    case 'operation':
      return <OperationContent operation={selected_item.value as TExtendedOperation} />
  }
}

export default Content
