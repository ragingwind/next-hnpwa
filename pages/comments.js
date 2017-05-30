import React from 'react';
import Page from '../components/page'
import Comment from '../components/comment'
import fetch from '../lib/fetch-comments'

export default class extends React.Component {
  static async getInitialProps({query}) {
    const props = await fetch(query.id)
    return props
  }

  render() {
    const comments = this.props.comment.kids.map(id => (
      <Comment key={id} id={id} />
    ))

    return <Page>
      {comments}
    </Page>
  }
}
