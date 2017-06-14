import React from 'react'
import Link from 'next/link'
import fetch from '../lib/fetch-item'

export default class Comment extends React.Component {
	constructor() {
		super()
		this.state = {
			comment: {
				text: '',
				by: ''
			}
		}
	}

	async componentDidMount() {
		const comment = this.props.kids.items[this.props.id]

		this.setState({
			comment
		})
	}

	render() {
		const comments = this.state.comment &&
			this.state.comment.kids &&
			this.state.comment.kids.map(id => (
			<Comment key={id} id={id} kids={this.props.kids} />
		))

		return <div className="comment">
			<span className="text"
				dangerouslySetInnerHTML={{__html: this.state.comment.text}}>
			</span>
			<span className="meta">
				by {this.state.comment.by}
			</span>
			<ul>
				{comments}
			</ul>
			<style jsx>{`
				.comment {
					background-color: #fff;
					padding: 16px 16px 0px 32px;
					position: relative;
					line-height: 20px;
				}

				.comment .text {
					overflow-wrap: break-word;
				}

				.comment .meta {
					font-size: .85em;
					color: #828282;
					display: block;
					margin-top: 8px;
					padding-bottom: 8px;
					border-bottom: 1px solid #eee;
				}

				.comment .meta a {
					color: #828282;
					text-decoration: none;
				}

				.comment ul {
					padding: 0;
				}

				@media (max-width: 600px) {
					.comment {
						padding: 8px 8px 0px 16px;
					}
				}
			`}</style>
		</div>
	}
}
