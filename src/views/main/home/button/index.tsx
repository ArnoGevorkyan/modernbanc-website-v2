import Link from 'next/link'
import S from './styles'

type TButtonProps = {
  icon: JSX.Element
  title: string
  href: string
  center?: boolean
  text_color?: string
  special_btn?: boolean
}

const Button = ({ icon, title, href, center, text_color, special_btn }: TButtonProps) => (
  <Link href={href}>
    <S.Container className="button" center={center} textColor={text_color}>
      {special_btn ? (
        <div>
          <span />
          <S.Icon>{icon}</S.Icon>
          <S.Title textColor={text_color}>{title}</S.Title>
        </div>
      ) : (
        <>
          <span />
          <S.Icon>{icon}</S.Icon>
          <S.Title textColor={text_color}>{title}</S.Title>
        </>
      )}

    </S.Container>
  </Link>
)

export default Button
