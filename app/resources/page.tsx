import { siteConfig } from '@/src/config'
import { getArticlesByTags } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Banner from '@/app/components/Banner'
import {
  CalendarIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const pdfResources = [
  {
    title: 'End of Year Procedures',
    description: '2023 is coming to an end! Prepare yourself by completing these procedures at the end of the year.',
    href: '/docs/End-of-Year-2022.pdf',
    icon: CalendarIcon
  },
  {
    title: 'Tesia Dental Payer Listing – Extended Eligibility',
    description: 'For The Latest Dental Payer ID Number List.',
    href: '/docs/Tesia-Dental-Payer-Listing-v05.14.25.pdf',
    icon: ClipboardDocumentListIcon
  },
  {
    title: 'Business Associate Agreement',
    description: 'Preview our Business Associate Agreement.',
    href: '/docs/Business-Associate-Agreement-2021.pdf',
    icon: DocumentTextIcon
  },
  {
    title: 'License Transfer Instructions and Important Information',
    description: 'Looking to transfer a license to a new ownership? Take a look at the instructions here to complete a License Transfer.',
    href: '/docs/License-Transfer-Instructions-and-Important-Information.pdf',
    icon: ArrowPathIcon
  }
]

export default async function Resources() {
  const articles = await getArticlesByTags(['Resources', 'Training'])

  return (
    <main className="bg-white">
      <Banner 
        title="Resources"
        content="Helpful articles, guides, and training materials to help you get the most out of your dental practice."
      />

      {/* PDF Resources Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Important Documents
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Download essential documents and guides for your practice.
            </p>
            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {pdfResources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={resource.title}
                    href={resource.href}
                    className="relative flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-lg hover:ring-lime-500"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lime-500/10">
                      <Icon className="h-6 w-6 text-lime-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-gray-900">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} horizontal />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 