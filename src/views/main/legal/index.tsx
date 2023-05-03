import { HomeIcon } from '@heroicons/react/solid'
import { TLayoutProps } from '..'
import Button from '../home/button'
import S from './styles'

const LegalPage = ({ children }: TLayoutProps) => (
  <S.Container>
    <S.SubContainer>
      <Button icon={<HomeIcon width={16} />} title="Home" href="/" />
      <S.Content>{children}</S.Content>
    </S.SubContainer>
  </S.Container>
)

export default LegalPage
