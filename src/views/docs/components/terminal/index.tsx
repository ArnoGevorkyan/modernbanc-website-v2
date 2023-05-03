import { useAppContext } from '~/context/state'
import { TRANSITION_ANIMATION } from '~/styles/shared'
import { Box, Transition } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import React, { useEffect, useRef, useState } from 'react'
import CloseTerminalButton from './close-terminal-button'
import SearchBar from './search-bar'
import useStyles, * as S from './styles'
import Content from './content'
interface TerminalProps {}

const Terminal: React.FC<TerminalProps> = ({}) => {
  const context = useAppContext()
  const [search_value, setSearchValue] = useState<string | null>(null)
  const search_ref = useRef<any>(null)
  const body_ref = useRef<HTMLDivElement>(null)
  const { classes } = useStyles()

  const onCloseTerminal = () => {
    context.setTerminalOpen(false)
  }

  const onFocusTerminal = () => {
    if (search_ref?.current) {
      search_ref.current.focus()
    }
  }

  useHotkeys([['F', () => onFocusTerminal()]])

  useEffect(() => {
    if (body_ref?.current) {
      // scroll to top of terminal on open api path change
      body_ref?.current.scrollTo(0, 0)
    }
  }, [context.terminal_state])

  return (
    <>
      <Transition mounted={context.terminal_is_open} duration={100} timingFunction="easeOut" transition={TRANSITION_ANIMATION}>
        {(styles) => (
          <div style={{ ...styles }} className={classes.terminalWrapper}>
            <S.Container style={styles}>
              <S.Header terminal_has_content={context.terminal_state !== undefined}>
                <SearchBar ref={search_ref} value={search_value} setValue={setSearchValue} />
                <CloseTerminalButton onClick={onCloseTerminal} />
              </S.Header>
              <S.Content ref={body_ref}>
                <Content terminal_state={context.terminal_state} />
              </S.Content>
            </S.Container>
          </div>
        )}
      </Transition>
    </>
  )
}

export default Terminal
