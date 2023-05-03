import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { TShortcutProps } from '.'

function shortcutStyle(props: TShortcutProps): FlattenSimpleInterpolation {
  return css`
    background-color: ${props.mode === 'default' ? '#F3F3F3' : '#E0E7FF'};
    color: #374151;
    line-height: ${props.size === 'small' ? '20px' : '20px'};
  `
}

export const ShortcutGroup = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * + * {
    margin-left: 8px;
  }
`

export const ShortcutKey = styled.span<TShortcutProps>`
  font-family: 'Inter', sans-serif;
  ${(props) => shortcutStyle(props)}
  font-weight: 500;
  font-size: 13px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 2px;
`

export const ShortcutThen = styled.div`
  font-family: 'Inter', sans-serif;
  color: #a1a1aa;
  font-size: 13px;
  padding: 0;
`
