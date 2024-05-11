import { AppProps } from 'next/app'
import { Layout } from '@/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globalStyles'
import { Source_Sans_3 } from 'next/font/google'
import { useState } from 'react'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isMenuOpen={isMenuOpen} />
      <Layout className={sourceSans3.className}>
        <Component {...pageProps} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </Layout>
    </ThemeProvider>
  )
}
