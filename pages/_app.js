import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import { ThemeProvider } from 'next-themes';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
