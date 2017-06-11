import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import ServiceWorker from './service-worker'

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <title>HNPWA with Next.js</title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <ServiceWorker />
        </body>
      </html>
     )
  }
}