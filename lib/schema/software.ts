import { BaseSchema } from '.'
import { siteConfig } from '@/src/config'

export interface SoftwareApplicationSchema extends BaseSchema {
  '@type': 'SoftwareApplication'
  name: string
  description: string
  applicationCategory: string
  operatingSystem: string
  featureList?: string[]
  screenshot?: {
    '@type': 'ImageObject'
    url: string
    caption?: string
  }[]
}

export interface SoftwareSchemaInput {
  name: string
  description: string
  features?: string[]
  screenshots?: { url: string; caption?: string }[]
}

export function generateSoftwareSchema(input: SoftwareSchemaInput): SoftwareApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: input.name,
    description: input.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows',
    ...(input.features && { featureList: input.features }),
    ...(input.screenshots && {
      screenshot: input.screenshots.map(s => ({
        '@type': 'ImageObject',
        url: s.url.startsWith('http') ? s.url : `${siteConfig.url}${s.url}`,
        ...(s.caption && { caption: s.caption })
      }))
    })
  }
}

// Pre-defined schemas for each feature
export const practiceManagementSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Dentech Practice Management Software',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows',
  description: 'Comprehensive dental practice management software with advanced financial reporting, insurance processing, appointment scheduling, and employee time tracking. Features include quick phone inquiries, treatment planning, and secure HIPAA-compliant logging.',
  offers: {
    '@type': 'Offer',
    price: 'Contact for Pricing',
    priceCurrency: 'USD'
  },
  featureList: [
    'Quick Phone Inquiry - View patient information, history, and insurance with one click',
    'Appointment Scheduler - Streamline your day and increase efficiency',
    'Treatment Planning - Effective tool for presenting proposed treatments to patients',
    'Insurance Processing - Streamline insurance exceptions and fee schedules',
    'Advanced Financial Reporting - Comprehensive range of reports for practice management',
    'Employee Time Clock - Track working hours and generate reports',
    'HIPAA Compliant Logs - Track system activity for security and compliance',
    'Clinical Notes - Easy note-taking for patient files',
    'Patient Information Management - Complete patient history and records',
    'Insurance Verification - One-click access to verify insurance',
    'Write-off Limits - Control and track financial adjustments',
    'User Activity Logs - Monitor and track all system activities',
    'Payroll Reports - Integrated employee time tracking and reporting',
    'Security Features - Advanced practice security controls'
  ],
  screenshot: [
    {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/services/practice-management.webp`,
      caption: 'Practice Management Dashboard'
    },
    {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/features/scheduler.webp`,
      caption: 'Appointment Scheduler Interface'
    },
    {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/features/reporting.webp`,
      caption: 'Advanced Financial Reporting'
    },
    {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/features/inquiry.webp`,
      caption: 'Quick Phone Inquiry Interface'
    },
    {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/features/planning.webp`,
      caption: 'Treatment Planning Interface'
    },
    {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/features/insuranceprocessing.webp`,
      caption: 'Insurance Processing Interface'
    }
  ]
}

export const voiceChartingSchema = generateSoftwareSchema({
  name: 'Dentech Voice-Activated Charting',
  description: 'Revolutionary voice-controlled charting system for hands-free dental practice operation.',
  features: [
    'Voice-Activated Perio Charting',
    'Voice-Activated Restorative Charting',
    'Patented Feedback Control',
    'Flip Command',
    'Zooming and Panning'
  ],
  screenshots: [
    { url: '/images/services/voice-activated-charting.webp', caption: 'Voice-Activated Charting Interface' }
  ]
})

export const documentManagementSchema = generateSoftwareSchema({
  name: 'Dentech Document Management',
  description: 'Secure digital document management system for dental practices.',
  features: [
    'Digital Document Storage',
    'Secure Encryption',
    'Automatic Audits',
    'Drag-and-Drop Upload',
    'HIPAA Compliance'
  ],
  screenshots: [
    { url: '/images/services/document-management.webp', caption: 'Document Management System' }
  ]
})

export const patientCommunicationSchema = generateSoftwareSchema({
  name: 'Dentech Patient Communication',
  description: 'Integrated patient communication solution that reduces no-shows up to 50% with automated reminders and increases revenue with built-in SMS and email marketing.',
  features: [
    'Automated Reminders',
    'SMS Marketing',
    'Email Marketing',
    'Patient Engagement',
    'Appointment Confirmations',
    'Two-way Messaging'
  ],
  screenshots: [
    { url: '/images/services/patient-communication.webp', caption: 'Patient Communication Dashboard' }
  ]
})

export const digitalImagingSchema = generateSoftwareSchema({
  name: 'XDR Digital Imaging',
  description: 'Advanced dental imaging solution featuring digital sensors, cameras, and intuitive software for the ultimate dental imaging experience.',
  features: [
    'Digital Sensors',
    'Intraoral Cameras',
    'Advanced Imaging Software',
    'Image Enhancement Tools',
    'DICOM Compatibility',
    'Cloud Storage'
  ],
  screenshots: [
    { url: '/images/services/digital-imaging.webp', caption: 'Digital Imaging Interface' }
  ]
})

export const patientCheckInSchema = generateSoftwareSchema({
  name: 'Dentech Patient Check-In',
  description: 'Contact-free patient check-in kiosk and monitor system that streamlines your dental practice check-ins and improves efficiency.',
  features: [
    'Self Check-In Kiosk',
    'Digital Forms',
    'Status Monitoring',
    'Queue Management',
    'Contact-Free Process',
    'Integration with PMS'
  ],
  screenshots: [
    { url: '/images/services/patient-check-in.webp', caption: 'Patient Check-In System' }
  ]
})

export const eservicesSchema = generateSoftwareSchema({
  name: 'Dentech Eservices',
  description: 'Comprehensive suite of electronic services designed to simplify and scale your dental practice while reducing overhead costs.',
  features: [
    'Electronic Claims',
    'Real-time Eligibility',
    'Electronic Attachments',
    'Electronic Remittance',
    'Online Bill Pay',
    'Patient Portal'
  ],
  screenshots: [
    { url: '/images/services/eservices.webp', caption: 'Eservices Dashboard' }
  ]
}) 