import {Component} from 'react'
import Container from '../components/container'
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
			<Container>
				<Comments item={this.props.item}/>
			</Container>
		)
	}
}
