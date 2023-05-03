import PackageIcon from '~/images/package-red.svg'
import Image from 'next/image'
/**
 * @path - if external is false it's docs path (e.g /docs/accounts),
 *         if external = false it acts as full url (e.g https://google.com)
 */
export type TDocsNavigationNode = {
  title: string
  path: string
  external?: boolean
  icon?: JSX.Element
  children?: TDocsNavigationNode[]
}

export const docs_navivation_nodes: TDocsNavigationNode[] = [
  {
    title: 'Welcome',
    path: ''
  },
  {
    title: 'Quickstart',
    path: 'quickstart',
    children: [
      {
        title: 'Accounts and Transactions',
        path: 'accounts-and-transactions'
      },
      {
        title: 'Workflows',
        path: 'workflows'
      },
      {
        title: 'Creating a smart-checkout',
        path: 'creditcard-to-provider'
      }
    ]
  },
  {
    title: 'API',
    path: 'api',
    children: [
      {
        title: 'Responses',
        path: 'responses'
      },
      {
        title: 'Authentication',
        path: 'authentication'
      },
      {
        title: 'Pagination',
        path: 'pagination'
      },
      {
        title: 'Include',
        path: 'include'
      },
      {
        title: 'Filters',
        path: 'filters'
      },
      {
        title: 'Idempotency',
        path: 'idempotency'
      }
    ]
  },
  {
    title: 'Workspace',
    path: 'workspace',
    children: [
      {
        title: 'Accounts',
        path: 'accounts'
      },
      {
        title: 'Units',
        path: 'units'
      },
      {
        title: 'Balances',
        path: 'balances'
      },
      {
        title: 'Routes',
        path: 'routes'
      },
      {
        title: 'Definitions',
        path: 'definitions'
      },
      {
        title: 'Transactions',
        path: 'transactions'
      },
      {
        title: 'Triggers',
        path: 'triggers'
      },
      {
        title: 'Workflows',
        path: 'workflows'
      },
      {
        title: 'Connections',
        path: 'connections'
      },
      {
        title: 'Entities',
        path: 'entities'
      },
      {
        title: 'Variables',
        path: 'variables'
      },
      {
        title: 'Resources',
        path: 'resources'
      }
    ]
  },
  {
    title: 'Secrets',
    path: 'secrets',
    children: [
      {
        title: 'Endpoints',
        path: 'endpoints'
      },
      {
        title: '@modernbanc/js',
        path: 'modernbanc-js'
      },
      {
        title: '@modernbanc/react',
        path: 'modernbanc-react'
      },
      {
        title: 'modernbanc-ios',
        path: 'modernbanc-ios'
      },
      {
        title: 'modernbanc-android',
        path: 'modernbanc-android'
      }
    ]
  },
  {
    path: 'formulas',
    title: 'Formulas'
  }
]

/**
 * Traverses through nodes tree until it finds the one that matches path.
 * I.e findNode('welcome/accounts', [{ title: 'Welcome' path: 'welcome', children: [ { title: 'Accounts', path: 'accounts' } ]}])
 * Will return { title: 'Accounts', path: 'accounts' }
 * @param path
 * @param nodes
 * @returns TDocsNavigationNode
 */
export function findNavigationNode(path: string, nodes: TDocsNavigationNode[]): TDocsNavigationNode | undefined {
  const prefix_to_remove = '/docs'
  if (path.startsWith(prefix_to_remove)) path = path.substring(prefix_to_remove.length)
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    if (path === node.path) return node
    if (path.startsWith(nodes[i].path)) {
      path = path.substring(1) // remove first /
      const deeper_path = path.substring(path.indexOf('/') + 1)
      if (deeper_path && node.children) {
        return findNavigationNode(deeper_path, node.children)
      }
    }
  }
}

/**
 * Given the current path, it returns the previous navigation node.
 * @param current_path
 * @param nodes
 * @returns TDocsNavigationNode
 */
export function getPreviousNavigationNode(current_path: string, nodes: TDocsNavigationNode[]): TDocsNavigationNode | undefined {
  const current_node = findNavigationNode(current_path, nodes)
  if (!current_node) return undefined
  const current_node_index = nodes.indexOf(current_node)
  if (current_node_index > 0) {
    return nodes[current_node_index - 1]
  }
  return undefined
}

/**
 * Given the current path, it returns the next navigation node.
 * @param current_path
 * @param nodes
 * @returns TDocsNavigationNode
 */
export function getNextNavigationNode(current_path: string, nodes: TDocsNavigationNode[]): TDocsNavigationNode | undefined {
  const current_node = findNavigationNode(current_path, nodes)
  if (!current_node) return undefined
  const current_node_index = nodes.indexOf(current_node)
  if (current_node_index < nodes.length - 1) {
    return nodes[current_node_index + 1]
  }
  return undefined
}

export type TFlatNavigationNode = {
  title: string
  path: string
}
/**
 * Flatten the navigation tree into a single array.
 * Return an array of objects with just title and path.
 * @param nodes
 */
export function flattenNavigationTree(nodes: TDocsNavigationNode[]): TFlatNavigationNode[] {
  let flat_nav: TFlatNavigationNode[] = []
  nodes.forEach((node) => {
    flat_nav.push({ title: node.title, path: node.path })
    if (node.children) {
      flat_nav = flat_nav.concat(flattenNavigationTree(node.children))
    }
  })
  return flat_nav
}

export const FLAT_NAV: TFlatNavigationNode[] = flattenNavigationTree(docs_navivation_nodes)
