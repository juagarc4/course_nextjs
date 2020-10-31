import Document, { Html, Head, Main, NextScript } from 'next/document'

// This file will used for all pages
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfont */}
          {/* stylesheets */}
          {/* scripts/js */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
