import Link from 'next/link'
import S from './card.styles'

type TCardProps = {
  title: string
  description: string
  url: string
}

export const CardGroup = ({ children, ...rest }: React.PropsWithChildren) => <S.CardGroup {...rest}>{children}</S.CardGroup>

export const Card = ({ url, title, description }: TCardProps) => {
  return (
    <Link href={url}>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Container>
    </Link>
  )
}
