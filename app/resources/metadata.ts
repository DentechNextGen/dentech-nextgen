import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Resources | Dentech Dental Software'
  const description = 'Access helpful resources, guides, and documentation for Dentech dental practice management software. Learn how to maximize your practice efficiency.'
  const url = `${siteConfig.url}/resources`

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Dentech Resources',
      url: url,
      description: description
    },
    generateBreadcrumbSchema([
      { name: 'Home', item: `${siteConfig.url}/` },
      { name: 'Resources', item: `${siteConfig.url}/resources` }
    ])
  ]

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Dentech',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@dentech',
    },
    other: {
      'script:ld+json': JSON.stringify(schemas)
    }
  }
} 