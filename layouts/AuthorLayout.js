import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-6xl md:leading-14 font-extrabold leading-9 text-gray-900 dark:text-gray-100 sm:leading-10">
            About
          </h1>
        </div>

        <div className="prose mx-auto max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
