import { Metadata } from 'next'
import { practiceManagementSchema } from '@/lib/schema/software'
import { generateBreadcrumbSchema, generateBreadcrumbItems } from '@/lib/schema/breadcrumb'
import { siteConfig } from '@/src/config'

const breadcrumbSchema = generateBreadcrumbSchema(generateBreadcrumbItems('/features/practice-management'))

export const metadata: Metadata = {
  title: 'Practice Management Software | Dentech',
  description: 'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, insurance processing, and advanced reporting.',
  alternates: {
    canonical: '/features/practice-management'
  },
  openGraph: {
    type: 'website',
    title: 'Practice Management Software | Dentech',
    description: 'Streamline your dental practice with Dentech\'s comprehensive practice management software. Features include appointment scheduling, insurance processing, and advanced reporting.',
    url: `${siteConfig.url}/features/practice-management`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/services/practice-management.webp`,
        width: 1200,
        height: 630,
        alt: 'Dentech Practice Management Software'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practice Management Software | Dentech',
    description: 'Streamline your dental practice with Dentech\'s comprehensive practice management software.',
    images: [`${siteConfig.url}/images/services/practice-management.webp`],
    creator: '@dentech',
    site: '@dentech'
  },
  other: {
    'script:ld+json': [
      {
        type: 'application/ld+json',
        text: JSON.stringify(practiceManagementSchema)
      },
      {
        type: 'application/ld+json',
        text: JSON.stringify(breadcrumbSchema)
      }
    ]
  }
} 