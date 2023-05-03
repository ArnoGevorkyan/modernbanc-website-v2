import styled from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  border: 1px dashed #CECECE;

  margin-top: 127px;
  padding-bottom: 42px;

  @media (max-width: 950px) {
    width: 100%;
    border: none;
  }
`

const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 150%;
  text-align: center;
  color: #111827;
  margin-top: 48px;
  margin-bottom: 10px;  

  @media (max-width: 950px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 100%; 
    text-align: left;
    width: 80%;
  }
`

const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #666666;
  margin-bottom: 32px;

  @media (max-width: 950px) {
    font-size: 16px;
    line-height: 120%;
    text-align: left;
    width: 80%;

  }
`

export default {
  Container,
  Title,
  Text,
}
