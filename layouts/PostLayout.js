import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'

import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import WorkHeader from '@/components/WorkHeader'

export default function PostLayout({ frontMatter, children }) {
  const { slug, fileName, date, title, images, tags, headerBg, headerBgDark } = frontMatter

  return (
    <SectionContainer>
      <WorkHeader
        headerBg={frontMatter.headerBg}
        headerBgDark={frontMatter.headerBgDark}
        title={frontMatter.title}
      />
      <ScrollTopAndComment />
      <article className="bg-gradient-light dark:bg-gradient-dark">
        <div className="px-8 xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-4xl py-8 dark:prose-dark md:pt-8">{children}</div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
