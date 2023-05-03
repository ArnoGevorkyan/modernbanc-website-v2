import { Tabs as MantineTabs } from '@mantine/core'
import React from 'react'

export interface TabsProps {
  bordered?: boolean
  isBorderRadius?: boolean
  padded?: boolean
  background_color?: string
  width?: 'min' | 'max'
  size?: 'sm' | 'base'
  children?: React.ReactNode
  placement?: 'left' | 'right' | 'center'
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  bordered = false,
  isBorderRadius = true,
  padded = true,
  background_color,
  width = 'max',
  size = 'base',
}) => {
  const isSmall = size === 'sm'

  return (
    <MantineTabs
      styles={{
        root: {
          marginTop: '12px'
        },
        body: {
          paddingTop: '0',
          paddingLeft: padded ? '15px' : '0px',
          paddingRight: padded ? '15px' : '0px',
          paddingBottom: padded ? '15px' : '0px',
        },
        tabsListWrapper: {
          background: background_color ?? 'transparent',
          borderBottom: '1px solid #EEEEEE !important'
        },
        tabControl: {
          height: isSmall ? '40px' : '48px',
          borderBottom: '1px solid transparent !important',
          borderRight: bordered ? '1px solid #EEEEEE' : undefined,
          ':last-child': { borderRight: 'none' }
        },
        tabInner: {
          color: '#A1A1AA',
          lineHeight: '20px',
          fontSize: isSmall ? '13px' : '15px',
          fontWeight: 500,
        },
        tabActive: {
          boxShadow: 'inset 0 -2px 0 0 #374151',
          borderBottom: '1px solid #EEEEEE !important',
          transition: 'box-shadow 0.2s ease-in-out',
          '> *': {
            color: '#111827'
          }
        },
      }}
      color="dark"
      sx={
        bordered
          ? {
              border: '1px solid #EBEBEB',
              borderRadius: isBorderRadius ? 6 : 0
            }
          : {}
      }
      grow={width === 'max'}
    >
      {children}
    </MantineTabs>
  )
}

export default Tabs
