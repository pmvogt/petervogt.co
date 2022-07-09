import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
