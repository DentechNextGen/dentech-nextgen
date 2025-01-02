import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Practice Management',
    description: 'Streamline your dental practice operations with our comprehensive practice management solution.',
    imageSrc: '/images/services/practice-management.jpg',
    imageAlt: 'Practice Management Feature',
    href: '/features/practice-management'
  },
  {
    name: 'Voice-Activated Charting',
    description: 'Chart patient information hands-free with our advanced voice recognition technology.',
    imageSrc: '/images/services/voice-activated-charting.jpg',
    imageAlt: 'Voice-Activated Charting Feature',
    href: '/features/voice-activated-charting'
  },
  {
    name: 'Document Management',
    description: 'Keep your patient records organized and easily accessible with our document management system.',
    imageSrc: '/images/services/document-management.jpg',
    imageAlt: 'Document Management Feature',
    href: '/features/document-management'
  },
  {
    name: 'Patient Communication',
    description: 'Stay connected with your patients through automated appointment reminders and communication tools.',
    imageSrc: '/images/services/patient-communication.jpg',
    imageAlt: 'Patient Communication Feature',
    href: '/features/patient-communication'
  },
  {
    name: 'Digital Imaging',
    description: 'Capture, store, and view digital images with our integrated imaging solution.',
    imageSrc: '/images/services/digital-imaging.jpg',
    imageAlt: 'Digital Imaging Feature',
    href: '/features/digital-imaging'
  },
  {
    name: 'Patient Check-In',
    description: 'Simplify the check-in process with our digital forms and patient portal.',
    imageSrc: '/images/services/patient-check-in.jpg',
    imageAlt: 'Patient Check-In Feature',
    href: '/features/patient-check-in'
  }
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-lime-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features That Make a Difference
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how our comprehensive suite of features can transform your dental practice.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Link 
                key={feature.name} 
                href={feature.href}
                className="group relative flex flex-col rounded-2xl hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="flex flex-col h-full">
                  <div className="relative mb-6 overflow-hidden rounded-t-2xl">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      width={500}
                      height={300}
                      className="transform object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 group-hover:text-lime-600">
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 