import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #f6f6f6;
`

const IconContainer = styled.div`
  width: 28px; // to match 1st paragraph line-height.
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 2px;
  }
`

const Content = styled.div`
  color: #454545;
  font-size: 14px;
  p {
    padding: 0;
    color: #71717a;
    font-size: 14px;
    line-height: 150%;
  }
  a {
    font-size: 14px;
    line-height: 150%;
  }
`

export default { Container, IconContainer, SubContainer, Content }
