import Link from 'next/link'
import { DocsIcon } from '~/components/icons/docs-icon'
import S from './styles'

const DocsButton = () => {
  return (
    <S.Link href="/docs" passHref shallow>
      <S.Button>
        <div className="glass" />
        <span>Docs </span>
        <div className="spacer" />
        <S.IconContainer>
          <DocsIcon />
        </S.IconContainer>
      </S.Button>
    </S.Link>
  )
}

export default DocsButton
