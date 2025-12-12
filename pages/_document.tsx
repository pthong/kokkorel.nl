import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="nl">
        <Head>
          <meta name="description" content="kokkorel.nl — lekkere gerechten, bestellingen en documentatie." />
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
