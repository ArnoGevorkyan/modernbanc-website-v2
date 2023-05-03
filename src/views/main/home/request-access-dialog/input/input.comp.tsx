import S from './input.styles'
import { UseFormRegisterReturn } from 'react-hook-form'

type TInputProps = {
  label?: string
  placeholder?: string
  form_register?: UseFormRegisterReturn
}

const Input = ({ label, placeholder, form_register }: TInputProps) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.InputContainer>
        <S.Input placeholder={placeholder} {...form_register} />
      </S.InputContainer>
    </S.Container>
  )
}

export default Input
