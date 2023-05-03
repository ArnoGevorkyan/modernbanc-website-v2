import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;

  border: 1px dashed #CECECE;

  margin-top: 127px;
  padding-bottom: 42px;
`

const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 150%;
  text-align: center;
  color: #111827;
  margin-top: 48px;
  margin-bottom: 10px;  
`

const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #666666;
  margin-bottom: 32px;
`

export default {
  Container,
  Title,
  Text,
}
