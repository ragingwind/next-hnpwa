import fetch from './fetch'

export default async function fetchUser(id) {
	const user = await fetch(`user/${id}`)

	return {
		id,
		user
	}
}
