import { Metadata } from 'next'
import { siteConfig } from '@/src/config'
import { practiceManagementSchema } from '@/lib/schema/software'

export const metadata: Metadata = {
  title: 'Practice Management Software | Dentech',
  description: 'Comprehensive dental practice management software with advanced financial reporting, insurance processing, and appointment scheduling.',
  openGraph: {
    title: 'Practice Management Software | Dentech',
    description: 'Comprehensive dental practice management software with advanced financial reporting, insurance processing, and appointment scheduling.',
    url: `${siteConfig.url}/features/practice-management`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/services/practice-management.webp`,
        width: 1200,
        height: 630,
        alt: 'Dentech Practice Management Software'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Practice Management Software | Dentech',
    description: 'Comprehensive dental practice management software with advanced financial reporting, insurance processing, and appointment scheduling.',
    images: [`${siteConfig.url}/images/services/practice-management.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/features/practice-management`
  }
} 