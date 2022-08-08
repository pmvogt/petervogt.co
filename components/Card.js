import React, { useState, useEffect } from 'react'
import Link from './Link'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const Card = ({ title, darkBg, bg, href }) => {
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
        className="leading-0 h-full w-full rounded-lg bg-cover bg-center text-left text-slate-900"
        style={{
          backgroundImage: `url(${currentTheme === 'dark' ? `${darkBg}` : `${bg}`})`,
        }}
      >
        <Link href={href} aria-label={`Link to ${title}`}>
          <div className="h-36 overflow-hidden rounded-xl md:h-full">
            <div className="px-4 md:py-2 lg:py-4">
              <h2 className="font-serif text-2 font-normal tracking-0 text-slate-900 dark:text-eggshell-50 md:text-5">
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
