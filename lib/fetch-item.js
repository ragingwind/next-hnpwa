import fetch from './fetch'

export default async function fetchItem(id) {
	const items = await fetch(`item/${id}`)

	return items.length > 0 ? items[0] : undefined
}

