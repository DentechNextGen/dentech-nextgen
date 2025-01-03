import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Managed IT Services for Dental Practices',
  description: 'Comprehensive IT management and support services for dental practices. Let Dentech handle your technology needs while you focus on patient care.',
  openGraph: {
    title: 'Managed IT Services | Dentech',
    description: 'Comprehensive IT management and support services for dental practices. Let Dentech handle your technology needs while you focus on patient care.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Managed Services',
        'Comprehensive IT management and support services for dental practices.',
        'https://dentech.com/features/managed-services',
        {
          applicationCategory: 'IT Management Software',
          operatingSystem: 'Cloud-based',
          features: [
            'Network monitoring',
            'Data backup and recovery',
            'Security management',
            'System updates and maintenance',
            '24/7 technical support'
          ]
        }
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Managed Services', item: 'https://dentech.com/features/managed-services' },
      ])
    ])
  }
}

export default metadata 