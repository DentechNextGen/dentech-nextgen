import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'About Dentech | Leading Dental Practice Management Software'
  const description = 'Learn about Dentech\'s mission to revolutionize dental practice management through innovative software solutions and exceptional service.'
  const url = `${siteConfig.url}/about`

  const schemas = [
    generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
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