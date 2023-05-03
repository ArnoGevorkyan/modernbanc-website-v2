import { noselect } from '~/styles/shared'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.div.attrs((props: { center: boolean; textColor: string }) => props)`
  display: flex;
  border: 1px solid #e4e4e4;
  width: 100%;
  /* min-width: 240px; */
  /* height: 35px; */
  font-family: 'Inter', sans-serif;
  border-radius: 2px;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  color: ${(props) => props.textColor};
  align-items: center;
  gap: 6px;
  padding: 5.25px 4px;
  cursor: default;
  ${noselect}
  z-index: 999;

  transition: 100ms ease-in-out;

  :hover {
    border-color: #c5c5c5;
    span {
      color: ${(props) => props.textColor || '#9a9a9a'};
    }
  }

  div {
    display: flex;
    justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  }

  @media (max-width: 950px) {
    /* padding: 3.5px 4px;
    padding-left: 2px; */
    padding: 20.25px 4px;
    width: 100%;
    justify-content: flex-start;

    div {
      flex-direction: column;
      justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
      align-items: center;

    }

  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
  height: 24px;
  width: 24px;
  color: #d4d4d8;
  .svg {
    color: #d4d4d8;
  }
  @media (max-width: 950px) {
    height: 18px;
    width: 18px;
  }
`
const Title = styled.span.attrs((props: { textColor: string }) => props)`
  transition: 100ms ease-in-out;
  display: flex;
  font-size: 0.938rem;
  font-weight: 500;
  color: ${(props) => props.textColor || '#a1a1aa'};
`

export default { Container, Icon, Title }
