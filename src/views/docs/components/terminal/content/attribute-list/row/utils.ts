import { TExtendedParameter, TExtendedSchema, TExtendedSchemaOrReference, TSchemaExtension } from '~/open-api/types'

type TRowDataToShow = {
  is_required: boolean
  friendly_type: string
  constraints: string[]
  extension: TSchemaExtension
  schema: TExtendedSchemaOrReference
}

export function extractDataToShow(options: { schema: TExtendedSchemaOrReference } | { parameter: TExtendedParameter }): TRowDataToShow {
  let data: Partial<TRowDataToShow> = {}
  let final_schema: TExtendedSchemaOrReference

  const is_parameter = 'parameter' in options
  if (is_parameter) {
    const parameter = options.parameter
    data.is_required = parameter.required
    if (!parameter.schema) {
      // Our NestJS generator seems to always populate this field.
      throw `Schema is missing in ${parameter.in} parameter ${parameter.name}`
    }
    final_schema = parameter.schema
  } else {
    const schema = options.schema
    data.is_required = schema.is_required
    final_schema = schema
  }

  data.friendly_type = friendlyTypeName(final_schema)
  data.constraints = constraints(final_schema)

  if (!('$ref' in final_schema)) {
    if (final_schema.type === 'array') {
      // Because we want to show attributes of items rather than array
      final_schema = final_schema.items
    }
  }

  data.schema = final_schema
  return data as TRowDataToShow
}

export function friendlyTypeName(schema: TExtendedSchema): string {
  if (schema.type) {
    if (schema.type === 'object') {
      const object_type = schema.original_type ?? 'Object'
      const capitalized_title = object_type.charAt(0).toUpperCase() + object_type.slice(1)
      return capitalized_title
    } else if (schema.type === 'array') {
      if ('$ref' in schema.items) {
        return `Array<${schema.items?.original_type ?? 'Object'}>`
      }
      const items_type_name = friendlyTypeName(schema.items)
      return `Array<${items_type_name}>`
    } else if (schema.type === 'string') {
      if (schema.format === 'date-time') {
        return `Date`
      }
      if (schema.enum) {
        return `Enum`
      }
      return schema.type
    } else {
      return schema.original_type ?? schema.type
    }
  } else {
    if (schema.allOf) {
      const types = schema.allOf.map((schema) => friendlyTypeName(schema))
      return types.join(' & ')
    } else {
      return schema.type ?? schema.original_type ?? 'Unknown'
    }
  }
}

export function constraints(schema: TExtendedSchema): string[] {
  const constraints: string[] = []
  if (schema.minItems) {
    constraints.push(`min-items: ${schema.minItems}`)
  }
  if (schema.minLength) {
    constraints.push(`min-length: ${schema.minLength}`)
  }
  if (schema.minProperties) {
    constraints.push(`min-properties: ${schema.minProperties}`)
  }
  if (schema.minimum) {
    let text = `minimum: ${schema.minimum}`
    if (schema.exclusiveMinimum) {
      text += ` exclusive`
    }
    constraints.push(text)
  }

  if (schema.maxItems) {
    constraints.push(`max-items: ${schema.maxItems}`)
  }
  if (schema.maxLength) {
    constraints.push(`max-length: ${schema.maxLength}`)
  }
  if (schema.maxProperties) {
    constraints.push(`max-properties: ${schema.maxProperties}`)
  }
  if (schema.uniqueItems) {
    constraints.push(`unique items`)
  }

  if (schema.multipleOf) {
    constraints.push(`multiple of: ${schema.multipleOf}`)
  }

  if (schema.pattern) {
    constraints.push(`pattern: ${schema.pattern}`)
  }
  if (schema.maximum) {
    let text = `maximum: ${schema.maximum}`
    if (schema.exclusiveMaximum) {
      text += ` exclusive`
    }
    constraints.push(text)
  }

  if (schema.nullable) {
    constraints.push(`nullable`)
  }
  return constraints
}
