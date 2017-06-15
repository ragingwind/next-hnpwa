import React from 'react'
import Link from 'next/link'
import Page from '../components/page'
import Comment from '../components/comment'
import fetchItem from '../lib/fetch-item'
import fetchKids from '../lib/fetch-kids'

export default class extends React.Component {
	static async getInitialProps({query}) {
		const props = {
			kids: await fetchKids(query.id),
			item: await fetchItem(query.id)
		}

		return props
	}

	render() {
		const item = this.props.item
		const comments = this.props.item.kids.map(id => (
			<Comment key={id} id={id} kids={this.props.kids}/>
		))

		return <Page>
			<div className="detail">
				<h2><a href={item.url} target="_black">{item.title}</a></h2>
				<div className="info">
					{item.score} score | <Link href={`/user?id=${item.by}`}><a>{item.by}</a></Link>
				</div>
			</div>
			<div>
				{comments}
			</div>
			<style jsx>{`
			.detail{
				padding: 20px 30px 20px 30px;
				border-bottom: 1px solid #eee;
			}
			.detail a {
				color: #0e0e0e;
				text-decoration: none;
			}

			.detail a:hover {
				color: #0e0e0e;
				text-decoration: underline;
			}

			.info a {
				color: gray;
				text-decoration: none;
			}

			.info a:hover {
				text-decoration: underline;
			}

			.info {
				font-size: 14px;
			}
		`}</style>
		</Page>
	}
}
