import React from 'react'
import * as S from './styles'

export type TShortcutProps = {
  keys: (string | 'then')[]
  size: 'small' | 'medium'
  mode: 'default' | 'indigo'
}

export const Shortcut = ({ keys, size = 'medium', mode = 'default' }: TShortcutProps) => (
  <S.ShortcutGroup>
    {keys.map((key, index) => {
      if (key === 'then') {
        return <S.ShortcutThen key={key}>then</S.ShortcutThen>
      } else {
        return (
          <S.ShortcutKey key={key} {...{ keys, size, mode }}>
            {key}
          </S.ShortcutKey>
        )
      }
    })}
  </S.ShortcutGroup>
)

export default Shortcut
