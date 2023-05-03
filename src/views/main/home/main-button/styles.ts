import { noselect } from '~/styles/shared'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.button`
  display: flex;
  background: linear-gradient(239.5deg, #c5c5c5 -1.38%, rgba(197, 197, 197, 0.3) 13.8%, rgba(197, 197, 197, 0) 41.3%, rgba(197, 197, 197, 0.3) 89.67%),
    #1f2023;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #6e79d6;
  border-radius: 2;
  white-space: nowrap;
  color: white;
  height: 53px;
  width: 162px;
  padding: 0 18px;
  transition: 100ms ease-in-out;
  border: 3px solid #cccccc;
  line-height: 18px;
  letter-spacing: 0.01em;
  :hover {
    color: #d6936e;
  }

  cursor: default;
  ${noselect}

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  letter-spacing: 0.01rem;
  font-weight: 500;

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  position: relative;
  z-index: 3;

  :focus {
    outline: none;
    box-shadow: 0 0 0 1.5px black;
  }

  @media (max-width: 950px) {
    width: 80%;
    background: #373737;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }
`

export default { Container }
