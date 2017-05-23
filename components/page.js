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
      }

      @media (max-width: 750px) {
        .root {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
)
