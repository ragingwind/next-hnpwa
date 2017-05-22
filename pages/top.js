import React from 'react'
import Page from '../components/page'
import Stories from '../components/stories.js'
import hackernews from 'firebase-hackernews'

export default class extends React.Component {
  static async getInitialProps({query}) {
    let {page} = query
    page = Number (page || 1)

    const news = hackernews()
    const stories = await news.stories('top', {
       page: page, count: 30
    })
    
    return {
      page,
      stories
    }
  }

  render() {
    return <Page>
      <Stories stories={this.props.stories} />
  	</Page>
  }
}
