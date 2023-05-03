import styled from 'styled-components'

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 5px;

  border-radius: 8px;

  background: #f4f4f4;

  border: 1px solid #ebebeb;
  filter: drop-shadow(0px 0px 8px rgba(209, 209, 209, 0.5));
  transition: 125ms ease-in-out;
  :hover {
    box-shadow: 0px 0px 16px rgba(110, 121, 214, 0.1);
  }
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 155%;
  color: #111827;
`

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 155%;
  color: #111827;
`

export default { CardGroup, Container, Title, Description }
