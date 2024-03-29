import { Layout } from '@/components/layout'
import { AuthProvider } from '@/provider/auth-provider'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <AuthProvider>
      <Html lang="en">
        <Head />
        <body className="dark">
          <Layout>
            <Main />
            <NextScript />
          </Layout>
        </body>
      </Html>
    </AuthProvider>
  )
}
