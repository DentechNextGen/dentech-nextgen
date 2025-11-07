import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Revenue Cycle Management for Dental Practices',
  description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, automated payment processing, and seamless claim attachments with FastAttach integration.',
  openGraph: {
    title: 'Revenue Cycle Management | Dentech',
    description: 'Streamline your dental practice with electronic claims, real-time eligibility verification, automated payment processing, and seamless claim attachments with FastAttach integration.',
    images: [
      {
        url: 'https://dentech.com/images/features/eservices-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dentech Revenue Cycle Management Dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revenue Cycle Management | Dentech',
    description: 'Streamline your dental practice with electronic claims, automated payment processing, and seamless claim attachments.',
    images: ['https://dentech.com/images/features/eservices-hero.jpg']
  }
}

export default metadata 