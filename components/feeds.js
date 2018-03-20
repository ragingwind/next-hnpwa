import Link from 'next/link'

const Feed = ({feed}) => (
	<li>
		<span className='point'>{feed.points || 1}</span>
		<span>
			<div>
				<a href={feed.url} target="_black">{feed.title}</a>
			</div>
			<div>
				<span><Link href={`/user?id=${feed.user}`}><a>{feed.user || 'John Doh'}</a></Link></span>
				<span> | <Link href={`/comments?id=${feed.id}`}><a>{feed.comments_count || 0} comments</a></Link></span>
			</div>
		</span>
		<style jsx>{`
			li {
				list-style-type: none;
				position: relative;
				padding: 20px 30px 20px 80px;
				border-bottom: 1px solid #eee;
				line-height: 20px;
			};
			.point {
				font-size: 18px;
				font-weight: 700;
				position: absolute;
				top: 50%;
				left: 0;
				width: 80px;
				text-align: center;
				margin-top: -10px;
			};
		`}</style>
	</li>
)

const maxPage = {
	'/news': 10,
	'/newest': 10,
	'/ask': 2,
	'/show': 2,
	'/jobs': 1
}

const More = ({feed, page}) => (
	<div>
		{
			page < maxPage[feed]
				? <Link href={`${feed}?page=${page + 1}`}><a>More...</a></Link>
				: ''
		}
		<style jsx>{`
			padding: 0 12px
		`}</style>
	</div>

const Feeds = ({feeds, url}) =>
	<div>
		<ul>{feeds.map(f => <Feed key={f.id} feed={f}/>)}</ul>
		<div>
			<More feed={url.pathname} page={Number.parseInt(url.query.page || 1)} />
		</div>
		<style jsx>{`
			ul {
				padding: 0;
			};
		`}</style>
	</div>
)

export default Feeds
