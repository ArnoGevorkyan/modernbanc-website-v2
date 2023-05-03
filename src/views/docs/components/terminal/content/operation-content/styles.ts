import styled from 'styled-components'

const Container = styled.div``

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

const SubContainer = styled.div`
  margin-top: 10px;
  :first-child {
    margin-top: 0;
  }
`

const ResponseHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`
const ResponseCodeCircle = styled.div<{ code: number }>`
  margin-left: 4px;
  margin-right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ code }) => {
    if (code >= 200 && code < 300) {
      return '#C1C5EB'
    } else if (code >= 400) {
      return '#EBC4C1'
    } else {
      return '#EBDFC1'
    }
  }};
`

export default { Container, Header, Title, Description, SubContainer, ResponseHeaderContainer, ResponseCodeCircle }
