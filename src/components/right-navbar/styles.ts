import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'

type StickyContainerProps = {
  top_offset: string
}

export const StickyContainer = styled.div<StickyContainerProps>`
  position: fixed;
  top: ${({ top_offset }) => top_offset};
  right: 58px;
  z-index: 100;

  ${down('lg')} {
    right: 25px;
  }
  ${down('sm')} {
    left: 10%;
    top: 10px;
    z-index: 10;
  }

  a {
    text-decoration: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* transform: scale(1.1); */
  align-items: flex-end;
  gap: 20px;

  ${({ isBlog }: any) => isBlog && `
    justify-content: space-between;
    align-items: flex-start;
`}


  ${down('sm')} {
    flex-direction: row;
  }

`
