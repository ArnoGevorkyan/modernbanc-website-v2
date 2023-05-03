import { HTMLProps } from './types'

type TCodeProps = HTMLProps<any>

export const Code = (props: TCodeProps) => {
  return <pre style={{ color: 'pink' }} {...props}></pre>
}
