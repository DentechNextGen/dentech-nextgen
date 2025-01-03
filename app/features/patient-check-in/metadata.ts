import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Digital Patient Check-In Software for Dental Practices',
  description: 'Streamline your patient check-in process with digital forms, contactless registration, and automated insurance verification.',
  openGraph: {
    title: 'Patient Check-In | Dentech',
    description: 'Streamline your patient check-in process with digital forms, contactless registration, and automated insurance verification.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Patient Check-In',
        'Digital patient check-in solution for dental practices.',
        'https://dentech.com/features/patient-check-in',
        {
          applicationCategory: 'Patient Management Software',
          operatingSystem: 'Cloud-based',
          features: [
            'Digital registration forms',
            'Contactless check-in',
            'Insurance verification',
            'Electronic signature capture',
            'Medical history updates',
            'HIPAA compliance'
          ]
        }
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Patient Check-In', item: 'https://dentech.com/features/patient-check-in' },
      ])
    ])
  }
}

export default metadata 