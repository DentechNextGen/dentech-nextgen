import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Electronic Services for Dental Practices',
  description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, and automated payment processing.',
  openGraph: {
    title: 'Electronic Services | Dentech',
    description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, and automated payment processing.',
    images: [
      {
        url: 'https://dentech.com/images/features/eservices-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Electronic Services Dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electronic Services | Dentech',
    description: 'Streamline your dental practice with electronic claims and automated payment processing.',
    images: ['https://dentech.com/images/features/eservices-hero.jpg']
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dentech Electronic Services',
        description: 'Comprehensive electronic services solution for dental practices.',
        applicationCategory: 'Healthcare Services Software',
        operatingSystem: 'Cloud-based',
        offers: {
          '@type': 'Offer',
          price: '199',
          priceCurrency: 'USD'
        },
        screenshot: {
          '@type': 'ImageObject',
          url: 'https://dentech.com/images/features/eservices-screenshot.jpg',
          caption: 'Dentech Electronic Services Interface'
        },
        featureList: [
          'Electronic claims submission',
          'Real-time eligibility verification',
          'Automated payment processing',
          'Electronic remittance',
          'Claims tracking',
          'Attachment processing'
        ]
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Electronic Services', item: 'https://dentech.com/features/eservices' },
      ])
    ])
  }
}

export default metadata 