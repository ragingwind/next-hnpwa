import hackernews from 'firebase-hackernews'

export default function fetchStories(type, page, count) {
  return hackernews().stories(type, {
    page,
    count: count || 30
  }).then(stories => {
    return {
      type,
      stories,
      page,
      totalPage: Number(stories.totalLength / count)
    }
  }).catch(err => {
    console.error(err)
  })
}
