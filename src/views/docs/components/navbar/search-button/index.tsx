import { SearchIcon } from '@heroicons/react/solid'
import React, { useCallback, useEffect, useState } from 'react'
import S from './styles'
import { DocSearchModal, useDocSearchKeyboardEvents } from 'typesense-docsearch-react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import Router from 'next/router'

const docsearch_config = {
  typesenseCollectionName: 'docs_1658676130',
  typesenseServerConfig: {
    nodes: [
      {
        host: 't7wh41qkmxo85insp-1.a1.typesense.net',
        port: '443',
        protocol: 'https'
      },
      {
        host: 't7wh41qkmxo85insp-2.a1.typesense.net',
        port: '443',
        protocol: 'https'
      },
      {
        host: 't7wh41qkmxo85insp-3.a1.typesense.net',
        port: '443',
        protocol: 'https'
      }
    ],
    apiKey: 'SqVWiYiqge8H1vnVlwYKfNeFvxqigfIr'
  },
  typesenseSearchParameters: {}
}

function Hit({ hit, children }) {
  return <Link href={hit.url}>{children}</Link>
}

function SearchButton(props: React.ComponentPropsWithoutRef<'button'>) {
  let [isOpen, setIsOpen] = useState(false)
  let [modifierKey, setModifierKey] = useState()

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose })

  useEffect(() => {
    //@ts-ignore
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ')
  }, [])

  return (
    <>
      <S.Button onClick={() => setIsOpen(true)}>
        <S.Container>
          <S.LeftPart>
            <SearchIcon color="#D4D4D8" width={17.5} style={{ marginRight: '8px' }} />
            <S.Title>Search</S.Title>
          </S.LeftPart>
          <S.Hotkey>/</S.Hotkey>
        </S.Container>
      </S.Button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            {...docsearch_config}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl)
              }
            }}
          />,
          document.body
        )}
    </>
  )
}

export default SearchButton
