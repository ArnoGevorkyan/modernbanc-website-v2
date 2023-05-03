import { useRouter } from 'next/router'
import React from 'react'
import LegalPage from './legal'

export type TLayoutProps = {
  children: React.ReactNode
}

export const MainLayout: React.FC<TLayoutProps> = ({ children }) => {
  const router = useRouter()
  const is_home = router.pathname === '/'

  return (
    <div>
      {is_home ? (
        <main
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          {children}
        </main>
      ) : (
        <LegalPage>{children}</LegalPage>
      )}
    </div>
  )
}
