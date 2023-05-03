import styled from 'styled-components'

export const AnchorLinkContainer = styled.div<{ type: 'h1' | 'h2' }>`
  position: absolute;
  display: flex;
  margin-top: ${({ type }) => (type === 'h1' ? 14 : 11)}px;
  margin-left: -38px;
  width: 28px;
  height: 28px;
  button {
    visibility: hidden;
  }
  :hover {
    button {
      visibility: visible;
    }
  }
`

export const AnchorLinkWrapper = styled.button`
  transition: 100ms ease-in-out;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border-color: #efefef;
  border-width: 1px;
  background-color: #fafafa;
`
