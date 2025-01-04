import { Metadata } from 'next'
import { siteConfig } from '@/src/config'

export const metadata: Metadata = {
  title: 'Patient Communication Software | Dentech',
  description: 'Integrated patient communication solution that reduces no-shows up to 50% with automated reminders and increases revenue with built-in SMS and email marketing.',
  openGraph: {
    title: 'Patient Communication Software | Dentech',
    description: 'Integrated patient communication solution that reduces no-shows up to 50% with automated reminders and increases revenue with built-in SMS and email marketing.',
    url: `${siteConfig.url}/features/patient-communication`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/services/patient-communication.webp`,
        width: 1200,
        height: 630,
        alt: 'Dentech Patient Communication Software'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Communication Software | Dentech',
    description: 'Integrated patient communication solution that reduces no-shows up to 50% with automated reminders and increases revenue with built-in SMS and email marketing.',
    images: [`${siteConfig.url}/images/services/patient-communication.webp`],
  },
  alternates: {
    canonical: `${siteConfig.url}/features/patient-communication`
  }
} 