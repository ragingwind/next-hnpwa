import {Component} from 'react'
import Page from '../components/page'
import Feeds from '../components/feeds'
import fetch from '../lib/fetch'

export default class extends Component {
	static async getInitialProps({pathname, query}) {
		const feed = pathname === '/' ? '/news' : pathname
		const page = query.page ? `/${query.page}` : '1'

		return {
			feeds: await fetch(`${feed}/${page}`)
		}
	}

	render() {
		return (
			<Page>
				<Feeds feeds={this.props.feeds} url={this.props.url} />
			</Page>
		)
	}
}
