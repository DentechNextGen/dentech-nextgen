import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'
import { ScheduleContent } from './ScheduleContent'

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

export default function Schedule() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Schedule a Demo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <ScheduleContent />
          </div>
        </div>
      </div>
    </main>
  )
} 