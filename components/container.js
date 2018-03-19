import Nav from './nav'

export default ({children}) => (
	<main>
		<Nav />
		<div>
			{children}
		</div>
		<style jsx>{`
			div {
				width: 100%;
				color: #333;
				padding-top: 30px;
			}
		`}</style>
		<style global jsx>{`
			body {
				font-family: Helvetica, sans-serif;
			};
			a {
				color: #0e0e0e;
				text-decoration: none;
			};
			@media (max-width: 600px) {
				header {
					justify-content: none;
				}
			};
		`}</style>
	</main>
)
