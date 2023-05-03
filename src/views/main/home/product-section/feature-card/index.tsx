import S from './styles';


type TFeatureCardProps = {
  icon?: JSX.Element
  icon_color?: string
  title?: string
  description?: string
  href?: string
  center?: boolean
  text_color?: string
  badge_number?: number
  list_items?: string[]
}

const FeatureCard = (props: TFeatureCardProps) => {
  
  return (
    <S.Card>
      <S.CardTitleAreaContainer>
        {props.icon && (
          <S.CardIconContainer color={props.icon_color}>
            {props.icon}
          </S.CardIconContainer>
        )}
        {props.title && (
          <S.CardTitle>
            {props.title}
          </S.CardTitle>
        )}
        {props.badge_number && (
          <S.CardBadge>
            <S.CardBadgeText>
              {props.badge_number}
            </S.CardBadgeText>
          </S.CardBadge>
        )}
      </S.CardTitleAreaContainer>
      {props.description && (
        <S.CardDescription>
          {props.description}
        </S.CardDescription>
      )}
      {props.list_items && (
        <S.CardUnorderedList>
          {props.list_items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </S.CardUnorderedList>
      )}
    </S.Card>
    )
}

export default FeatureCard;