import styled from 'styled-components'

export const Button = styled.button`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px !important;
  -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: content-box; /* Firefox, other Gecko */
  box-sizing: content-box; /* Opera/IE 8+ */
  background: linear-gradient(239.5deg, #c5c5c5 -1.38%, rgba(197, 197, 197, 0.3) 13.8%, rgba(197, 197, 197, 0) 41.3%, rgba(197, 197, 197, 0.3) 89.67%),
    #1f2023;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: 3px solid rgba(204, 204, 204, 1);

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #d9d9d9;

    letter-spacing: 0;
    max-width: 0;
    -webkit-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
    animation: all 200ms ease-out;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    transform: scale(0.8);
    opacity: 0;
    margin-right: 0;
  }
  &:hover {
    background: linear-gradient(
        239.5deg,
        rgba(197, 197, 197, 0.58) -1.38%,
        rgba(197, 197, 197, 0.3) 13.8%,
        rgba(197, 197, 197, 0) 41.3%,
        rgba(197, 197, 197, 0.3) 89.67%
      ),
      #1f2023;
    max-width: 173px;
    span {
      transform: scale(1);
      max-width: 123px !important;
      opacity: 1;
      margin-right: 10px;
    }
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px black;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  height: 22px;
  width: 22px;
`

export default { Button, IconContainer }
