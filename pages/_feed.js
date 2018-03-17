import {Component} from 'react'
import Container from '../components/container'
import Feeds from '../components/feeds'
import fetch from '../lib/fetch'

export default class extends Component {
	static async getInitialProps({pathname}) {
		return {
			feeds: await fetch(pathname)
		}
	}

	render() {
		const {feeds, url} = this.props

		return (
			<Container>
				<Feeds feeds={feeds} url={url} />
			</Container>
		)
	}
}
