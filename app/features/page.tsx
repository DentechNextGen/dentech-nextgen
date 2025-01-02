import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/src/config'

const features = [
  {
    name: 'Practice Management',
    description: 'Dental Practice Management Software Done Right. Our system offers advanced financial and patient reports, all conveniently housed in one place.',
    href: '/features/practice-management',
    image: '/images/services/practice-management.jpg',
    features: [
      'Quick Phone Inquiry',
      'Appointment Scheduler',
      'Treatment Planning',
      'Insurance Processing',
      'Advanced Reporting',
    ],
  },
  {
    name: 'Voice-Activated Charting',
    description: 'DenChart is our patented voice-activated charting software, allowing you to chart patient exams swiftly—in as little as 5 minutes—all conveniently housed in one place.',
    href: '/features/voice-activated-charting',
    image: '/images/services/voice-activated-charting.jpg',
    features: [
      'Voice-Activated Input',
      'One-click Tooth Review',
      'Auto-Compare Chart History',
      'Medical Alerts Integration',
    ],
  },
  {
    name: 'Patient Check-In Solutions',
    description: 'Streamline your patient check-in process with our digital solutions. Reduce wait times and paperwork while improving accuracy and patient satisfaction.',
    href: '/features/patient-check-in',
    image: '/images/services/patient-check-in.jpg',
    features: [
      'Digital Forms',
      'Patient History',
      'Insurance Verification',
      'Appointment Monitoring',
    ],
  },
  {
    name: 'Document Management',
    description: 'Go paperless with our comprehensive document management system. Securely store, access, and manage all your practice documents digitally.',
    href: '/features/document-management',
    image: '/images/services/document-management.jpg',
    features: [
      'Digital Storage',
      'Easy Access',
      'Secure Sharing',
      'Automated Backup',
    ],
  },
  {
    name: 'Digital Imaging',
    description: 'State-of-the-art digital imaging solutions integrated seamlessly with your practice management software.',
    href: '/features/digital-imaging',
    image: '/images/services/digital-imaging.jpg',
    features: [
      'Integrated Imaging',
      'Enhanced Visualization',
      'Secure Storage',
      'Multiple Formats',
    ],
  },
  {
    name: 'eServices',
    description: 'Digital solutions for modern dental practices, from online payments to electronic claims processing.',
    href: '/features/eservices',
    image: '/images/services/eservices.jpg',
    features: [
      'Online Payments',
      'Electronic Claims',
      'Patient Portal',
      'Automated Billing',
    ],
  },
  {
    name: 'Managed Services',
    description: 'Comprehensive IT support and management for your dental practice.',
    href: '/features/managed-services',
    image: '/images/services/managed-services.jpg',
    features: [
      'IT Support',
      'Security Management',
      'Data Backup',
      'System Updates',
    ],
  },
  {
    name: 'Hardware Solutions',
    description: 'Complete hardware solutions optimized for dental practices.',
    href: '/features/hardware-solutions',
    image: '/images/services/hardware-solutions.jpg',
    features: [
      'Workstations',
      'Servers',
      'Networking',
      'Peripherals',
    ],
  },
  {
    name: 'Patient Communication',
    description: 'Keep in touch with your patients through automated reminders and communications.',
    href: '/features/patient-communication',
    image: '/images/services/patient-communication.jpg',
    features: [
      'Appointment Reminders',
      'Patient Messaging',
      'Recall System',
      'Treatment Updates',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Features</h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Experience the next generation of dental practice management software. Our comprehensive suite of features is designed to streamline your workflow and enhance patient care.
          </p>
          <div className="mt-16 lg:mt-20">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <Link href={feature.href} className="group relative">
                    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        className="object-cover object-center group-hover:opacity-75 transition"
                        fill
                      />
                    </div>
                    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                    <ul role="list" className="mt-4 space-y-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-lime-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm leading-6 text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
} 