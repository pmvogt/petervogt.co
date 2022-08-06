import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import ThemeSwitch from './ThemeSwitch'
import Link from './Link'
import BackButton from './BackButton'

const Header = ({ title, headerBg, headerBgDark }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { pathname, router, asPath } = useRouter()

  // check if components are mounted to avoid hydration errors while theme switching
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  const currentTheme = theme

  return (
    <header
      title={title}
      className="sticky top-0 z-50 w-full bg-cover bg-center px-8 text-slate-900 dark:text-eggshell-50"
      style={{
        backgroundImage:
          pathname != '/' && `url(${currentTheme === 'dark' ? `${headerBg}` : `${headerBgDark}`})`,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex">
          <BackButton onClick={() => router.back()} />
          <h1 className="pl-2 font-serif text-2 font-semibold tracking-1 text-slate-900 dark:text-eggshell-50 md:text-4 md:leading-8 lg:text-7 lg:leading-10">
            {title}
          </h1>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
