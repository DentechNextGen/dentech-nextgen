import { siteConfig } from '@/config'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { getAllArticles } from '@/lib/articles'

type PageProps = {
  params: {
    slug: string
  }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const articles = await getAllArticles()
  const article = articles.find(article => article.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    }
  }

  return {
    title: `${article.title} | ${siteConfig.name}`,
    description: article.description,
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const articles = await getAllArticles()
  const article = articles.find(article => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Article header */}
        <header className="mx-auto max-w-2xl text-center">
          <time dateTime={article.date} className="text-sm text-gray-500">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>

          <h1 className="mt-6 text-4xl font-display font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {article.description}
          </p>
        </header>

        {/* Article content */}
        <div className="prose prose-lg prose-slate mt-16 mx-auto prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:text-primary-600 hover:prose-a:text-primary-500 prose-strong:font-semibold prose-strong:text-slate-900 prose-code:text-slate-900 prose-pre:bg-slate-900 prose-blockquote:border-l-primary-500 prose-blockquote:text-slate-700 prose-blockquote:font-normal prose-blockquote:not-italic prose-hr:border-slate-200">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
} 