import { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Blog - Dentech',
  description: 'Stay up to date with the latest news, updates, and insights from the Dentech team.',
}

export default async function Blog() {
  const articles = await getAllArticles()
  
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the Blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Stay up to date with the latest news, updates, and insights from the Dentech team.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} horizontal />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 