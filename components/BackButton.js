import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { animations } from '@/data/animations'

const BackButton = () => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      <motion.svg
        className="h-6 w-6 text-eggshell-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={animations.pathInitial}
        animate={animations.pathAnimate}
      >
        <path
          className="listItem"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </motion.svg>
    </button>
  )
}

export default BackButton
