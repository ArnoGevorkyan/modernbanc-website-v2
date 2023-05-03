import { slugifyWithCounter } from '@sindresorhus/slugify'

export type TableOfContentsNodeType = 'h1' | 'h2'

export type TableOfContentsNode = {
  slug: string // e.g getting-started
  path: string // e.g #getting-started
  type: TableOfContentsNodeType
  title: string
  children?: TableOfContentsNode[]
}
export type TableOfContentsNodes = TableOfContentsNode[]

export const matchHeadersRegex = (): RegExp => {
  const [h1_l, h1_r] = ['<h1>', '</h1>']
  const [h2_l, h2_r] = ['<h2>', '</h2>']
  const anything = '.*?'
  const regex = `(?:${h1_l})(${anything})(?:${h1_r})|(?:${h2_l})(${anything})(?:${h2_r})`
  return new RegExp(regex, 'g')
}

export function generateTableOfContentsNodes(page_content: string, slugify = slugifyWithCounter()): TableOfContentsNodes {
  const regex = matchHeadersRegex()
  const matches = [...page_content.matchAll(regex)]
  const nodes: TableOfContentsNode[] = []
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i]
    const full_text = match[0]
    const type = getNodeType(full_text)
    const matched_text = type === 'h1' ? match[1] : match[2]
    const slug = slugify(matched_text)
    const path = generateNodePath(slug, type)
    const node: TableOfContentsNode = {
      type,
      title: matched_text,
      slug,
      path
    }

    nodes.push(node)

    if (type === 'h1') {
      // Let's see if there are any h2's inside
      for (let j = i + 1; j < matches.length; j++) {
        const match = matches[j]
        const slugify = slugifyWithCounter()
        const full_text = match[0]
        const matched_text = match[2]
        const type = getNodeType(full_text)
        if (type === 'h1') {
          break
        } else {
          const slug = slugify(matched_text)
          const path = generateNodePath(slug, type)
          const child_node: TableOfContentsNode = {
            type,
            title: matched_text,
            slug,
            path
          }
          node.children ? node.children.push(child_node) : (node.children = [child_node])
          matches.splice(j, 1)
          j = j - 1
        }
      }
    }
  }
  return nodes
}

function getNodeType(full_text: string): TableOfContentsNodeType {
  // Can later add support for tabs, toggles, etc.
  return full_text.startsWith('<h1') ? 'h1' : 'h2'
}

export function generateNodePath(slug: string, type: TableOfContentsNodeType): string {
  // const prefix = type === 'h1' ? '#' : '##'
  return '#' + slug
}

export function findTocNode(path: string, nodes: TableOfContentsNodes): TableOfContentsNode | undefined {
  // Can later add support for tabs, toggles, etc by supporting nested slugs, e.g #Getting-started##Accounts
  const flattened_nodes = nodes.flatMap((node) => [node, ...(node.children ?? [])])
  for (const node of flattened_nodes) {
    if (node.path === path) return node
  }
}
