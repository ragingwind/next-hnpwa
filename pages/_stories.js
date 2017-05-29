import React from 'react';
import Page from '../components/page'
import Stories from '../components/stories'
import fetch from '../lib/fetch-stories'

export default class extends React.Component {
  static async getInitialProps({query, pathname}) {
    if (pathname === '/') {
      pathname = '/top'
    }
    const props = await fetch(pathname.substr(1), Number(query.page || 1), 30)
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
