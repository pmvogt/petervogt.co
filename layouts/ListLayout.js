import Header from '@/components/Header'
import formatDate from '@/lib/utils/formatDate'

import Link from '@/components/Link'

export default function ListLayout({ posts, title }) {
  return (
    <>
      <Header />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="container w-full px-8">
          {posts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li
                key={slug}
                className="outline-transparent rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 p-4 shadow-xl dark:from-violet-500 dark:to-pink-500"
              >
                <article className="w-full space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="w-full space-y-3 xl:col-span-3">
                    <div className="space-between flex w-full flex-col items-center md:flex-row">
                      <h3 className="text-2xl tracking-tight font-bold leading-8">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </div>
                    <p>Content under construction</p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
