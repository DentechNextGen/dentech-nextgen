import { siteConfig } from '@/src/config'
import { getArticlesByTags } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export default async function Resources() {
  const articles = await getArticlesByTags(['Resources', 'Training'])

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Helpful articles, guides, and training materials to help you get the most out of your dental practice.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="space-y-16">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 