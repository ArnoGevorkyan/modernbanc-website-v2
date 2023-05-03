import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export const useUrlHash = (initial_value?: string) => {
  const router = useRouter()
  const [hash, setHash] = useState<string | undefined>(initial_value)

  const updateHash = (str?: string) => {
    if (!str) return
    setHash(str)
  }

  useEffect(() => {
    const onWindowHashChange = () => updateHash(window.location.hash)
    const onNextJSHashChange = (url: string) => updateHash(url)

    router.events.on('hashChangeStart', onNextJSHashChange)
    window.addEventListener('hashchange', onWindowHashChange)
    window.addEventListener('load', onWindowHashChange)
    return () => {
      router.events.off('hashChangeStart', onNextJSHashChange)
      window.removeEventListener('load', onWindowHashChange)
      window.removeEventListener('hashchange', onWindowHashChange)
    }
  }, [router.asPath, router.events])

  return hash
}

// below are mantine functions, but not sure how good they're for NextJS
export function useHash() {
  const [hash, setHashValue] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '')

  const setHash = (value: string) => {
    window.location.hash = value
    setHashValue(value)
  }

  useWindowEvent('hashchange', () => {
    setHashValue(window.location.hash)
  })

  return [hash, setHash] as const
}

export function useWindowEvent<K extends string>(
  type: K,
  listener: K extends keyof WindowEventMap ? (this: Window, ev: WindowEventMap[K]) => void : (this: Window, ev: CustomEvent) => void,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    window.addEventListener(type, listener, options)
    return () => window.removeEventListener(type, listener, options)
  }, [])
}
