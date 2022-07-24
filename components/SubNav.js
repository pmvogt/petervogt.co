import { motion, useScroll, LayoutGroup, useTransform, useMotionValue } from 'framer-motion'
import { useState, useEffect } from 'react'

import navItems from '../data/navItems'
import Link from './Link'

import { ThemeSwitch } from './ThemeSwitch'

const navVariants = {
  slideDown: { opacity: 0, y: 0 },
  slideUp: { opacity: 100, y: -100 },
}

const SubNav = ({ pageTitle }) => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true)
    }
  }

  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.onChange(() => update())
  })

  return (
    <motion.div
      variants={navVariants}
      animate={hidden ? 'slideUp' : 'slideDown'}
      className="inset-x-0 flex w-full justify-between border-b border-slate-700/50 bg-mint-300/40 py-4 px-8 backdrop-blur dark:border-slate-100/50 dark:bg-indigoDark-900/10"
      transition={{ easeInOut: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
      layout
    >
      <div className="flex w-full items-center justify-start">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="active:bt-purple-400 font-regular text-md mr-4 cursor-pointer font-sans tracking-8 hover:underline-offset-4 lg:text-lg"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <ThemeSwitch />
    </motion.div>
  )
}

export default SubNav
