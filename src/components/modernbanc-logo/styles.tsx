import styled from 'styled-components'
import Image from 'next/image'

export const Wrapper = styled.a`
  height: 24.65px;
  cursor: pointer;
`

export const Logo = styled(Image)`
  text-decoration: none;
  user-select: none;
  transition: width 0.4s ease;
  color: white;
  .dark {
    color: #3d3d3d;
  }
`
