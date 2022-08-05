import Card from '@/components/Card'
import Header from '@/components/Header'

import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const works = await getAllFilesFrontMatter('portfolio')

  return { props: { works } }
}

export default function Home({ works }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ul className="grid h-full gap-8 sm:grid-cols-1 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        {works.map((frontMatter) => {
          const { slug, date, title, bg, darkBg, headerBg, headerBgDark } = frontMatter
          return (
            <li key={slug} className="h-full">
              <article>
                <Card title={title} href={`/work/${slug}`} bg={bg} darkBg={darkBg} />
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}
