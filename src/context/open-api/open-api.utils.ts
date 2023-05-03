import { OpenApiParser } from '@open-api-parser/index'
import { getEndpointSnippets } from 'openapi-snippet'
import { Language } from 'prism-react-renderer'

export const targets = ['shell_curl', 'node_request', 'go_native', 'python_python3'] as const
export type TTarget = typeof targets[number]

export const target_languages: Record<TTarget, Language> = {
  go_native: 'go',
  node_request: 'javascript',
  python_python3: 'python',
  shell_curl: 'bash'
}

export const friendly_target_names: Record<TTarget, string> = {
  go_native: 'Go',
  node_request: 'Node.js',
  python_python3: 'Python',
  shell_curl: 'Curl'
}

export type TSnippet = { id: TTarget; title: string; content: string }
export type TEnrichedSnippet = TSnippet & { language: Language; friendly_target_name: string }

export function generateRequestSnippets(parser: OpenApiParser, path: string, method: string) {
  const result = getEndpointSnippets(parser.original_document, path, method, targets)
  const snippets: TSnippet[] = result.snippets
  const enriched_snippets: TEnrichedSnippet[] = snippets.map((snippet) => ({
    ...snippet,
    language: target_languages[snippet.id],
    friendly_target_name: friendly_target_names[snippet.id]
  }))
  return enriched_snippets
}
