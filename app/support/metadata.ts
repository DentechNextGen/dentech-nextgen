import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Support | Dentech Dental Software'
  const description = 'Get expert support for your Dentech dental practice management software. Our dedicated support team is here to help you succeed.'
  const url = `${siteConfig.url}/support`

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Dentech Support',
      url: url,
      description: description
    },
    generateBreadcrumbSchema([
      { name: 'Home', item: `${siteConfig.url}/` },
      { name: 'Support', item: `${siteConfig.url}/support` }
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