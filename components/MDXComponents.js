/* eslint-disable react/display-name */
import { useMemo, useEffect } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { Figma } from 'mdx-embed'

import Image from './Image'
import CustomImage from './CustomImage'

import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'

export const MDXComponents = {
  Image,
  CustomImage,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  Figma,
  p: (props) => (
    <p
      {...props}
      className="break-words py-4 text-lg leading-4 text-slate-900 dark:text-eggshell-50"
    />
  ),
  h1: (props) => (
    <h1
      {...props}
      className="dark:border-eggshell-90/10 border-b border-slate-900/10 text-xl leading-3 tracking-3 md:text-7 md:leading-5"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-0 mb-4 font-serif text-7 tracking-3 md:leading-5 lg:text-9 lg:leading-8 xl:text-6"
    />
  ),
  h3: (props) => <h3 {...props} className="mt-4 mb-2 font-sans text-1 tracking-4" />,

  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
