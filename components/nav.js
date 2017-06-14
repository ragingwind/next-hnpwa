import Link from 'next/link'

const links = [
	{href: 'https://zeit.co/blog/next2', label: '▲'},
	{href: '/top', label: 'Top'},
	{href: '/new', label: 'New'},
	{href: '/best', label: 'Best'},
	{href: '/ask', label: 'Ask'},
	{href: '/show', label: 'Show'},
	{href: '/job', label: 'Job'},
]

export default () => (
	<nav>
		<header>{
			links.map((link, i) => (<span key={`nav-link-${i}`}>
				<Link href={link.href}><a>{link.label}</a></Link>
			</span>))
		}</header>
		<style jsx>{`
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

			header {
				display: flex;
				padding: 0;
				margin: 0;
			}

			span {
				padding: 6px 8px;
			}

			a {
				color: white;
				text-decoration: none;
				font-size: 16px;
			}

			@media (max-width: 600px) {
				header {
					justify-content: none;
				}
			}
		`}</style>
	</nav>
)
