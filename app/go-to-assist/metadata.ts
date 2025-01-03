import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Remote Support - Go To Assist',
  description: 'Get immediate remote support from Dentech\'s technical team using Go To Assist. Our experts are ready to help resolve any issues quickly and efficiently.',
  openGraph: {
    title: 'Remote Support - Go To Assist | Dentech',
    description: 'Get immediate remote support from Dentech\'s technical team using Go To Assist. Our experts are ready to help resolve any issues quickly and efficiently.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'SupportPage',
        name: 'Remote Support - Go To Assist',
        description: 'Get immediate remote support from Dentech\'s technical team using Go To Assist.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com'
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Go To Assist', item: 'https://dentech.com/go-to-assist' },
      ])
    ])
  }
}

export default metadata 