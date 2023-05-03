import React from 'react'
import S from './styles'
export interface LabelProps {
  text?: string
}

export const Label: React.FC<LabelProps> = ({ text }) => {
  return <S.Label>{text}</S.Label>
}

export default Label
