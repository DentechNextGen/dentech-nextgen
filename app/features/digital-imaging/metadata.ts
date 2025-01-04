import { Metadata } from 'next'
import { siteConfig } from '@/src/config'

export const metadata: Metadata = {
  title: 'Digital Imaging Software | Dentech',
  description: 'Advanced dental imaging solution featuring digital sensors, cameras, and intuitive software for the ultimate dental imaging experience. Features DICOM compatibility and cloud storage.',
  openGraph: {
    title: 'Digital Imaging Software | Dentech',
    description: 'Advanced dental imaging solution featuring digital sensors, cameras, and intuitive software for the ultimate dental imaging experience. Features DICOM compatibility and cloud storage.',
    url: `${siteConfig.url}/features/digital-imaging`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/services/digital-imaging.webp`,
        width: 1200,
        height: 630,
        alt: 'Dentech Digital Imaging Software'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Imaging Software | Dentech',
    description: 'Advanced dental imaging solution featuring digital sensors, cameras, and intuitive software for the ultimate dental imaging experience. Features DICOM compatibility and cloud storage.',
    images: [`${siteConfig.url}/images/services/digital-imaging.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/features/digital-imaging`
  }
} 