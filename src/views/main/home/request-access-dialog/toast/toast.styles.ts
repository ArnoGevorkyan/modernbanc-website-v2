import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 15px 30px 15px;
  gap: 25px;
  align-items: center;
  justify-content: center;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

const IconContainer = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border: 1px solid #d8d8d8;
  background: #ebebeb;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
  color: #111827;
`

const Description = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-weight: 400;
  color: #6b7280;
`

export default { Container, IconContainer, TextContainer, Title, Description }
