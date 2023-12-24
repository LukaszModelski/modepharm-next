import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { validateResponseZod, ModepharmType } from '../helpers/zod'
import { GlobalContextProvider } from '@/contexts/global/globalContext'
import { Layout } from '@/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globalStyles'

type AppCustomProps = {
  modepharm?: ModepharmType
}

export default function MyApp({ Component, pageProps, modepharm }: AppProps & AppCustomProps) {
  return (
    // <GlobalContextProvider value={modepharm}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    // </GlobalContextProvider>
  )
}
