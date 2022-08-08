import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { animations } from '@/data/animations'
import { Dark, Light } from '@/components/Icons'
import useSound from 'use-sound'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [play] = useSound('/static/proud_click.mp3', { volume: 0.1 })

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  function handleClick() {
    play()
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <AnimatePresence>
      <motion.button
        aria-label="Toggle Dark Mode"
        type="button"
        className="bg-transparent outline-none transition-all duration-150 ease-linear"
        onClick={() => {
          setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
          play()
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          initial={animations.pathInitial}
          animate={animations.pathAnimate}
          className="h-8 w-8 text-slate-900 dark:text-eggshell-50"
        >
          {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <Light /> : <Dark />}
        </motion.svg>
      </motion.button>
    </AnimatePresence>
  )
}

export default ThemeSwitch
