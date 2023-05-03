import styled from 'styled-components'

export const Toggle = styled.div`
  transition: transform 150ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: visible;
  & .hidden {
    visibility: hidden;
  }
`
