import styled from 'styled-components'

const Button = styled.button`
  height: 32px;
  border-radius: 2px;
  color: #a1a1aa;
  background-color: #f4f4f4 !important;
  border: 1px solid #ebebeb;
  /* width: 90%; */
  padding-left: 8px;
  padding-right: 8px;
  transition: 100ms ease-in-out;
  :hover {
    background-color: #ededed !important;
  }
  margin-right: 30px;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LeftPart = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.span`
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: #a1a1aa;
`

const Hotkey = styled.span`
  height: 21px;
  padding: 4px 6px;
  background: #ebebeb;
  border-radius: 4px;
  font-size: 11px;
  line-height: 13px;
  font-weight: 500;
  color: #374151;
  text-align: center;
`

export default { Container, LeftPart, Button, Title, Hotkey }
