import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Support & Help Center',
  description: 'Get help with Dentech\'s dental practice management software. Access FAQs, troubleshooting guides, and connect with our support team.',
  openGraph: {
    title: 'Support & Help Center | Dentech',
    description: 'Get help with Dentech\'s dental practice management software. Access FAQs, troubleshooting guides, and connect with our support team.',
    images: [
      {
        url: 'https://dentech.com/images/support/support-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Support and Help Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support & Help Center | Dentech',
    description: 'Get help with Dentech\'s dental practice management software and connect with our support team.',
    images: ['https://dentech.com/images/support/support-hero.jpg']
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: 'Dentech Support',
        description: 'Frequently asked questions and support resources for Dentech software.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/logo.png',
            width: 190,
            height: 60
          }
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://dentech.com/images/support/support-team.jpg',
          caption: 'Dentech Support Team'
        },
        mainEntity: generateFAQSchema([
          {
            question: 'How do I contact Dentech support?',
            answer: 'You can contact Dentech support through our help desk at 1-800-DENTECH, email at support@dentech.com, or by using our online support portal.'
          },
          {
            question: 'What are the system requirements for Dentech software?',
            answer: 'Dentech software requires Windows 10 or higher, 8GB RAM minimum (16GB recommended), and a high-speed internet connection.'
          },
          {
            question: 'How often are updates released?',
            answer: 'We release major updates quarterly and security patches monthly to ensure your software is always up-to-date and secure.'
          }
        ])
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Support', item: 'https://dentech.com/support' },
      ])
    ])
  }
}

export default metadata 