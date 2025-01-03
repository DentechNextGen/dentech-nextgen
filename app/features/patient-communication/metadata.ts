import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Patient Communication Software for Dental Practices',
  description: 'Enhance patient engagement with automated appointment reminders, two-way texting, email campaigns, and patient recall systems.',
  openGraph: {
    title: 'Patient Communication | Dentech',
    description: 'Enhance patient engagement with automated appointment reminders, two-way texting, email campaigns, and patient recall systems.',
    images: [
      {
        url: 'https://dentech.com/images/features/patient-communication-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Patient Communication Software Interface'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Communication | Dentech',
    description: 'Enhance patient engagement with automated reminders, texting, and email campaigns.',
    images: ['https://dentech.com/images/features/patient-communication-hero.jpg']
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Patient Communication',
        'Comprehensive patient communication solution for dental practices.',
        'https://dentech.com/features/patient-communication',
        {
          applicationCategory: 'Patient Communication Software',
          operatingSystem: 'Cloud-based',
          features: [
            'Automated appointment reminders',
            'Two-way texting',
            'Email campaigns',
            'Patient recall system',
            'Online appointment booking',
            'Patient satisfaction surveys'
          ],
          screenshot: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/features/patient-communication-screenshot.jpg',
            caption: 'Dentech Patient Communication Dashboard'
          }
        }
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Patient Communication', item: 'https://dentech.com/features/patient-communication' },
      ])
    ])
  }
}

export default metadata 