import { BookOpenIcon, DesktopComputerIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { CSSProperties } from 'react'
import S from './styles'
export type TPageLinkProps = {
  style?: CSSProperties
  icon?: React.ReactNode
  color1: string
  color2: string
  href: string
  badge: string
  title: string
  description: string
}

export const PageLink: React.FC<TPageLinkProps> = ({ style, icon = <BookOpenIcon />, color1, color2, badge, href, title, description }) => {
  return (
    <Link href={href}>
      <S.Container style={style}>
        <S.TopSubContainer>
          <S.IconContainer color1={color1} color2={color2}>
            <S.Icon>{icon}</S.Icon>
          </S.IconContainer>
          <S.Badge>{badge}</S.Badge>
        </S.TopSubContainer>
        <S.BottomSubContainer>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.BottomSubContainer>
      </S.Container>
    </Link>
  )
}

export default PageLink
