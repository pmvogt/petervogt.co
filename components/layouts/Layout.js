import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div className="min-w-screen min-h-screen bg-gradient-light bg-cover pb-8 dark:bg-gradient-dark">
      {/* <Header /> */}
      <article>{children}</article>
    </div>
  )
}

export default Layout
