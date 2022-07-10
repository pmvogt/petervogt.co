import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { Dark, Light } from './Icons';

export const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.button
      className='transition-all duration-150 ease-linear outline-none background-transparent'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      name='toggle'
    >
      <motion.svg
        className='w-8 h-8 text-slate-900 dark:text-eggshell-50'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
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
      >
        {theme === 'dark' ? <Dark /> : <Light />}
      </motion.svg>
    </motion.button>
  );
};
