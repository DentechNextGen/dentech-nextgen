import { Metadata } from 'next'
import GoToAssistContent from './GoToAssistContent'

export const metadata: Metadata = {
  title: 'Dentech Expert Support | Go To Assist Remote Help',
  description: 'Our technicians are ready to provide real-time remote support to solve your software issues promptly, ensuring your dental practice operates smoothly.',
}

export default function GoToAssistPage() {
  return <GoToAssistContent />
} 