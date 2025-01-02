import { siteConfig } from '@/config'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getArticle, getArticles } from '@/lib/articles'
import ReactMarkdown from 'react-markdown'

type PageProps = {
  params: {
    slug: string
  }
  searchParams: Record<string, string | string[] | undefined>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    }
  }

  const { title, description, image, author } = article.frontmatter

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    authors: [{ name: author }],
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      type: 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  const { frontmatter, content } = article
  const { title, description, date, author, authorImage, image, alt, tags } = frontmatter

  return (
    <article className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Article header */}
        <header className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-x-4 text-xs">
            <time dateTime={date} className="text-gray-500">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="mt-6 text-4xl font-display font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {description}
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center justify-center gap-x-4">
            <Image
              src={authorImage}
              alt={author}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                {author}
              </p>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="relative mt-16 aspect-[2/1] w-full">
          <Image
            src={image}
            alt={alt}
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>

        {/* Article content */}
        <div className="prose prose-lg prose-slate mt-16 mx-auto prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:text-primary-600 hover:prose-a:text-primary-500 prose-strong:font-semibold prose-strong:text-slate-900 prose-code:text-slate-900 prose-pre:bg-slate-900 prose-blockquote:border-l-primary-500 prose-blockquote:text-slate-700 prose-blockquote:font-normal prose-blockquote:not-italic prose-hr:border-slate-200">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
} 