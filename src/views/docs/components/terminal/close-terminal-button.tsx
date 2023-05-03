import React from 'react'
import { Box } from '@mantine/core'
import { useHover } from '@mantine/hooks'

interface TerminalCloseButtonProps {
  onClick: () => void
}

const CloseTerminalButton: React.FC<TerminalCloseButtonProps> = ({ onClick }) => {
  const { hovered, ref } = useHover()

  return (
    <Box
      sx={{
        minWidth: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '12px',
        cursor: 'pointer'
      }}
      ref={ref}
      onClick={onClick}
    >
      <Box
        sx={{
          width: '12px',
          height: '12px',
          border: hovered ? '1px solid #D6BF6E' : '1px solid #B8B8B8',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: hovered ? '#f2eddd' : 'transparent'
        }}
      >
        {hovered && (
          <Box
            sx={{
              height: '1.5px',
              width: '6px',
              backgroundColor: '#D6BF6E',
              borderRadius: 0.25
            }}
          />
        )}
      </Box>
    </Box>
  )
}

export default CloseTerminalButton
