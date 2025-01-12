import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'About Dentech',
  description: 'Learn about Dentech\'s mission, values, and commitment to providing innovative dental practice management solutions. Discover our story and meet our team.',
  openGraph: {
    title: 'About Us | Dentech',
    description: 'Learn about Dentech\'s mission, values, and commitment to providing innovative dental practice management solutions. Discover our story and meet our team.',
    images: [
      {
        url: 'https://dentech.com/images/about/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Team and Office'
      },
      {
        url: 'https://dentech.com/images/about/team-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Leadership Team'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Dentech',
    description: 'Learn about Dentech\'s mission and commitment to dental practice innovation.',
    images: ['https://dentech.com/images/about/about-hero.jpg']
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
          logo: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/logo.jpg',
            width: 190,
            height: 60
          },
          image: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/about/company-photo.jpg',
            caption: 'Dentech Headquarters'
          }
        },
        mainEntity: {
          '@type': 'Organization',
          name: 'Dentech',
          foundingDate: '1985',
          description: 'Leading provider of dental practice management software solutions.',
          image: {
            '@type': 'ImageObject',
            url: 'https://dentech.com/images/about/office-exterior.jpg',
            caption: 'Dentech Office Building'
          },
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