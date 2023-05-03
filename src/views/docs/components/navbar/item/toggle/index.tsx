import { MouseEventHandler } from 'react'
import * as S from './styles'
import { ExpandBox, MinimizeBox } from '../icons'

type TToggleProps = {
  is_open: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  icon?: React.ReactNode
  hidden?: boolean
  should_have_collapse?: boolean
}

export const Toggle = ({ is_open, onClick, icon, hidden = false, should_have_collapse }: TToggleProps) => {
  return (
    <S.Toggle className={hidden ? 'hidden' : undefined} onClick={onClick}>
      {is_open && should_have_collapse ? (
        <MinimizeBox />
      ) : !is_open ? (
        <ExpandBox />
      ) : (
        <ExpandBox />
      )}
    </S.Toggle>
  )
}
