import { HEADER_HEIGHT } from '~/styles/shared'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'
import { ScrollArea as MantineScrollArea } from '@mantine/core'
import { CustomDashedBorder } from '~/components/custom-dashed-border'

export const NAVBAR_WIDTH = 350
export const NAVBAR_BREAKPOINT = 992

export const Container = styled.nav`
  width: ${NAVBAR_WIDTH}px;
  position: sticky;
  align-self: flex-start;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  flex-shrink: 0;
  display: block;
  overflow: visible;

  ${down('lg')} {
    background: #fafafa;
  }

  ${down('lg')} {
    width: 100vw;
    display: none;
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    &.is_open {
      display: block;
    }
  }
`

export const FixedDashedBorder = styled(CustomDashedBorder)`
  display: fixed;
`

export const ScrollArea = styled(MantineScrollArea)`
  display: block;
  height: 100vh;
  flex-shrink: 0;
  margin-right: 30px;

  & > div {
    padding-top: 110px;
    ${down('lg')} {
      padding-top: 30;
      width: 100vw;
    }
  }
`
export const Content = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  display: block;

  ${down('lg')} {
    margin-top: ${HEADER_HEIGHT + 25}px;
  }
`

export const TopStickyContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 30px;
  ${down('lg')} {
    top: 20px;
  }
  position: sticky;
  z-index: 12;
  margin-left: 30px;
`

export const TopStickySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
`

export const GradientSpacer = styled.div`
  height: 30px;
  opacity: 1;
  background-image: linear-gradient(to bottom, #f5f5f5, rgba(245, 245, 245, 0));
  margin-right: 30px;
`

export const TopWrapper = styled.div`
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  ${down('lg')} {
    display: 'none';
    margin-bottom: 0;
  }
`

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`
