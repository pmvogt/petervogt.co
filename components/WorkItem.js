import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const WorkItem = ({ workPost }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // check if components are mounted to avoid hydration errors while theme switching
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  const currentTheme = theme;

  return (
    <a
      className='flex-col h-48 p-4 bg-center bg-cover rounded-lg cursor-pointer md:h-108 hover:scale-105 hover:rounded-2xl text-slate-900 dark:text-eggshell-50'
      href={`/work/${workPost.slug}`}
      style={{
        backgroundImage: `url(${
          currentTheme === 'dark'
            ? `${workPost.data.darkBg}`
            : `${workPost.data.bg}`
        })`,
        boxShadow: `43px 113px 49px rgba(0, 0, 0, 0.01), 24px 64px 41px rgba(0, 0, 0, 0.05), 11px 28px 30px rgba(0, 0, 0, 0.09), 3px 7px 17px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)`,
      }}
    >
      <h3 className='font-serif font-normal text-4 sm:text-4 lg:text-5 xl:text-7 tracking-0 leading-0'>
        <Link href={`/work/${workPost.slug}`}>{workPost.data.title}</Link>
      </h3>
    </a>
  );
};

export default WorkItem;
