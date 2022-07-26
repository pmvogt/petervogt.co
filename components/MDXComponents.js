import Image from './Image'

const MDXComponents = {
  Image,
  p: (props) => (
    <p {...props} className="break-words py-2 text-left text-lg text-slate-900 dark:text-eggshell-50 md:py-4" />
  ),
  a: (props) => <a {...props} className="active:bt-purple-400 cursor-pointer font-sans tracking-8 active:border-b-2" />,
  h1: (props) => (
    <h1
      {...props}
      className="dark:border-eggshell-90/10 border-b border-slate-900/10 font-serif text-xl font-semibold leading-3 tracking-3 md:text-7 md:leading-5"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-0 mb-4 font-serif text-7 font-semibold tracking-3 text-slate-900 dark:text-eggshell-50 md:leading-8 lg:text-9 lg:leading-10 xl:text-11"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="mt-4 mb-2 font-sans text-1 font-semibold tracking-4 text-slate-900 dark:text-eggshell-50"
    />
  ),
  ul: (props) => <ul {...props} className="list-disc pl-8 text-lg" />,
}

export default MDXComponents
