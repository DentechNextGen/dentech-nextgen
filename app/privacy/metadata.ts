import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read Dentech\'s privacy policy to understand how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Dentech',
    description: 'Read Dentech\'s privacy policy to understand how we collect, use, and protect your personal information.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Privacy Policy', item: 'https://dentech.com/privacy' },
      ])
    ])
  }
}

export default metadata 