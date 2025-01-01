import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CTA } from '@/components/CTA'

const features = {
  'practice-management': {
    name: 'Practice Management',
    description: 'Elevate your dental practice with Dentech NextGen, offering intuitive features from one-click patient information access to advanced reporting. Streamline appointments, treatment planning, and insurance processing while ensuring data security and compliance.',
    image: '/images/services/practice-management.jpg',
    features: [
      {
        title: 'Quick Phone Inquiry',
        description: 'With one click, view patient information, history, and insurance, and more.',
        image: '/images/fingertips.jpg',
      },
      {
        title: 'Appointment Scheduler',
        description: 'Streamline your day and increase your efficiency.',
        image: '/images/monitor.jpg',
      },
      {
        title: 'Treatment Planning',
        description: 'An effective tool for presenting proposed treatments to patients.',
        image: '/images/plans.jpg',
      },
      {
        title: 'Insurance Processing',
        description: 'Streamline insurance exceptions and fee schedules and get rid of unnecessary manual tracking.',
        image: '/images/integration.jpg',
      },
      {
        title: 'Advanced Reporting',
        description: 'An extensive range of different reports for the benefit of your practice.',
        image: '/images/reminders.jpg',
      },
      {
        title: 'And More',
        description: 'Track activity on your system for each employee carrying out work with trackable HIPPA logs. Keep track of employees\' working hours and create reports of each employee\'s hours with Time Clock. Easily add notes to every patient file with Clinical Notes.',
        image: '/images/other.jpg',
      },
    ],
  },
  'voice-activated-charting': {
    name: 'Voice-Activated Charting',
    description: 'DenChart is our patented voice-activated charting software, allowing you to chart patient exams swiftly—in as little as 5 minutes—all conveniently housed in one place.',
    image: '/images/services/voice-activated-charting.jpg',
    features: [
      {
        title: 'Voice-Activated Input',
        description: 'Chart patient exams quickly and efficiently using voice commands.',
        image: '/images/voice-graphics-1.webp',
      },
      {
        title: 'One-click Tooth Review',
        description: 'Click on a tooth and instantly access its history, including previous conditions and treatments, all in one place.',
        image: '/images/voice-graphics-2.webp',
      },
      {
        title: 'Auto-Compare Chart History',
        description: 'Our patented feature provides immediate insights into teeth health changes by simply hovering over a tooth.',
        image: '/images/voice-graphics-3.webp',
      },
      {
        title: 'Medical Alerts Integration',
        description: 'Stay informed of patient medical conditions and alerts directly within your charting interface.',
        image: '/images/voice-graphics-4.webp',
      },
    ],
  },
  'patient-check-in': {
    name: 'Patient Check-In Solutions',
    description: 'Streamline your patient check-in process with our digital solutions. Reduce wait times and paperwork while improving accuracy and patient satisfaction.',
    image: '/images/services/patient-check-in.jpg',
    features: [
      {
        title: 'Digital Forms',
        description: 'Replace paper forms with digital ones that patients can fill out before their visit.',
        image: '/images/kiosk.jpg',
      },
      {
        title: 'Patient History',
        description: 'Access complete patient history and records instantly.',
        image: '/images/preexisting.jpg',
      },
      {
        title: 'Insurance Verification',
        description: 'Verify insurance information in real-time during check-in.',
        image: '/images/integration.jpg',
      },
      {
        title: 'Appointment Monitoring',
        description: 'Track patient flow and manage appointments efficiently.',
        image: '/images/monitor.jpg',
      },
    ],
  },
  'document-management': {
    name: 'Document Management',
    description: 'Go paperless with our comprehensive document management system. Securely store, access, and manage all your practice documents digitally.',
    image: '/images/services/document-management.jpg',
    features: [
      {
        title: 'Digital Storage',
        description: 'Store all your documents securely in the cloud.',
        image: '/images/files.jpg',
      },
      {
        title: 'Easy Access',
        description: 'Quick and easy access to any document when you need it.',
        image: '/images/fingertips.jpg',
      },
      {
        title: 'Secure Sharing',
        description: 'Share documents securely with patients or other providers.',
        image: '/images/service.jpg',
      },
      {
        title: 'Automated Backup',
        description: 'Never worry about lost documents with automated backup.',
        image: '/images/server.jpg',
      },
    ],
  },
  'digital-imaging': {
    name: 'Digital Imaging',
    description: 'State-of-the-art digital imaging solutions integrated seamlessly with your practice management software.',
    image: '/images/services/digital-imaging.jpg',
    features: [
      {
        title: 'Integrated Imaging',
        description: 'Capture and store images directly in patient records.',
        image: '/images/sensors.jpg',
      },
      {
        title: 'Enhanced Visualization',
        description: 'Advanced tools for better diagnosis and treatment planning.',
        image: '/images/monitor.jpg',
      },
      {
        title: 'Secure Storage',
        description: 'HIPAA-compliant storage and sharing of patient images.',
        image: '/images/server.jpg',
      },
      {
        title: 'Multiple Formats',
        description: 'Support for all major imaging formats and devices.',
        image: '/images/integration.jpg',
      },
    ],
  },
  'eservices': {
    name: 'eServices',
    description: 'Digital solutions for modern dental practices, from online payments to electronic claims processing.',
    image: '/images/services/eservices.jpg',
    features: [
      {
        title: 'Online Payments',
        description: 'Accept payments online with integrated payment processing.',
        image: '/images/eservices-graphics-1.webp',
      },
      {
        title: 'Electronic Claims',
        description: 'Submit and track insurance claims electronically.',
        image: '/images/eservices-graphics-2.webp',
      },
      {
        title: 'Patient Portal',
        description: 'Give patients secure access to their records and forms.',
        image: '/images/eservices-graphics-3.webp',
      },
      {
        title: 'Automated Billing',
        description: 'Streamline your billing process with automation.',
        image: '/images/eservices-graphics-4.webp',
      },
    ],
  },
  'managed-services': {
    name: 'Managed Services',
    description: 'Comprehensive IT support and management for your dental practice.',
    image: '/images/services/managed-services.jpg',
    features: [
      {
        title: 'IT Support',
        description: '24/7 technical support for your practice.',
        image: '/images/managed-services-graphics-1.webp',
      },
      {
        title: 'Security Management',
        description: 'Keep your practice secure with managed security services.',
        image: '/images/managed-services-graphics-2.webp',
      },
      {
        title: 'Data Backup',
        description: 'Automated backup and disaster recovery solutions.',
        image: '/images/managed-services-graphics-3.webp',
      },
      {
        title: 'System Updates',
        description: 'Regular system updates and maintenance.',
        image: '/images/managed-services-graphics-4.webp',
      },
    ],
  },
  'hardware-solutions': {
    name: 'Hardware Solutions',
    description: 'Complete hardware solutions optimized for dental practices.',
    image: '/images/services/hardware-solutions.jpg',
    features: [
      {
        title: 'Workstations',
        description: 'Optimized computers for dental practice use.',
        image: '/images/monitor.jpg',
      },
      {
        title: 'Servers',
        description: 'Reliable server solutions for practice data.',
        image: '/images/server.jpg',
      },
      {
        title: 'Networking',
        description: 'Secure and fast networking solutions.',
        image: '/images/firewall.jpg',
      },
      {
        title: 'Peripherals',
        description: 'Printers, scanners, and other necessary equipment.',
        image: '/images/integration.jpg',
      },
    ],
  },
  'patient-communication': {
    name: 'Patient Communication',
    description: 'Keep in touch with your patients through automated reminders and communications.',
    image: '/images/services/patient-communication.jpg',
    features: [
      {
        title: 'Appointment Reminders',
        description: 'Automated appointment reminders via text, email, or phone.',
        image: '/images/reminders.jpg',
      },
      {
        title: 'Patient Messaging',
        description: 'Secure messaging system for patient communication.',
        image: '/images/fingertips.jpg',
      },
      {
        title: 'Recall System',
        description: 'Automated recall notifications for regular checkups.',
        image: '/images/monitor.jpg',
      },
      {
        title: 'Treatment Updates',
        description: 'Keep patients informed about their treatment progress.',
        image: '/images/service.jpg',
      },
    ],
  },
}

type Props = {
  params: {
    feature: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const feature = features[params.feature as keyof typeof features]
  
  if (!feature) {
    return {
      title: 'Feature Not Found',
    }
  }

  return {
    title: feature.name,
    description: feature.description,
  }
}

export default function FeaturePage({ params }: Props) {
  const feature = features[params.feature as keyof typeof features]

  if (!feature) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {feature.name}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {feature.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#features"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    See all features
                  </a>
                  <a href="/support" className="text-sm font-semibold leading-6 text-gray-900">
                    Contact sales <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="relative rounded-lg bg-gray-900/5 shadow-xl ring-1 ring-gray-900/10">
              <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div id="features" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Powerful features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage your practice
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {feature.features.map((subFeature) => (
                <div key={subFeature.title} className="flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white mb-6">
                    <Image
                      src={subFeature.image}
                      alt={subFeature.title}
                      className="object-cover object-center"
                      fill
                    />
                  </div>
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    {subFeature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{subFeature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <CTA />
    </div>
  )
} 