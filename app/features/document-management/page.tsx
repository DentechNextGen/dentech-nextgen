'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function DocumentManagement() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'paperless.jpg',
    'files.jpg',
    'integrating-paperless-dentistry.webp',
    'imagine-running-dentech-with-no-paper-documents–digitize-your-practice-today.webp',
    'we-are-a-paperless-office.webp',
    'go-paperless-with-automatic-estatements.webp'
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Document Management
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Go Paperless with Smart Document Management
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Transform your practice with our comprehensive document management solution. Digitize your records, streamline workflows, and ensure secure, instant access to all your documents.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/schedule"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Schedule Demo
              </a>
              <a href="#features" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mx-auto max-w-5xl">
            {/* Main Image */}
            <div className="relative rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
              <Image
                src={`/images/${selectedImage || galleryImages[0]}`}
                alt="Document Management"
                width={1200}
                height={800}
                className="w-full rounded-lg"
                priority
              />
            </div>
            
            {/* Thumbnails Grid */}
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === image ? 'border-primary-500 ring-2 ring-primary-500' : 'border-white/10 hover:border-primary-400'
                  }`}
                >
                  <Image
                    src={`/images/${image}`}
                    alt={`Document Management Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Additional Content */}
            <div className="mt-12 text-center">
              <p className="text-lg leading-8 text-gray-300">
                Eliminate paper clutter and enhance efficiency with our digital document management system. 
                Access patient records instantly, securely store documents, and streamline your practice&apos;s workflow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Smart Document Management Tools
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {[
                {
                  title: "Digital Document Storage",
                  description: "Securely store and organize all your practice documents digitally, from patient records to insurance forms.",
                  image: "files.jpg"
                },
                {
                  title: "Instant Access",
                  description: "Find any document in seconds with our powerful search and filtering capabilities.",
                  image: "fingertips.jpg"
                },
                {
                  title: "Automated Workflows",
                  description: "Streamline document processing with automated routing, notifications, and approvals.",
                  image: "paperless.jpg"
                },
                {
                  title: "Secure Backup",
                  description: "Keep your documents safe with automatic backups and disaster recovery options.",
                  image: "firewall.jpg"
                },
                {
                  title: "Integration",
                  description: "Seamlessly integrate with other Dentech modules for a complete practice management solution.",
                  image: "integration.jpg"
                },
                {
                  title: "Compliance",
                  description: "Maintain HIPAA compliance with secure document handling and detailed audit trails.",
                  image: "probate.jpg"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-6 border border-gray-200">
                    <Image
                      src={`/images/${feature.image}`}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to go paperless?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Schedule a demo today and see how our document management solution can transform your practice.
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
    </main>
  )
} 