/* eslint-disable react/display-name */
import { useMemo } from 'react'
import Link from 'next/link'
import { getMDXComponent } from 'mdx-bundler/client'

import Image from './Image'
import CustomImage from './CustomImage'

import TOCInline from './TOCInline'
import Pre from './Pre'
import { motion } from 'framer-motion'
import PostLayout from '@/layouts/PostLayout'

export const MDXComponents = {
  Image,
  CustomImage,
  TOCInline,
  a: Link,
  motion,
  pre: Pre,
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
      className="mb-4 mt-0 font-serif text-7 tracking-3 md:leading-5 lg:text-9 lg:leading-8 xl:text-6"
    />
  ),
  h3: (props) => <h3 {...props} className="mb-2 mt-4 font-sans text-1 tracking-4" />,
  wrapper: ({ components, layout, ...rest }) => {
    return <PostLayout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
