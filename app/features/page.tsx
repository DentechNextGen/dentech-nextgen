'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
  const features = [
    {
      title: 'Practice Management',
      description: 'Streamline your dental practice operations with our comprehensive management solution. Our system offers advanced financial and patient reports, insurance processing, and appointment scheduling, all conveniently housed in one place.',
      image: 'practice-management-1.webp',
      href: '/features/practice-management'
    },
    {
      title: 'Digital Imaging',
      description: 'Advanced imaging solutions for modern dentistry with unprecedented clarity and efficiency. Capture, store, and analyze dental images with state-of-the-art technology integrated seamlessly with your practice management software.',
      image: 'sensors.jpg',
      href: '/features/digital-imaging'
    },
    {
      title: 'Patient Check-In',
      description: 'Digital check-in system that streamlines patient registration and reduces wait times. Our solution includes digital forms, patient history tracking, and insurance verification to create a smooth, paperless check-in experience.',
      image: 'kiosk.jpg',
      href: '/features/patient-check-in'
    },
    {
      title: 'Voice-Activated Charting',
      description: 'Revolutionary voice-controlled charting system for hands-free operation. Chart patient exams swiftly with voice commands, saving time and improving efficiency while maintaining accurate patient records.',
      image: 'voice-graphics-1.webp',
      href: '/features/voice-activated-charting'
    },
    {
      title: 'Document Management',
      description: 'Secure digital document management for all your practice needs. Go paperless with our comprehensive system that allows you to store, access, and manage all your practice documents digitally with enhanced security.',
      image: 'files.jpg',
      href: '/features/document-management'
    },
    {
      title: 'Patient Communication',
      description: 'Enhance patient engagement with automated reminders and communication tools. Keep your patients informed and engaged with automated appointment reminders, treatment updates, and secure messaging.',
      image: 'reminders.jpg',
      href: '/features/patient-communication'
    },
    {
      title: 'Eservices',
      description: 'Digital solutions for modern dental practices, from online scheduling to digital forms. Our eservices platform brings together all the digital tools you need, including online payments and electronic claims processing.',
      image: 'eservices-graphics-1.webp',
      href: '/features/eservices'
    },
    {
      title: 'Managed Services',
      description: 'Complete IT support and maintenance for your dental practice. Our managed services team provides proactive monitoring, security management, and technical support to keep your practice running smoothly.',
      image: 'itservices.jpg',
      href: '/features/managed-services'
    },
    {
      title: 'Hardware Solutions',
      description: 'Complete hardware solutions designed specifically for dental practices. From workstations to servers, we provide and support all the hardware your practice needs, ensuring compatibility and optimal performance.',
      image: 'monitor.jpg',
      href: '/features/hardware-solutions'
    }
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Features
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover our comprehensive suite of solutions designed to transform your dental practice. 
              From practice management to hardware solutions, we provide everything you need to run a modern, 
              efficient practice.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <Link 
                  key={index} 
                  href={feature.href}
                  className="group relative block overflow-hidden rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-primary-600">
                        {feature.title}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1"> →</span>
                      </h3>
                      <p className="mt-4 text-base leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={`/images/${feature.image}`}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your practice?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our complete suite of solutions can revolutionize your dental practice.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/schedule"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule Demo
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-white">
                  Contact Sales <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 