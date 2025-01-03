import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'About Dentech | Dental Practice Management Software'
  const description = 'Learn about Dentech, a leading provider of dental practice management software with over 30 years of experience serving dental practices across the United States.'
  const url = `${siteConfig.url}/about`

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Dentech',
      url: siteConfig.url,
      description: 'Leading provider of dental practice management software and solutions.',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`
      }
    },
    generateBreadcrumbSchema([
      { name: 'Home', item: `${siteConfig.url}/` },
      { name: 'About', item: `${siteConfig.url}/about` }
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