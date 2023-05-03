import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { down } from 'styled-breakpoints'
import styled from 'styled-components'

const Container = styled.div<{ sticky: boolean }>`
  position: ${(props) => (props.sticky ? 'fixed' : 'relative')};
  top: ${(props) => (props.sticky ? '16px' : '')};
  display: flex;
  align-items: center;
  z-index: 1;
  gap: 30px;
  cursor: default;
`

const LeftContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 42px;
  background: rgba(240, 240, 240, 0.8);
  backdrop-filter: blur(6px);
  border-radius: 22px;
  border: #dfdfdf 1px solid;
  overflow: hidden;

  ${down('sm')} {
    display: none;
    visibility: hidden;
  }
`

const ItemFlashlight = styled(motion.div)`
  position: absolute;
  background: black;
  height: 70px;
  width: 70px;
  background: linear-gradient(244.61deg, rgba(114, 114, 114, 0.3) 4.5%, rgba(114, 114, 114, 0) 44.24%, rgba(114, 114, 114, 0.3) 89.28%);
  /* background: rgba(114, 114, 114, 0.15); */
  filter: blur(10px);
  border-radius: 100px;
  pointer-events: none;
  overflow: hidden;
`

const ItemHighlight = styled(motion.div)`
  position: absolute;
  background: black;
  height: 42px;
  width: 50px;
  background: linear-gradient(244.61deg, rgba(114, 114, 114, 0.3) 25%, rgba(114, 114, 114, 0) 44.24%, rgba(114, 114, 114, 0.3) 89.28%);
  filter: blur(3px);
  border-radius: 100px;
  pointer-events: none;
`

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled(NextLink)`
  .active {
    div {
      color: red;
    }
  }
`
const Item = styled.div`
  color: #a5a5a5;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  font-weight: 500;
  line-height: auto;
  font-size: 14px;

  transition: color 100ms ease-out;
  &.active {
    color: #111827;
  }
  :hover {
    color: #111827;
  }
`

export default { Container, LeftContainer, ItemContainer, Item, Link, ItemFlashlight, ItemHighlight }
