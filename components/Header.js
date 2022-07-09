import Link from 'next/link';
import { navItems } from '../data/navItems';

const Header = () => {
  return (
    <header className='pt-8 pb-4 px-7'>
      <div className='flex items-center w-full pb-0 border-b-2 md:justify-between lg:border-b-0 border-slate-700 lg:pb-0'>
        <ul className='flex flex-col items-start w-full md:flex-row md:items-center align-left lg:align-middle md:w-auto'>
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
        <div className='flex items-center '>
          <button className='px-8 py-1 mr-4 text-base leading-5 bg-pink-500 rounded hover:bg-pink-600'>
            Toggle
          </button>
          <button className='px-8 py-1 text-base leading-5 rounded'>
            Terminal Mode
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
                  className='mr-4 font-serif cursor-pointer text-0'
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
