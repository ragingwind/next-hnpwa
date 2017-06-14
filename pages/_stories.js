import React from 'react'
import fetch from '../lib/fetch-stories'
import Page from '../components/page'
import Stories from '../components/stories'

export default class extends React.Component {
	static async getInitialProps({query, pathname}) {
		if (pathname === '/') {
			pathname = '/top'
		}

		const page = query && query.page ? query.page : 0
		const props = await fetch(pathname.substr(1), Number(page))
		return props
	}

	render() {
		const {type, stories, page, totalPage} = this.props
		return <Page>
			<Stories type={type}
				stories={stories}
				page={page}
				totalPage={totalPage} />
		</Page>
	}
}
