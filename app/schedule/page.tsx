import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const scheduleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dentech Demo Scheduling',
  description: 'Schedule a personalized demo of Dentech\'s dental practice management software.',
  provider: {
    '@type': 'Organization',
    name: 'Dentech',
    url: 'https://dentech.com'
  },
  serviceType: 'Software Demo',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://dentech.com/schedule',
    servicePhone: '+1-555-555-5555'
  }
}

const schemas = [
  scheduleSchema,
  generateBreadcrumbSchema([
    { name: 'Home', item: 'https://dentech.com' },
    { name: 'Schedule Demo', item: 'https://dentech.com/schedule' }
  ])
]

export const metadata: Metadata = {
  title: 'Schedule a Demo | Dentech',
  description: 'Schedule a personalized demo of Dentech\'s dental practice management software. See how our solutions can transform your practice.',
  openGraph: {
    title: 'Schedule a Demo | Dentech',
    description: 'Schedule a personalized demo of Dentech\'s dental practice management software. See how our solutions can transform your practice.',
    url: 'https://dentech.com/schedule',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule a Demo | Dentech',
    description: 'Schedule a personalized demo of Dentech\'s dental practice management software. See how our solutions can transform your practice.',
    creator: '@dentech',
  },
  other: {
    'script:ld+json': JSON.stringify(schemas)
  }
}

export default function SchedulePage() {
  return (
    <main>
      {/* Schedule page content */}
    </main>
  )
} 