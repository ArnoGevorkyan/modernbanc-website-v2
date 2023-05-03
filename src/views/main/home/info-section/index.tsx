import { useState } from 'react'
import S from './styles'

const InfoSection = ({ children }) => {

  return (
    <S.Container>
      <S.Title>
        Financial excellence is one conversation away
      </S.Title>
      <S.Text>
        Join forward-looking companies already using Modernbanc.
      </S.Text>
      {children}
    </S.Container>
  );
}

export default InfoSection
