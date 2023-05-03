import styled from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  height: 100%;
  width: 100%;
  justify-content: top;
  align-items: center;
`

const Card = styled.div`
  margin-top: 40vh;
  width: 500px;
  ${down('lg')} {
    width: 90%;
  }
`

const Title = styled.span`
  font-size: 18px;
  width: 100%;
  line-height: 155%;
  font-weight: 600;
  color: #111827;
`
const Form = styled.form`
  margin-top: 14px;
  display: flex;
  width: 100%;
  justify-content: top;
`
const Button = styled.button`
  font-family: 'Inter', sans-serif;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  height: 34px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #e0e7ff;
  color: #6e79d6;
  background-color: #e7ebf8;
  transition: 70ms ease-out;
  :hover {
    background-color: #dfe3f0;
  }
`

export default { Container, Card, Title, Form, Button }
