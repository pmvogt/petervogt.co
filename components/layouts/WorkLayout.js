import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'

import Link from '../Link'
import ThemeSwitch from '../ThemeSwitch'
import WorkHeader from '../WorkHeader'
import { Nav } from '../Nav.js'
import CompactNav from '../CompactNav'

const WorkLayout = ({ children, headerBg, postTitle }) => {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false)
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true)
    }
  }

  const headerVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  /** update the onChange callback to call for `update()` **/
  useEffect(() => {
    return scrollY.onChange(() => update())
  })

  return (
    <>
      <div className="bg-gradient-light dark:bg-gradient-dark">
        <div className="sticky top-0 z-30">
          {hidden ? (
            <CompactNav />
          ) : (
            <motion.div transition={{ easeInOut: [0.1, 0.25, 0.3, 1], duration: 0.2 }} layout>
              <WorkHeader headerBg={headerBg} postTitle={postTitle} />
            </motion.div>
          )}
        </div>
        <article className="container mx-auto px-8 py-8">{children}</article>
      </div>
    </>
  )
}

export default WorkLayout
