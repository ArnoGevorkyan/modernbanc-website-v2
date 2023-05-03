import { CSSProperties, forwardRef, MouseEventHandler } from 'react'
import S from './styles'

type TMainButtonProps = {
  title: string
  style?: CSSProperties
  onClick?: MouseEventHandler
}

const MainButton = forwardRef<HTMLButtonElement, TMainButtonProps>(({ title, style, onClick }, ref) => {
  return (
    <S.Container onClick={onClick} style={style} ref={ref} className="button">
      {title}
    </S.Container>
  )
})

export default MainButton
