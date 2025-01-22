import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'

const metadata: Metadata = {
  title: 'Contact Dentech',
  description: 'Get in touch with Dentech\'s team for sales inquiries, technical support, or general questions about our dental practice management software.',
  openGraph: {
    title: 'Contact Us | Dentech',
    description: 'Get in touch with Dentech\'s team for sales inquiries, technical support, or general questions about our dental practice management software.',
    url: 'https://dentech.com/support'
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
          name: siteConfig.name,
          url: 'https://dentech.com'
        },
        mainEntity: {
          '@type': 'Organization',
          name: siteConfig.name,
          telephone: siteConfig.contact.phone,
          email: siteConfig.contact.email,
          address: siteConfig.contact.address
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Contact', item: 'https://dentech.com/support' },
      ])
    ])
  }
}

export default metadata 