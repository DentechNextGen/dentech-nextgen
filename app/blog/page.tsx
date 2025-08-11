import { getAllArticles } from '@/lib/articles'
import ArticleCard from '@/components/ArticleCard'
import Banner from '@/app/components/Banner'

export default async function Blog() {
  const articles = await getAllArticles()
  
  return (
    <main className="bg-white">
      <Banner 
        title="From the Blog"
        content="Stay up to date with the latest news, updates, and insights from the Dentech team."
      />

      {/* Articles Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="mt-8 space-y-12 lg:mt-12 lg:space-y-16">
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