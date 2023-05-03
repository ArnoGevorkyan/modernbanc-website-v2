import { UIDConsumer } from 'react-uid'
import CopyButton from '../copy-button'
import * as S from './styles'

export interface TPreCodeBlock {
  children?: React.ReactNode
}

export function PreCodeBlock(props: TPreCodeBlock) {
  function getReactNodeTextById(id: string) {
    return document.getElementById(id)?.textContent ?? ''
  }

  return (
    <UIDConsumer>
      {(id) => (
        <>
          <S.Container className="pre-container">
            <S.PreBlock id={id} {...props} />
          </S.Container>
          <S.CopyButtonContainer>
            <CopyButton onClick={() => getReactNodeTextById(id)} />
          </S.CopyButtonContainer>
        </>
      )}
    </UIDConsumer>
  )
}
