import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import ThemeSwitch from './ThemeSwitch'
import Link from './Link'
import BackButton from './BackButton'
import MobileNav from './MobileNav'

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
      className="sticky top-0 z-50 w-full border-b-2 border-slate-900/40 bg-cover bg-center text-slate-900 shadow-md dark:text-eggshell-50"
      style={{
        backgroundImage:
          pathname != '/' && `url(${currentTheme === 'dark' ? `${headerBg}` : `${headerBgDark}`})`,
      }}
    >
      <div className="flex h-full w-full items-center justify-between px-8 py-2 backdrop-brightness-50">
        <div className="flex">
          <BackButton onClick={() => router.back()} />
          <div className="ml-4 flex flex-col">
            <h1 className="pointer-events-none font-serif text-1 font-semibold tracking-1 text-slate-900 dark:text-eggshell-50 md:text-2 md:leading-4">
              Peter Vogt
            </h1>
            <h2 className="text-base leading-4">{title}</h2>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
