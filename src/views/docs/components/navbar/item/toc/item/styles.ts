import styled from 'styled-components'

export const Container = styled.div.attrs((props: { level: number }) => props)`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button.attrs((props: { level: number }) => props)`
  display: flex;
  flex-direction: row;
  font-family: 'Inter';
  align-items: center;
  text-decoration: none;
  height: 40px;
  width: 100%;
  color: #a1a1aa;
  font-size: 14px;
  line-height: 155%;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    color: #111827;
    transition: color 0.5s ease;
  }

  /* padding-left: 60px; */
  padding-left: ${(props) => (props.level * 30) + 30 + 2}px;
  padding-left: ${(props) => (
    props.level === 0 ? 0 :
    props.level === 1 ? 30 :
    props.level === 2 ? 60 :
    props.level === 3 ? 72 :
    props.level === 4 ? 84 :
    0
  ) + 32}px;

  /* border: 1px solid red; */

`

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
`