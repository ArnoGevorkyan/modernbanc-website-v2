import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #ebebeb;
  flex: 1;
  width: 100%;
  :last-child {
    border-bottom: none !important;
  }
`

const MainContent = styled.div<{ is_clickable: boolean }>`
  align-items: center;
  display: flex;
  color: #a1a1aa;
  width: 100%;
  display: flex;
  cursor: ${({ is_clickable }) => (is_clickable ? 'pointer' : 'initial')};
  :hover .highlight-on-hover {
    color: ${({ is_clickable }) => (is_clickable ? '#6E79D6 !important' : '#A1A1AA')};
  }
`

const Title = styled.span`
  margin-right: 6px;
  color: #111827;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
`

const FriendlyType = styled.span`
  margin-right: 6px;
  color: #a1a1aa;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Description = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  color: #a1a1aa;
`

const Constraints = styled.span`
  color: #a1a1aa;
  /* color: #808080; */
`

const RefLinkButton = styled.button`
  cursor: pointer;
  color: #d4d4d8;
  transition: 75ms ease-in-out;
  :hover {
    color: #a1a1aa;
  }
`

const ExpandIconContainer = styled.div`
  margin-left: 1px;
  :hover {
    .bg {
      transition: 100ms ease-in-out;
      fill: #f0f0f0;
    }
  }
`

export default { Container, Title, Description, FriendlyType, Constraints, MainContent, ExpandIconContainer, RefLinkButton }
