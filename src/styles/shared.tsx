import { MantineTransition } from '@mantine/core'
import { css } from 'styled-components'

export const HEADER_HEIGHT = 60
export const HEADER_BREAKPOINT = 860
export const MAIN_NAVBAR_WIDTH = 310
export const MAIN_NAVBAR_BREAKPOINT = 1024
export const DOCS_NAVBAR_WIDTH = 329
export const DOCS_NAVBAR_BREAKPOINT = 1024
export const BREAKPOINT = 1080
export const CONTENT_WIDTH = 820
export const TAB_HEIGHT = 46
export const TAB_HEIGHT_MOBILE = 38
export const TRANSITION_ANIMATION: MantineTransition = {
  in: { opacity: 1, transform: 'scale(1)', visibility: 'visible' },
  out: { opacity: 0, transform: 'scale(.95)', visibility: 'hidden' },
  transitionProperty: 'transform, opacity, display'
}

/**
 * Disable text selection in the element
 */
export const noselect = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`
