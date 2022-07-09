import Link from 'next/link';

const PostItem = ({ post }) => {
  return (
    <div className='flex-col p-4 transition duration-500 transform bg-cover rounded cursor-pointer h-108 hover:scale-105 bg-mp-1 text-slate-900'>
      <h3 className='font-serif font-normal text-7 md:text-9 tracking-0 leading-0'>
        <Link href={`/posts/${post.slug}`}>{post.data.title}</Link>
      </h3>
    </div>
  );
};

export default PostItem;
