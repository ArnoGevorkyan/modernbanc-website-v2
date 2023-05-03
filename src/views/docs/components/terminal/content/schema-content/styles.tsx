import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
`
const Title = styled.h1`
  font-weight: 500;
  font-size: 14px;
  line-height: 175%;
  color: #111827;
`

const Description = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 175%;
  color: #a1a1aa;
`

const ExtraData = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
`

const AttributesContainer = styled.div`
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
`

export default { Container, Header, Title, Description, ExtraData, AttributesContainer }
