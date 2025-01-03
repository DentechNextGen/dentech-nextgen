import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Practice Management',
    description: 'Streamline your dental practice operations with our comprehensive practice management solution.',
    imageSrc: '/images/services/practice-management.webp',
    imageAlt: 'Practice Management Feature',
    href: '/features/practice-management'
  },
  {
    name: 'Voice-Activated Charting',
    description: 'Chart patient information hands-free with our advanced voice recognition technology.',
    imageSrc: '/images/services/voice-activated-charting.webp',
    imageAlt: 'Voice-Activated Charting Feature',
    href: '/features/voice-activated-charting'
  },
  {
    name: 'Document Management',
    description: 'Keep your patient records organized and easily accessible with our document management system.',
    imageSrc: '/images/services/document-management.webp',
    imageAlt: 'Document Management Feature',
    href: '/features/document-management'
  },
  {
    name: 'Patient Communication',
    description: 'Stay connected with your patients through automated appointment reminders and communication tools.',
    imageSrc: '/images/services/patient-communication.webp',
    imageAlt: 'Patient Communication Feature',
    href: '/features/patient-communication'
  },
  {
    name: 'Digital Imaging',
    description: 'Capture, store, and view digital images with our integrated imaging solution.',
    imageSrc: '/images/services/digital-imaging.webp',
    imageAlt: 'Digital Imaging Feature',
    href: '/features/digital-imaging'
  },
  {
    name: 'Patient Check-In',
    description: 'Simplify the check-in process with our digital forms and patient portal.',
    imageSrc: '/images/services/patient-check-in.webp',
    imageAlt: 'Patient Check-In Feature',
    href: '/features/patient-check-in'
  }
]

export default function Features() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-base font-semibold text-lime-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">Features That Make a Difference</p>
          <p className="mt-4 text-lg text-gray-600">
            Discover how our comprehensive suite of features can transform your dental practice.
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Link 
              key={feature.name} 
              href={feature.href}
              className="block bg-white shadow"
            >
              <div className="relative h-48">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 