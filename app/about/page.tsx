'use client'

import Image from 'next/image'
import { 
  ClockIcon, 
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { generateBreadcrumbSchema, organizationSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const features = [
  {
    title: 'Our History',
    description: 'Over four decades ago, our founder Raymond F. Kaminski saw the growing need for innovation in dental practice management software. He was committed to making his vision a reality—a world in which computer technology and dentistry functioned seamlessly, improving the lives of doctors and patients alike.',
    icon: ClockIcon
  },
  {
    title: 'Our Values',
    description: 'More and more we see the importance of staying customer centric, value focused. At Dentech, each member of our team embodies certain traits that ensure your software is made with the same care you have for your patients.',
    icon: HeartIcon
  },
  {
    title: 'Our Vision',
    description: 'We will stay committed to servicing our customers and the dental industry with the care and concern that we are known for while staying on the cutting edge of technology.',
    icon: RocketLaunchIcon
  }
]

const schemas = [
  organizationSchema,
  generateBreadcrumbSchema([
    { name: 'Home', item: 'https://dentech.com' },
    { name: 'About', item: 'https://dentech.com/about' }
  ])
]

export default function AboutPage() {
  return (
    <main>
      {/* About page content */}
    </main>
  )
} 