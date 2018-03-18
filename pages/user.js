import {Component} from 'react'
import Container from '../components/container'
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
			<Container>
				<User user={this.props.user}/>
			</Container>
		)
	}
}
