import Link from 'next/link'

import navItems from '../data/navItems'
import { ThemeSwitch } from './ThemeSwitch'

export const CompactNav = () => {
  return (
    <nav className="container mx-auto flex w-full justify-between bg-mint-300/10 p-4 backdrop-blur dark:bg-indigoDark-900/10">
      <ul className="flex w-full">
        {navItems.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <li
                className="active:bt-purple-400 font-regular text-md mr-4 cursor-pointer font-sans tracking-8 hover:underline-offset-4 lg:text-lg"
                key={index}
              >
                {item.name}
              </li>
            </Link>
          )
        })}
      </ul>
      <ThemeSwitch />
    </nav>
  )
}

export default CompactNav
