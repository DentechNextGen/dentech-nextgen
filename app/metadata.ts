import { Metadata } from 'next'
import { siteConfig } from '@/src/config'
import { generateFAQSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Dentech - Dental Practice Management Software',
  description: 'Transform your dental practice with Dentech\'s comprehensive practice management software. Streamline operations, improve patient care, and boost efficiency.',
  openGraph: {
    title: 'Dentech | Dental Practice Management Software',
    description: 'Transform your dental practice with Dentech\'s comprehensive practice management software. Streamline operations, improve patient care, and boost efficiency.',
    images: [
      {
        url: 'https://dentech.com/images/background-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dentech Practice Management Software'
      },
      {
        url: 'https://dentech.com/images/services/practice-management.webp',
        width: 1200,
        height: 630,
        alt: 'Dentech Software Dashboard'
      }
    ],
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentech | Dental Practice Management Software',
    description: 'Transform your dental practice with Dentech\'s comprehensive practice management software.',
    images: ['https://dentech.com/images/background-hero.webp'],
    site: '@dentech',
    creator: '@dentech'
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        description: siteConfig.description,
        url: 'https://dentech.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://dentech.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          logo: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/DenScript.webp',
            width: 190,
            height: 60
          },
          image: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/background-hero.webp',
            width: 1200,
            height: 630
          },
          sameAs: siteConfig.socialLinks
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '199',
          highPrice: '499',
          offerCount: '3'
        }
      },
      generateFAQSchema([
        {
          question: "What is Dentech's Practice Management Software?",
          answer: "Dentech's Practice Management Software is a comprehensive solution designed specifically for dental practices. It includes features for appointment scheduling, billing, insurance processing, and patient management."
        },
        {
          question: "How can Dentech help my dental practice?",
          answer: "Dentech streamlines your practice operations by automating administrative tasks, improving patient communication, and providing powerful tools for practice management and growth."
        },
        {
          question: "Is Dentech HIPAA compliant?",
          answer: "Yes, Dentech is fully HIPAA compliant and includes features like secure patient records, encrypted data transmission, and detailed audit logs."
        }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Dr. Sarah Johnson'
            },
            reviewBody: 'Dentech has transformed how we manage our practice. The software is intuitive and the support team is exceptional.'
          },
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Dr. Michael Chen'
            },
            reviewBody: 'The practice management features have helped us increase efficiency and improve patient care.'
          }
        ]
      }
    ])
  }
}

export default metadata 