import { getPosts, getWorkPosts } from '../../scripts/utils'

// handle request to this API route
export default function handler(req, res) {
  const { page } = req.query

  const workPosts = getWorkPosts(page)
  const posts = getPosts(page)

  res.status(200).json(workPosts)
  res.status(200).json(posts)
}
