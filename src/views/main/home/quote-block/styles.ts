import styled from 'styled-components'


const Container = styled.div`
  width: 60%;
  border: 1px dashed #CECECE;
  margin-top: 162px;
  display: flex;
  padding-left: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 50px;
`

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  margin-right: 24px;
  padding-right: 51px;
  border-right: 1px dashed #CECECE;

  img {
    width: 45px;
    height: 45px;
  }
`

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #111827;
`

const PositionText = styled.span`
  font-size: 18px;
  line-height: 150%;
  color: #666666;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Quote = styled.p`
  font-size: 20px;
  line-height: 150%;
  color: #111827;
  width: 62%;
`

export default {
  Container,
  Block,
  Text,
  PositionText,
  Wrapper,
  Quote
}
