import Header from '../Header';

const WorkLayout = ({ children }) => {
  return (
    <div className='min-h-screen min-w-screen bg-gradient-dark text-eggshell-50'>
      <Header />
      <article>{children}</article>
    </div>
  );
};

export default WorkLayout;
