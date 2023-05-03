import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100% !important;
  height: 36px;
  border-radius: 4;
  background-color: #f4f4f4;
  border: 1px solid #ebebeb;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 100ms ease-in-out;
  :hover {
    box-shadow: 0px 0px 8px rgba(110, 121, 214, 0.15);
  }
`

const Title = styled.span`
  margin-left: 8px !important;
  font-size: 13px;
  line-height: 28px;
  color: #111827;
  font-weight: 500;
`

const Description = styled.span`
  margin-left: 8px !important;
  font-size: 13px;
  line-height: 28px;
  color: #a1a1aa;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default { Container, Title, Description }
