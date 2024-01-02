import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { validateResponseZod, ModepharmType } from '../helpers/zod'
import { GlobalContextProvider } from '@/contexts/global/globalContext'
import { Layout } from '@/layouts/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globalStyles'
import { GlobalStylesFonts } from '@/styles/globalStylesFonts'

type AppCustomProps = {
  modepharm?: ModepharmType
}

export default function MyApp({ Component, pageProps, modepharm }: AppProps & AppCustomProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesFonts />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
