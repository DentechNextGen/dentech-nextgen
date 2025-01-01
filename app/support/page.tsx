import { Metadata } from 'next'
import { SupportContent } from './SupportContent'

export const metadata: Metadata = {
  title: 'Support - Dentech',
  description: 'Get help with Dentech. Our support team is here to help you with any questions you may have.',
}

export default function SupportPage() {
  return <SupportContent />
} 