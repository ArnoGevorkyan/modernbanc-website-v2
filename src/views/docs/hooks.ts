import { useCallback, useEffect, useState } from 'react'
import { TableOfContentsNodes } from '~/views/docs/utils'

type TNodePosition = { slug: string; top: number }

export function useCurrentTableOfContentsNode(nodes: TableOfContentsNodes): string | undefined {
  let [current_slug, setCurrentSlug] = useState<string | undefined>(nodes[0]?.slug)

  let getNodePositionsInCurrentDocument = useCallback((nodes: TableOfContentsNodes): TNodePosition[] => {
    const slugs = nodes.flatMap((node) => [node.slug, ...(node.children ?? []).map((child) => child.slug)])
    let positions: TNodePosition[] = []
    for (const slug of slugs) {
      let el = document.getElementById(slug)
      if (!el) break

      let style = window.getComputedStyle(el)
      let scrollMt = parseFloat(style.scrollMarginTop)

      let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
      positions.push({ slug, top })
    }
    return positions
  }, [])

  useEffect(() => {
    if (nodes.length === 0) return
    let node_positions = getNodePositionsInCurrentDocument(nodes).filter((heading) => heading !== undefined)
    function onScroll() {
      let scroll_y_position = window.scrollY
      let current_slug = node_positions[0]?.slug
      for (let node of node_positions) {
        if (scroll_y_position >= node.top - 20) {
          current_slug = node.slug
        } else {
          break
        }
      }
      setCurrentSlug(current_slug)
    }
    window.addEventListener('scroll', onScroll, {
      passive: true
    })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, {
        // passive: true
        capture: true
      })
    }
  }, [getNodePositionsInCurrentDocument, nodes])

  return current_slug
}
