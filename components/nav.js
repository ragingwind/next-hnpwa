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
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }

      nav {
        text-align: center;
        background-color: black;
        color: white;
      }

      ul {
        display: flex;
        justify-content: space-between;
      }

      nav > ul {
        padding: 12px;
        margin: 0;
      }

      li {
        display: flex;
        padding: 6px 8px;
      }

      a {
        color: white;
        text-decoration: none;
        font-size: 16px;
      }
    `}</style>
  </nav>
)

export default Nav
