import React from 'react'
import Page from '../components/page'
import hackernews from 'firebase-hackernews'

export default class extends React.Component {
  static async getInitialProps({query}) {
    return {
      id: query.id,
      user: await hackernews().user(query.id)
    }
  }

  render() {
    return <Page>
      {JSON.stringify(this.props.user)}
  	</Page>
  }
}
