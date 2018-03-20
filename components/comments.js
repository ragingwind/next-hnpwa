import Link from 'next/link'

const Comment = ({comment}) => (
	<div className="comment">
		<div dangerouslySetInnerHTML={{__html: comment.content}}></div>
		<div>
			<Link href={`/?user=${comment.user}`}><a>{comment.user}</a></Link> | {comment.time_ago}
		</div>
		<style jsx>{`
			.comment {
				margin: 15px 0 15px 0;
				padding: 0 5px;
				border-top: 1px solid grey;
			};
		`}</style>
	</div>
)

const Comments = ({item}) => (
	<div>
		<div>
			<h2>
				<a href={item.url} target="_black">{item.title}</a>
			</h2>
			<div>
				<Link href={`/user?id=${item.user}`}>
					<a>{item.user}</a>
				</Link> | {item.points} points
			</div>
		</div>
		<div>
			{item.comments.map(c => <Comment key={c.id} comment={c} />)}
		</div>
	</div>
)

export default Comments
