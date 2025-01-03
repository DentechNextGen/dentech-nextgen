import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const schemas = [
  generateBreadcrumbSchema([
    { name: 'Home', item: 'https://dentech.com' },
    { name: 'Thank You', item: 'https://dentech.com/thank-you' }
  ])
]

export const metadata: Metadata = {
  title: 'Thank You | Dentech',
  description: 'Thank you for your interest in Dentech\'s dental practice management software. We\'ll be in touch shortly.',
  openGraph: {
    title: 'Thank You | Dentech',
    description: 'Thank you for your interest in Dentech\'s dental practice management software. We\'ll be in touch shortly.',
    url: 'https://dentech.com/thank-you',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You | Dentech',
    description: 'Thank you for your interest in Dentech\'s dental practice management software. We\'ll be in touch shortly.',
    creator: '@dentech',
  }
}

export default function ThankYouPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main>
        {/* Thank you page content */}
      </main>
    </>
  )
} 