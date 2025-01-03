import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'

export default async function Blog() {
  const articles = await getAllArticles()
  
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              From the Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stay up to date with the latest news, updates, and insights from the Dentech team.
            </p>
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