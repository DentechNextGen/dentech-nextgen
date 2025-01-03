import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Electronic Services for Dental Practices',
  description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, and automated payment processing.',
  openGraph: {
    title: 'Electronic Services | Dentech',
    description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, and automated payment processing.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Electronic Services',
        'Comprehensive electronic services solution for dental practices.',
        'https://dentech.com/features/eservices',
        {
          applicationCategory: 'Healthcare Services Software',
          operatingSystem: 'Cloud-based',
          features: [
            'Electronic claims submission',
            'Real-time eligibility verification',
            'Automated payment processing',
            'Electronic remittance',
            'Claims tracking',
            'Attachment processing'
          ]
        }
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Electronic Services', item: 'https://dentech.com/features/eservices' },
      ])
    ])
  }
}

export default metadata 