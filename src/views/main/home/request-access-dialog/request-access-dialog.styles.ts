import styled, { keyframes } from 'styled-components'
import { Overlay as ROverlay, Content as RContent, Trigger as RTrigger } from '@radix-ui/react-dialog'

const ContentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 0) scale(0.93);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
  }
`

const ContentHide = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);

  }
  to {
    opacity: 0;
    transform: translate(-50%, 0) scale(0.93);
  }
`

const OverlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`
const OverlayHide = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`

const Trigger = styled(RTrigger)`
  :focus {
    outline: none;
  }
`

const Content = styled(RContent)<{ top_offset?: string; width?: string }>`
  position: fixed;
  top: ${({ top_offset }) => top_offset ?? '30%'};
  left: 50%;
  width: 400px;
  max-width: 90%;
  z-index: 50;

  background: linear-gradient(
      239.5deg,
      rgba(197, 197, 197, 0.5) -1.38%,
      rgba(197, 197, 197, 0.15) 13.8%,
      rgba(197, 197, 197, 0) 41.3%,
      rgba(197, 197, 197, 0.15) 89.67%
    ),
    #f0f0f0;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(25px);
  border-radius: 12px;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${ContentShow} forwards;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      animation-duration: 150ms;
    }

    &[data-state='closed'] {
      animation: ${ContentHide} forwards;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      animation-duration: 150ms;
    }
  }

  &:focus {
    outline: none;
  }
`

const Overlay = styled(ROverlay)`
  position: fixed;
  inset: 0;
  background: rgba(0 0 0 / 0.3);
  z-index: 40;
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${OverlayShow} forwards;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      animation-duration: 150ms;
    }

    &[data-state='closed'] {
      animation: ${OverlayHide} forwards;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      animation-duration: 150ms;
    }
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  height: 56px;
  border-bottom: 1px solid #ededed;
`

const HeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  background: linear-gradient(180deg, #3a3a3a 0%, rgba(0, 0, 0, 0.885417) 54.69%, rgba(0, 0, 0, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const HeaderRightPart = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 4px;
  }
`

const Border = styled.div`
  width: 100%;
  height: 1px;
  background: #e1e1e1;
`

const CloseIconContainer = styled.button`
  display: flex;
  width: 16px;
  height: 16px;
  cursor: default;
  align-items: center;
  border-radius: 3px;
  svg {
    color: #b8b8b8;
  }

  &:hover {
    color: #111827;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1.5px black;
  }
`

const Body = styled.div<{
  top_offset?: string
}>`
  display: flex;
  padding: 30px 20px 40px 20px;
  width: 100%;
  overflow: auto;
  max-height: calc(100vh - ${({ top_offset }) => (top_offset ?? '35%').replace('%', '') + 'vh'} - 15vh);
`

const Form = styled.form`
  display: flex;
  width: 100%;
  gap: 25px;
  flex-direction: column;
`

export default { Trigger, Overlay, Header, HeaderTitle, HeaderRightPart, Content, Border, CloseIconContainer, Body, Form }
