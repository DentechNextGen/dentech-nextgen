'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PatientCommunication() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'reminders.jpg',
    'improving-your-patient-recall-with-3-easy-steps-part-1.webp',
    'improving-your-patient-recall-with-3-easy-steps-part-2.webp',
    'improving-your-patient-recall-with-3-easy-steps-part-3.webp',
    'improvements-coming-your-way-to-your-patient-statements.webp',
    'go-paperless-with-automatic-estatements.webp'
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Patient Communication
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stay Connected with Your Patients
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Enhance patient engagement with our comprehensive communication tools. From automated reminders to personalized messages, keep your patients informed and engaged throughout their care journey.
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
                alt="Patient Communication"
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
                    alt={`Patient Communication Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Additional Content */}
            <div className="mt-12 text-center">
              <p className="text-lg leading-8 text-gray-300">
                Our communication tools help you maintain strong relationships with your patients through automated appointment reminders, 
                recall notifications, and personalized messages. Reduce no-shows and improve patient satisfaction.
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
              Comprehensive Communication Tools
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {[
                {
                  title: "Automated Reminders",
                  description: "Send automated appointment reminders via text, email, or phone to reduce no-shows.",
                  image: "reminders.jpg"
                },
                {
                  title: "Recall System",
                  description: "Keep patients coming back with automated recall notifications and follow-ups.",
                  image: "improving-your-patient-recall-with-3-easy-steps-part-1.webp"
                },
                {
                  title: "Digital Statements",
                  description: "Send electronic statements and payment reminders to streamline billing.",
                  image: "go-paperless-with-automatic-estatements.webp"
                },
                {
                  title: "Two-Way Messaging",
                  description: "Enable secure two-way communication between staff and patients.",
                  image: "improving-your-patient-recall-with-3-easy-steps-part-2.webp"
                },
                {
                  title: "Mass Notifications",
                  description: "Send important updates or announcements to all patients efficiently.",
                  image: "improving-your-patient-recall-with-3-easy-steps-part-3.webp"
                },
                {
                  title: "Patient Portal",
                  description: "Provide 24/7 access to appointments, messages, and records through our secure portal.",
                  image: "improvements-coming-your-way-to-your-patient-statements.webp"
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
              Ready to improve patient engagement?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Schedule a demo today and see how our communication tools can strengthen your patient relationships.
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