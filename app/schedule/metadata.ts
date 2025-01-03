import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Schedule a Demo',
  description: 'Schedule a personalized demo of Dentech\'s dental practice management software. See how our solutions can streamline your practice operations.',
  openGraph: {
    title: 'Schedule a Demo | Dentech',
    description: 'Schedule a personalized demo of Dentech\'s dental practice management software. See how our solutions can streamline your practice operations.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Schedule a Demo',
        description: 'Schedule a personalized demo of Dentech\'s dental practice management software.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com'
        },
        mainEntity: {
          '@type': 'WebForm',
          name: 'Demo Request Form',
          url: 'https://dentech.com/schedule'
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Schedule Demo', item: 'https://dentech.com/schedule' },
      ])
    ])
  }
}

export default metadata 