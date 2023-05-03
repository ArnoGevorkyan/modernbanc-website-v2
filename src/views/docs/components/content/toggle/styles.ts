import ArrowRight from '~/components/icons/arrow-right'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`

const TopSubContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 28px;
`

const Arrow = styled(ArrowRight)`
  transform: rotate(90deg) !important;
  transition: all 200ms ease-out;
  fill: #cdcdcd;
  & .is_open {
    transform: rotate(0deg) !important;
  }
`

const Title = styled.p`
  font-weight: 500 !important;
  padding: 0 !important;
`

const Subtitle = styled.p`
  font-weight: 500 !important;
  padding: 0 !important;
  color: #a1a1aa !important;
  font-size: 14px !important;
  margin-left: 5px;
`

const Pill = styled.div`
  background: #f2f2f2;
  border: 1px solid #e6e6e6;
  padding: 0px 2px;
  border-radius: 4px;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 500;
  color: #a1a1aa;
`

export default { Container, TopSubContainer, IconContainer, Title, Arrow, Subtitle, Pill }
