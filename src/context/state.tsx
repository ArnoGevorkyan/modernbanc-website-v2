import { SelectItem } from '@mantine/core'
import { OpenApiParser } from '@open-api-parser/index'
import { OpenAPIV3 } from 'openapi-types'
import { createContext, useContext, useMemo, useState } from 'react'
import { generateSelectItems } from '~/views/docs/components/terminal/search-bar/hooks'
import document from '../open-api/openapi-json.json'
import { generateSelectedItem } from './hooks'
import { TTerminalState } from './types'

type TAppContextData = {
  parser: OpenApiParser
  terminal_is_open: boolean
  setTerminalOpen: (is_open: boolean) => void
  terminal_state?: TTerminalState
  setTerminalState: (state: TTerminalState) => void
  terminal_items: SelectItem[] | undefined
}

const initial_context_value: TAppContextData = {
  parser: new OpenApiParser(document as any as OpenAPIV3.Document),
  terminal_is_open: false,
  setTerminalOpen: () => {},
  terminal_state: { selected_item: null },
  setTerminalState: () => {},
  terminal_items: []
}

const AppContext = createContext<TAppContextData>(initial_context_value)

/* Hook to be used in components */
export function useAppContext() {
  return useContext(AppContext)
}

/* To wrap _app.tsx component */
export function AppContextProvider({ children }) {
  const parser = useMemo(() => {
    const parser = new OpenApiParser(document as any as OpenAPIV3.Document)
    parser.getParsedDocument()
    return parser
  }, [])
  const [terminal_is_open, setTerminalOpen] = useState<boolean>(false)
  const [terminal_state, setTerminalState] = useState<TTerminalState | undefined>({
    selected_item: generateSelectedItem({ type: 'schema', title: 'Account' }, parser)
  })
  const terminal_items = generateSelectItems(parser)

  const value = useMemo(
    () => ({
      parser,
      terminal_is_open,
      setTerminalOpen,
      terminal_state,
      terminal_items,
      setTerminalState
    }),
    [terminal_is_open, terminal_state, terminal_items, parser]
  )
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
