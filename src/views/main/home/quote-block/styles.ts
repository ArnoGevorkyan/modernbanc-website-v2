import styled from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.div`
  width: 60%;
  border: 1px dashed #CECECE;
  margin-top: 162px;
  display: flex;
  padding-left: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 50px;
  
  @media (max-width: 950px) {

    flex-direction: column;
    width: 80%;
    padding-left: 20px;
  }
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

  @media (max-width: 950px) {

    padding-right: 12px;
    border-right: none;
    margin-bottom: 20px;

    .image {
      width: 59px;
      height: 59px;
    }
  }
`

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #111827;

  @media (max-width: 950px) {

    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
  }
`

const PositionText = styled.span`
  font-size: 18px;
  line-height: 150%;
  color: #666666;

  @media (max-width: 950px) {

    font-size: 16px;
    line-height: 120%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 950px) {

    border-bottom: 1px dashed #CECECE;
  }
`

const Quote = styled.p`
  font-size: 20px;
  line-height: 150%;
  color: #111827;
  width: 62%;

  @media (max-width: 950px) {

    width: 100%;
    font-size: 14px;
    line-height: 17px;
  }
`

export default {
  Container,
  Block,
  Text,
  PositionText,
  Wrapper,
  Quote
}
