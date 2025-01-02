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
  }
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dental Practice Management Software Done Right
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of features is designed to streamline your workflow and enhance patient care.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 