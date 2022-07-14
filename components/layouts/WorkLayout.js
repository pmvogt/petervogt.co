import WorkHeader from '../WorkHeader';

const WorkLayout = ({ children, headerBg, postTitle }) => {
  return (
    <>
      <WorkHeader headerBg={headerBg} postTitle={postTitle} />
      <div className='bg-gradient-light dark:bg-gradient-dark'>
        <article>{children}</article>
      </div>
    </>
  );
};

export default WorkLayout;
