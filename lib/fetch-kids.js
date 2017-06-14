import fetch from './fetch'

export default async function fetchKids(id) {
	return {
		items: await fetch(`kids/${id}`)
	}
}
