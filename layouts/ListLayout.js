import { AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import formatDate from '@/lib/utils/formatDate'

import Link from 'next/link'

export default function ListLayout({ posts, title }) {
  return (
    <AnimatePresence mode="wait">
      <Header />
      <div className="w-full px-8 py-4 md:pt-0">
        <ul className="w-full space-y-8">
          {posts.map((frontMatter) => {
            const { slug, date, title } = frontMatter
            return (
              <li
                key={slug}
                className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-4 shadow-xl dark:from-violet-500 dark:to-pink-500 md:pt-2"
              >
                <article className="w-full">
                  <div className="space-between flex w-full items-center">
                    <div>
                      <h3 className="text-2xl tracking-tight flex-wrap font-bold leading-4">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div>
                        <time dateTime={date}>{formatDate(date)}</time>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </AnimatePresence>
  )
}
