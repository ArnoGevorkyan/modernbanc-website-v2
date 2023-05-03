import React from "react"
import styled from "styled-components"
import { useRouter } from "next/router"
import FooterNavigation from "./footer-navigation"
import FooterSocials from "./footer-socials"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding-bottom: 65px;
`

const FooterDivider = styled.div`
  width: 90%;
  height: 1px;
  background-color: lightgray;
`

export const Footer: React.FC = () => {

  return (
    <>
      <Container>
        <FooterDivider />
        <FooterNavigation />
        <FooterSocials />
      </Container>
    </>
  )
}

export default Footer
