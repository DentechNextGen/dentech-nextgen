import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Dentech Blog - Dental Practice Management Insights',
  description: 'Stay informed with the latest insights, tips, and updates about dental practice management, industry trends, and Dentech software features.',
  openGraph: {
    title: 'Blog | Dentech',
    description: 'Stay informed with the latest insights, tips, and updates about dental practice management, industry trends, and Dentech software features.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Dentech Blog',
        description: 'Latest insights and updates about dental practice management and software.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/logo.jpg'
          }
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Blog', item: 'https://dentech.com/blog' },
      ])
    ])
  }
}

export default metadata 