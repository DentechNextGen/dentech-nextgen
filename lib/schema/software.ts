import { BaseSchema } from '.'
import { siteConfig } from '@/src/config'

export interface SoftwareApplicationSchema extends BaseSchema {
  '@type': 'SoftwareApplication'
  name: string
  description: string
  applicationCategory: string
  operatingSystem: string
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: string
  }
  featureList?: string[]
  screenshot?: {
    '@type': 'ImageObject'
    url: string
    caption?: string
  }[]
}

export function generateSoftwareSchema(
  name: string,
  description: string,
  features: string[],
  screenshots: { url: string; caption?: string }[] = []
): SoftwareApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'Dental Practice Management Software',
    operatingSystem: 'Windows',
    offers: {
      '@type': 'Offer',
      price: 'Contact for Pricing',
      priceCurrency: 'USD'
    },
    featureList: features,
    screenshot: screenshots.map(s => ({
      '@type': 'ImageObject',
      url: `${siteConfig.url}${s.url}`,
      caption: s.caption
    }))
  }
}

// Pre-defined schemas for each feature
export const practiceManagementSchema = generateSoftwareSchema(
  'Dentech Practice Management',
  'Comprehensive dental practice management software with advanced financial reporting, insurance processing, and appointment scheduling.',
  [
    'Quick Phone Inquiry',
    'Appointment Scheduler',
    'Treatment Planning',
    'Insurance Processing',
    'Advanced Reporting',
    'Employee Time Clock'
  ],
  [
    { url: '/images/features/practice-management.webp', caption: 'Practice Management Dashboard' }
  ]
)

export const voiceChartingSchema = generateSoftwareSchema(
  'Dentech Voice-Activated Charting',
  'Revolutionary voice-controlled charting system for hands-free dental practice operation.',
  [
    'Voice-Activated Perio Charting',
    'Voice-Activated Restorative Charting',
    'Patented Feedback Control',
    'Flip Command',
    'Zooming and Panning'
  ],
  [
    { url: '/images/services/voice-activated-charting.webp', caption: 'Voice-Activated Charting Interface' }
  ]
)

export const documentManagementSchema = generateSoftwareSchema(
  'Dentech Document Management',
  'Secure digital document management system for dental practices.',
  [
    'Digital Document Storage',
    'Secure Encryption',
    'Automatic Audits',
    'Drag-and-Drop Upload',
    'HIPAA Compliance'
  ],
  [
    { url: '/images/services/document-management.webp', caption: 'Document Management System' }
  ]
)

export const patientCommunicationSchema = generateSoftwareSchema(
  'Dentech Patient Communication',
  'Integrated patient communication solution that reduces no-shows up to 50% with automated reminders and increases revenue with built-in SMS and email marketing.',
  [
    'Automated Reminders',
    'SMS Marketing',
    'Email Marketing',
    'Patient Engagement',
    'Appointment Confirmations',
    'Two-way Messaging'
  ],
  [
    { url: '/images/services/patient-communication.webp', caption: 'Patient Communication Dashboard' }
  ]
)

export const digitalImagingSchema = generateSoftwareSchema(
  'XDR Digital Imaging',
  'Advanced dental imaging solution featuring digital sensors, cameras, and intuitive software for the ultimate dental imaging experience.',
  [
    'Digital Sensors',
    'Intraoral Cameras',
    'Advanced Imaging Software',
    'Image Enhancement Tools',
    'DICOM Compatibility',
    'Cloud Storage'
  ],
  [
    { url: '/images/services/digital-imaging.webp', caption: 'Digital Imaging Interface' }
  ]
)

export const patientCheckInSchema = generateSoftwareSchema(
  'Dentech Patient Check-In',
  'Contact-free patient check-in kiosk and monitor system that streamlines your dental practice check-ins and improves efficiency.',
  [
    'Self Check-In Kiosk',
    'Digital Forms',
    'Status Monitoring',
    'Queue Management',
    'Contact-Free Process',
    'Integration with PMS'
  ],
  [
    { url: '/images/services/patient-check-in.webp', caption: 'Patient Check-In System' }
  ]
)

export const eservicesSchema = generateSoftwareSchema(
  'Dentech Eservices',
  'Comprehensive suite of electronic services designed to simplify and scale your dental practice while reducing overhead costs.',
  [
    'Electronic Claims',
    'Real-time Eligibility',
    'Electronic Attachments',
    'Electronic Remittance',
    'Online Bill Pay',
    'Patient Portal'
  ],
  [
    { url: '/images/services/eservices.webp', caption: 'Eservices Dashboard' }
  ]
) 