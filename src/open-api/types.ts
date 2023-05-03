export type TSchemaExtension = {
  title: string
  description: string
  getBody?: () => React.ReactNode
  getIcon?: () => React.ReactNode
}

export type TOperationExtension = {
  title: string
  description: string
  getBody?: () => React.ReactNode
}

export type TExtendedDocument = ExtendedDocument<TSchemaExtension, any, TOperationExtension>
export type TExtendedSchema = ExtendedSchemaObject<TSchemaExtension>
export type TExtendedSchemaOrReference = ExtendedSchemaOrReference<TSchemaExtension>
export type TExtendedOperation = ExtendedOperation<TOperationExtension, TSchemaExtension>
export type TExtendedPath = ExtendedPath<TSchemaExtension, any, TOperationExtension>
export type TExtendedParameter = ExtendedParameterObject<TSchemaExtension>

/**
 * Types below will be moved to be a part of open-api-parser package. We should use them as least as possible.
 * Open-api parser type
 * S - Schema (e.g Account) extension
 * P - Path (e.g /accounts) extension
 * O - Operation (e.g POST /accounts) extension
 */

import { OpenAPIV3 } from 'openapi-types'

type Modify<T, R> = Omit<T, keyof R> & R

export interface ExtendedDocument<S, P, O> extends OpenAPIV3.Document {
  paths: ExtendedPathsObject<S, P, O>
  components?: ExtendedComponentsObject<S>
}

export interface ExtendedPathsObject<S, P, O> extends OpenAPIV3.PathsObject {
  [pattern: string]: ExtendedPath<S, P, O>
}

export interface ExtendedComponentsObject<T> extends OpenAPIV3.ComponentsObject {
  schemas?: {
    [key: string]: ExtendedSchemaOrReference<T>
  }
}

export type ExtendedPath<S, P, O> = Modify<
  OpenAPIV3.PathItemObject,
  {
    [method in OpenAPIV3.HttpMethods]?: ExtendedOperation<O, S>
  }
> & { extension?: P }

export type ExtraOperationData<T> = { extension?: T; method: OpenAPIV3.HttpMethods; path: string }

export type ExtendedOperation<O, S> = Modify<
  OpenAPIV3.OperationObject,
  {
    parameters?: (OpenAPIV3.ReferenceObject | ExtendedParameterObject<S>)[]
    requestBody?: OpenAPIV3.ReferenceObject | ExtendedRequestBodyObject<S>
    responses: ExtendedResponsesObject<S>
  }
> &
  ExtraOperationData<O>

export interface ExtendedResponsesObject<T> {
  [code: string]: OpenAPIV3.ReferenceObject | ExtendedResponseObject<T>
}

export interface ExtendedResponseObject<T> extends OpenAPIV3.ResponseObject {
  headers?: {
    [header: string]: OpenAPIV3.ReferenceObject | ExtendedHeaderObject<T>
  }
  content?: ExtendedContentObject<T>
}

export interface ExtendedRequestBodyObject<T> extends OpenAPIV3.RequestBodyObject {
  content: ExtendedContentObject<T>
}

export interface ExtendedContentObject<T> {
  [media: string]: ExtendedMediaTypeObject<T>
}

export interface ExtendedMediaTypeObject<T> extends OpenAPIV3.MediaTypeObject {
  schema?: ExtendedSchemaOrReference<T>
}

export interface ExtendedHeaderObject<T> extends ExtendedParameterBaseObject<T> {}

export interface ExtendedParameterObject<S> extends ExtendedParameterBaseObject<S> {
  name: string
  in: string
}

export interface ExtendedParameterBaseObject<T> extends OpenAPIV3.ParameterBaseObject {
  schema?: ExtendedSchemaOrReference<T>
  content?: {
    [media: string]: ExtendedMediaTypeObject<T>
  }
}

// Schemas (Models)
export type ExtraSchemaOrReferenceData<T> = {
  extension?: T
  is_required?: boolean
  original_type?: string
}

export type ExtendedSchemaOrReference<T> = ExtendedSchemaObject<T> | ExtendedReferenceObject<T>

export type ExtendedSchemaObject<T> = (ExtendedArraySchemaObject<T> | ExtendedNonArraySchemaObject<T>) & ExtraSchemaOrReferenceData<T>

export interface ExtendedReferenceObject<T> extends OpenAPIV3.ReferenceObject, ExtraSchemaOrReferenceData<T> {}
export interface ExtendedArraySchemaObject<T> extends ExtendedBaseSchemaObject<T> {
  type: OpenAPIV3.ArraySchemaObjectType
  items: ExtendedSchemaOrReference<T>
}

export interface ExtendedNonArraySchemaObject<T> extends ExtendedBaseSchemaObject<T> {
  type?: OpenAPIV3.NonArraySchemaObjectType
}

export interface ExtendedBaseSchemaObject<T> extends OpenAPIV3.BaseSchemaObject {
  additionalProperties?: boolean | ExtendedSchemaOrReference<T>
  properties?: {
    [name: string]: ExtendedSchemaOrReference<T>
  }
  allOf?: ExtendedSchemaOrReference<T>[]
  oneOf?: ExtendedSchemaOrReference<T>[]
  anyOf?: ExtendedSchemaOrReference<T>[]
  not?: ExtendedSchemaOrReference<T>
}
