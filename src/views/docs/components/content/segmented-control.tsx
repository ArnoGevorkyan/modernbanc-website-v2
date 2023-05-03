import { Tabs, TabsProps } from '@mantine/core'
import React from 'react'

export function SegmentedControl(props?: TabsProps) {
  return (
    <Tabs
      children={props?.children} // why did I add this I don't know
      variant="unstyled"
      styles={(theme) => ({
        body: { paddingLeft: '15px', paddingRight: '15px', paddingBottom: '15px' },

        tabsList: {
          border: '1px solid #EFEFEF',
          display: 'inline-flex',
          padding: '4px',
          borderRadius: 4
        },

        tabInner: {
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '16px',
          color: '#374151'
        },

        tabControl: {
          borderRadius: 4,
          height: '36px'
        },

        tabActive: {
          backgroundColor: '#F0F0F0 !important',
          borderColor: theme.colors.blue[7],
          color: '#6E79D6 !important',
          '> *': {
            color: '#6E79D6'
          }
        }
      })}
      {...props}
    />
  )
}

export default SegmentedControl
