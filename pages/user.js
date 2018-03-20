import {Component} from 'react'
import Page from '../components/page'
import User from '../components/user'
import fetch from '../lib/fetch'

export default class extends Component {
	static async getInitialProps({query}) {
		return {
			user: await fetch(`/user/${query.id}`)
		}
	}

	render() {
		return (
			<Page>
				<User user={this.props.user}/>
			</Page>
		)
	}
}
