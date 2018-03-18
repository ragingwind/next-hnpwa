import fetch from 'isomorphic-fetch'

export default async function (pathname) {
	const res = await fetch(`https://api.hnpwa.com/v0${pathname}.json`)
	return res.json()
}
