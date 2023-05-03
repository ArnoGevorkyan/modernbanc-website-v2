import { DuplicateIcon } from '@heroicons/react/solid'
import styled from 'styled-components'
import { createStyles } from '@mantine/core'

export const Icon = styled(DuplicateIcon)`
  width: 17.5px;
  height: 17.5px;
  cursor: pointer;
  transition: 75ms ease-in-out;
  color: #d4d4d8;
  :hover {
    color: #a1a1aa;
  }
`

export default createStyles((theme: any, _params, getRef) => ({
  bodyCopied: {
    position: 'relative',
    left: '3px',
    backgroundColor: '#FAFAFA',
    color: '#52525B',
    fontSize: '12px',
    fontWeight: 500,
    padding: '3px 8px',
    border: '1px solid #EFEFEF',
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.03)',
    borderRadius: '2px',
    lineHeight: '20px'
  }
}))
