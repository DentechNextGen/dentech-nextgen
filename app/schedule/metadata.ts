import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Schedule a Demo | Dentech Dental Software'
  const description = 'Schedule a personalized demo of Dentech\'s dental practice management software. See how our solutions can streamline your practice operations.'
  const url = `${siteConfig.url}/schedule`

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Schedule Dentech Demo',
      url: url,
      description: description
    },
    generateBreadcrumbSchema([
      { name: 'Home', item: `${siteConfig.url}/` },
      { name: 'Schedule Demo', item: `${siteConfig.url}/schedule` }
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