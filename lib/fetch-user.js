import hackernews from 'firebase-hackernews'

export default async function fetchUser(id) {
  const user = await hackernews().user(id)

  return {
    id,
    user
  }
}
