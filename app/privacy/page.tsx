import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const schemas = [
  generateBreadcrumbSchema([
    { name: 'Home', item: 'https://dentech.com' },
    { name: 'Privacy Policy', item: 'https://dentech.com/privacy' }
  ])
]

export const metadata: Metadata = {
  title: 'Privacy Policy | Dentech',
  description: 'Learn about how Dentech protects your privacy and handles your data. Read our comprehensive privacy policy.',
  openGraph: {
    title: 'Privacy Policy | Dentech',
    description: 'Learn about how Dentech protects your privacy and handles your data. Read our comprehensive privacy policy.',
    url: 'https://dentech.com/privacy',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Dentech',
    description: 'Learn about how Dentech protects your privacy and handles your data. Read our comprehensive privacy policy.',
    creator: '@dentech',
  },
  other: {
    'script:ld+json': JSON.stringify(schemas)
  }
}

export default function PrivacyPage() {
  return (
    <main>
      {/* Privacy policy content */}
    </main>
  )
} 