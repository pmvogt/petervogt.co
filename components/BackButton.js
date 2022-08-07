import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMotionTimeline } from 'motion-hooks'
import { stagger } from 'motion'

const BackButton = () => {
  const router = useRouter()

  const { play, isFinished, replay } = useMotionTimeline([
    ['.listItem', { rotate: -20, opacity: 0 }],
    ['.listItem', { rotate: -0, opacity: 1 }],
  ])

  useEffect(() => {
    play()
  }, [])

  return (
    <button disabled={!isFinished} type="button" onClick={() => router.back()}>
      <svg
        className="h-6 w-6 text-eggshell-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          className="listItem"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  )
}

export default BackButton
