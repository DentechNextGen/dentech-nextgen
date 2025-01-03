import { Metadata } from 'next'
import { practiceManagementSchema } from '@/lib/schema/software'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Practice Management Software | Dentech'
  const description = 'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, billing, insurance processing, and advanced financial reporting.'
  const url = `${siteConfig.url}/features/practice-management`

  const schemas = [
    practiceManagementSchema,
    generateBreadcrumbSchema([
      { name: 'Home', item: `${siteConfig.url}/` },
      { name: 'Features', item: `${siteConfig.url}/features` },
      { name: 'Practice Management', item: `${siteConfig.url}/features/practice-management` }
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