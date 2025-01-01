import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getArticles } from '@/lib/articles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const articles = await getArticles()
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.frontmatter.title} - Dentech Blog`,
    description: article.frontmatter.desc,
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function BlogPost({ params }: Props) {
  const articles = await getArticles()
  const article = articles.find((article) => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  // Read the MDX file content
  const fullPath = path.join(process.cwd(), 'public/articles', `${params.slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
        {/* Article header */}
        <header>
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={article.frontmatter.createdAt} className="text-gray-500">
              {new Date(article.frontmatter.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            {article.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {article.frontmatter.title}
          </h1>

          {/* Author */}
          <div className="mt-8 flex items-center gap-x-4">
            <Image
              src={article.frontmatter.authorImage}
              alt={article.frontmatter.author}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                {article.frontmatter.author}
              </p>
              <p className="text-gray-600">Chief Operating Officer</p>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="relative mt-16 aspect-[2/1] w-full">
          <Image
            src={article.frontmatter.image}
            alt={article.frontmatter.alt}
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>

        {/* Article content */}
        <div className="prose prose-lg prose-slate mt-16 prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-slate-500 prose-a:font-semibold prose-a:text-primary-600 hover:prose-a:text-primary-500 prose-strong:font-semibold prose-strong:text-slate-900 prose-code:text-slate-900 prose-pre:bg-slate-900 prose-blockquote:border-l-primary-500 prose-blockquote:text-slate-700 prose-blockquote:font-normal prose-blockquote:not-italic prose-hr:border-slate-200">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  )
} 