import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { organizationSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@dentech'
  },
  alternates: {
    canonical: '/'
  },
  other: {
    'script:ld+json': {
      type: 'application/ld+json',
      text: JSON.stringify(organizationSchema)
    }
  }
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
