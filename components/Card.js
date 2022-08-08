import React, { useState, useEffect } from 'react'
import Link from './Link'

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
    <button
      type="button"
      className="leading-0 h-full w-full rounded-lg bg-cover bg-center text-left text-slate-900"
      style={{
        backgroundImage: `url(${currentTheme === 'dark' ? `${darkBg}` : `${bg}`})`,
      }}
    >
      <Link href={href} aria-label={`Link to ${title}`}>
        <div className="h-36 overflow-hidden rounded-xl md:h-full">
          <div className="p-4">
            <h2 className="font-serif text-1 font-normal tracking-0 text-slate-900 dark:text-eggshell-50 md:text-5">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </button>
  )
}

export default Card
