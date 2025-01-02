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

export default async function BlogPost(props: any) {
  const articles = await getAllArticles()
  const article = articles.find(article => article.slug === props.params.slug)

  if (!article) {
    notFound()
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          {article.image && (
            <div className="relative aspect-[2/1] mb-12 overflow-hidden rounded-xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6 flex items-center gap-x-4 text-sm">
              {article.author && article.authorImage && (
                <div className="flex items-center gap-x-2">
                  <Image
                    src={article.authorImage}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{article.author}</p>
                  </div>
                </div>
              )}
              <time dateTime={article.date} className="text-gray-500">
                {formattedDate}
              </time>
              {article.tags?.map((tag) => (
                <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <div className="mt-12 prose prose-lg prose-slate mx-auto prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:text-lime-600 hover:prose-a:text-lime-500 prose-strong:font-semibold prose-strong:text-slate-900 prose-code:text-slate-900 prose-pre:bg-slate-900 prose-blockquote:border-l-lime-600 prose-blockquote:text-slate-700 prose-blockquote:font-normal prose-blockquote:not-italic prose-hr:border-slate-200">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
} 