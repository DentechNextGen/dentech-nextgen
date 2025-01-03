'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DeviceTabletIcon, ClipboardDocumentCheckIcon, MicrophoneIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function PatientCheckIn() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/patient-check-in.webp',
    'check-in-graphics-1.webp',
    'check-in-graphics-2.webp',
    'check-in-graphics-3.webp',
    'check-in-graphics-4.webp',
    'check-in-graphics-5.webp',
    'check-in-graphics-6.webp',
    {
      type: 'video',
      videoId: '0lxkAqjgMr8',
      thumbnail: `https://img.youtube.com/vi/0lxkAqjgMr8/hqdefault.jpg`,
      title: 'Superior Patient Check-In With Dentech NextGen'
    }
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
                    {(selectedImage && typeof selectedImage === 'object' && 'videoId' in selectedImage) || (!selectedImage && typeof galleryImages[7] === 'object' && 'videoId' in galleryImages[7]) ? (
                      <iframe
                        width="1200"
                        height="800"
                        src={`https://www.youtube.com/embed/${(selectedImage as any)?.videoId || (galleryImages[7] as any).videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full rounded-lg aspect-video"
                      />
                    ) : (
                      <Image
                        src={`/images/${selectedImage || galleryImages[0]}`}
                        alt="Patient Check-In"
                        width={1200}
                        height={800}
                        className="w-full rounded-lg"
                        priority
                      />
                    )}
                  </div>
                  
                  {/* Thumbnails Grid */}
                  <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {galleryImages.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(item)}
                        className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === item ? 'border-primary-500 ring-2 ring-primary-500' : 'border-white/10 hover:border-primary-400'
                        }`}
                      >
                        {typeof item === 'object' && 'videoId' in item ? (
                          <div
                            style={{
                              backgroundImage: `url(${item.thumbnail})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              width: '100%',
                              height: '100%',
                              position: 'absolute'
                            }}
                            aria-label={item.title || `YouTube Video Thumbnail ${index + 1}`}
                          />
                        ) : (
                          <Image
                            src={`/images/${item}`}
                            alt={`Patient Check-In Screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        )}
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
                    Patient Check-In
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Patient Check-In Kiosk and Monitor System
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    The fast and contact-free way to streamline your dental practice&apos;s patient check-ins.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    See check-in status and start treatments even if reception&apos;s busy. Replace a busy front desk with self check-ins.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Our &apos;Check Me In&apos; Kiosk and Appointment Monitor make patient check-ins effortless.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Automatically keep patient info and appointment statuses updated.
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
              Advanced Patient Check-In Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <DeviceTabletIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Our &apos;Check Me In&apos; Kiosk
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Enable patients to check in using their appointment list, the last four digits of their SSN, or phone number. Our system simplifies updates with customized intake forms and automatically generates care forms upon self check-in, streamlining the process.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/kiosk.webp"
                      alt="Check Me In Kiosk"
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
                  Our &apos;Check Me In&apos; Appointment Monitor
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Effortlessly monitor patient check-ins and appointment progress, add important notes in seconds, and manage patient care with one-click form printing.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/monitor.webp"
                      alt="Check Me In Appointment Monitor"
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
                    <MicrophoneIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Alexa, Show Me My Appointments
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Use Alexa for quick patient info and appointment updates, on-demand form printing, and more - like an extra receptionist without the added cost.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/alexa.webp"
                      alt="Alexa Integration"
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
                Ready to streamline your check-in process?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our patient check-in solution can transform your practice.
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