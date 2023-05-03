import { XIcon } from '@heroicons/react/solid'
import S from './toast.styles'
type TToastProps = {
  type: 'success' | 'error'
}

const SuccessIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2969 7.76168L9.29688 19.7617L3.79688 14.2617L5.20687 12.8517L9.29688 16.9317L19.8869 6.35168L21.2969 7.76168Z" fill="black" />
  </svg>
)

const Toast = ({ type }: TToastProps) => {
  let title: string, description: string

  if (type === 'success') {
    title = 'You have requested access!'
    description = 'We will notify you as soon as the product becomes available. Keep an eye on your email to stay tuned.'
  } else {
    title = 'Oops something went wrong!'
    description = 'If this problem persists please contact us at our email at hello@modernbanc.com.'
  }

  return (
    <S.Container>
      <S.IconContainer>{type === 'success' ? <SuccessIcon /> : <XIcon height="24px" width="24px" />}</S.IconContainer>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.Container>
  )
}

export default Toast
