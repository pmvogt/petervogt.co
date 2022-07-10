import React from 'react';
import Link from 'next/link';

import { useTheme } from 'next-themes';

const WorkItem = ({ workPost }) => {
  const { theme } = useTheme();

  return (
    <div
      className='flex-col h-48 p-4 bg-center bg-cover rounded-lg cursor-pointer md:h-108 hover:scale-105 hover:rounded-2xl drop-shadow-2xl text-slate-900 dark:text-eggshell-50'
      style={{
        backgroundImage: `${
          theme === 'dark'
            ? `url(${workPost.data.darkBg})`
            : `url(${workPost.data.bg})`
        }`,
      }}
    >
      <h3 className='font-serif font-normal text-4 sm:text-4 lg:text-5 xl:text-7 tracking-0 leading-0'>
        <Link href={`/work/${workPost.slug}`}>{workPost.data.title}</Link>
      </h3>
    </div>
  );
};

export default WorkItem;
