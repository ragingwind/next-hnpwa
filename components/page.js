import Link from 'next/link'
import Head from './head'
import Nav from './nav'

export default ({children}) => (
	<div>
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
	`}</style>
	</div>
)
