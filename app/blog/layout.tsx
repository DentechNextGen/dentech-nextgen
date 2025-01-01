import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Dentech',
  description: 'Stay up to date with the latest news, updates, and insights from the Dentech team.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 