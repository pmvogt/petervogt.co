import React, { useState, useEffect } from 'react'
import Link from './Link'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useSound } from 'use-sound'

const Card = ({ title, darkBg, bg, href }) => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [play] = useSound('/static/quick_toggle.mp3', { volume: 0.25 })

  // check if components are mounted to avoid hydration errors while theme switching
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  const currentTheme = theme

  return (
    <AnimatePresence>
      <motion.button
        initial={{
          y: 150,
          x: 0,
          opacity: 0,
        }}
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        type="button"
        className="leading-0 h-full w-full rounded-lg bg-cover bg-center pt-4 text-left text-slate-900 md:pt-0"
        style={{
          backgroundImage: `url(${resolvedTheme === 'dark' ? `${darkBg}` : `${bg}`})`,
        }}
      >
        <Link onClick={play} href={href} aria-label={`Link to ${title}`}>
          <div className="h-36 overflow-hidden rounded-xl md:h-full">
            <div className="px-4 md:py-2 lg:py-4">
              <h2 className="font-serif font-normal tracking-0 text-slate-900 dark:text-eggshell-50 xs:text-0 sm:text-2 md:text-5">
                {title}
              </h2>
            </div>
          </div>
        </Link>
      </motion.button>
    </AnimatePresence>
  )
}

export default Card
