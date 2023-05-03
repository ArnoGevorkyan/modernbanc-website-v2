import Link from 'next/link'
import { ContactUsIcon } from '~/components/icons/contactus-icon'
import { HomeLogo } from '~/components/icons/home-logo'
import S from './styles'

const HomeButton = () => {
  return (
    <Link href="/" passHref shallow>
      <S.Button>
        <div className="glass" />
        <span>Home </span>
        <div className="spacer" />
        <S.IconContainer>
          <HomeLogo />
        </S.IconContainer>
      </S.Button>
    </Link>
  )
}

export default HomeButton
