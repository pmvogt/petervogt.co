import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const BackButton = () => {
  const router = useRouter();

  return (
    <button type='button' onClick={() => router.back()}>
      <svg
        className='w-8 h-8 dark:text-eggshell-50 text-slate-900'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 19l-7-7m0 0l7-7m-7 7h18'
        />
      </svg>
    </button>
  );
};

const WorkHeader = ({ workPost, headerBg, postTitle }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // check if components are mounted to avoid hydration errors while theme switching
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header
      style={{
        backgroundImage: `url(${`${headerBg}`})`,
      }}
      className='flex flex-col items-start w-full py-4 bg-center bg-cover px-7'
    >
      <BackButton />
      <h1 className='font-serif font-semibold text-4 md:text-9 lg:text-11 xl:text-13 tracking-1 md:leading-8 lg:leading-10 text-slate-900 dark:text-eggshell-50'>
        {postTitle}
      </h1>
    </header>
  );
};

WorkHeader.propTypes = {
  bg: PropTypes.string,
  postTitle: PropTypes.string,
};

export default WorkHeader;
