import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Search Dentech',
  description: 'Search through Dentech\'s resources, documentation, and content to find the information you need about our dental practice management software.',
  openGraph: {
    title: 'Search | Dentech',
    description: 'Search through Dentech\'s resources, documentation, and content to find the information you need about our dental practice management software.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'SearchResultsPage',
        name: 'Search Dentech',
        description: 'Search through Dentech\'s resources, documentation, and content.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com'
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Search', item: 'https://dentech.com/search' },
      ])
    ])
  }
}

export default metadata 