import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          // {language ? "en" : 'no'}
          <html
            lang={
              this.props.__NEXT_DATA__.props.pageProps.language ? 'en' : 'no'
            }
          >
            {initialProps.styles}
            {sheet.getStyleElement()}
          </html>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

// Improved _document.js
// import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet()
//     const initialProps = await Document.getInitialProps(ctx)
//     return {
//       ...initialProps,
//       styles: [initialProps.styles, sheet.getStyleElement()],
//     }
//   }

//   render() {
//     return (
//       <html
//         lang={this.props.__NEXT_DATA__.props.pageProps.language ? 'en' : 'no'}
//       >
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </html>
//     )
//   }
// }
