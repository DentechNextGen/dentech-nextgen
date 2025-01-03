import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { getAllArticles } from '@/lib/articles'

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// @ts-ignore - Next.js 15.1 type issue with page props
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params
  const articles = await getAllArticles()
  const article = articles.find(article => article.slug === slug)

  if (!article) {
    notFound()
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            {article.image && (
              <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-12">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 1400px"
                  priority
                />
              </div>
            )}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              {article.author && article.authorImage && (
                <div className="flex items-center gap-3">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="rounded-full bg-white/10"
                  />
                  <span className="font-medium text-white">{article.author}</span>
                </div>
              )}
              <time dateTime={article.date} className="text-gray-300">
                {formattedDate}
              </time>
              {article.tags?.map((tag) => (
                <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-4xl">
            <div className="prose prose-lg prose-slate mx-auto">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 