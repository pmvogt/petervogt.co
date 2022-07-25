import Link from './Link'

import navItems from '../data/navItems'

export const NavLinks = () => {
  ;<>
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.path}
        className="active:bt-purple-400 font-regular text-md mr-4 cursor-pointer font-sans tracking-8 hover:underline-offset-4 lg:text-lg"
      >
        {item.name}
      </Link>
    ))}
  </>
}

export default NavLinks
