import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ThemeSwitch from './ThemeSwitch'
import Link from './Link'

const Header = ({ workHeader, title, headerBg, headerBgDark }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // check if components are mounted to avoid hydration errors while theme switching
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // const currentTheme = theme === 'system' ? systemTheme : theme;
  const currentTheme = theme

  return (
    <header
      title={title}
      workHeader={workHeader}
      className="w-full bg-cover text-slate-900 dark:text-eggshell-50"
      style={{
        backgroundImage: `url(${currentTheme === 'dark' ? `${headerBg}` : `${headerBgDark}`})`,
      }}
    >
      {workHeader ? (
        <h1>{title}</h1>
      ) : (
        <>
          <div className="flex w-full items-center border-b border-slate-700/50 pb-4 dark:border-slate-100/50 md:justify-between lg:border-b-0 lg:pb-0">
            <ul className="flex w-full flex-col items-start whitespace-pre text-center sm:w-full md:w-full md:flex-row md:items-center lg:w-6/12">
              <li className="pr-0 lg:pr-8">
                <Link href="/">
                  <h1 className="font-serif text-7 font-semibold tracking-1 md:text-9 md:leading-8 lg:text-10 lg:leading-10">
                    Peter Vogt
                  </h1>
                </Link>
              </li>
              <li className="hidden flex-shrink border-l border-r border-slate-700/50 py-4 pl-8 pr-8 dark:border-slate-100/50 xl:block">
                <h2 className="text-center font-sans text-base font-normal leading-normal">
                  Product Designer / Design Technologist
                </h2>
              </li>
              <li className="hidden border-r border-slate-700/50 py-6 pl-8 pr-8 dark:border-slate-100/50 xl:block">
                <h2 className="text-center font-sans text-base font-normal leading-normal">
                  Currently Sr. Designer @ USAA
                </h2>
              </li>
            </ul>
            <div className="flex items-center">
              <ThemeSwitch />
              <button className="py-1 pl-5">terminal</button>
            </div>
          </div>
          <div className="pt-6 lg:hidden">
            <h2>Product Designer & Design Technologist.</h2>
            <h3>
              <strong>Currently:</strong> Sr. Designer @ USAA
            </h3>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
