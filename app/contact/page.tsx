import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Dentech',
  description: 'Get in touch with Dentech for any questions about our dental practice management software.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Dentech',
    telephone: '+1-555-555-5555',
    email: 'support@dentech.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main St',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    }
  }
}

const schemas = [
  contactSchema,
  generateBreadcrumbSchema([
    { name: 'Home', item: 'https://dentech.com' },
    { name: 'Contact', item: 'https://dentech.com/contact' }
  ])
]

export const metadata: Metadata = {
  title: 'Contact Us | Dentech',
  description: 'Get in touch with Dentech for any questions about our dental practice management software. Our team is here to help.',
  openGraph: {
    title: 'Contact Us | Dentech',
    description: 'Get in touch with Dentech for any questions about our dental practice management software. Our team is here to help.',
    url: 'https://dentech.com/contact',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Dentech',
    description: 'Get in touch with Dentech for any questions about our dental practice management software. Our team is here to help.',
    creator: '@dentech',
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main>
        {/* Contact page content */}
      </main>
    </>
  )
} 