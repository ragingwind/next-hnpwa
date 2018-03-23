import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import ServiceWorker from 'next-workbox/service-worker'

const isDev = process.env.NODE_ENV !== 'production'

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
					<link rel="manifest" href="/static/manifest/manifest.json" />
					<title>HNPWA with Next.js</title>
				</Head>
				<body>
					<Main />
					<NextScript />
					<ServiceWorker src={'/static/workbox/sw.js'} scope={'../../'} unregister={isDev} />
				</body>
			</html>
		)
	}
}
