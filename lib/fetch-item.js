import hackernews from 'firebase-hackernews'

export default async function fetchItem(id) {
  const items = await hackernews().items(id)
  return items.length > 0 ? items[0] : undefined
}

