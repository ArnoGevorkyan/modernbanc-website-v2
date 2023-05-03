import { SearchIcon } from '@heroicons/react/solid'
import { SelectItem } from '@mantine/core'
import { OpenApiParser } from '@open-api-parser/index'
import { orderBy, pick } from 'lodash'
import { OpenAPIV3 } from 'openapi-types'
import { useMemo } from 'react'
import { TOperation, TSchema, TTerminalSelectedItem } from '~/context/types'
import { TExtendedSchema } from '~/open-api/types'
import { SchemaIcon } from '~/views/docs/components/content/schema/icon'
import MethodTag from '../../content/operation/method-tag'
import { TSelectRowKey } from './types'

export function generateSelectItems(parser: OpenApiParser): SelectItem[] {
  return useMemo(() => {
    const items: SelectItem[] = []

    const schema_items = generateSchemaItems(parser)
    items.push(...schema_items)

    const operation_items = generateOperationItems(parser)
    items.push(...operation_items)

    const ordered_items = orderBy(items, [(data) => data?.title?.toLowerCase()], ['asc'])
    return ordered_items
  }, [])
}

function generateSchemaItems(parser: OpenApiParser): SelectItem[] {
  const items: SelectItem[] = []
  const schemas = parser.document.components?.schemas

  for (const title in schemas) {
    // wanna exclude DTOs from list
    if (!title.includes('Dto')) {
      const enriched_schema = parser.getSchema(title, 2)
      const unique_row_key: TSelectRowKey = { type: 'schema', title }

      const item: SelectItem = {
        label: title,
        value: JSON.stringify(unique_row_key),
        data: enriched_schema
      }

      items.push(item)
    }
  }
  return items
}

function generateOperationItems(parser: OpenApiParser): SelectItem[] {
  const items: SelectItem[] = []
  const paths = parser.document.paths

  for (const path in paths) {
    const path_object = paths[path]
    const methods = [OpenAPIV3.HttpMethods.POST, OpenAPIV3.HttpMethods.GET, OpenAPIV3.HttpMethods.PUT, OpenAPIV3.HttpMethods.DELETE]
    const operations = pick(path_object, methods)

    for (const method_string in operations) {
      const method = method_string as OpenAPIV3.HttpMethods
      const operation = operations[method]
      const unique_row_key: TSelectRowKey = {
        type: 'operation',
        method,
        path
      }

      const item: SelectItem = {
        label: path,
        value: JSON.stringify(unique_row_key),
        data: operation
      }

      items.push(item)
    }
  }
  return items
}

export function generateSearchIcon(selected_item: TTerminalSelectedItem | null) {
  return useMemo(() => {
    if (!selected_item) return <SearchIcon width={14} />

    if (selected_item.key.type === 'operation') {
      return <MethodTag method={selected_item.key.method as any} />
    }

    if (selected_item.key.type === 'schema') {
      const schema = selected_item.value as TExtendedSchema
      return <SchemaIcon icon={schema.extension?.getIcon ? schema.extension?.getIcon() : undefined} size="sm" color="#9CA3AF" is_search_item />
    }
  }, [selected_item])
}

export function generateIconStyles(selected_item_key: TOperation | TSchema | null) {
  return useMemo(() => {
    if (selected_item_key?.type === 'operation') {
      switch (selected_item_key.method) {
        case 'post':
          return {
            icon: {
              width: '60px'
            },
            input: {
              paddingLeft: '60px !important'
            }
          }
        case 'put':
          return {
            icon: {
              width: '48px'
            },
            input: {
              paddingLeft: '48px !important'
            }
          }

        case 'get':
          return {
            icon: {
              width: '48px'
            },
            input: {
              paddingLeft: '48px !important'
            }
          }

        case 'delete':
          return {
            icon: {
              width: '72px'
            },
            input: {
              paddingLeft: '72px !important'
            }
          }
      }
    }

    return {
      icon: {
        marginTop: '0px',
        width: '32px'
      },
      input: {
        paddingLeft: '32px !important'
      }
    }
  }, [selected_item_key])
}
