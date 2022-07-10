import { React } from 'react';

import { Toggle } from './Toggle';
import { Nav } from './Nav';

const Header = () => {
  return (
    <header className='pt-8 pb-4 px-7 text-slate-900 dark:text-eggshell-50'>
      <div className='flex items-center w-full pb-4 border-b md:justify-between lg:border-b-0 border-slate-700/50 dark:border-slate-100/50 lg:pb-0'>
        <ul className='flex flex-col items-start w-full md:flex-row md:items-center sm:w-full md:w-full lg:w-2/3'>
          <li className='pr-0 lg:pr-8'>
            <h1 className='font-serif font-semibold text-7 md:text-9 lg:text-11 xl:text-13 tracking-1 md:leading-8 lg:leading-10'>
              Peter Vogt
            </h1>
          </li>
          <li className='flex-1 flex-shrink hidden w-full py-4 pl-8 pr-8 align-middle border-l border-r xl:block border-slate-700/50 dark:border-slate-100/50'>
            <h2 className='font-sans text-base font-normal leading-normal text-left'>
              Product Designer, Design Technologist
            </h2>
          </li>
          <li className='flex-1 hidden w-full py-6 pl-8 pr-8 align-middle border-r xl:block border-slate-700/50 dark:border-slate-100/50'>
            <h2 className='font-sans text-base font-normal leading-normal text-left'>
              Currently Sr. Designer @ USAA
            </h2>
          </li>
        </ul>
        <div className='flex items-center'>
          <Toggle />
          <button className='px-8 py-1 text-base leading-5 rounded'>
            <svg
              className='w-8 h-8 text-slate-900dark:text-eggshell-50'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' />
              <path d='M5 7l5 5l-5 5' />
              <line x1='12' y1='19' x2='19' y2='19' />
            </svg>
          </button>
        </div>
      </div>

      <h2 className='block py-6 lg:hidden'>
        Product Designer & Design Technologist. Currently: Sr. Designer @ USAA
      </h2>
      <Nav />
    </header>
  );
};

export default Header;
