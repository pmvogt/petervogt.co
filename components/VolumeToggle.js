import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { VolumeOn, VolumeOff } from './Icons'

import { SoundContext } from '../context/sound-context'

const VolumeToggle = ({ isToggled }) => {
  const { soundToggled, soundToggleFunction } = useContext(SoundContext)

  return (
    <AnimatePresence>
      <motion.button
        className="mr-4 rounded-md bg-gray-300 py-2 px-4 outline-none transition-all duration-150 ease-linear dark:bg-opacity-10"
        type="button"
        onClick={soundToggleFunction}
        isToggled={isToggled}
      >
        {soundToggled ? <VolumeOn /> : <VolumeOff />}
      </motion.button>
    </AnimatePresence>
  )
}

export default VolumeToggle
