import { LinkIcon } from '@heroicons/react/solid'
import * as S from './styles'
import Link from 'next/link'

type TAnchorLinkProps = {
  href: string
  type: 'h1' | 'h2'
}
export const AnchorLink = ({ href, type }: TAnchorLinkProps) => {
  return (
    <Link href={href} style={{ position: 'absolute' }}>
      <S.AnchorLinkContainer type={type}>
        <S.AnchorLinkWrapper>
          <LinkIcon width={'20px'} height={'20px'} color={'#D4D4D8'} />
        </S.AnchorLinkWrapper>
      </S.AnchorLinkContainer>
    </Link>
  )
}
