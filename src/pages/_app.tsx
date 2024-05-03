import { AppProps } from 'next/app'
import { Layout } from '@/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globalStyles'
import { Source_Sans_3 } from 'next/font/google'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout className={sourceSans3.className}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
