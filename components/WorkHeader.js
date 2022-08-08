import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

import ThemeSwitch from './ThemeSwitch'
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
      className="sticky top-0 z-50 w-full border-b-2 border-slate-900/40 bg-cover bg-center text-eggshell-50 shadow-md"
      style={{
        backgroundImage:
          pathname != '/' && `url(${currentTheme === 'dark' ? `${headerBg}` : `${headerBgDark}`})`,
      }}
    >
      <div className="flex h-full w-full items-center justify-between px-8 py-3 backdrop-brightness-50">
        <div className="flex">
          <BackButton onClick={() => router.back()} />
          <div className="ml-4 flex flex-col divide-x-0 py-2 md:flex-row md:items-center md:divide-x-2">
            <h1 className="pointer-events-none pr-0 font-serif text-1 font-semibold tracking-1 md:pr-6 md:text-2 md:leading-4">
              Peter Vogt
            </h1>
            <h2 className="pl-0 text-base leading-4 md:pl-4">{title}</h2>
          </div>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
