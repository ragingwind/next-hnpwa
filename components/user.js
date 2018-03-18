export default({user}) => (
	<div>
		<h1>{user.id}</h1>
		<div>Created: {user.created}</div>
		<div>Karma: {user.karma}</div>
		<div className='about' dangerouslySetInnerHTML={{__html: user.about || ''}}></div>
		<style jsx>{`
			.about {
				padding-top: 15px;
				word-break: break-word
			}
		`}</style>
	</div>
)
