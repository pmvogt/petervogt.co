import { useRouter } from 'next/router'

import SectionContainer from './SectionContainer'
import Header from './Header'

const LayoutWrapper = ({ children, title, headerBg, headerBgDark }) => {
  const { asPath } = useRouter()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col">
        {asPath === '/' && <Header title={title} headerBg={headerBg} headerBgDark={headerBgDark} />}
        <main className="h-full pt-0 pb-8">{children}</main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
