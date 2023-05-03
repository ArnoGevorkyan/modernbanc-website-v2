import { useRouter } from 'next/router'
import React from 'react'
import { DocsLayout } from './docs'
import { MainLayout } from './main'
import RightNav from '~/components/right-navbar'
import { down } from 'styled-breakpoints'
import { useBreakpoint } from 'styled-breakpoints/react-styled'

export type TLayoutProps = {
  children: React.ReactElement
}

export const Layout: React.FC<TLayoutProps> = ({ children }) => {
  let router = useRouter()
  const is_docs_page = router.pathname.includes('docs')
  const is_blog_page = router.pathname.includes('blog')
  const is_article_page = router.pathname.includes('articlePage')

  const is_mobile = useBreakpoint(down('sm'))

  const renderLayout = () => {
    if (is_docs_page) {
      return (
        <DocsLayout>
          <>{children}</>
        </DocsLayout>
      )
    } else if (is_blog_page) {
      return (
        <>{children}</>
      )
    } else if (is_article_page) {
      return (
        <>{children}</>
      )
    } else {
      return (
        <MainLayout>
          <>{children}</>
        </MainLayout>
      );
    }
  };

  return (
    <div>
      {/* {is_docs_page ? (
        <DocsLayout>
          <>{children}</>
        </DocsLayout>
      ) : (
        <MainLayout>
          <>{children}</>
        </MainLayout>
      )} */}
      {renderLayout()}
      {is_blog_page ? <RightNav isBlog={true} /> : <RightNav/>}
    </div>
  )
}
