import Link from 'next/link'

const PostItem = ({ post }) => {
  return (
    <div className="bg-mp-1 h-108 transform cursor-pointer flex-col rounded bg-cover p-4 transition duration-500 hover:scale-105">
      <h3 className="leading-0 font-serif text-7 font-normal tracking-0 md:text-9">
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
    </div>
  )
}

export default PostItem
