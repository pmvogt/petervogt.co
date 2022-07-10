import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-cover min-w-screen bg-gradient-dark text-eggshell-50'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
