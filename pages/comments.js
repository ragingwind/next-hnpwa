import React from 'react'
import Page from '../components/page'
import Comment from '../components/comment'
import fetchItem from '../lib/fetch-item'
import fetchKids from '../lib/fetch-kids'

export default class extends React.Component {
	static async getInitialProps({query}) {
		const props = {
			kids: await fetchKids(query.id),
			item: await fetchItem(query.id)
		}

		return props
	}

	render() {
		const comments = this.props.item.kids.map(id => (
			<Comment key={id} id={id} kids={this.props.kids}/>
		))

		return <Page>{comments}</Page>
	}
}
