import * as S from './styles'

type TStatementCardProps = {
  icon: JSX.Element
  title: string
  description: string
}

const StatementCard = (props: TStatementCardProps) => {
  return (
    <S.Container>
      <S.IconContainer>
        <S.IconSubContainer>{props.icon}</S.IconSubContainer>
      </S.IconContainer>
      <S.TextContainer>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
      </S.TextContainer>
    </S.Container>
  )
}

export default StatementCard
