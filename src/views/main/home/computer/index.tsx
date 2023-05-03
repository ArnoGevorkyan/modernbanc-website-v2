import { MutableRefObject } from 'react'
import S from './styles'

type TComputerProps = {
  ref?: MutableRefObject<HTMLDivElement | null>
}

const Computer = ({ ref }: TComputerProps) => (
  <S.Container>
    <S.Computer>
      <S.ScreenContainer>
        <S.Screen>
          <S.TopLeftButtons>
            <S.TopLeftButton color="#6EA4D6" />
            <S.TopLeftButton color="#D2B25E" />
            <S.TopLeftButton color="#6E79D6" />
          </S.TopLeftButtons>
          <S.ScreenContent>
            {/* <S.CentralSign /> */}
          </S.ScreenContent>
        </S.Screen>
        <S.Name>MODERNBANC</S.Name>
      </S.ScreenContainer>
      <S.SmallPanel />
      <S.BigPanel />
    </S.Computer>
  </S.Container>
)

export default Computer
