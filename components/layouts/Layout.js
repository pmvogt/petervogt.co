import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen min-w-screen bg-indigoDark-900 text-eggshell-50'>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
