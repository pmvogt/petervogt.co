import { getWorkPosts } from '../scripts/utils';
import Meta from '../components/Meta';

import WorkItem from '../components/WorkItem';

export const getStaticProps = () => {
  const workPosts = getWorkPosts(1);

  return {
    props: {
      workPosts,
    },
  };
};

export default function Home({ props, workPosts }) {
  return (
    <>
      <Meta />
      <main className='mt-4 container-xl'>
        <div className='grid w-full gap-4 px-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-8 lg:gap-11'>
          {workPosts.map((workPost) => (
            <WorkItem key={workPost.slug} workPost={workPost} />
          ))}
        </div>
      </main>
    </>
  );
}
