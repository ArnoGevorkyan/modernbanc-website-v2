import { cloneDeep, merge, omit } from 'lodash';
import { OpenAPIV3 } from 'openapi-types';
import {
  ExtendedArraySchemaObject,
  ExtendedContentObject,
  ExtendedDocument,
  ExtendedNonArraySchemaObject,
  ExtendedOperation,
  ExtendedParameterObject,
  ExtendedPath,
  ExtendedRequestBodyObject,
  ExtendedResponseObject,
  ExtendedResponsesObject,
  ExtendedSchemaObject,
  ExtendedSchemaOrReference,
  ExtraSchemaOrReferenceData,
  http_methods,
} from './types';
import { getSchemaTitle } from './utils';

export type Extensions<SchemaExtension, PathExtension, OperationExtension> = {
  // eslint-disable-next-line no-unused-vars
  paths?: { [index: string]: PathExtension & { [method in OpenAPIV3.HttpMethods]?: OperationExtension } };
  schemas?: { [title: string]: SchemaExtension & { properties?: { [title: string]: SchemaExtension } } };
  properties?: { [title: string]: SchemaExtension };
};

export type Exclusions = {
  paths?: string[];
  operations?: { path: string; method: OpenAPIV3.HttpMethods }[];
  schemas?: string[] | RegExp; // either array of titles or regex
};

export class OpenApiParser<SchemaExtension = any, PathExtension = any, OperationExtension = any> {
  public original_document: OpenAPIV3.Document;
  public document: ExtendedDocument<SchemaExtension, PathExtension, OperationExtension>;

  private resolve_level_limit: number;
  private exclusions?: Exclusions;
  private extensions?: Extensions<SchemaExtension, PathExtension, OperationExtension>;

  constructor(
    document: OpenAPIV3.Document,
    extensions?: Extensions<SchemaExtension, PathExtension, OperationExtension>,
    resolve_level_limit: number = 3,
    exclusions?: Exclusions,
  ) {
    this.extensions = extensions;
    this.resolve_level_limit = resolve_level_limit;
    this.exclusions = exclusions;

    this.original_document = document;
    this.document = cloneDeep(document) as ExtendedDocument<SchemaExtension, PathExtension, OperationExtension>;
  }

  getParsedDocument(): ExtendedDocument<SchemaExtension, PathExtension, OperationExtension> {
    const all_schemas = this.original_document.components?.schemas;
    const all_paths = this.original_document.paths;

    if (!this.document.components?.schemas) throw new Error(`Schemas don't exist in document`);
    if (!this.document.paths) throw new Error(`Paths don't exist in document`);

    if (all_schemas) {
      for (const schema_title in all_schemas) {
        this.document.components.schemas[schema_title] = this.getSchema(schema_title);
      }
    }

    if (all_paths) {
      for (const path_name in all_paths) {
        this.document.paths[path_name] = this.getPath(path_name, true);
      }
    }

    return this.document;
  }

  getPath(path_name: string, extend_operations = false): ExtendedPath<SchemaExtension, PathExtension, OperationExtension> {
    const path = cloneDeep(this.original_document.paths[path_name]) as ExtendedPath<SchemaExtension, PathExtension, OperationExtension> | undefined;
    if (!path) throw new Error(`Path ${path} doesn't exist`);
    path.extension = this.extensions?.paths?.[path_name];

    if (extend_operations) {
      const methods = Object.keys(path).filter((key) => http_methods.includes(key.toUpperCase()));
      for (const method of methods) {
        const http_method = method as OpenAPIV3.HttpMethods;
        const operation = this.getOperation(path_name, http_method, true);
        path[http_method] = operation;
      }
    }

    return path;
  }

  getOperation(path: string, method: OpenAPIV3.HttpMethods, extend_schemas = false): ExtendedOperation<OperationExtension, SchemaExtension> {
    let operation = cloneDeep(this.original_document.paths[path]?.[method]) as ExtendedOperation<OperationExtension, SchemaExtension> | undefined;

    if (!operation) throw new Error(`Operation ${method} ${path} doesn't exist`);
    operation.method = method;
    operation.path = path;
    operation.extension = this.extensions?.paths?.[path]?.[method];
    if (extend_schemas) {
      if (operation.requestBody) operation.requestBody = this.getRequestBody(operation.requestBody);
      if (operation.parameters) operation.parameters = operation.parameters.map((param) => this.getParameter(param));
      if (operation.responses) operation.responses = this.getResponses(operation.responses);
    }
    return operation;
  }

  getParameter(parameter: OpenAPIV3.ReferenceObject | ExtendedParameterObject<SchemaExtension>) {
    if ('$ref' in parameter) {
      // for now we don't support requestBody as a ref as only use-case is to other endpoint's requestBody.
      // If we do support this it needs to be done properly so it doesn't return `any` type like other trashy open-api libraries.
      throw new Error(`References directly in parameters aren't supported yet.`);
    } else {
      if (parameter.schema && '$ref' in parameter.schema) {
        const referred_schema_title = getSchemaTitle(parameter.schema.$ref);
        const referred_schema = this.getSchema(referred_schema_title);
        parameter.schema = referred_schema;
      }
      return parameter;
    }
  }

  getResponses(responses: ExtendedResponsesObject<SchemaExtension>) {
    for (const code in responses) {
      const response = responses[code];
      responses[code] = this.getResponse(response);
    }
    return responses;
  }

  getResponse(response: OpenAPIV3.ReferenceObject | ExtendedResponseObject<SchemaExtension>) {
    if ('$ref' in response) {
      // for now we don't support response as a ref as only use-case is to other endpoint's response.
      // If we do support this it needs to be done properly so it doesn't return `any` type like other trashy open-api libraries.
      throw new Error(`References directly in responses aren't supported yet.`);
    } else {
      if (response.content) response.content = this.getContent(response.content);
      return response;
    }
  }

  getRequestBody(request_body: OpenAPIV3.ReferenceObject | ExtendedRequestBodyObject<SchemaExtension>) {
    if ('$ref' in request_body) {
      // for now we don't support requestBody as a ref as only use-case is to other endpoint's requestBody.
      // If we do support this it needs to be done properly so it doesn't return `any` type like other trashy open-api libraries.
      throw new Error(`References directly in request body aren't supported yet.`);
    } else {
      request_body.content = this.getContent(request_body.content);
      return request_body;
    }
  }

  getContent(content: ExtendedContentObject<SchemaExtension>) {
    for (const content_type /* e.g application/json */ in content) {
      const media_type_object = content[content_type];
      if (media_type_object.schema) {
        media_type_object.schema = cloneDeep(this.getEnrichedSchema(media_type_object.schema));
      }
    }

    return content;
  }

  getSchema(title: string, level_limit = this.resolve_level_limit): ExtendedSchemaOrReference<SchemaExtension> {
    let schema: ExtendedSchemaOrReference<SchemaExtension> | undefined = cloneDeep(this.original_document.components?.schemas?.[title]);
    if (!schema) throw new Error(`Schema with title ${title} doesn't exist`);
    if ('$ref' in schema) throw new Error(`Ref schema found at the root level of document.components.schemas.${title} which should never happen.`);

    const enriched_schema = this.getEnrichedSchema(schema, title, undefined, 0, level_limit);
    return enriched_schema;
  }

  private getEnrichedSchema(
    schema: ExtendedSchemaOrReference<SchemaExtension>,
    title?: string,
    parent_title?: string,
    level = 0,
    level_limit = this.resolve_level_limit,
    resolved_refs = new Set<string>(),
  ): ExtendedSchemaOrReference<SchemaExtension> {
    let current_level = level;
    let temp_schema: ExtendedSchemaObject<SchemaExtension> | undefined;

    if ('$ref' in schema) {
      const resolved_schema = this.getSchemaCopyByRef(schema.$ref, current_level + 1, level_limit, resolved_refs);
      if (!resolved_schema) {
        // If it stayed a ref then we still wanna enrich it in case it's useful
        schema.original_type = getSchemaTitle(schema.$ref);
        return schema;
      } else {
        current_level += 1;
        temp_schema = resolved_schema;
      }
    }

    if (!temp_schema) temp_schema = schema;
    if (title) temp_schema.extension = this.getExtension(title, parent_title);

    // Hotfix - turns out sometimes Nest forgets to set type = "object" if there are properties.
    if (temp_schema.properties) temp_schema.type = 'object';

    if (temp_schema.type) {
      if (temp_schema.type === 'object') {
        const new_resolved_refs = new Set<string>(resolved_refs); // coz we don't want parallel nested things to update the same set
        this.enrichObjectSchema(temp_schema, title, current_level, level_limit, new_resolved_refs);
      } else if (temp_schema.type === 'array') {
        const new_resolved_refs = new Set<string>(resolved_refs);
        this.enrichArraySchema(temp_schema, title, current_level, level_limit, new_resolved_refs);
      }
    } else {
      // If no `type` then object has a complex type (allOf: x & y , or anyOf: a | c)
      if (Array.isArray(temp_schema.allOf) && temp_schema.allOf.length > 0) {
        const new_resolved_refs = new Set<string>(resolved_refs); // coz we don't want parallel nested things to update the same set
        for (let i = 0; i < temp_schema.allOf.length; i++) {
          temp_schema.allOf[i] = this.getEnrichedSchema(temp_schema.allOf[i], title, parent_title, current_level, level_limit, new_resolved_refs);
        }
      } else {
        // Company has no "type" field
        // Add support for anyOf, oneOf and not later.
      }
    }

    return temp_schema;
  }

  private enrichObjectSchema(
    schema: ExtendedNonArraySchemaObject<SchemaExtension> & ExtraSchemaOrReferenceData<SchemaExtension>,
    title?: string,
    level = 0,
    level_limit = this.resolve_level_limit,
    resolved_refs = new Set<string>(),
  ) {
    for (const property_title in schema.properties) {
      const property_schema = schema.properties[property_title];
      schema.properties[property_title] = this.getEnrichedSchema(property_schema, property_title, title, level, level_limit, resolved_refs);
      schema.properties[property_title].is_required = schema?.required?.includes(property_title);
    }
    schema.required = undefined; // since we don't need it anymore.
  }

  private enrichArraySchema(
    schema: ExtendedArraySchemaObject<SchemaExtension>,
    title?: string,
    level = 0,
    level_limit = this.resolve_level_limit,
    resolved_refs = new Set<string>(),
  ) {
    const items_schema_title = '$ref' in schema.items ? getSchemaTitle(schema.items.$ref) : undefined;
    schema.items = this.getEnrichedSchema(schema.items, items_schema_title, title, level, level_limit, resolved_refs);
  }

  private getSchemaCopyByRef(
    $ref: string,
    level = 0,
    level_limit = this.resolve_level_limit,
    resolved_refs = new Set<string>(),
  ): ExtendedSchemaObject<SchemaExtension> | undefined {
    if (level > level_limit || resolved_refs.has($ref)) return;
    // if (level > level_limit) return;
    // if (resolved_refs.has($ref)) return
    const title = getSchemaTitle($ref);
    const schema: ExtendedSchemaOrReference<SchemaExtension> | undefined = cloneDeep(this.original_document.components?.schemas?.[title]);
    if (!schema) throw new Error(`Schema with title ${title} doesn't exist`);
    if ('$ref' in schema) throw new Error(`Ref schema found at the root level of document.components.schemas.${title} which should never happen.`);
    schema.original_type = title;
    resolved_refs.add($ref);
    return schema;
  }

  private getExtension(schema_title: string, parent_title?: string) {
    let extension = cloneDeep(this.extensions?.schemas?.[schema_title]);
    extension = omit(extension, 'properties') as SchemaExtension;
    if (parent_title) {
      const parent_extension = this.extensions?.schemas?.[parent_title];
      const child_extension = parent_extension?.properties?.[schema_title];
      extension = merge(extension, child_extension);
    }
    const is_empty = Object.keys(extension).length === 0;
    // if we don't remove empty extensions it'd add 500kb to the final file.
    return is_empty ? undefined : extension;
  }
}
