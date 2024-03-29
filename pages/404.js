import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-6xl tracking-tight md:text-8xl md:leading-14 font-extrabold leading-9 text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="md:text-2xl mb-4 text-xl font-bold leading-normal">
            Sorry we couldn't find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <button className="focus:shadow-outline-blue border-transparent text-white inline rounded-lg border bg-blue-600 px-4 py-2 text-sm font-medium leading-5 shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
