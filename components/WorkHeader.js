import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion, useScroll } from 'framer-motion'

import BackButton from './BackButton'

const WorkHeader = ({ postTitle }) => {
  return (
    <AnimatePresence>
      <motion.header className="flex w-full items-center border-b border-slate-700/50 bg-mesh-l-5 bg-cover bg-center py-4  dark:border-slate-100/50 dark:bg-mesh-l-1">
        <motion.div className="container mx-auto flex  w-full items-center pl-4 lg:py-1">
          <BackButton />
          <motion.h1 className="ml-4 font-serif text-xl font-semibold leading-3 md:text-7 md:leading-5">
            {postTitle}
          </motion.h1>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  )
}

WorkHeader.propTypes = {
  bg: PropTypes.string,
  postTitle: PropTypes.string,
}

export default WorkHeader
