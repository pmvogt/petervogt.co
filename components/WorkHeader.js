import { useState, useEffect, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeSwitch from './ThemeSwitch'
import BackButton from './BackButton'
import VolumeToggle from './VolumeToggle'

import { SoundContext } from 'context/sound-context'

const WorkHeader = ({ title, headerBg, headerBgDark }) => {
  const { soundToggled, soundToggleFunction } = useContext(SoundContext)

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
      className="sticky top-0 z-50 w-full bg-cover bg-center text-eggshell-50 shadow-xl"
      style={{
        backgroundImage:
          pathname != '/' && `url(${currentTheme === 'dark' ? `${headerBg}` : `${headerBgDark}`})`,
      }}
    >
      <div className="flex h-full w-full items-center justify-between border-b border-slate-500/40 px-4  py-3 backdrop-blur-lg backdrop-brightness-50">
        <div className="flex">
          <BackButton onClick={() => router.back()} />
          <div className="ml-4 flex flex-col divide-x-0 py-2 md:flex-row md:items-center md:divide-x-2">
            <h1 className="pointer-events-none pr-0 font-serif text-1 font-semibold tracking-1 md:pr-6 md:text-2 md:leading-4">
              Peter Vogt
            </h1>
            <h2 className="pl-0 text-base leading-4 md:pl-4 md:pr-4">{title}</h2>
            <div className="flex pl-0 pt-4 md:pt-0 md:pl-4">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`font-regular mr-4 cursor-pointer font-sans tracking-8 hover:underline-offset-4 ${
                    asPath === link.href ? 'underline' : 'text-eggshell-50'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex">
          <VolumeToggle />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}

export default WorkHeader
