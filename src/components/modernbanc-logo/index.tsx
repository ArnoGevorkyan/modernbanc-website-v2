import logo from '~/images/mdb-logo.png'
import Link from 'next/link'
import React, { memo } from 'react'
import * as S from './styles'
const ModernbancLogo = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Link href="/" aria-label="Modernbanc">
      <S.Wrapper style={style}>
        <S.Logo alt="modernbanc logo" src={logo} layout="responsive" objectFit="contain" unoptimized priority quality={100} />
      </S.Wrapper>
    </Link>
  )
}

export default memo(ModernbancLogo)
