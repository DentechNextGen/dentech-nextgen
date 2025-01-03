import { Metadata } from 'next'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real app, you would fetch the article data here
  const article = {
    title: 'Sample Blog Post',
    description: 'This is a sample blog post description.',
    url: `https://dentech.com/blog/${params.slug}`,
    datePublished: '2024-01-03',
    dateModified: '2024-01-03',
    author: 'Jane Kaminski',
    image: 'https://dentech.com/images/blog/sample.webp'
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: `${article.title} | Dentech Blog`,
      description: article.description,
    },
    other: {
      'script:ld+json': JSON.stringify([
        generateArticleSchema(article),
        generateBreadcrumbSchema([
          { name: 'Home', item: 'https://dentech.com' },
          { name: 'Blog', item: 'https://dentech.com/blog' },
          { name: article.title, item: article.url },
        ])
      ])
    }
  }
}

export default generateMetadata 