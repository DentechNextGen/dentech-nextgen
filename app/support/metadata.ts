import { Metadata } from 'next'
import { supportFAQSchema } from '@/lib/schema/faq'

export const metadata: Metadata = {
  title: 'Support & Contact | Dentech',
  description: 'Get help with Dentech\'s dental software solutions. Access our support team, FAQs, and resources to ensure your practice runs smoothly.',
  alternates: {
    canonical: '/support'
  },
  other: {
    'script:ld+json': {
      type: 'application/ld+json',
      text: JSON.stringify(supportFAQSchema)
    }
  }
} 