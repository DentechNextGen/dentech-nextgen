import { Metadata } from 'next'
import { siteConfig } from '@/src/config'

export const metadata: Metadata = {
  title: 'Document Management Software | Dentech',
  description: 'Secure digital document management system for dental practices. Features digital document storage, secure encryption, automatic audits, drag-and-drop upload, and HIPAA compliance.',
  openGraph: {
    title: 'Document Management Software | Dentech',
    description: 'Secure digital document management system for dental practices. Features digital document storage, secure encryption, automatic audits, drag-and-drop upload, and HIPAA compliance.',
    url: `${siteConfig.url}/features/document-management`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/services/document-management.webp`,
        width: 1200,
        height: 630,
        alt: 'Dentech Document Management Software'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document Management Software | Dentech',
    description: 'Secure digital document management system for dental practices. Features digital document storage, secure encryption, automatic audits, drag-and-drop upload, and HIPAA compliance.',
    images: [`${siteConfig.url}/images/services/document-management.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/features/document-management`
  }
} 