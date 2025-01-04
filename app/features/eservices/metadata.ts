import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Electronic Services for Dental Practices',
  description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, and automated payment processing.',
  openGraph: {
    title: 'Electronic Services | Dentech',
    description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, and automated payment processing.',
    images: [
      {
        url: 'https://dentech.com/images/features/eservices-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Electronic Services Dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electronic Services | Dentech',
    description: 'Streamline your dental practice with electronic claims and automated payment processing.',
    images: ['https://dentech.com/images/features/eservices-hero.jpg']
  }
}

export default metadata 