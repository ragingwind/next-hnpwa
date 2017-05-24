import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

export default ({children}) => (
  <div className="root">
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/static/favicon.ico" />
      <title>Hacker News with Next.js</title>
    </Head>
    <Nav />
    <div className="stories">
      {children}
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Helvetica,sans-serif;
      }

      .stories {
        width: 100%;
        color: #333;
        padding-top: 50px;
      }

      @media (max-width: 600px) {
        .stories {
          padding: 1px;
          padding-top: 50px;
          width: auto;
        }
      }
    `}</style>
  </div>
)
