import { useAppContext } from '~/context/state'
import { useHotkeys } from '@mantine/hooks'
import React from 'react'
import * as S from './styles'
type TOpenTerminalButtonProps = {
  props?: React.ComponentPropsWithoutRef<'button'>
}

const OpenTerminalButton: React.FC<TOpenTerminalButtonProps> = ({ props }) => {
  const context = useAppContext()

  useHotkeys([
    [
      'K',
      () => {
        context.setTerminalOpen(!context.terminal_is_open)
      }
    ],
    [
      'mod+K',
      (e) => {
        // to stop Docsearch's default hotkey.
        e.stopImmediatePropagation()
        context.setTerminalOpen(!context.terminal_is_open)
      }
    ]
  ])

  return (
    <S.Button {...props} hidden={context.terminal_is_open} onClick={() => context.setTerminalOpen(true)}>
      <S.Content>
        <S.ContentLeftPart>
          <S.Icon />
          <S.Title>API Reference</S.Title>
        </S.ContentLeftPart>
        <S.HotkeyText>K</S.HotkeyText>
      </S.Content>
    </S.Button>
  )
}

export default OpenTerminalButton
