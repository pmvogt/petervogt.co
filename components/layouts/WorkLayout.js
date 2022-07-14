import WorkHeader from '../WorkHeader';

const WorkLayout = ({ children, headerBg, postTitle }) => {
  return (
    <>
      <WorkHeader headerBg={headerBg} postTitle={postTitle} />
      <div className='min-h-screen bg-cover min-w-screen bg-gradient-light dark:bg-gradient-dark '>
        <article className='container-xl'>{children}</article>
      </div>
    </>
  );
};

export default WorkLayout;
