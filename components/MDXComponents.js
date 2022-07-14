import styles from '../styles/Markdown.module.css';

const MDXComponents = {
  p: (props) => (
    <p {...props} className='text-lg text-slate-900 dark:text-eggshell-50' />
  ),
  a: (props) => <a {...props} className={styles.link} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
  h2: (props) => (
    <h2
      {...props}
      className='mt-0 mb-4 font-serif font-semibold text-7 lg:text-9 xl:text-11 tracking-1 md:leading-8 lg:leading-10 text-slate-900 dark:text-eggshell-50'
    />
  ),
};

export default MDXComponents;
