import { useEffect, useState } from 'react'
import RequestAccessButton from './request-access-button'
import DocsButton from './docs-button'
import HomeButton from './home-button'
import * as S from './styles'

export default function RightNav() {
  /* or calculate dynamically based on number of buttons since they're fixed height */
  const button_container_height: number = 184
  const [top_offset, setTopOffset] = useState(`calc(50% - ${button_container_height / 2}px)`)
  const minimum_top_offset = 54

  const handleScroll = () => {
    const screen_height = window.innerHeight
    const position = window.pageYOffset
    const threshold = screen_height / 2 - button_container_height / 2 - minimum_top_offset
    if (window.pageYOffset >= threshold) {
      setTopOffset(`${minimum_top_offset}px`)
    } else {
      const new_top_offset = screen_height / 2 - button_container_height / 2 - position
      setTopOffset(`${new_top_offset}px`)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <S.StickyContainer top_offset={top_offset}>
      <S.ButtonContainer>
        <HomeButton />
        <RequestAccessButton />
        <DocsButton />
      </S.ButtonContainer>
    </S.StickyContainer>
  )
}
