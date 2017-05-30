import hackernews from 'firebase-hackernews'

export default async function fetchStories(type, page, count) {
  const stories = await hackernews().stories(type, {
    page,
    count: count || 30
  })

  return {
    type,
    stories,
    page,
    totalPage: Number(stories.totalLength / count)
  }
}
