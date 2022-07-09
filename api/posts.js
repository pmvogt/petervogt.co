import { getPosts, getWorkPosts } from '../../scripts/utils';

// handle request to this API route
export default function handler(req, res) {
  const workPosts = getWorkPosts(2);
  const posts = getPosts(2);

  res.status(200).json(workPosts);
  res.status(200).json(posts);
}
