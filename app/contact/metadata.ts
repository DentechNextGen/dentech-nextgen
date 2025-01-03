import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Contact Dentech',
  description: 'Get in touch with Dentech\'s team for sales inquiries, technical support, or general questions about our dental practice management software.',
  openGraph: {
    title: 'Contact Us | Dentech',
    description: 'Get in touch with Dentech\'s team for sales inquiries, technical support, or general questions about our dental practice management software.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Dentech',
        description: 'Get in touch with Dentech\'s team for sales inquiries, technical support, or general questions.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com'
        },
        mainEntity: {
          '@type': 'Organization',
          name: 'Dentech',
          telephone: '+1-800-DENTECH',
          email: 'info@dentech.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Dental Street',
            addressLocality: 'San Francisco',
            addressRegion: 'CA',
            postalCode: '94105',
            addressCountry: 'US'
          }
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Contact', item: 'https://dentech.com/contact' },
      ])
    ])
  }
}

export default metadata 