import { TableOfContentsNode } from '~/views/docs/utils'
import { HTMLProps } from '../types'
import { AnchorLink } from './anchor-link'

type THeader2Props = HTMLProps<HTMLHeadingElement> & { node?: TableOfContentsNode }

export const Header2 = ({ id, children, node, ...rest }: THeader2Props) => {
  return (
    <h2 id={node?.slug} {...rest}>
      {node && <AnchorLink href={node.path} type={'h2'} />}
      {children}
    </h2>
  )
}
