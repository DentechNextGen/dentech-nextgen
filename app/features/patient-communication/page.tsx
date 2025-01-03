'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BellAlertIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function PatientCommunication() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/patient-communication.webp',
    'patient-communication-graphics-1.webp',
    'patient-communication-graphics-2.webp',
    'patient-communication-graphics-3.webp',
    'patient-communication-graphics-4.webp',
    'patient-communication-graphics-5.webp'
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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enhanced Patient Communication
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <BellAlertIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Automated Appointment Reminders
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Reduce no-shows and keep your schedule full with automated appointment reminders via text, email, or phone. Customize reminder timing and frequency to match your practice's needs.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/features/appointment-reminders.webp"
                      alt="Appointment Reminders"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Recall System
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Keep patients coming back with our automated recall system. Send timely reminders for routine check-ups, cleanings, and follow-up appointments to maintain consistent patient care.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/features/recall-system.webp"
                      alt="Recall System"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Two-Way Messaging
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Enable direct communication between your practice and patients with secure two-way messaging. Patients can easily confirm appointments, ask questions, and receive important updates about their care.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/features/two-way-messaging.webp"
                      alt="Two-Way Messaging"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to improve patient communication?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our communication tools can enhance patient engagement.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/schedule"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 