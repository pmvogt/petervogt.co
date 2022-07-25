import { React } from 'react'

import { ThemeSwitch } from './ThemeSwitch'
import { Nav } from './Nav'
import { Terminal } from './Icons'

const Header = () => {
  return (
    <header className="px-8 pt-8 pb-4 text-slate-900 dark:text-eggshell-50">
      <div className="flex w-full items-center border-b border-slate-700/50 pb-4 dark:border-slate-100/50 md:justify-between lg:border-b-0 lg:pb-0">
        <ul className="flex w-full flex-col items-start sm:w-full md:w-full md:flex-row md:items-center lg:w-2/3">
          <li className="pr-0 lg:pr-8">
            <h1 className="font-serif text-7 font-semibold tracking-1 md:text-9 md:leading-8 lg:text-11 lg:leading-10 xl:text-13">
              Peter Vogt
            </h1>
          </li>
          <li className="hidden w-full flex-1 flex-shrink border-l border-r border-slate-700/50 py-4 pl-8 pr-8 align-middle dark:border-slate-100/50 xl:block">
            <h2 className="text-left font-sans text-base font-normal leading-normal">
              Product Designer, Design Technologist
            </h2>
          </li>
          <li className="hidden w-full flex-1 border-r border-slate-700/50 py-6 pl-8 pr-8 align-middle dark:border-slate-100/50 xl:block">
            <h2 className="text-left font-sans text-base font-normal leading-normal">
              Currently Sr. Designer @ USAA
            </h2>
          </li>
        </ul>
        <div className="flex items-center">
          <ThemeSwitch />
          {/* to-do: build terminal toggle as separate component */}
          <button className="py-1 pl-5">
            <Terminal />
          </button>
        </div>
      </div>

      <h2 className="block py-6 lg:hidden">
        Product Designer & Design Technologist. Currently: Sr. Designer @ USAA
      </h2>
      <Nav />
    </header>
  )
}

export default Header
