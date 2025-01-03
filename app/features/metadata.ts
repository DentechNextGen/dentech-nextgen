import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Dental Practice Management Software Features',
  description: 'Explore Dentech\'s comprehensive suite of dental practice management features, including practice management, voice-activated charting, digital imaging, and more.',
  openGraph: {
    title: 'Features | Dentech',
    description: 'Explore Dentech\'s comprehensive suite of dental practice management features, including practice management, voice-activated charting, digital imaging, and more.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Dentech Software Features',
        description: 'Comprehensive suite of dental practice management features.',
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
              name: 'Practice Management',
              url: 'https://dentech.com/features/practice-management'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Voice-Activated Charting',
              url: 'https://dentech.com/features/voice-activated-charting'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Digital Imaging',
              url: 'https://dentech.com/features/digital-imaging'
            }
          ]
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
      ])
    ])
  }
}

export default metadata 