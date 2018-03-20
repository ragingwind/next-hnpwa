import {Component} from 'react'
import Page from '../components/page'
import Comments from '../components/comments'
import fetch from '../lib/fetch'

export default class extends Component {
	static async getInitialProps({query}) {
		return {
			item: await fetch(`/item/${query.id}`)
		}
	}

	render() {
		return (
			<Page>
				<Comments item={this.props.item}/>
			</Page>
		)
	}
}
