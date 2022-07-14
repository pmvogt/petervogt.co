import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen pb-8 bg-cover min-w-screen bg-gradient-light dark:bg-gradient-dark '>
      {/* <Header /> */}
      <article>{children}</article>
    </div>
  );
};

export default Layout;
