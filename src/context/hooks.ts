import { OpenApiParser } from '@open-api-parser/index'
import { TOperation, TSchema, TTerminalSelectedItem } from './types'

export function generateSelectedItem(key: TSchema | TOperation | null, parser: OpenApiParser): TTerminalSelectedItem {
  if (key?.type === 'operation') {
    const value = parser.getOperation(key.path, key.method)
    if (!value) return null
    return { key: key as TOperation, value }
  }

  if (key?.type === 'schema') {
    const value = parser.getSchema(key.title)
    if (!value) return null
    return { key: key as TSchema, value }
  }

  return null
}
