import hackernews from 'firebase-hackernews'

export default function fetchUser(type, id) {
  return hackernews().user(id)
    .then(user => {
      return {
        type,
        id,
        user
      }
    })
}
