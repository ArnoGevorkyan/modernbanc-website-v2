import * as S from './styles'

type TSolutionsCardProps = {
  icons?: JSX.Element[]
  icon_color?: string
  title?: string
  text?: string
  href?: string
  text_color?: string
}

const SolutionsCard = (props: TSolutionsCardProps) => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleContainer>
          <S.CardTitleText>{props.title}</S.CardTitleText>
        </S.TitleContainer>
        <S.CardIconContainer>
          {props.icons?.map((icon, index) => (
            <S.Icon key={index} color={props.icon_color}>
              {icon}
            </S.Icon>
          ))}
        </S.CardIconContainer>
      </S.TitleContainer>

      <S.CardTextContainer>
        <S.CardText color={props.text_color}>{props.text}</S.CardText>
      </S.CardTextContainer>
    </S.Container>
  )
}

export default SolutionsCard
