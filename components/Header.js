import React, { useState, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { useRouter } from 'next/router'
import { Figma, Dribbble, Github } from '@/components/Icons'
import { AnimatePresence } from 'framer-motion'

const Header = ({ title }) => {
  const { asPath } = useRouter()

  return (
    <AnimatePresence>
      <header title={title} className="w-full bg-cover px-9 text-slate-900 dark:text-eggshell-50">
        <div className="flex w-full items-center border-b border-slate-700/50 py-2 dark:border-slate-100/50 md:justify-between md:border-b-0 xl:pt-8">
          <ul className="flex w-full flex-col items-start whitespace-pre text-center sm:w-full md:w-full md:flex-row md:items-center lg:w-6/12">
            <li className="pr-0 lg:pr-8">
              <Link href="/">
                <h1 className="font-serif text-7 font-semibold tracking-1 md:text-9 md:leading-8 lg:text-10 lg:leading-9">
                  Peter Vogt
                </h1>
              </Link>
            </li>

            <li className="hidden flex-shrink border-l border-r border-slate-700/50 pl-8 pr-8 dark:border-slate-100/50 xl:block">
              <h2 className="text-center font-sans text-base font-normal leading-normal">
                Design Technologist
              </h2>
            </li>
            <li className="hidden border-r border-slate-700/50 pl-8 pr-8 dark:border-slate-100/50 xl:block">
              <h2 className="text-center font-sans text-base font-normal leading-normal">
                Currently Sr Designer @ USAA
              </h2>
            </li>
          </ul>
          <div className="flex items-center">
            <ThemeSwitch />
            {/* <button className="py-1 pl-5">terminal</button> */}
          </div>
        </div>
        <div className="pt-4 md:hidden">
          <h2>Design Technologist</h2>
          <h3>
            <strong>Currently:</strong> Sr. Designer @ USAA
          </h3>
        </div>
        <nav className="flexjustify-between pt-6 pb-4 md:flex md:pb-8">
          <div className="flex w-full items-center justify-between md:justify-start">
            <div className="flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`font-regular text-md mr-4 cursor-pointer font-sans tracking-8 hover:underline-offset-4 lg:text-lg ${
                    asPath === link.href
                      ? 'underline'
                      : 'text-slate-900 no-underline dark:text-eggshell-50'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center pl-0 md:pl-4">
              <Link href="https://www.figma.com/@vogtbot9000">
                <Figma />
              </Link>
              <Link href="https://github.com/pmvogt">
                <Github />
              </Link>
              <Link href="https://dribbble.com/petermvogt">
                <Dribbble />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </AnimatePresence>
  )
}

export default Header
