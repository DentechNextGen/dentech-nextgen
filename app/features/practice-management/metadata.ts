import { Metadata } from 'next'
import { practiceManagementSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'

const metadata: Metadata = {
  title: 'Practice Management Software',
  description: 'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, billing, insurance processing, and advanced financial reporting.',
  openGraph: {
    title: 'Practice Management Software | Dentech',
    description: 'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, billing, insurance processing, and advanced financial reporting.',
    url: 'https://dentech.com/features/practice-management',
  },
  other: {
    'script:ld+json': JSON.stringify([
      practiceManagementSchema,
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Practice Management', item: 'https://dentech.com/features/practice-management' },
      ])
    ])
  }
}

export default metadata 