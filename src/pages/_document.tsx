import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// Fix for flickering on page load https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68
// https://github.com/vercel/next.js/blob/deprecated-main/examples/with-styled-components/pages/_document.js
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
