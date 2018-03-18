import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import ServiceWorker from './service-worker'

const Styles = () => (
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
)

export default class extends Document {
	static getInitialProps({renderPage}) {
		return {
			...renderPage(),
			styles: flush()
		}
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#000000" />
					<link rel="icon" href="/static/favicon.ico" />
					<link rel="manifest" href="/manifest.json" />
					<title>HNPWA with Next.js</title>
				</Head>
				<body>
					<Main />
					<NextScript />
					<ServiceWorker />
				</body>
				<Styles />
			</html>
		)
	}
}
