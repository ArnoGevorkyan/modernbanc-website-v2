import { Box, Text } from '@mantine/core'
import React from 'react'

export interface ProcessProps {
  index: number
  title: string
  children?: React.ReactNode
}

export const Process: React.FC<ProcessProps> = ({ index, title, children }) => {
  return (
    <Box mb={20}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ height: '28px', display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: '23px',
              height: '23px',
              borderRadius: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#e4e5f8',
              marginRight: '10px'
            }}
          >
            <Text
              sx={{
                color: '#6E79D6',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '23px'
              }}
            >
              {index}
            </Text>
          </Box>
        </Box>
        <Text sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: 700, color: '#454545' }}>{title}</Text>
      </Box>
      <Box ml={33}>{children}</Box>
    </Box>
  )
}

export default Process
