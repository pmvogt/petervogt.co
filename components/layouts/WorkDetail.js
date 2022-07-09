import Header from '../Header';

const WorkDetail = ({ children }) => {
  return (
    <div className='min-h-screen min-w-screen bg-indigoDark-900 text-eggshell-50'>
      <Header />
      <article>{children}</article>
    </div>
  );
};

export default WorkDetail;
