import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'
import Manifest from 'next-manifest/manifest'

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
					<link rel="icon" href="/static/favicon.ico" />
					<title>HNPWA with Next.js</title>
					<Manifest href='/static/manifest.json' themeColor="#000000" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
