import { AppProps } from 'next/app'
import { Layout } from '@/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globalStyles'
import { useState } from 'react'
import { sourceSans3 } from '../styles/fonts'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isMenuOpen={isMenuOpen} />
      <main className={sourceSans3.className}>
        <Layout>
          <Component {...pageProps} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </Layout>
      </main>
    </ThemeProvider>
  )
}
