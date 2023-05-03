import { Collapse } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import React, { CSSProperties, useState } from 'react'
import S from './styles'
export type TToggleProps = {
  style?: CSSProperties
  initial_is_open?: boolean
  title: string
  children: React.ReactNode
  subtitle?: string
  optional?: boolean
  required?: boolean
}

export const Toggle: React.FC<TToggleProps> = ({ style, children, initial_is_open = false, title, subtitle, optional, required }) => {
  const [is_open, setIsOpen] = useState(initial_is_open)
  const { ref } = useHover()
  return (
    <S.Container style={style}>
      <S.TopSubContainer onClick={() => setIsOpen(!is_open)} ref={ref}>
        <S.IconContainer>
          <S.Arrow className={is_open ? 'is_open' : undefined} />
        </S.IconContainer>
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
        {optional && <S.Pill>optional</S.Pill>}
        {required && <S.Pill>required</S.Pill>}
      </S.TopSubContainer>
      <Collapse className="toggle" in={is_open} transitionDuration={240} transitionTimingFunction="ease" sx={{ marginLeft: '24px' }}>
        {children}
      </Collapse>
    </S.Container>
  )
}

export default Toggle
