import Link from 'next/link'
import { Article } from '@/lib/articles'
import ArticleCard from './ArticleCard'

interface BlogSectionProps {
  articles: Article[]
}

export default function BlogSection({ articles }: BlogSectionProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the Blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Stay up to date with the latest news, updates, and insights from the Dentech team.</p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} horizontal />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-800">
              See All <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 