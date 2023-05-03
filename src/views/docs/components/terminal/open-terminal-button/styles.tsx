import { TerminalIcon } from '@heroicons/react/solid'
import styled from 'styled-components'

export const Button = styled.button<{ hidden: boolean }>`
  height: 32px;
  min-height: 32px;
  color: #a1a1aa;
  background-color: #f0f0f0;
  border: 1px solid #ebebeb;
  width: 200px;
  padding: 5.25px 8px;
  box-shadow: 0px 5px 60px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(20px);
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  transition-delay: 150ms;
  &:hover {
    background-color: #ededed;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentLeftPart = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled(TerminalIcon)`
  width: 17.5px;
  color: #d4d4d8;
  margin-right: 8px;
`

export const Title = styled.span`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: #1f2937;
`

export const HotkeyText = styled.span`
  font-size: 11px;
  line-height: 13px;
  font-weight: 500;
  color: #374151;
  border-radius: 4px;
  background: #ebebeb;
  min-width: 20px;
  width: 20px;
  padding: 4px 6px;
  height: 21px;
  min-height: 21px;
`
