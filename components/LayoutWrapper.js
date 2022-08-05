import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Header from './Header'

const LayoutWrapper = ({ children, title, headerBg, headerBgDark }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col">
        <Header workHeader title={title} headerBg={headerBg} headerBgDark={headerBgDark} />
        <main className="h-full pt-0">{children}</main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
