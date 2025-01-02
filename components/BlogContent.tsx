import Link from 'next/link'
import { Article } from '@/lib/articles'

interface BlogContentProps {
  articles: Article[]
}

export default function BlogContent({ articles }: BlogContentProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn about dental practice management and industry insights.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {articles.map((article) => (
              <article key={article.slug} className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
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
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 