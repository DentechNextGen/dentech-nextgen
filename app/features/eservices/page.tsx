'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DocumentCheckIcon, DocumentTextIcon, ClipboardDocumentCheckIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function Eservices() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/eservices.webp',
    'eservices-graphics-1.webp',
    'eservices-graphics-2.webp',
    'eservices-graphics-3.webp',
    'eservices-graphics-4.webp',
    'eservices-graphics-5.webp'
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
                      alt="Eservices"
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
                          alt={`Eservices Screenshot ${index + 1}`}
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
                    Eservices
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Simplify And Scale Your Dental Practice
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Doing more in your practice in less time doesn't have to mean spending all day racing the clock or spending as little time as possible with each patient. It goes without saying that when you improve your efficiency, you improve production and your dental practice's profits. Plus, it can help you manage one of the biggest problems that plague dentists: high overhead costs.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Dentech helps you work faster and lighten your load by offering a suite of eServices (listed below) to streamline key parts of your work.
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
              Advanced Eservices Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <DocumentCheckIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  eClaims – Electronic Claims Processing for Dentists
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Streamline claim processing by minimizing errors and the risk of rejections to speed up approvals. Verify essential information upfront, reduce the time spent on each claim, and ensure submissions are accurate and rejection-free.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/eClaims.webp"
                      alt="eClaims"
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
                    <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  eStatements - Go Paperless And Reduce Printing And Mailing Costs
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">eStatements ensures faster delivery of statements to patients at reduced costs, removes the need for mailing materials and inventory, and frees you from last-minute statement preparation and mailing.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/eStatements.webp"
                      alt="eStatements"
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
                    <ClipboardDocumentCheckIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  DenScript™ - Manage Patients' Prescriptions Online
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Simplify prescription management for dentists through a single online platform accessible from any device. Secure one-click e-prescriptions, quick checks for medication conflicts, and easy storage and retrieval of prescription histories, all backed by secure cloud-based technology.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/DenScript.webp"
                      alt="DenScript"
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
                    <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  FastAttach® - Send Info And Get Paid Faster
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Revolutionize the way you handle records and images by enabling the sending and receiving of crucial documents in minutes. Accelerate your revenue cycle with easy transmission of x-rays, perio charts, EOBs, and pre-treatment estimates.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/FastAttach.webp"
                      alt="FastAttach"
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
                Ready to streamline your practice?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our eservices solutions can transform your practice.
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