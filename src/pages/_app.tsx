import type { AppProps } from 'next/app'
import '@/styles.css'
import { AuthProvider } from '@/provider/auth-provider'
import React from 'react'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
