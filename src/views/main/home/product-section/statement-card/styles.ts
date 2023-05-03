import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 0px 10px;
  gap: 6px;
  width: 100%;
  max-width: 376px;
  border: 1px solid #e4e4e4;
  border-radius: 2px;
`

export const IconContainer = styled.div`
  display: flex;
  width: 24px;
  height: 100%;
  justify-content: center;
  padding: 15px 0;
`

export const IconSubContainer = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  gap: 6px;
`

export const Title = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  white-space: nowrap;
  color: #111827;
`

export const Description = styled.div`
  width: 100%;
  color: #71717a;
`
