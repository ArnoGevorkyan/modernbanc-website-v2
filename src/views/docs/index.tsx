import { Header } from '~/components/header'
import { docs_navivation_nodes, findNavigationNode } from '~/navigation/docs'
import { MDXProvider } from '@mdx-js/react'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import { MDXComponents } from 'mdx/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { renderToString } from 'react-dom/server'
import { UIDReset } from 'react-uid'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'
import Footer from './components/content/footer'
import { Header1 } from './components/content/headers/h1'
import { Header2 } from './components/content/headers/h2'
import { PreCodeBlock } from './components/content/pre'
import { DocsNavbar } from './components/navbar'
import Terminal from './components/terminal'
import OpenTerminalButton from './components/terminal/open-terminal-button'
import { useCurrentTableOfContentsNode } from './hooks'
import * as S from './styles'
import { findTocNode, generateNodePath, generateTableOfContentsNodes } from './utils'
export type TLayoutProps = {
  children: React.ReactElement
  meta?: any
}

export const DocsLayout: React.FC<TLayoutProps> = (props) => {
  const is_mobile = useBreakpoint(down('lg'))
  const [navbar_is_open, setNavbarOpen] = useState(false)
  const router = useRouter()
  const mdx_content_string = useMemo(() => renderToString(props.children), [props.children])
  const toc_nodes = useMemo(() => generateTableOfContentsNodes(mdx_content_string), [mdx_content_string])
  const current_toc_slug = useCurrentTableOfContentsNode(toc_nodes)
  const current_nav_node = useMemo(() => findNavigationNode(router.pathname, docs_navivation_nodes), [router.pathname])

  useEffect(() => {
    document.body.style.overflow = navbar_is_open ? 'hidden' : 'auto'
  }, [navbar_is_open])

  const slugify = slugifyWithCounter()

  useEffect(() => {
    if (!navbar_is_open) return

    function onRouteChange() {
      setNavbarOpen(false)
    }

    router.events.on('routeChangeComplete', onRouteChange)
    router.events.on('routeChangeError', onRouteChange)
    router.events.on('hashChangeStart', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
      router.events.off('routeChangeError', onRouteChange)
      router.events.off('hashChangeStart', onRouteChange)
    }
  }, [router, navbar_is_open])

  const components: MDXComponents = {
    h1: (props) => {
      const content_string = props.children?.toString()
      if (!content_string) return <>No content</>
      const slug = slugify(content_string)
      const path = generateNodePath(slug, 'h1')
      const node = findTocNode(path, toc_nodes)
      return <Header1 node={node} {...props} />
    },
    h2: (props) => {
      const content_string = props.children?.toString()
      if (!content_string) return <>No content</>
      const slug = slugify(content_string)

      const path = generateNodePath(slug, 'h2')
      const node = findTocNode(path, toc_nodes)
      return <Header2 node={node} {...props} />
    },
    pre: PreCodeBlock
  }

  const title = current_nav_node?.title + ' | Modernbanc'

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta> */}
        {/* {'page descirption' && <meta name="description" content={'page description'} />} */}
      </Head>
      <S.Container>
        {is_mobile && <Header navbar_is_open={navbar_is_open} toggleNavbar={() => setNavbarOpen((o) => !o)} />}
        <S.SubContainer>
          <DocsNavbar
            current_page={{ toc_nodes, current_toc_slug: current_toc_slug }}
            is_open={navbar_is_open}
            onLinkSelection={() => setNavbarOpen(false)}
          />
          <MDXProvider components={components}>
            <SimpleReactLightbox>
              <UIDReset prefix="uid_">
                <S.Content>
                  {/* Lightbox wrapper, so images on the same page are part of the same gallery and you can use arrow left & right */}
                  <SRLWrapper
                    options={{
                      buttons: {
                        showDownloadButton: false,
                        showThumbnailsButton: false,
                        showAutoplayButton: false,
                        showFullscreenButton: false
                      },
                      thumbnails: { showThumbnails: false },
                      settings: {
                        lightboxTransitionTimingFunction: 'easeIn',
                        lightboxTransitionSpeed: 0.15,
                        disableWheelControls: true,
                        disablePanzoom: true
                      }
                    }}
                  >
                    {props.children}
                  </SRLWrapper>
                </S.Content>
              </UIDReset>
            </SimpleReactLightbox>
          </MDXProvider>

          <S.BottomRightContainer>
            <OpenTerminalButton />
            <Terminal />
          </S.BottomRightContainer>
        </S.SubContainer>
      </S.Container>
    </>
  )
}
