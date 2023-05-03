import { createStyles } from '@mantine/core'
import { NAVBAR_BREAKPOINT } from '../navbar/styles'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const Container = styled.div`
  width: 595px;
  box-shadow: 0px 5px 60px rgba(0, 0, 0, 0.06);
  background: rgba(250, 250, 250, 0.93);
  border: 1px solid #efeeee;
  backdrop-filter: blur(40px);
  display: flex;
  flex-direction: column;
  border-radius: 0;

  ${down('lg')} {
    max-width: 100%;
    width: 100%;
  }
`
export const Content = styled.div`
  max-height: 500px;
  overflow-x: auto;
  width: 100%;
`

export const Header = styled.div<{ terminal_has_content: boolean }>`
  display: flex;
  padding: 15px !important;
  border-bottom: ${({ terminal_has_content }) => (terminal_has_content ? '1px solid #EEEEEE' : 'none')};

  /* I found classes names here - https://mantine.dev/core/select/?t=styles */
  /* The rest of styles are in src/styles/global.tsx since dropdown items are a overlay on page body */
  .mantine-Select-input {
    height: 34px;
    min-height: 34px;
    border: 1px solid #ebebeb;
    background: #f4f4f4 !important;
    border-radius: 2px;

    color: #111827;
    font-size: 13px;
    line-height: 16px;
    font-weight: 400;

    :focus {
      outline: 2px solid transparent !important;
      outline-offset: 2px !important;
      border-color: #818cf8;
      box-shadow: 0 0 0 3px #eef2ff;
    }

    :hover {
      border-color: #818cf8;
    }
  }
`
export default createStyles((theme) => ({
  terminalWrapper: {
    position: 'fixed',
    right: 25,
    zIndex: 9,
    bottom: 25,
    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      left: 15,
      right: 15,
      bottom: 15
    }
  }
}))
