import React from 'react'
import { useClipboard } from '@mantine/hooks'
import * as S from './styles'
import useStyles from './styles'
import { Tooltip } from '@mantine/core'
export interface CopyButtonProps {
  label?: string
  trim?: boolean
  code?: string
  onClick?: () => string
}

export const CopyButton: React.FC<CopyButtonProps> = ({ label = 'Copied', trim = true, code, onClick }) => {
  const clipboard = useClipboard()
  const { classes } = useStyles()

  function wasClicked() {
    let copied_code: string | undefined

    if (onClick) {
      // can either get code via onClick if provided by parent
      copied_code = onClick()
    } else {
      // or use code prop if populated.
      copied_code = code
    }

    clipboard.copy(trim ? copied_code?.trim() : copied_code)
  }

  return (
    <div className="copy-button">
      <Tooltip
        label={label}
        opened={clipboard.copied}
        position="left"
        transition="fade"
        arrowSize={4}
        gutter={8}
        classNames={{ body: classes.bodyCopied }}
      >
        <S.Icon aria-label={label} onClick={() => wasClicked()} />
      </Tooltip>
    </div>
  )
}

export default CopyButton
