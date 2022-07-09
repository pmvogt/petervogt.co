import { getPosts } from '../scripts/utils';
import Meta from '../components/Meta';

import PostItem from '../components/PostItem';

export const getStaticProps = () => {
  const posts = getPosts(1);

  return {
    props: {
      posts,
    },
  };
};

export default function Writing({ props, posts }) {
  return (
    <>
      <Meta />
      <main className='mt-4 container-xl'>
        <div className='grid w-full gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-8 lg:gap-11'>
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
