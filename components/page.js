import Link from 'next/link'
import Head from './head'
import Nav from './nav'

export default ({children}) => (
  <div className="root">
    <Head title="Home" />
    <Nav />
    <div className="stories">
      {children}
    </div>
    <style jsx>{`
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
