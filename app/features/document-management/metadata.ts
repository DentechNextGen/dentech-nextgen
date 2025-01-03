import { Metadata } from 'next'
import { generateSoftwareSchema, generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Document Management Software',
  description: 'Transform your dental practice with Dentech\'s DenDox document management system. Go beyond paperless with efficient document production, storage, and access capabilities.',
  openGraph: {
    title: 'Document Management Software | Dentech',
    description: 'Transform your dental practice with Dentech\'s DenDox document management system. Go beyond paperless with efficient document production, storage, and access capabilities.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Document Management',
        'Transform your dental practice with Dentech\'s DenDox document management system. Go beyond paperless with efficient document production, storage, and access capabilities.',
        'https://dentech.com/features/document-management'
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Document Management', item: 'https://dentech.com/features/document-management' },
      ])
    ])
  }
}

export default metadata 