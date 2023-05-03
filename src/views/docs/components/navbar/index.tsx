import ModernbancLogo from '~/components/modernbanc-logo'
import SearchButton from './search-button'
import { docs_navivation_nodes } from '~/navigation/docs'
import NavbarItem from './item'
import * as S from './styles'
import { TableOfContentsNodes } from '~/views/docs/utils'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import { down } from 'styled-breakpoints'

export interface NavbarProps {
  is_open: boolean
  current_page: {
    toc_nodes: TableOfContentsNodes
    current_toc_slug?: string
  }
  onLinkSelection(): void
}

export function DocsNavbar({ is_open, onLinkSelection, current_page }: NavbarProps) {
  const is_mobile = useBreakpoint(down('lg'))

  return (
    <S.Container className={is_open ? 'is_open' : undefined}>
      <S.ScrollArea type="scroll">
        <S.NavContent>
          {docs_navivation_nodes.map((node) => (
            <NavbarItem current_page={current_page} key={node.path} node={node} onClick={onLinkSelection} />
          ))}
        </S.NavContent>
      </S.ScrollArea>
    </S.Container>
  )
}
