import hackernews from 'firebase-hackernews'

export default async function fetchComments(id) {
  const items = await hackernews().items(id)
  
  if (items.length > 0) {
    await hackernews().kids(items[0].id)
  }
  
  return {
    comment: items.length > 0 ? items[0] : {kids: []}
  }
}

