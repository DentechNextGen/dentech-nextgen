import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Resources & Documentation',
  description: 'Access Dentech\'s comprehensive resources, including user guides, training materials, system requirements, and best practices for dental practice management.',
  openGraph: {
    title: 'Resources & Documentation | Dentech',
    description: 'Access Dentech\'s comprehensive resources, including user guides, training materials, system requirements, and best practices for dental practice management.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Dentech Resources',
        description: 'Access Dentech\'s comprehensive resources, including user guides, training materials, system requirements, and best practices for dental practice management.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com'
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Resources', item: 'https://dentech.com/resources' },
      ])
    ])
  }
}

export default metadata 