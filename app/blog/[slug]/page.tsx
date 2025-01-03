import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = 'The Future of Dental Practice Management'
  const description = 'Discover how modern dental practice management software is transforming the industry and improving patient care.'
  const url = `${siteConfig.url}/blog/${params.slug}`
  const datePublished = '2024-01-03T00:00:00.000Z'
  const dateModified = '2024-01-03T00:00:00.000Z'
  const author = 'Dentech Team'
  const image = '/images/blog/future-of-dental-practice-management.jpg'

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      datePublished,
      dateModified,
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/images/logo.svg`
        }
      },
      image: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${image}`
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${siteConfig.url}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${siteConfig.url}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: url
        }
      ]
    }
  ]

  return {
    title: `${title} | Dentech Blog`,
    description,
    openGraph: {
      title: `${title} | Dentech Blog`,
      description,
      url,
      siteName: 'Dentech',
      locale: 'en_US',
      type: 'article',
      publishedTime: datePublished,
      modifiedTime: dateModified,
      authors: [author]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Dentech Blog`,
      description,
      creator: '@dentech',
    },
    other: {
      'script:ld+json': JSON.stringify(schemas)
    }
  }
}

export default function BlogPost() {
  return (
    <main>
      {/* Blog post content */}
    </main>
  )
} 