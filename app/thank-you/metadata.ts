import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Thank You | Dentech',
  description: 'Thank you for your interest in Dentech\'s dental practice management software. We\'ll be in touch with you shortly.',
  openGraph: {
    title: 'Thank You | Dentech',
    description: 'Thank you for your interest in Dentech\'s dental practice management software. We\'ll be in touch with you shortly.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Thank You',
        description: 'Thank you for your interest in Dentech\'s dental practice management software.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com'
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Thank You', item: 'https://dentech.com/thank-you' },
      ])
    ])
  }
}

export default metadata 