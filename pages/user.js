import React from 'react';
import Page from '../components/page'
import User from "../components/user"
import fetch from '../lib/fetch-user'

export default class extends React.Component {
  static async getInitialProps({query, asPath}) {
    return await fetch(asPath.substr(1), query.id)
  }

  render() {
    return <Page>
			<User user={this.props.user} />
    </Page>
  }
}
