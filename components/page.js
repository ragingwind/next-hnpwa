import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

export default ({children}) => (
  <div className="root">
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
