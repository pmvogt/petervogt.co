import { getWorkPosts } from '../scripts/utils';

import Meta from '../components/Meta';
import WorkItem from '../components/WorkItem';
import Layout from '../components/layouts/Layout';
import Header from '../components/Header';
export const getStaticProps = () => {
  const workPosts = getWorkPosts();

  workPosts.sort((a, b) => (a.position > b.position ? 1 : -1));

  return {
    props: {
      workPosts,
    },
  };
};

export default function Home({ props, workPosts }) {
  return (
    <Layout>
      <Header />
      <Meta />
      <main className='mt-4'>
        <div className='grid w-full gap-8 px-7 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-8 lg:gap-11'>
          {workPosts.map((workPost) => (
            <WorkItem key={workPost.slug} workPost={workPost} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
