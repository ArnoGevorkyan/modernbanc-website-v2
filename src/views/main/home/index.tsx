import { useEffect, useRef, useState } from 'react'
import { Toaster } from 'sonner'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { TPageProps } from '~/pages/_app'
import { Perspective } from './background/perspective'
import BottomSection from './bottom-section'
import Computer from './computer'
import ProductSection from './product-section'
import SolutionsSection from './solutions-section'
import Selectors from './selectors'
import InfoBlock from './info-block'
import QuoteBlock from './quote-block'
import InfoSection from './info-section'
import * as S from './styles'

import { YC } from './icons'
import NavigationMenu from './navbar/navbar.comp'
import MainButton from './main-button'
import RequestAccessDialog from './request-access-dialog/request-access-dialog.comp'


const Home = (props: TPageProps) => {
  const is_mobile = useBreakpoint(down('sm'))

  const [isSticky, setIsSticky] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const [startingNavTopPosition, setStartingNavTopPosition] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [is_open, setIsOpen] = useState(false)

  const home_ref = useRef<HTMLDivElement>(null)
  const products_ref = useRef<HTMLDivElement>(null)
  const solutions_ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true
    })

    /* First remember initial position */
    if (navRef.current) {
      const stickyContainerTop = navRef.current.offsetTop
      setStartingNavTopPosition(stickyContainerTop)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // check check if we're scrolled beyond wanted threshold for sticky
  useEffect(() => {
    setIsSticky(scrollPosition > startingNavTopPosition)
  }, [scrollPosition, startingNavTopPosition])

  return (
    <S.Container ref={home_ref}>
      <Toaster
        position="top-center"
        duration={10000}
        toastOptions={{
          style: {
            background:
              'linear-gradient(239.5deg,rgba(197, 197, 197, 0.5) -1.38%,rgba(197, 197, 197, 0.15) 13.8%,rgba(197, 197, 197, 0) 41.3%,rgba(197, 197, 197, 0.15) 89.67%), #F0f0f0',
            backdropFilter: 'blur(25px)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
            borderRadius: '12px'
          }
        }}
      />
      <Perspective />
      <S.Section id="modernbanc">

        <S.Title><S.TitleDecor>All-in-one</S.TitleDecor> financial platform.</S.Title>
        <S.Subtitle>
          <span>A system of record and suite</span> of modules to power all your financial, accounting and payments activity.
        </S.Subtitle>
      </S.Section>

      <RequestAccessDialog is_open={is_open} setIsOpen={setIsOpen} trigger={<MainButton onClick={() => setIsOpen(true)} title="Request access" />} />

      <Selectors/>
      <InfoBlock>
        <RequestAccessDialog is_open={is_open} setIsOpen={setIsOpen} trigger={<MainButton onClick={() => setIsOpen(true)} title="Request access" />} />
      </InfoBlock>

      <QuoteBlock text="Building is never just one-and-done. You always need to find ways to improve. Modernbanc is central to how we do that at Y Combinator." name="Julian Torres" position="CEO at Ontop" image="/avatar.png" />

      <InfoSection>
        <RequestAccessDialog is_open={is_open} setIsOpen={setIsOpen} trigger={<MainButton onClick={() => setIsOpen(true)} title="Request access" />} />
      </InfoSection>

      {/* <div style={{ marginTop: '35px' }}>
        <YC />
      </div> */}

      {/* <ProductSection inner_ref={products_ref} /> */}
      {/* <SolutionsSection inner_ref={solutions_ref} />  */}
      <BottomSection />
    </S.Container>
  )
}

export default Home
