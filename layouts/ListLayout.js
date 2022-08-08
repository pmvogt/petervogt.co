import Header from '@/components/Header'
import Link from '@/components/Link'

export default function ListLayout({ posts, title }) {
  return (
    <>
      <Header />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul>
          {posts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl tracking-tight font-bold leading-8">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {summary}
                    </div>
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
