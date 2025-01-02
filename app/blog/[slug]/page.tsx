import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
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

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <article className="mx-auto max-w-2xl">
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first flex items-center text-base text-gray-400"
            >
              <span className="h-4 w-0.5 rounded-full bg-gray-200" />
              <span className="ml-3">{article.date}</span>
            </time>
          </header>
          <div className="mt-8 prose prose-slate mx-auto prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:font-semibold prose-strong:text-slate-900 prose-code:text-slate-900 prose-pre:bg-slate-900 prose-blockquote:border-l-blue-500 prose-blockquote:text-slate-700 prose-blockquote:font-normal prose-blockquote:not-italic prose-hr:border-slate-200">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
} 