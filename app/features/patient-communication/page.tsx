'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChatBubbleOvalLeftEllipsisIcon, AdjustmentsHorizontalIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function PatientCommunication() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/patient-communication.webp',
    'communicator-graphics-1.webp',
    'communicator-graphics-2.webp',
    'communicator-graphics-3.webp',
    'communicator-graphics-4.webp',
    'communicator-graphics-5.webp'
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
              {/* Gallery */}
              <div className="lg:col-start-1">
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
                </div>
              </div>

              {/* Content */}
              <div className="mt-16 lg:mt-0 lg:col-start-2">
                <div className="text-left">
                  <FiveStars />
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Patient Communication
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Integrated Patient Communication Solution
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Welcome to the number one way to keep dental patients engaged and on time
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    nReduce no-shows up to 50% with automated reminders. Receive confirmed bookings via your scheduler in real-time.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Increase revenue with built-in SMS and email marketing.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    <a href="/docs/Dentech-System-Requirements-2024.pdf" className="text-lime-400 hover:text-lime-300 underline">
                      View System Requirements →
                    </a>
                  </p>
                  <div className="mt-10 flex items-start gap-x-6">
                    <a
                      href="/schedule"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Schedule Demo
                    </a>
                    <a
                      href="/support"
                      className="rounded-md ring-1 ring-white px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
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
              Advanced Patient Communication Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Automated SMS And Email Reminders
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Studies show at least 50% of no-shows are because patients forget their appointment day has arrived. With Dentech Communicator, automated SMS and email reminders ensure your chairs stay filled each day.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/reminders.webp"
                      alt="Automated Reminders"
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
                    <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Enhanced Patient Scheduling Flexibility
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Instead of feeling limited to one appointment time, patients can see a list of available times based on their criteria. This flexibility makes it more likely their schedule will stay compatible with the time and date they choose.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/flexibility.webp"
                      alt="Scheduling Flexibility"
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
                    <ChatBubbleOvalLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Automatic Pre-Op Instructions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Combats no-shows by automatically sending pre-op and post-op instructions. Additionally, TRUE 2-way allows patients to discuss any care concerns right from their mobile phone. These features ensure patients are well-informed and can easily communicate, encouraging appointment follow-through.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/instructions.webp"
                      alt="Pre-Op Instructions"
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
                Schedule a demo today and see how our patient communication solution can transform your practice.
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