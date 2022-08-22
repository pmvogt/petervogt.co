import { useEffect, useState, useContext } from 'react'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import { motion, AnimatePresence } from 'framer-motion'

import { animations } from '@/data/animations'
import { Dark, Light } from '@/components/Icons'

import { SoundContext } from '../context/sound-context'

const ThemeSwitch = () => {
  const { soundToggled } = useContext(SoundContext)

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // check global toggleSound state + mute if toggleSound is off
  const [play] = useSound('/static/proud_click.mp3', {
    soundEnabled: soundToggled ? true : false,
    volume: 0.1,
  })

  useEffect(() => setMounted(true), [])

  return (
    <AnimatePresence>
      <motion.button
        aria-label="Toggle Dark Mode"
        type="button"
        className="rounded-md bg-gray-300 py-2 px-4 outline-none transition-all duration-150 ease-linear dark:bg-opacity-10"
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
          className="h-4 w-4 text-slate-900 dark:text-eggshell-50 md:h-8 md:w-8"
        >
          {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <Light /> : <Dark />}
        </motion.svg>
      </motion.button>
    </AnimatePresence>
  )
}

export default ThemeSwitch
