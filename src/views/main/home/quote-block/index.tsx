import S from './styles'

type TQuoteProps = {
  text: string
  name: string
  position: string
  image?: string
}

const QuoteBlock = ({ text, name, position, image }: TQuoteProps) => {
  return (
    <S.Container>
      <S.Block>
        <img src={image} alt={position} width="45" height="45" />
        <S.Wrapper>
          <S.Text>{name}</S.Text>
          <S.PositionText>{position}</S.PositionText>
        </S.Wrapper>
      </S.Block>
      <S.Quote>{text}</S.Quote>
    </S.Container>
  );
}

export default QuoteBlock
