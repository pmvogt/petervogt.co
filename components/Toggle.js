import { motion } from 'framer-motion';
import { useDarkMode } from '../hooks/useDarkMode';
import React from 'react';

import { Dark, Light } from './Icons';

export const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <motion.button
      className='px-1 transition-all duration-150 ease-linear outline-none background-transparent'
      onClick={() => setIsDark(!isDark)}
      name='toggle'
    >
      <motion.svg
        className='w-8 h-8 text-eggshell-50'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        {isDark ? <Dark /> : <Light />}
      </motion.svg>
    </motion.button>
  );
};
