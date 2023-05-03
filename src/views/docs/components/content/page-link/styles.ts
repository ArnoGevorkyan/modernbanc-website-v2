import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #f6f6f6;
  transition: 100ms ease-out;
  box-shadow: 8px -8px 0px #eeeeee;
  border: 1px solid #efefef;
  border-radius: 4px;
  /* height: 250px; */
  /* min-width: 250px; */
  :hover {
    box-shadow: 8px -8px 0px #e2e4fa;
    background-color: #f4f4f4; //f4
  }
  cursor: pointer;
`

const TopSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  align-items: center;
`

const IconContainer = styled.div<{ color1: string; color2: string }>`
  display: flex;
  width: 100%;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: 120px;
  background: conic-gradient(
    from 180deg at 50% 50%,
    ${({ color1 }) => color1} -78.77deg,
    rgba(237, 237, 237, 0) 13.71deg,
    ${({ color2 }) => color2} 145.23deg,
    ${({ color1 }) => color1} 281.23deg,
    rgba(237, 237, 237, 0) 373.71deg
  );
`

const Icon = styled.div`
  width: 36px;
  color: #d4d4d8;
`

const Badge = styled.div`
  margin-top: -10px;
  border-radius: 2px;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  background-color: #e4e4e4;
  padding: 2px 4px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: #a6a6a6;
`

const BottomSubContainer = styled.div`
  font-family: 'Inter', sans-serif;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Title = styled.div`
  width: 100%;
  color: #454545;
  font-weight: 700;
  font-size: 16px;
  line-height: 155%;
  letter-spacing: 0.016em;
`

const Description = styled.div`
  width: 100%;
  color: #a6a6a6;
  font-weight: 500;
  font-size: 14px;
  line-height: 155%;
  letter-spacing: 0.016em;
`
export default { Container, TopSubContainer, IconContainer, Icon, Badge, BottomSubContainer, Title, Description }
