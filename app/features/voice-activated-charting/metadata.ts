import { Metadata } from 'next'
import { siteConfig } from '@/src/config'

export const metadata: Metadata = {
  title: 'Voice-Activated Charting Software | Dentech',
  description: 'Revolutionary voice-controlled charting system for hands-free dental practice operation. Features voice-activated perio and restorative charting, patented feedback control, and more.',
  openGraph: {
    title: 'Voice-Activated Charting Software | Dentech',
    description: 'Revolutionary voice-controlled charting system for hands-free dental practice operation. Features voice-activated perio and restorative charting, patented feedback control, and more.',
    url: `${siteConfig.url}/features/voice-activated-charting`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/services/voice-activated-charting.webp`,
        width: 1200,
        height: 630,
        alt: 'Dentech Voice-Activated Charting Software'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice-Activated Charting Software | Dentech',
    description: 'Revolutionary voice-controlled charting system for hands-free dental practice operation. Features voice-activated perio and restorative charting, patented feedback control, and more.',
    images: [`${siteConfig.url}/images/services/voice-activated-charting.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/features/voice-activated-charting`
  }
} 