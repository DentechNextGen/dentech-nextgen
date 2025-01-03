'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ComputerDesktopIcon, DeviceTabletIcon, ServerIcon, PrinterIcon } from '@heroicons/react/24/outline'

export default function HardwareSolutions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/hardware-solutions.webp',
    'managed-services-graphics-6.webp'
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
                      alt="Hardware Solutions"
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
                          alt={`Hardware Solutions Screenshot ${index + 1}`}
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
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Hardware Solutions
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Dental Hardware Solutions For Your Practice
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Dentech offers a complete line of dental hardware solutions to meet your practice&apos;s needs. From workstations and servers to printers and networking equipment, we provide everything you need to run your practice efficiently. Our hardware solutions are designed specifically for dental practices, ensuring compatibility with your dental software and optimal performance.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    We&apos;ll help you select and implement the right hardware solutions for your practice&apos;s needs.
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
              Complete Hardware Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <ComputerDesktopIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Workstations & Computers
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">High-performance dental workstations and computers designed specifically for dental practices. Our systems are optimized for dental software and imaging applications, ensuring smooth operation and excellent performance.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <DeviceTabletIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Mobile & Tablet Solutions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Mobile hardware solutions including tablets, signature pads, and mobile workstations. Perfect for patient check-in, mobile charting, and treatment planning. Our mobile solutions integrate seamlessly with your practice management software.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <ServerIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Servers & Networking
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Enterprise-grade servers and networking equipment to keep your practice running smoothly. Our server solutions include backup systems, redundancy, and disaster recovery options to protect your valuable data.</p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <PrinterIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Printers & Peripherals
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Complete range of dental-specific printers and peripherals including label printers, prescription printers, and document scanners. All our peripherals are tested for compatibility with major dental software systems.</p>
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
                Ready to upgrade your practice hardware?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our hardware solutions can modernize your practice.
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