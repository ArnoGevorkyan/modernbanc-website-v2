import { AppContextProvider } from '~/context/state'
import '~/styles/tailwind.css'
import { Layout } from '~/views'
import { LockScreen } from '~/views/lock'
import { MantineProvider } from '@mantine/core'
import 'focus-visible'
import App, { AppContext, AppProps as NextAppProps } from 'next/app'
import Cookies from 'universal-cookie'
import { GlobalStyleProvider } from '../styles/global'

export type TPageProps = {
  has_read_permission?: boolean
}

type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

function MyApp({ Component, pageProps, router }: AppProps<TPageProps>) {
  return (
    <>
      <GlobalStyleProvider />
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {router.pathname.startsWith('/docs') && pageProps.has_read_permission !== true ? (
          <LockScreen />
        ) : (
          <AppContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppContextProvider>
        )}
      </MantineProvider>
    </>
  )
}

export const auth_cookie_name = 'src'
MyApp.getInitialProps = async (appContext: AppContext) => {
  const props = await App.getInitialProps(appContext)
  const cookies = new Cookies(appContext.ctx.req?.headers.cookie)
  const password_hash = cookies.get('src') ?? ''
  if (password_hash === 'YweTrH2+FWbDJfTJHkeIMS1TThVQ9crDEoVUg/b64ho=') {
    props.pageProps.has_read_permission = true
  }

  return { ...props }
}

export default MyApp
