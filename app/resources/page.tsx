import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const resourcesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Dentech Resources',
  description: 'Access helpful resources, guides, and documentation for Dentech\'s dental practice management software.',
  publisher: {
    '@type': 'Organization',
    name: 'Dentech',
    url: 'https://dentech.com'
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'User Guides',
        description: 'Comprehensive guides for using Dentech software',
        url: 'https://dentech.com/resources#guides'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Video Tutorials',
        description: 'Step-by-step video tutorials for Dentech features',
        url: 'https://dentech.com/resources#tutorials'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Documentation',
        description: 'Technical documentation and API references',
        url: 'https://dentech.com/resources#documentation'
      }
    ]
  }
}

const schemas = [
  resourcesSchema,
  generateBreadcrumbSchema([
    { name: 'Home', item: 'https://dentech.com' },
    { name: 'Resources', item: 'https://dentech.com/resources' }
  ])
]

export const metadata: Metadata = {
  title: 'Resources | Dentech',
  description: 'Access helpful resources, guides, and documentation for Dentech\'s dental practice management software. Find everything you need to succeed.',
  openGraph: {
    title: 'Resources | Dentech',
    description: 'Access helpful resources, guides, and documentation for Dentech\'s dental practice management software. Find everything you need to succeed.',
    url: 'https://dentech.com/resources',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources | Dentech',
    description: 'Access helpful resources, guides, and documentation for Dentech\'s dental practice management software. Find everything you need to succeed.',
    creator: '@dentech',
  },
  other: {
    'script:ld+json': JSON.stringify(schemas)
  }
}

export default function ResourcesPage() {
  return (
    <main>
      {/* Resources page content */}
    </main>
  )
} 