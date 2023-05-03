import { TableOfContentsNode } from '~/views/docs/utils'
import { HTMLProps } from '../types'
import { AnchorLink } from './anchor-link'

type THeader1Props = HTMLProps<HTMLHeadingElement> & { node?: TableOfContentsNode }

export const Header1 = ({ id, children, node, ...rest }: THeader1Props) => {
  return (
    <h1 id={node?.slug} {...rest}>
      {node && <AnchorLink href={node.path} type={'h1'} />}
      {children}
    </h1>
  )
}
