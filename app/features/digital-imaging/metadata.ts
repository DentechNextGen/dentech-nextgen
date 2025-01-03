import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Digital Imaging Software for Dental Practices',
  description: 'Advanced dental imaging software with seamless integration, image enhancement tools, and secure storage for all your diagnostic imaging needs.',
  openGraph: {
    title: 'Digital Imaging | Dentech',
    description: 'Advanced dental imaging software with seamless integration, image enhancement tools, and secure storage for all your diagnostic imaging needs.',
    images: [
      {
        url: 'https://dentech.com/images/features/digital-imaging-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Digital Imaging Software Interface'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Imaging | Dentech',
    description: 'Advanced dental imaging software with seamless integration, image enhancement tools, and secure storage.',
    images: ['https://dentech.com/images/features/digital-imaging-hero.jpg']
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Digital Imaging',
        'Advanced dental imaging solution for dental practices.',
        'https://dentech.com/features/digital-imaging',
        {
          applicationCategory: 'Medical Imaging Software',
          operatingSystem: 'Windows',
          features: [
            'Seamless imaging integration',
            'Image enhancement tools',
            'Secure HIPAA-compliant storage',
            'Multi-device compatibility',
            'Advanced annotation tools',
            'Cloud backup and sync'
          ],
          screenshot: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/features/digital-imaging-screenshot.jpg',
            caption: 'Dentech Digital Imaging Software Interface'
          }
        }
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Digital Imaging', item: 'https://dentech.com/features/digital-imaging' },
      ])
    ])
  }
}

export default metadata 