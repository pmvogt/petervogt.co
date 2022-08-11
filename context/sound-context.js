import { createContext, useState } from 'react'

const SoundContext = createContext(false)

const SoundProvider = ({ children }) => {
  const [soundToggled, setSoundToggled] = useState(true)
  const soundToggleFunction = () => {
    setSoundToggled(!soundToggled)
  }
  return (
    <SoundContext.Provider value={{ soundToggled, soundToggleFunction }}>
      {children}
    </SoundContext.Provider>
  )
}
export { SoundContext, SoundProvider }
