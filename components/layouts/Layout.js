import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-cover min-w-screen bg-gradient-light dark:bg-gradient-dark'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
