import { TExtendedOperation, TExtendedSchema } from '~/open-api/types'
import { OpenAPIV3 } from 'openapi-types'

export type TTerminalSelectedItem = { key: TSchema; value: TExtendedSchema } | { key: TOperation; value: TExtendedOperation } | null

export type TTerminalState = {
  selected_item: TTerminalSelectedItem
}

export type TOperation = {
  type: 'operation'
  method: OpenAPIV3.HttpMethods
  path: string
}

export type TSchema = {
  type: 'schema'
  title: string
}
