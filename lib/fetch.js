import nodeFetch from 'isomorphic-fetch'

export default async function localfetch(pathname) {
	const inNode = typeof window === 'undefined'
	const host = inNode ? 'http://localhost:3000' : ''
	const ufetch = inNode ? nodeFetch : fetch
	const url = `${host}/hackernews/${pathname}`

	const res = await ufetch(url)
	const data = await res.json()

	return data
}
