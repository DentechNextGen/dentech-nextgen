import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'About Dentech',
  description: 'Learn about Dentech\'s mission, values, and commitment to providing innovative dental practice management solutions. Discover our story and meet our team.',
  openGraph: {
    title: 'About Us | Dentech',
    description: 'Learn about Dentech\'s mission, values, and commitment to providing innovative dental practice management solutions. Discover our story and meet our team.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Dentech',
        description: 'Learn about Dentech\'s mission, values, and commitment to providing innovative dental practice management solutions.',
        publisher: {
          '@type': 'Organization',
          name: 'Dentech',
          url: 'https://dentech.com',
          logo: 'https://dentech.com/images/logo.png',
          sameAs: [
            'https://www.linkedin.com/company/dentech',
            'https://twitter.com/dentech',
            'https://www.facebook.com/dentech'
          ]
        },
        mainEntity: {
          '@type': 'Organization',
          name: 'Dentech',
          foundingDate: '1985',
          description: 'Leading provider of dental practice management software solutions.',
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: '100+'
          }
        }
      },
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'About', item: 'https://dentech.com/about' },
      ])
    ])
  }
}

export default metadata 