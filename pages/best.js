import React from 'react'
import Page from '../components/page'
import Stories from '../components/stories.js'
import hackernews from 'firebase-hackernews'

export default class extends React.Component {
  static async getInitialProps({query}) {
    query.page = Number(query.page || 1)

    return {
      page: query.page,
      stories: await hackernews().stories('best', {
        page: query.page,
        count: 30
      })
    }
  }

  render() {
    return <Page>
      <Stories stories={this.props.stories} />
  	</Page>
  }
}
