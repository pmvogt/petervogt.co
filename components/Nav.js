import Link from 'next/link'

import navItems from '../data/navItems'
import { Figma, Dribbble } from './Icons'

export const Nav = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-slate-700/50 py-6 dark:border-slate-100/50 md:justify-start md:border-b-0 md:border-t-0 md:pr-8">
      <ul className="flex">
        {navItems.map((item, index) => {
          return (
            <Link href={item.path} key={item.index}>
              <li
                className="text-md active:bt-purple-400 mr-4 cursor-pointer font-sans font-medium tracking-8 active:border-b-2 md:text-lg"
                key={index}
              >
                {item.name}
              </li>
            </Link>
          )
        })}
      </ul>
      <ul className="flex">
        <li>
          <Figma />
        </li>
        <li>
          <Dribbble />
        </li>
      </ul>
    </nav>
  )
}
