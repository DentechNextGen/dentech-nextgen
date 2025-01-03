import { Metadata } from 'next'
import { generateArticleSchema } from '@/lib/schema/article'
import { getAllArticles } from '@/lib/articles'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const articles = await getAllArticles()
  const article = articles.find(article => article.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found | Dentech',
      description: 'The requested article could not be found.'
    }
  }

  const articleSchema = generateArticleSchema(
    article.title,
    article.description || article.excerpt || '',
    article.image || '/images/blog-default.webp',
    undefined,
    article.date,
    article.lastModified,
    article.author || 'Dentech Team'
  )

  return {
    title: `${article.title} | Dentech Blog`,
    description: article.description || article.excerpt || '',
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description || article.excerpt || '',
      url: `/blog/${article.slug}`,
      images: [{ url: article.image || '/images/blog-default.webp' }],
      publishedTime: article.date,
      modifiedTime: article.lastModified,
      authors: [article.author || 'Dentech Team']
    },
    alternates: {
      canonical: `/blog/${article.slug}`
    },
    other: {
      'script:ld+json': {
        type: 'application/ld+json',
        text: JSON.stringify(articleSchema)
      }
    }
  }
} 