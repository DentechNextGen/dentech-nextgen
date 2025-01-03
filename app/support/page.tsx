import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const faqSchema = generateFAQSchema([
  {
    question: 'How do I get started with Dentech?',
    answer: 'Getting started with Dentech is easy. Simply contact our sales team to schedule a demo, and we\'ll guide you through the setup process.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 technical support via phone, email, and live chat. Our dedicated support team is always ready to help you with any questions or issues.'
  },
  {
    question: 'Is training included?',
    answer: 'Yes, comprehensive training is included with your Dentech subscription. We provide both online and in-person training sessions to ensure your team is comfortable with the software.'
  }
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', item: 'https://dentech.com' },
  { name: 'Support', item: 'https://dentech.com/support' }
])

export const metadata: Metadata = {
  title: 'Support & Help Center | Dentech',
  description: 'Get the help you need with Dentech\'s comprehensive support resources. Access documentation, tutorials, and connect with our support team.',
  openGraph: {
    title: 'Support & Help Center | Dentech',
    description: 'Get the help you need with Dentech\'s comprehensive support resources. Access documentation, tutorials, and connect with our support team.',
    url: 'https://dentech.com/support',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support & Help Center | Dentech',
    description: 'Get the help you need with Dentech\'s comprehensive support resources. Access documentation, tutorials, and connect with our support team.',
    creator: '@dentech',
  },
  other: {
    'script:ld+json': [
      JSON.stringify(faqSchema),
      JSON.stringify(breadcrumbSchema)
    ]
  }
}

export default function SupportPage() {
  return (
    <main>
      {/* Support page content */}
    </main>
  )
} 