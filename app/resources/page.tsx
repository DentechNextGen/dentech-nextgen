import { siteConfig } from '@/config'
import { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: `Resources | ${siteConfig.name}`,
  description: 'Helpful resources and articles for dental practices.',
}

export default async function Resources() {
  const articles = await getAllArticles()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resources
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Helpful articles and guides for dental practices.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="flex flex-col items-start">
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${article.slug}`}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {article.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 