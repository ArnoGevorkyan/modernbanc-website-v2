import Link from 'next/link'
import { ContactUsIcon } from '~/components/icons/contactus-icon'
import { HomeLogo } from '~/components/icons/home-logo'
import S from './styles'

interface THomeButton {
  isBlog?: boolean
}

const HomeButton = ({isBlog}: THomeButton) => {
  return (
    <Link href="/" passHref shallow>
      <S.Button isBlog={isBlog}>
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
