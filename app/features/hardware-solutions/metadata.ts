import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Dental Practice Hardware Solutions',
  description: 'Complete hardware solutions for dental practices, including computers, servers, networking equipment, and peripherals optimized for Dentech software.',
  openGraph: {
    title: 'Hardware Solutions | Dentech',
    description: 'Complete hardware solutions for dental practices, including computers, servers, networking equipment, and peripherals optimized for Dentech software.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Dentech Hardware Solutions',
        description: 'Complete hardware solutions for dental practices.',
        brand: {
          '@type': 'Brand',
          name: 'Dentech'
        },
        category: 'Dental Practice Hardware',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        hasProductReturnPolicy: {
          '@type': 'ProductReturnPolicy',
          productReturnDays: '30',
          merchantReturnDays: '30'
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Hardware Solutions', item: 'https://dentech.com/features/hardware-solutions' },
      ])
    ])
  }
}

export default metadata 