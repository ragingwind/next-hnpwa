import React from 'react'
import Page from '../components/page'
import Stories from '../components/stories.js'
import hackernews from 'firebase-hackernews'

const type = 'new'

export default class extends React.Component {
  static async getInitialProps({query}) {
    query.page = Number(query.page || 1)

    return {
      page: query.page,
      stories: await hackernews().stories(type, {
        page: query.page,
        count: 30
      }),
      totalPage: Number.parseInt(await hackernews().length(type) / 30)
    }
  }

  render() {
    const {stories, page, totalPage} = this.props

    return <Page>
      <Stories type={type} stories={stories} page={page} totalPage={totalPage}/>
  	</Page>
  }
}
