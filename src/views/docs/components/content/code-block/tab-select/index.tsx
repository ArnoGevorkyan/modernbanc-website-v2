import { TRANSITION_ANIMATION } from '~/styles/shared'
import { Select, SelectItem } from '@mantine/core'
import React from 'react'
import S from './styles'
import { ChevronDownIcon } from '@heroicons/react/solid'

export type TCodeTab = {
  id: string
  title: string
  icon?: React.ReactNode
}

export type TCodeTabSelectProps = {
  tabs: TCodeTab[]
  selected_tab_id: string
  onChange: (selected_tab_id: string) => void
}

export const CodeTabSelect: React.FC<TCodeTabSelectProps> = ({ tabs, selected_tab_id, onChange }) => {
  const items: SelectItem[] = tabs.map((tab) => {
    return {
      value: tab.id,
      label: tab.title
    }
  })
  return (
    <Select
      variant="unstyled"
      size="xs"
      value={selected_tab_id}
      data={items}
      icon={tabs.find((tab) => tab.id === selected_tab_id)?.icon}
      transition={TRANSITION_ANIMATION}
      transitionTimingFunction="easeOut"
      transitionDuration={100}
      rightSection={<S.ChevronDown />}
      styles={{
        input: {
          height: '33px',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '20px',
          color: '#374151',
          paddingLeft: '8px',
          paddingRight: '4px',
          borderRadius: 0,
          background: '#F6F6F6 !important',
          border: 'none',
          borderRight: '1px solid #EFEFEF',
          ':focus': {
            boxShadow: 'none',
            borderColor: '#EFEFEF !important'
          },
          ':hover': {
            boxShadow: 'none',
            borderColor: '#EFEFEF !important'
          }
        },
        rightSection: { pointerEvents: 'none' },
        dropdown: {
          backgroundColor: '#FAFAFA !important'
        },
        label: {},
        item: {
          height: '34px',
          lineHeight: '20px'
        },

        hovered: {
          backgroundColor: '#EFF6FF'
        },
        selected: {
          backgroundColor: '#DBEAFE',
          color: '#111827'
        }
      }}
      onChange={(value: string) => onChange(value)}
    />
  )
}

export default CodeTabSelect
