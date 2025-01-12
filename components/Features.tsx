/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    name: 'Practice Management',
    summary: 'Dental Practice Management Software Done Right',
    description: "Our system offers advanced financial and patient reports, all conveniently housed in one place. With our easy insurance processing features, managing your patients' insurance claims becomes a breeze.",
    imageSrc: '/images/services/practice-management.webp',
    imageAlt: 'Practice Management Feature',
    href: '/features/practice-management'
  },
  {
    name: 'Voice-Activated Charting',
    summary: 'Hassle-Free Perio and Restorative Charting',
    description: "DenChart is our patented voice-activated charting software, allowing you to chart patient exams swiftly—in as little as 5 minutes—all conveniently housed in one place.",
    imageSrc: '/images/services/voice-activated-charting.webp',
    imageAlt: 'Voice-Activated Charting Feature',
    href: '/features/voice-activated-charting'
  },
  {
    name: 'Document Management',
    summary: 'Manage documents seamlessly',
    description: "Never lose a document again. Using DenDox as your document management tool propels your practice far beyond the realm of merely going paperless. Thousands of practices trust DenDox to efficiently produce and access patient records.",
    imageSrc: '/images/services/document-management.webp',
    imageAlt: 'Document Management Feature',
    href: '/features/document-management'
  },
  {
    name: 'Patient Communication',
    summary: 'Integrated Patient Communication Solution',
    description: "Welcome to the number one way to keep dental patients engaged and on time. Reduce no-shows up to 50% with automated reminders and increase revenue with built-in SMS and email marketing.",
    imageSrc: '/images/services/patient-communication.webp',
    imageAlt: 'Patient Communication Feature',
    href: '/features/patient-communication'
  },
  {
    name: 'Digital Imaging',
    summary: 'Digital sensors, cameras, and software',
    description: "Discover the ultimate dental imaging experience for both your practice and your patients with XDR Radiology. At the core lies XDR's unparalleled imaging, marrying intuitive design with advanced features.",
    imageSrc: '/images/services/digital-imaging.webp',
    imageAlt: 'Digital Imaging Feature',
    href: '/features/digital-imaging'
  },
  {
    name: 'Patient Check-In',
    summary: 'Patient Check-In Kiosk and Monitor System',
    description: "The fast and contact-free way to streamline your dental practice's patient check-ins. See check-in status and start treatments even if reception's busy. Replace a busy front desk with self check-ins.",
    imageSrc: '/images/services/patient-check-in.webp',
    imageAlt: 'Patient Check-In Feature',
    href: '/features/patient-check-in'
  },
  {
    name: 'Eservices',
    summary: 'Simplify And Scale Your Dental Practice',
    description: "Doing more in your practice in less time doesn't have to mean racing the clock. When you improve your efficiency, you improve production and profits. Plus, it helps manage one of the biggest problems that plague dentists: high overhead costs.",
    imageSrc: '/images/services/eservices.webp',
    imageAlt: 'Eservices Feature',
    href: '/features/eservices'
  },
  {
    name: 'Managed Services',
    summary: 'Keep Your Practice Safe And Secure',
    description: "Your Practice's Data And Security Are More Important Than Ever. Businesses that hold patient health information are often a major target for cybersecurity threats. We help protect your practice with comprehensive managed IT services.",
    imageSrc: '/images/services/managed-services.webp',
    imageAlt: 'Managed Services Feature',
    href: '/features/managed-services'
  },
  {
    name: 'Hardware Solutions',
    summary: 'Complete Hardware Solutions For Your Practice',
    description: "From workstations and mobile solutions to servers and printers, we provide comprehensive hardware solutions tailored to your dental practice needs. Get the right setup with expert guidance and support.",
    imageSrc: '/images/services/hardware-solutions.webp',
    imageAlt: 'Hardware Solutions Feature',
    href: '/features/hardware-solutions'
  }
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-lime-600">Our Dental Practice Management Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Cutting-edge, efficient solutions designed to speed up your practice
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform streamlines all aspects of practice management, from appointment scheduling to billing, into one seamless process. With Dentech, you'll spend less time on administrative tasks and more time providing exceptional care to your patients. We offer features that directly cater to your dental practices every need. Our goal is to help your practice run smoothly so you can provide the best patient care imaginable.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <Link 
              key={feature.name}
              href={feature.href}
              className="flex flex-col group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-900/5 shadow-lg">
                <Image
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-lime-600">
                  {feature.name}
                </h3>
                <p className="text-base font-semibold leading-7 text-lime-600">
                  {feature.summary}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 