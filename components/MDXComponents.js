import styles from '../styles/Markdown.module.css';
import CustomImage from './CustomImage';

const MDXComponents = {
  CustomImage,
  p: (props) => (
    <p {...props} className='text-lg text-slate-900 dark:text-eggshell-50' />
  ),
  a: (props) => <a {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
  h2: (props) => (
    <h2
      {...props}
      className='mt-0 mb-4 font-serif font-semibold pl-7 text-7 lg:text-9 xl:text-11 tracking-1 md:leading-8 lg:leading-10 text-slate-900 dark:text-eggshell-50'
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className='my-4 font-sans font-semibold text-1 tracking-4 text-slate-900 dark:text-eggshell-50'
    />
  ),
  ul: (props) => <ul {...props} className='pl-8 text-lg list-disc' />,
};

export default MDXComponents;
