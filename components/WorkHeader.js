import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from 'next-themes'
import { motion, useScroll } from 'framer-motion'

import BackButton from './BackButton'
const headerVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const WorkHeader = ({ workPost, headerBg, postTitle }) => {
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
    <motion.header
      className="flex w-full items-center justify-between border-b border-slate-700/50 bg-mesh-l-5 bg-cover bg-center p-4 dark:border-slate-100/50 dark:bg-mesh-l-1"
      variants={headerVariants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ easeInOut: [0.1, 0.25, 0.3, 1], duration: 0.2 }}
    >
      <div className="flex h-full w-full items-center pl-4 lg:py-4">
        <BackButton />
        <h1 className="ml-4 font-serif text-xl font-semibold leading-3 md:text-7 md:leading-5">
          {postTitle}
        </h1>
      </div>
    </motion.header>
  )
}

WorkHeader.propTypes = {
  bg: PropTypes.string,
  postTitle: PropTypes.string,
}

export default WorkHeader
