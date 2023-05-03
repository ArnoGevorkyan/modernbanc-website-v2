import { OpenApiParser } from '@open-api-parser/index'
import { OpenAPIV3 } from 'openapi-types'
import { createContext, useContext, useMemo } from 'react'
import document from '../../open-api/openapi-json.json'

type TOpenApiContextData = {
  parser: OpenApiParser
}

const initial_context_value: TOpenApiContextData = {
  parser: new OpenApiParser(document as any as OpenAPIV3.Document)
}

const OpenApiContext = createContext<TOpenApiContextData>(initial_context_value)

/* Hook to be used in components */
export function useOpenApiContext() {
  return useContext(OpenApiContext)
}

/* To wrap _app.tsx component */
export function OpenApiContextProvider({ children }) {
  const parser = useMemo(() => {
    const parser = new OpenApiParser(document as any as OpenAPIV3.Document)
    parser.getParsedDocument()
    return parser
  }, [])

  const value = useMemo(
    () => ({
      parser
    }),
    []
  )
  return <OpenApiContext.Provider value={value}>{children}</OpenApiContext.Provider>
}
