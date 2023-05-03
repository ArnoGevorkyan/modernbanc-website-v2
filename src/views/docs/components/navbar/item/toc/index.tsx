import { TableOfContentsNodes } from '~/views/docs/utils'
import TableOfContentsItem from './item'
import * as S from './styles'

type TTableOfContentsContainerProps = {
  nodes: TableOfContentsNodes
  current_slug?: string
  level?: number
}

export function TableOfContentsContainer({ nodes, current_slug, level }: TTableOfContentsContainerProps) {
  return (
    <S.Container>
      {nodes.map((node) => (
        <TableOfContentsItem key={node.path} node={node} current_slug={current_slug} level={level} />
      ))}
    </S.Container>
  )
}
