import styled from 'styled-components'
import { down } from 'styled-breakpoints'

const Container = styled.svg.attrs((props: { width: string; height: string; viewBox: string; fill: string; xmlns: string;}) => props)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  ${down('xxl')} {
    top: -80px;
  }
  ${down('sm')} {
    top: -100px;
    width: 864px;
    height: 625px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`
const BlurMask = styled.div`
  width: 100%;
  height: 100%;
`

export default { Container, BlurMask }
