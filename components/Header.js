import { React } from 'react';

import { Toggle } from './Toggle';
import { Nav } from './Nav';
import { Terminal } from './Icons';

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
          {/* to-do: build terminal toggle as separate component */}
          <button className='py-1 pl-5'>
            <Terminal />
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
