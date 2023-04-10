import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import SectionContainer from './SectionContainer'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  return (
    <SectionContainer>
      <AnimatePresence initial={false} mode="wait">
        <div className="flex h-screen flex-col overflow-y-scroll bg-gradient-light pb-8 dark:bg-gradient-dark">
          <motion.main
            key={router.asPath}
            initial={{
              opacity: 0,
              y: 20,
            }}
            layout
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {children}
          </motion.main>
        </div>
      </AnimatePresence>
    </SectionContainer>
  )
}

export default LayoutWrapper
