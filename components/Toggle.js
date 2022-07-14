import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { animations } from '../data/animations';
import { Dark, Light } from './Icons';

export const Toggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // check if components are mounted to avoid hydration errors while theme switching
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  const currentTheme = theme;

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
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransition}
      >
        {currentTheme === 'dark' ? <Light /> : <Dark />}
      </motion.svg>
    </motion.button>
  );
};
