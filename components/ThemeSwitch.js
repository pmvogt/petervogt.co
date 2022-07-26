import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { animations } from '../data/animations'
import { Dark, Light } from './Icons'

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // check if components are mounted to avoid hydration errors while theme switching
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  const currentTheme = theme

  return (
    <AnimatePresence>
      <motion.button
        className="background-transparent outline-none transition-all duration-150 ease-linear"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        name="toggle"
      >
        <motion.svg
          className="h-8 w-8 text-slate-900 dark:text-eggshell-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={animations.pathInitial}
          animate={animations.pathAnimate}
        >
          {currentTheme === 'dark' ? <Light /> : <Dark />}
        </motion.svg>
      </motion.button>
    </AnimatePresence>
  )
}
