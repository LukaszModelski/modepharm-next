import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import { validateResponseZod, ModepharmType } from '../helpers/zod'
import { GlobalContextProvider } from '@/contexts/global/globalContext'
import { Layout } from '@/layouts/Layout'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '@/styles/theme'
import { GlobalStyles } from '@/styles/globalStyles'

type AppCustomProps = {
  modepharm?: ModepharmType
}

export default function MyApp({ Component, pageProps, modepharm }: AppProps & AppCustomProps) {
  return (
    <GlobalContextProvider value={modepharm}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}

MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps & AppCustomProps> => {
  const ctx = await App.getInitialProps(context)
  let validatedData: ModepharmType | undefined

  try {
    const res = await fetch('https://www.modepharm.pl/cms/wp-json/modepharm/all')
    const modepharmData = await res.json()
    validatedData = await validateResponseZod(modepharmData)
  } catch (error) {
    console.error(error)
  }

  return {
    ...ctx,
    modepharm: validatedData
  }
}
