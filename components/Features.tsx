'use client'

import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: 'Practice Management',
    summary: 'Dental Practice Management Software Done Right',
    description: 'Elevate your dental practice with Dentech NextGen, offering intuitive features from one-click patient information access to advanced reporting. Streamline appointments, treatment planning, and insurance processing while ensuring data security and compliance.',
    image: 'services/practice-management.jpg',
    href: '/features/practice-management'
  },
  {
    title: 'Voice-Activated Charting',
    summary: 'Hassle-Free Perio and Restorative Charting',
    description: "DenChart is Dentech's patented voice-activated charting software. Everything you need to chart patient exams in as little as 5 minutes, all in one place.",
    image: 'services/voice-activated-charting.jpg',
    href: '/features/voice-activated-charting'
  },
  {
    title: 'Document Management',
    summary: 'Organize your patient documents',
    description: 'Never lose a document again. Using DenDox as your document management tool propels your practice far beyond the realm of merely going paperless. Thousands of practices trust DenDox to efficiently produce and access patient records, all the while minimizing the risks and regulatory challenges associated with misplaced paper files.',
    image: 'services/document-management.jpg',
    href: '/features/document-management'
  },
  {
    title: 'Patient Check-In',
    summary: 'Patient Check-In Kiosk and Monitor System',
    description: "The Fast And Contact-Free Way To Streamline Your Dental Practice's Patient Check-Ins. Replace a busy front desk with self check-ins, automatically keep patient info and appointment statuses updated, and see check-in status to start treatments even if reception's busy.",
    image: 'services/patient-check-in.jpg',
    href: '/features/patient-check-in'
  },
  {
    title: 'Patient Communication',
    summary: 'Integrated Patient Communication Solution',
    description: 'Keep your chairs filled with automated SMS and email updates with Dentech Communicator which enables better patient communication. Appointment reminders, pre-op info to soothe cancellation-causing concerns, marketing tools, and more.',
    image: 'services/patient-communication.jpg',
    href: '/features/patient-communication'
  },
  {
    title: 'Digital Imaging',
    summary: 'Digital sensors, cameras, and software',
    description: 'From high-res imaging and dental diagnostic tools, to advanced digital imaging software. Dentech has everything you need to streamline diagnoses and educate patients.',
    image: 'services/digital-imaging.jpg',
    href: '/features/digital-imaging'
  },
  {
    title: 'Eservices',
    summary: 'Simplify And Scale Your Dental Practice',
    description: 'Lighten your workload with our eServices: digital claims processing, e-statements, online patient prescription management, and more.',
    image: 'services/eservices.jpg',
    href: '/features/eservices'
  },
  {
    title: 'Managed Services',
    summary: 'Dental IT Security Services Managed For You',
    description: "Your Practice's Data And Security Are More Important Than Ever. Businesses that hold patient health information (including dental practices) are often a major target for cybersecurity threats. Even small practices are often targets because many hackers see them as low-hanging fruit, less likely to have the time and resources to stay protected. Beyond this, you never know when your data and hardware will be vulnerable to a physical threat such as fire, inclement weather, or even theft.",
    image: 'services/managed-services.jpg',
    href: '/features/managed-services'
  },
  {
    title: 'Hardware Solutions',
    summary: 'The Latest In Dental Equipment',
    description: "Whether you're opening a new practice or looking to update your existing hardware to the best available, our expert staff can guide you toward the right solutions for you and your business.",
    image: 'services/hardware-solutions.jpg',
    href: '/features/hardware-solutions'
  }
]

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-base">
            Our Dental Practice Management Features
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re here to help you streamline your dental practice with our comprehensive suite of services. Let&apos;s transform your practice together.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {features.map((feature) => (
              <Link 
                key={feature.title} 
                href={feature.href}
                className="flex flex-col group hover:opacity-80 transition-opacity"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={`/images/${feature.image}`}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-1 text-sm font-medium text-primary-base">
                  {feature.summary}
                </dd>
                <dd className="mt-3 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 