import Link from 'next/link';

import { navItems } from '../data/navItems';
import { Figma, Dribbble } from './Icons';

export const Nav = () => {
  return (
    <nav className='flex items-center justify-between w-full py-6 border-t border-b md:justify-start md:border-b-0 md:border-t-0 border-slate-700/50 dark:border-slate-100/50 md:pr-8'>
      <ul className='flex'>
        {navItems.map((item, index) => {
          return (
            <Link href={item.path} key={item.index}>
              <li
                className='mr-4 font-sans font-medium cursor-pointer text-md md:text-lg tracking-8 active:border-b-2 active:bt-purple-400'
                key={index}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <ul className='flex'>
        <li>
          <Figma />
        </li>
        <li>
          <Dribbble />
        </li>
      </ul>
    </nav>
  );
};
