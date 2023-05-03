import { TDocsNavigationNode } from '~/navigation/docs'
import { TableOfContentsNodes } from '~/views/docs/utils'
import { Collapse } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Toggle } from './toggle'
import * as S from './styles'
import { TableOfContentsContainer } from './toc'

type TNavbarItemProps = {
  node: TDocsNavigationNode
  // This is active page's TOC, not necessarily *this* item's table of contents. We just pass via prop drill.
  current_page: {
    toc_nodes: TableOfContentsNodes
    current_toc_slug?: string
  }
  prefix_path?: string
  level?: number
  setClose?: boolean
  onClick?: () => void
  onLinkSelection?: () => void
}

export default function NavbarItem({ node, level = 0, prefix_path = '/docs', onClick, current_page, onLinkSelection }: TNavbarItemProps) {
  const full_node_path = prefix_path + (node.path ? '/' + node.path : '')
  const external = node.external !== undefined ? node.external : false
  const [is_open, setIsOpen] = useState(false)
  const [is_active, setIsActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const active = router.pathname === full_node_path
    const one_of_children_is_open = router.pathname.startsWith(full_node_path)
    setIsActive(active)
    if (active || one_of_children_is_open) setIsOpen(true)
  }, [router.pathname])

  const has_child_items = node.children && node.children.length > 0
  const has_table_of_contents = is_active && current_page.toc_nodes.length > 0
  const should_have_collapse = has_child_items || has_table_of_contents

  return (
    <S.Container key={node.title}>
      <Link href={external ? node.path : full_node_path}>
        <S.Button level={level} onClick={onClick} className={is_active ? 'is_active' : undefined}>
          <a>{node.title}</a>
          <Toggle
            icon={node.icon}
            is_open={is_open}
            should_have_collapse={should_have_collapse}
            onClick={(e) => {
              if (has_child_items) {
                e.stopPropagation()
                setIsOpen((v) => !v)
              } else if (has_table_of_contents) {
                e.stopPropagation()
                setIsOpen((v) => !v)
              }
            }}
          />
        </S.Button>
      </Link>
      {should_have_collapse && (
        <Collapse in={is_open}>
          {has_child_items ? (
            <S.ChildrenItemsContainer level={level}>
              {node.children?.map((child) => (
                <NavbarItem
                  current_page={current_page}
                  onClick={onClick}
                  level={level + 1}
                  key={child.path}
                  node={child}
                  prefix_path={prefix_path + '/' + node.path}
                />
              ))}
            </S.ChildrenItemsContainer>
          ) : (
            <TableOfContentsContainer nodes={current_page.toc_nodes} current_slug={current_page.current_toc_slug} level={level + 1}/>
          )}
        </Collapse>
      )}
    </S.Container>
  )
}
