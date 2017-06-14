import fetch from './fetch'

export default async function fetchStories(type, page, count = 30) {
	const stories = await fetch(`${type}${page > 0 ? `/${page}` : ''}`)
	const length = await fetch(`length/${type}`)

	return {
		type,
		stories,
		page,
		totalPage: Number(length / count)
	}
}
