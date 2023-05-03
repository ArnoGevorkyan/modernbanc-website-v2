import { generateSelectedItem } from '~/context/hooks'
import { useAppContext } from '~/context/state'
import { TTerminalSelectedItem } from '~/context/types'
import { TExtendedOperation, TExtendedSchema } from '~/open-api/types'
import { Select } from '@mantine/core'
import { forwardRef, useEffect, useState } from 'react'
import { generateIconStyles, generateSearchIcon } from './hooks'
import { SearchRow } from './row'
import * as S from './styles'

interface TSearchBarProps {
  setValue: (value: string | null) => void
  value: string | null
}

const SearchBar = forwardRef<HTMLInputElement, TSearchBarProps>(({ value, setValue }, ref) => {
  const context = useAppContext()
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const terminal_state = context.terminal_state
    if (terminal_state?.selected_item) {
      setValue(JSON.stringify(terminal_state.selected_item.key))
    } else {
      setValue(null)
    }
  }, [context.terminal_state])

  const items = context.terminal_items ?? []
  const search_icon = generateSearchIcon(context.terminal_state?.selected_item ?? null)
  const icon_styles = generateIconStyles(context.terminal_state?.selected_item?.key ?? null)

  return (
    <Select
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      ref={ref}
      onChange={(value) => {
        setValue(value)
        const selected_item_key = value ? JSON.parse(value) : null
        const selected_item = generateSelectedItem(selected_item_key, context.parser)
        context.setTerminalState({ selected_item })
      }}
      placeholder="Endpoint or model"
      itemComponent={SearchRow}
      data={items}
      searchable
      maxDropdownHeight={240}
      nothingFound="No models or api endpoints were found"
      filter={(value, item) => {
        const input = value.toLowerCase()
        const data = item.data as TExtendedSchema | TExtendedOperation
        const is_schema = item.value.includes('schema')
        const label_matches = item.label?.toLowerCase().includes(input)
        const extension_title_matches = data.extension?.title?.toLowerCase().includes(input) ?? false
        const extension_description_matches = data.extension?.description?.toLowerCase().includes(input) ?? false
        if (is_schema) {
          const schema = item.data as TExtendedSchema
          const title_matches = schema.title?.toLowerCase().includes(input) ?? false
          return label_matches || title_matches || extension_title_matches || extension_description_matches
        } else {
          const operation = item.data as TExtendedOperation
          const method_matches = operation.method?.toLowerCase().includes(input) ?? false
          const path_matches = operation.path?.toLowerCase().includes(input) ?? false
          return path_matches || method_matches || extension_title_matches || extension_description_matches
        }
      }}
      rightSection={focused ? <></> : <S.HotkeyText>F</S.HotkeyText>}
      rightSectionWidth={focused ? 0 : 21}
      icon={search_icon}
      sx={{ width: '100%' }}
      spellCheck={false}
      styles={{
        ...icon_styles
      }}
    />
  )
})

export default SearchBar
