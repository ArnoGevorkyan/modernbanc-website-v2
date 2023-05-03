import styled from 'styled-components'
import NLink from 'next/link'

const Link = styled(NLink)`
  :focus {
    outline: none;
  }
`

const Button = styled.button`
  position: relative;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px !important;
  -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: content-box; /* Firefox, other Gecko */
  box-sizing: content-box; /* Opera/IE 8+ */
  background: linear-gradient(
    239.5deg,
    #c5c5c5 -1.38%,
    rgba(197, 197, 197, 0.3) 13.8%,
    rgba(197, 197, 197, 0) 41.3%,
    rgba(197, 197, 197, 0.3) 89.67%
  );
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 3px solid #cccccc;

  .glass {
    /* z-index: 0; */
    top: 0px;
    position: absolute;
    width: 100%;
    /* height: 32px; */
    border-radius: 6.56px;
    background-color: #d5d5d5;
    backdrop-filter: blur(2px);
    /* height: 48px; */
  }

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #374151;

    letter-spacing: 0;
    max-width: 0;
    -webkit-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
    animation: all 200ms ease-in-out;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    transform: scale(0.9);
    opacity: 0.7;
    margin-right: 0;
  }
  &:hover {
    max-width: 173px;
    span {
      margin-right: 10px;
      transform: scale(1);
      max-width: 123px !important;
      opacity: 1;
    }
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px black;
  }
`
const IconContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
`

export default { Button, IconContainer, Link }
