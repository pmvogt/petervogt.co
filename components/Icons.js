import { motion } from 'framer-motion';
import React from 'react';

export const Dark = () => {
  return (
    <>
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        stroke='none'
        d='M0 0h24v24H0z'
      />
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        d='M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12'
      />
    </>
  );
};

export const Light = () => {
  return (
    <>
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
      />
    </>
  );
};

export const Terminal = () => {
  return (
    <svg
      className='w-8 h-8 text-slate-900dark:text-eggshell-50'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        stroke='none'
        d='M0 0h24v24H0z'
      />
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        d='M5 7l5 5l-5 5'
      />
      <motion.line
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        x1='12'
        y1='19'
        x2='19'
        y2='19'
      />
    </svg>
  );
};

export const Dribbble = () => {
  return (
    <svg
      className='w-5 h-5 ml-4 mr-4'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.circle
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        cx='12'
        cy='12'
        r='10'
      />
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
        }}
        d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32'
      />
    </svg>
  );
};

export const Figma = () => {
  return (
    <svg
      className='w-5 h-5'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        d='M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z'
      />
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        d='M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z'
      />
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
        d='M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z'
      />
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        d='M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z'
      />
      <motion.path
        initial={{
          opacity: 0,
          rotate: -45,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          pathLength: 1,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        d='M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z'
      />
    </svg>
  );
};
