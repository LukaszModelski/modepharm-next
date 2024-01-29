import { AppProps } from 'next/app'
import { ModepharmType } from '../helpers/zod'
import { Layout } from '@/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globalStyles'
import { Source_Sans_3 } from 'next/font/google'

const sourceSans3 = Source_Sans_3({ subsets: ['latin'] })

type AppCustomProps = {
  modepharm?: ModepharmType
}

export default function MyApp({ Component, pageProps, modepharm }: AppProps & AppCustomProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout className={sourceSans3.className}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
