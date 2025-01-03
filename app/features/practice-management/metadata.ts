import { Metadata } from 'next'
import { generateSoftwareSchema, generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Practice Management Software',
  description: 'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, billing, insurance processing, and advanced financial reporting.',
  openGraph: {
    title: 'Practice Management Software | Dentech',
    description: 'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, billing, insurance processing, and advanced financial reporting.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Practice Management',
        'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, billing, insurance processing, and advanced financial reporting.',
        'https://dentech.com/features/practice-management'
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Practice Management', item: 'https://dentech.com/features/practice-management' },
      ])
    ])
  }
}

export default metadata 