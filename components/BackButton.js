import { useRouter } from 'next/router'
const BackButton = () => {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.back()}>
      <svg
        className="h-6 w-6 text-slate-900 dark:text-eggshell-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
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
