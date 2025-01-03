import { Metadata } from 'next'
import { documentManagementSchema } from '@/lib/schema/software'

export const metadata: Metadata = {
  title: 'Document Management Software | Dentech',
  description: 'Transform your dental practice with Dentech\'s DenDox document management software. Features include digital document storage, secure encryption, and HIPAA compliance.',
  alternates: {
    canonical: '/features/document-management'
  },
  other: {
    'script:ld+json': {
      type: 'application/ld+json',
      text: JSON.stringify(documentManagementSchema)
    }
  }
} 