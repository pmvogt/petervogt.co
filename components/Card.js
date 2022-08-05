import React, { useState, useEffect } from 'react'
import Link from './Link'

import { useTheme } from 'next-themes'

const Card = ({ work, title, darkBg, bg, imgSrc, href }) => {
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
      className="hover:scale-104 leading-0 rounded-lg bg-cover text-left text-slate-900 hover:rounded-2xl"
      style={{
        maxWidth: '544px',
        backgroundImage: `url(${currentTheme === 'dark' ? `${darkBg}` : `${bg}`})`,
      }}
    >
      <Link href={href} aria-label={`Link to ${title}`}>
        <div className="overflow-hidden rounded-xl" style={{ minHeight: '420px' }}>
          <div className="p-4">
            <h2 className="font-serif text-4 font-normal tracking-0 dark:text-eggshell-50 sm:text-4 lg:text-5 xl:text-7">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </button>
  )
}

export default Card
