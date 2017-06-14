export default({user}) => (
	<div>
		<ul>
			<h1>{user.id}</h1>
			<li>Created: {user.created}</li>
			<li>Karma: {user.karma}</li>
			<li>Delay: {user.delay}</li>
			<li>About: {user.about}</li>
		</ul>
		<style jsx>{`
			li {
				margin: 10px, 0;
				list-style-type: none;
				padding-left: 10px;
				display: flex;
				margin-top: 5px;
			}
		`}</style>
	</div>
)
