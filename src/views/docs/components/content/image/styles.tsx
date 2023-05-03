import styled from 'styled-components'
import { default as NextImage } from 'next/future/image'

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`
export const ImageContainer = styled.div<{ max_height?: string }>`
  width: 100%;
  background-color: #f6f6f6;
  border-radius: 6px;
  border: #eaeaea 1px solid;
  img {
    max-height: ${({ max_height }) => max_height ?? 'none'};
  }
`
export const Image = styled(NextImage)`
  width: 100%;
  object-fit: scale-down;
  text-decoration: none;
  user-select: none;
  transition: width 0.4s ease;
`
export const Header = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  > * + * {
    margin-left: 8px;
  }
`
export const Title = styled.span`
  color: #111827;
`
export const Description = styled.span`
  color: #a1a1aa;
`
