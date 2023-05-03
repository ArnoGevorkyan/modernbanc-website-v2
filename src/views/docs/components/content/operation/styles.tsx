import styled from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.div`
  display: flex;
  height: 36px;
  border-radius: 4;
  background-color: #f4f4f4;
  border: 1px solid #ebebeb;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 100ms ease-in-out;
  justify-content: space-between;

  :hover {
    box-shadow: 0px 0px 8px rgba(110, 121, 214, 0.15);
  }
`

const InlineContainer = styled.span`
  display: flex;
  height: 36px;
  border-radius: 4;
  background-color: #f4f4f4;
  border: 1px solid #ebebeb;
  align-items: center;
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
  transition: 100ms ease-in-out;
  :hover {
    box-shadow: 0px 0px 8px rgba(110, 121, 214, 0.15);
  }
`

const LeftPart = styled.div`
  display: flex;
  align-items: center;
`

const Method = styled.div`
  display: flex;
  align-items: center;
  background-color: #ededed;
  color: #374151;
  letter-spacing: 0.01em;
  font-size: 12px;
  height: 23px;
  font-weight: 600;
  padding: 4px 6px;
  border-radius: 3px;
`

const Title = styled.span`
  margin-left: 8px !important;
  font-size: 13px;
  line-height: 28px;
  color: #111827;
  font-weight: 500;
`

const Path = styled.span`
  margin-left: 8px !important;
  font-size: 13px;
  line-height: 28px;
  color: #a1a1aa;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${down('md')} {
    display: none;
  }
`

export default { Container, InlineContainer, LeftPart, Method, Title, Path }
