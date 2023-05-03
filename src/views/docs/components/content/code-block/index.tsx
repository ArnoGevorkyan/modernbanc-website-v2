import * as S from './styles'
import CodeTabSelect, { TCodeTab } from './tab-select'
import CopyButton from '../copy-button/index'
import { UIDConsumer } from 'react-uid'
import { CSSProperties } from 'react'

export type TCodeBlock = {
  title?: string
  children?: React.ReactNode
  code?: string // not to display, but to override copy value on copy button click.
  tabs?: {
    all: TCodeTab[]
    current_tab_id: string
    setCurrentTabId: (id: string) => void
  }
  style?: CSSProperties
}

export function CodeBlock(props: TCodeBlock) {
  const { title, tabs, code, style } = props

  function getReactNodeTextById(id: string) {
    return document.getElementById(id)?.textContent ?? ''
  }
  return (
    <S.Container style={style}>
      <UIDConsumer>
        {(id) => (
          <>
            <S.Header>
              <S.HeaderLeftPart>
                {title && <S.Title>{title}</S.Title>}
                {tabs && <CodeTabSelect tabs={tabs.all} selected_tab_id={tabs.current_tab_id} onChange={tabs.setCurrentTabId} />}
              </S.HeaderLeftPart>
              <S.CopyButtonContainer>
                <CopyButton onClick={code ? () => code : () => getReactNodeTextById('custom_code_block_' + id)} />
              </S.CopyButtonContainer>
            </S.Header>
            <div style={{ width: '100%' }} className="custom-code-block" id={'custom_code_block_' + id}>
              {'children' in props && props.children}
            </div>
          </>
        )}
      </UIDConsumer>
    </S.Container>
  )
}
