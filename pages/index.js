import Header from '@/components/Header'

import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const works = await getAllFilesFrontMatter('portfolio')
  works.reverse()

  return { props: { works } }
}

export default function Home({ works, title, headerBg, headerBgDark }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Header title={title} headerBg={headerBg} headerBgDark={headerBgDark} />

      <ul className="grid w-full px-8 xs:gap-2 xs:pt-4 sm:grid-cols-1 sm:gap-8 sm:pt-8 md:grid-cols-2 md:gap-8 md:pt-0 xl:grid-cols-4">
        {works.map((frontMatter) => {
          const { slug, date, title, bg, darkBg, headerBg, headerBgDark } = frontMatter
          return (
            <li key={slug} className="xs:h-32 sm:h-36 md:h-80 lg:h-72 xl:h-108">
              <article className="h-full">
                <Card title={title} href={`/work/${slug}`} bg={bg} darkBg={darkBg} />
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}
