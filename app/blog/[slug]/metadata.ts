import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { getAllArticles } from '@/lib/articles'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dentech.com'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const articles = await getAllArticles()
  const article = articles.find(article => article.slug === params.slug)

  if (!article) {
    return {}
  }

  const articleSchema = generateArticleSchema(
    article.title,
    article.description || article.excerpt || '',
    article.image || '/images/blog-default.jpg',
    article.imageCaption,
    article.date,
    article.lastModified,
    article.author || 'Dentech Team'
  )

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: baseUrl },
    { name: 'Blog', item: `${baseUrl}/blog` },
    { name: article.title, item: `${baseUrl}/blog/${article.slug}` },
  ])

  return {
    title: article.title,
    description: article.description || article.excerpt,
    openGraph: {
      title: `${article.title} | Dentech Blog`,
      description: article.description || article.excerpt,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.lastModified,
      authors: article.author ? [article.author] : ['Dentech Team'],
      url: `${baseUrl}/blog/${article.slug}`,
      images: [
        {
          url: article.image || '/images/blog-default.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description || article.excerpt,
      images: [article.image || '/images/blog-default.jpg'],
    },
    other: {
      'script:ld+json': JSON.stringify([
        articleSchema,
        breadcrumbSchema
      ])
    }
  }
}

export default generateMetadata 