import { useMotionValue } from 'framer-motion'
import { forwardRef, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { useUrlHash } from '~/views/docs/components/navbar/item/toc/item/hooks'
import MainButton from '../main-button'
import RequestAccessDialog from '../request-access-dialog/request-access-dialog.comp'
import S from './navbar.styles'

type TItem = {
  title: string
  ref: RefObject<HTMLDivElement>
}

type TNavigationMenuProps = {
  items: TItem[]
  sticky: boolean
}

const NavigationMenu = forwardRef<HTMLDivElement, TNavigationMenuProps>(({ sticky, items }, ref) => {
  const is_mobile = useBreakpoint(down('sm'))
  const [is_open, setIsOpen] = useState(false)
  const [active_item, setActiveItem] = useState<TItem>(items[0])
  const [higlight_position, setHighlightPosition] = useState(0)
  const [flashlight_position, setFlashlightPosition] = useState(0)
  const [active_item_width, setActiveItemWidth] = useState(0)
  const container_ref = useRef<HTMLDivElement>(null)
  const items_ref = useRef<HTMLDivElement[]>([])

  const x = useMotionValue(200)
  const y = useMotionValue(200)
  function handleMouse(event: MouseEvent) {
    x.set(event.pageX)
    y.set(event.pageY)
  }

  useEffect(() => {
    const items_container = container_ref.current
    if (!items_container || !items_ref.current.length) return
    const index = items.indexOf(active_item)
    const active_item_element = items_ref.current[index]
    if (!active_item_element) return
    setFlashlightPosition(active_item_element.offsetLeft)
    setHighlightPosition(active_item_element.offsetLeft)
    setActiveItemWidth(active_item_element.clientWidth)
  }, [items_ref, active_item])

  function itemIsActive(item: TItem) {
    return item.title === active_item.title
  }

  const handleScroll = () => {
    for (let i = 0; i < items.length; i++) {
      const index = items.length - 1 - i
      const item = items[index]
      const element = item.ref.current
      if (!element) continue
      if (window.pageYOffset >= element.offsetTop) {
        setActiveItem(item)
        return
      }
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [active_item])

  return (
    <S.Container ref={ref} sticky={sticky}>
      {/* {!is_mobile && (
        <S.LeftContainer
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            x.set(event.clientX - rect.left - 35)
            y.set(event.clientY - rect.top - 17.5)
          }}
        >
          <S.ItemHighlight initial={false} animate={{ left: flashlight_position, width: active_item_width }} />
          <S.ItemFlashlight initial={false} style={{ x: x, y: y }} />
          <S.ItemContainer ref={container_ref}>
            {items.map((item, idx) => {
              return (
                <S.Item
                  key={idx}
                  ref={(el) => {
                    if (el) items_ref.current[idx] = el
                  }}
                  className={itemIsActive(item) ? 'active' : undefined}
                  onClick={() => item.ref.current?.scrollIntoView()}
                >
                  {item.title}
                </S.Item>
              )
            })}
          </S.ItemContainer>
        </S.LeftContainer>
      )} */}

      <RequestAccessDialog is_open={is_open} setIsOpen={setIsOpen} trigger={<MainButton onClick={() => setIsOpen(true)} title="Request access" />} />
    </S.Container>
  )
})

export default NavigationMenu
