import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { organizationSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dentech.com'),
  title: {
    template: '%s | Dentech',
    default: 'Dentech - Dental Practice Management Software',
  },
  description: 'Dentech offers innovative and efficient solutions designed to enhance practice management in the dental industry. The platform simplifies tasks like appointment scheduling and billing, enabling practitioners to reduce administrative efforts and dedicate more time to patient care.',
  openGraph: {
    title: 'Dentech - Dental Practice Management Software',
    description: 'Dentech offers innovative and efficient solutions designed to enhance practice management in the dental industry. The platform simplifies tasks like appointment scheduling and billing, enabling practitioners to reduce administrative efforts and dedicate more time to patient care.',
    url: 'https://dentech.com',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentech - Dental Practice Management Software',
    description: 'Dentech offers innovative and efficient solutions designed to enhance practice management in the dental industry. The platform simplifies tasks like appointment scheduling and billing, enabling practitioners to reduce administrative efforts and dedicate more time to patient care.',
    creator: '@dentech',
  },
  alternates: {
    canonical: 'https://dentech.com',
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Dentech',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows',
      description: 'Dentech offers innovative and efficient solutions designed to enhance practice management in the dental industry. The platform simplifies tasks like appointment scheduling and billing, enabling practitioners to reduce administrative efforts and dedicate more time to patient care.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250',
      },
      provider: {
        '@type': 'Organization',
        name: 'Dentech',
        url: 'https://dentech.com',
      },
    }),
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white antialiased`}>
        <Header />
        <main className="flex-1 pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
