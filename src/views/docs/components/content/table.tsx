import React from 'react'
import { Table as MantineTable } from '@mantine/core'

type TBorderType = 'vertical' | 'horizontal' | 'all' | 'none'

export interface DocsTableProps {
  outer_border?: boolean
  inner_border?: TBorderType
  responsive_cell?: boolean
  children?: React.ReactNode
}

export const Table: React.FC<DocsTableProps> = ({ children, outer_border, inner_border = 'all', responsive_cell }) => {
  const outer_borderStyles = (): any => {
    if (outer_border) {
      return {
        border: outer_border ? '1px solid #EBEBEB' : 'none',
        borderRadius: '4px',
        borderCollapse: 'separate',
        borderSpacing: 0
      }
    }

    return { border: 'none' }
  }

  const inner_borderStyles = () => {
    switch (inner_border) {
      case 'none':
        return {
          td: {
            border: 'none !important'
          }
        }

      case 'horizontal':
        return {}
      case 'vertical':
        return {
          th: {
            borderRight: '1px solid #EBEBEB',
            ':last-child': {
              borderRight: 'none'
            }
          },
          td: {
            borderRight: '1px solid #EBEBEB',
            ':last-child': {
              borderRight: 'none'
            },
            borderBottom: 'none !important'
          }
        }
      case 'all':
        return {
          th: {
            borderRight: '1px solid #EBEBEB',
            ':last-child': {
              borderRight: 'none'
            }
          },
          td: {
            borderRight: '1px solid #EBEBEB',
            ':last-child': {
              borderRight: 'none'
            }
          }
        }
      default:
        break
    }
  }

  return (
    <MantineTable
      verticalSpacing={10}
      sx={[
        { tableLayout: responsive_cell ? 'auto' : 'fixed' },
        outer_borderStyles(),
        inner_borderStyles(),
        {
          marginTop: '10px',
          marginBottom: '10px',
          overflowX: 'auto',
          tr: {
            width: '100%'
          },
          th: {
            fontWeight: '400 !important',
            letterSpacing: '0.01em !important',
            fontSize: '16px !important',
            lineHeight: '28px !important',
            color: '#A1A1AA !important',
            padding: '10px !important'
          },
          td: {
            fontWeight: 400,
            letterSpacing: '0.01em',
            fontSize: '16px !important',
            lineHeight: '28px',
            color: '#111827',
            padding: '10px !important',
            p: {
              fontWeight: 400,
              letterSpacing: '0.01em',
              fontSize: '16px !important',
              lineHeight: '28px',
              color: '#111827'
            }
          }
        }
      ]}
    >
      {children}
    </MantineTable>
  )
}

export default Table
