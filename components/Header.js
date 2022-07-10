import Link from 'next/link';
import { navItems } from '../data/navItems';

const Header = () => {
  return (
    <header className='pt-8 pb-4 px-7'>
      <div className='flex items-center w-full pb-0 border-b-2 md:justify-between lg:border-b-0 border-slate-700 lg:pb-0'>
        <ul className='flex flex-col items-start w-full md:flex-row md:items-center md:w-auto'>
          <li className='pr-8 align-middle'>
            <h1 className='font-serif font-semibold text-7 md:text-9 lg:text-11 xl:text-13 tracking-1 md:leading-8 lg:leading-10'>
              Peter Vogt
            </h1>
          </li>
          <li className='flex-1 hidden w-full py-4 pl-8 pr-8 align-middle border-l-2 border-r-2 xl:block border-slate-700'>
            <h2 className='font-sans text-base font-normal leading-normal text-left'>
              Product designer, design technologist
            </h2>
          </li>
          <li className='flex-1 hidden w-full py-6 pl-8 pr-8 align-middle border-r-2 xl:block border-slate-700'>
            <h2 className='font-sans text-base font-normal leading-normal text-left'>
              Currently sr. designer @ USAA
            </h2>
          </li>
        </ul>
        <div className='flex items-center'>
          <button
            className='px-1 transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none'
            type='button'
          >
            <svg
              className='w-8 h-8 text-eggshell-50'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              />
            </svg>
          </button>
          <button className='px-8 py-1 text-base leading-5 rounded'>
            <svg
              className='w-8 h-8 text-eggshell-500'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              {' '}
              <path stroke='none' d='M0 0h24v24H0z' />{' '}
              <path d='M5 7l5 5l-5 5' />{' '}
              <line x1='12' y1='19' x2='19' y2='19' />
            </svg>
          </button>
        </div>
      </div>
      <h2 className='block pt-6 lg:hidden'>
        Product designer & design technologist. Currently @ USAA
      </h2>
      <nav className='flex items-center'>
        {navItems.map((item, index) => {
          return (
            <ul
              className='flex justify-start mt-4 md:mt-6 active:accent-purpleDark-400'
              key={index}
            >
              <Link href={item.path}>
                <li
                  className='mr-4 font-sans text-base cursor-pointer tracking-9'
                  key={index}
                >
                  {item.name}
                </li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
