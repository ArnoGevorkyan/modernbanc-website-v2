import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { getNextNavigationNode, getPreviousNavigationNode, findNavigationNode, FLAT_NAV } from '~/navigation/docs'
import { useRouter } from 'next/router'
import { docs_navivation_nodes } from '~/navigation/docs'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: fit-content;
  & > * {
    margin: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const LeftLink = styled.div`
  display: inline-block;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: #000;
  }
`

const RightLink = styled.div`
  display: inline-block;
`

export const FooterNavigation: React.FC = () => {
  const router = useRouter()
  console.log(`router.pathname: ${router.pathname}`)
  console.log(`router.pathname.slice(6): ${router.pathname.slice(6)}`)
  console.log(`FLAT_NAV: ${JSON.stringify(FLAT_NAV)}`)
  let current_node
  let prev_node
  let next_node

  useEffect(() => {
    console.log(`router.pathname: ${router.pathname}`)
    console.log(`router.pathname.slice(6): ${router.pathname.slice(6)}`)
    console.log(`FLAT_NAV: ${JSON.stringify(FLAT_NAV)}`)
    // current_node  = FLAT_NAV[FLAT_NAV.findIndex((node) => node.path === router.pathname.slice(6))]
    if (current_node) {
      const current_node_index = FLAT_NAV.indexOf(current_node)
      if (current_node_index > 0) {
        prev_node = FLAT_NAV[current_node_index - 1]
      } else {
        prev_node = undefined
      }

      if (current_node_index < FLAT_NAV.length - 1) {
        next_node = FLAT_NAV[current_node_index + 1]
      } else {
        next_node = undefined
      }
    }
  }, [current_node])

  useEffect(() => {
    current_node = FLAT_NAV[FLAT_NAV.findIndex((node) => node.path === router.pathname.slice(6))]
  }, [])
  console.log(`current_node: ${JSON.stringify(current_node)}`)
  console.log(`prev_node: ${JSON.stringify(prev_node)}`)
  console.log(`next_node: ${JSON.stringify(next_node)}`)

  return (
    <>
      {current_node !== undefined ? current_node.title : 'undefined'}
      {prev_node !== undefined ? prev_node.title : 'undefined'}
      {next_node !== undefined ? next_node.title : 'undefined'}

      <Container>
        {prev_node !== undefined ?? (
          <>
            <LeftLink>
              <ChevronLeftIcon />
              {prev_node.title}
            </LeftLink>
          </>
        )}
        {next_node !== undefined ?? (
          <>
            <RightLink>
              <ChevronRightIcon />
              <span>{next_node.title}</span>
            </RightLink>
          </>
        )}
      </Container>
    </>
  )
}

export default FooterNavigation
