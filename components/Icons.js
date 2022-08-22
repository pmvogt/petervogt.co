import { motion } from 'framer-motion'
import React from 'react'

import { animations } from '@/data/animations'

export const Dark = () => {
  return (
    <>
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        stroke="none"
        d="M0 0h24v24H0z"
      />
      <motion.path
        fill="currentColor"
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12"
      />
    </>
  )
}

export const Light = () => {
  return (
    <motion.path
      initial={animations.pathInitial}
      animate={animations.pathAnimate}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  )
}

export const Github = () => {
  return (
    <motion.svg
      className="mx-6 h-5 w-5 md:mx-6 md:h-6 md:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransition}
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      />
    </motion.svg>
  )
}

export const Terminal = () => {
  return (
    <motion.svg
      className="h-8 w-8 text-slate-900 dark:text-eggshell-50"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransition}
        stroke="none"
        d="M0 0h24v24H0z"
      />
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransition}
        d="M5 7l5 5l-5 5"
      />
      <motion.line
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransition}
        x1="12"
        y1="19"
        x2="19"
        y2="19"
      />
    </motion.svg>
  )
}

export const Dribbble = () => {
  return (
    <motion.svg
      className="h-5 w-5 md:h-6 md:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.circle
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransitionLong}
        cx="12"
        cy="12"
        r="10"
      />
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransitionLong}
        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
      />
    </motion.svg>
  )
}

export const Figma = () => {
  return (
    <motion.svg
      className="h-5 w-5 md:h-6 md:w-6"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransition}
        d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
      />
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransitionLong}
        d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
      />
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransition}
        d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
      />
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransitionLong}
        d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
      />
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        transition={animations.pathTransitionLong}
        d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
      />
    </motion.svg>
  )
}

export const VolumeOn = () => {
  return (
    <motion.svg
      className="h-4 w-4 text-slate-900 dark:text-eggshell-50 md:h-8 md:w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
      />
    </motion.svg>
  )
}

export const VolumeOff = () => {
  return (
    <motion.svg
      className="h-4 w-4 text-slate-900 dark:text-eggshell-50 md:h-8 md:w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      initial={animations.pathInitial}
      animate={animations.pathAnimate}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        clipRule="evenodd"
      />
      <motion.path
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
      />
    </motion.svg>
  )
}
