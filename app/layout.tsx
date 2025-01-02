import { siteConfig } from '@/src/config'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-white overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
