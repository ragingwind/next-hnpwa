import Head from './head'
import Link from 'next/link'

const links = [
  { href: '/top', label: 'Top' },
  { href: '/new', label: 'New' },
  { href: '/best', label: 'Best' },
  { href: '/ask', label: 'Ask' },
  { href: '/show', label: 'Show' },
  { href: '/job', label: 'Job' },
  { href: 'https://zeit.co/blog/next2', label: '▲ Next.js' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {
        links.map(({ key, href, label }) => (
          <li key={key}><Link href={href}><a>{label}</a></Link></li>
        ))
      }
    </ul>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: Helvetica,sans-serif;
      }

      nav {
        text-align: center;
        background-color: black;
        color: white;
        padding: 12px;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        right: 0;
      }

      ul {
        display: flex;
        padding: 0;
        margin: 0;
      }

      li {
        list-style-type: none;
        padding: 6px 8px;
      }

      li:last-child {
        position: absolute;
        right: 0;
      }

      a {
        color: white;
        text-decoration: none;
        font-size: 16px;
      }

      @media (max-width: 600px) {
        ul {
          justify-content: none;
        }

        ul li:last-child {
          display: none;
        }
      }
    `}</style>
  </nav>
)

export default Nav
