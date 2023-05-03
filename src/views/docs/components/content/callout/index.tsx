import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import { Box } from '@mantine/core'
import React from 'react'
import S from './styles'
interface CalloutProps {
  title: string
  type: 'success' | 'info' | 'error'
  children: React.ReactNode
}

export const Callout: React.FC<CalloutProps> = ({ children, title, type }) => {
  const Icon = () => {
    switch (type) {
      case 'success':
        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                background: '#6E79D6',
                position: 'absolute',
                top: 4,
                right: 0,
                left: 4,
                bottom: 0,
                borderRadius: '100%',
                width: '70%',
                height: '70%'
              }}
            />
            <CheckCircleIcon height={24} width={24} fill="#EBEBEB" style={{ position: 'relative', zIndex: 2 }} />
          </Box>
        )

      case 'info':
        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                background: '#ACABAB',
                position: 'absolute',
                top: 4,
                right: 0,
                left: 4,
                bottom: 0,
                borderRadius: '100%',
                width: '70%',
                height: '70%'
              }}
            />
            <InformationCircleIcon height={24} width={24} fill="#EBEBEB" style={{ position: 'relative', zIndex: 2 }} />
          </Box>
        )

      case 'error':
        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              justifyContent: 'center'
            }}
          >
            <Box
              sx={{
                background: '#6EAAD6',
                position: 'absolute',
                top: 4,
                right: 0,
                left: 4,
                bottom: 0,
                borderRadius: '100%',
                width: '70%',
                height: '70%'
              }}
            />
            <XCircleIcon height={24} width={24} fill="#EBEBEB" style={{ position: 'relative', zIndex: 2 }} />
          </Box>
        )

      default:
        return null
    }
  }

  return (
    <S.Container>
      <S.IconContainer>
        <Icon />
      </S.IconContainer>
      <S.SubContainer>
        <p style={{ padding: '0', fontWeight: 500, color: '#111827' }}>{title}</p>
        <S.Content> {children}</S.Content>
      </S.SubContainer>
    </S.Container>
  )
}

export default Callout
