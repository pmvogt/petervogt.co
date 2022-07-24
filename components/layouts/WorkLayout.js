import WorkHeader from '../WorkHeader'
import SubNav from '../SubNav'

const WorkLayout = ({ children, headerBg, postTitle }) => {
  return (
    <>
      <div className="bg-gradient-light dark:bg-gradient-dark">
        <div className="sticky top-0 z-30">
          <WorkHeader headerBg={headerBg} postTitle={postTitle} />
          <SubNav />
        </div>
        <article className="container mx-auto pb-8">{children}</article>
      </div>
    </>
  )
}

export default WorkLayout
