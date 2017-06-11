import React from 'react';
import dynamic from 'next/dynamic'
import fetch from '../lib/fetch-stories'

const Page = dynamic(import('../components/page'))
const Stories = dynamic(import('../components/stories'))

export default class extends React.Component {
  static async getInitialProps({query, pathname}) {
    if (pathname === '/') {
      pathname = '/top'
    }

    const page = query && query.page ? query.page : 1
    const props = await fetch(pathname.substr(1), Number(page || 1), 30)
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
