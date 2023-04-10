import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { VolumeOn, VolumeOff } from './Icons'

import { SoundContext } from '../context/sound-context'

const VolumeToggle = () => {
  const { soundToggled, soundToggleFunction } = useContext(SoundContext)

  return (
    <AnimatePresence>
      <motion.button
        className="mr-4 rounded-md bg-gray-300 px-4 py-2 outline-none transition-all duration-150 ease-linear dark:bg-opacity-10"
        type="button"
        onClick={soundToggleFunction}
      >
        {soundToggled ? <VolumeOn /> : <VolumeOff />}
      </motion.button>
    </AnimatePresence>
  )
}

export default VolumeToggle
