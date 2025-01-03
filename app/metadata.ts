import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Dentech - Dental Practice Management Software',
  description: 'Transform your dental practice with Dentech\'s comprehensive practice management software. Streamline operations, improve patient care, and boost efficiency.',
  openGraph: {
    title: 'Dentech | Dental Practice Management Software',
    description: 'Transform your dental practice with Dentech\'s comprehensive practice management software. Streamline operations, improve patient care, and boost efficiency.',
    images: [
      {
        url: 'https://dentech.com/images/home/hero-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Practice Management Software'
      },
      {
        url: 'https://dentech.com/images/home/dashboard-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Software Dashboard'
      }
    ],
    siteName: 'Dentech'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentech | Dental Practice Management Software',
    description: 'Transform your dental practice with Dentech\'s comprehensive practice management software.',
    images: ['https://dentech.com/images/home/hero-banner.jpg'],
    site: '@dentech',
    creator: '@dentech'
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Dentech',
      description: 'Leading provider of dental practice management software solutions.',
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
        name: 'Dentech',
        logo: {
          '@type': 'ImageObject',
          url: 'https://dentech.com/images/logo.png',
          width: 190,
          height: 60
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://dentech.com/images/home/office-photo.jpg',
          width: 1200,
          height: 630
        },
        sameAs: [
          'https://www.linkedin.com/company/dentech',
          'https://twitter.com/dentech',
          'https://www.facebook.com/dentech'
        ]
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '199',
        highPrice: '499',
        offerCount: '3'
      }
    })
  }
}

export default metadata 