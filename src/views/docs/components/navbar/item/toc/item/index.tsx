import { TableOfContentsNode } from '~/views/docs/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useUrlHash } from './hooks'
import * as S from './styles'

type TTableOfContentsItemProps = {
  node: TableOfContentsNode
  current_slug?: string
  level?: number
  onClick?: () => void
}

export default function TableOfContentsItem({ node, level = 0, onClick, current_slug }: TTableOfContentsItemProps) {
  const [is_active, setIsActive] = useState(false)
  const hash = useUrlHash()

  useEffect(() => {
    const hash_matches = hash?.endsWith(node.path)
    const scrolled_slug_matches = node.slug === current_slug
    setIsActive(scrolled_slug_matches)
  }, [hash, current_slug])

  return (
    <S.Container key={node.title}>
      {/* ideally link will use node.path since I don't like ## accounts using #accounts as link but we'll solve it later */}
      <Link href={node.path}>
        <S.Button level={level} onClick={onClick} className={is_active ? 'is_active' : undefined}>
          <a>{node.title}</a>
        </S.Button>
      </Link>
      {node.children && (
        <S.ChildrenContainer>
          {node.children.map((child) => (
            <TableOfContentsItem level={level + 1} key={child.path} node={child} current_slug={current_slug} />

          ))}
        </S.ChildrenContainer>
      )}
    </S.Container>
  )
}
