import React from 'react';
import Page from '../components/page'
import User from "../components/user"
import fetch from '../lib/fetch-user'

export default class extends React.Component {
  static async getInitialProps({query, asPath}) {
    const props = await fetch(query.id)
    return props
  }

  render() {
    const {user} = this.props
    return <Page>
      <User user={user} />
    </Page>
  }
}
