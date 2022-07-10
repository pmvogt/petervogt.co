import Link from 'next/link';

import { navItems } from '../data/navItems';

export const Nav = () => {
  return (
    <nav className='flex items-center py-6 border-t border-b md:border-b-0 md:border-t-0 border-slate-700/50 dark:border-slate-100/50'>
      {navItems.map((item, index) => {
        return (
          <ul className='flex justify-start' key={index}>
            <Link href={item.path}>
              <li
                className='mr-4 font-sans cursor-pointer text-md md:text-lg tracking-9 active:border-b-2 active:bt-purple-400'
                key={index}
              >
                {item.name}
              </li>
            </Link>
          </ul>
        );
      })}
      <ul className='flex justify-start'>
        <li>
          <svg
            className='w-5 h-5 ml-4 mr-4'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='10' />{' '}
            <path d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32' />
          </svg>
        </li>
        <li>
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z' />{' '}
            <path d='M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z' />{' '}
            <path d='M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z' />{' '}
            <path d='M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z' />{' '}
            <path d='M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z' />
          </svg>
        </li>
      </ul>
    </nav>
  );
};
