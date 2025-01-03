'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FingerPrintIcon, CameraIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function DigitalImaging() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/digital-imaging.webp',
    'digital-imaging-graphics-1.webp',
    'digital-imaging-graphics-2.webp',
    'digital-imaging-graphics-3.webp',
    'digital-imaging-graphics-4.webp',
    'digital-imaging-graphics-5.webp'
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
                      alt="Digital Imaging"
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
                          alt={`Digital Imaging Screenshot ${index + 1}`}
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
                    Digital Imaging
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Digital sensors, cameras, and software
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Discover the ultimate dental imaging experience for both your practice and your patients with XDR Radiology. At the core lies XDR's unparalleled imaging, marrying intuitive design with advanced features, culminating in a profound enhancement of your entire workflow. By integrating XDR imaging software and digital sensors, you ensure expedited imaging and precise diagnoses.
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
              Advanced Digital Imaging Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <FingerPrintIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Dental Sensors
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">The XDR Anatomic Intraoral Sensor stands out as the top choice for dental imaging, offering high-definition images with superior comfort and durability. It excels in both performance and value, backed by a comprehensive 2-year warranty with no hidden costs.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/sensors.webp"
                      alt="Dental Sensors"
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
                    <CameraIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Dental Cameras
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">The Apteryx LED IC100 Intraoral Camera, our top pick, offers an ideal mix of value, performance, and ease of use. Its high-resolution, auto-focus capabilities and plug-and-play setup elevate imaging quality and simplify patient diagnosis and education.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/camera.webp"
                      alt="Dental Cameras"
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
                    <PuzzlePieceIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Seamless Integration
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Dentech's software seamlessly integrates with a wide range of digital imaging software, streamlining your workflow and allowing you to concentrate on patient care. Compatible with leading brands like Apteryx, Carestream, CLINIVIEW™, DentalEye, DEXIS, DICOM, Dolphin, Gendex, PatientGallery®, Schick, Sidexis, Sens-a-ray, SOPRO, TigerView, and many others.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/integration.webp"
                      alt="Seamless Integration"
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
                Ready to upgrade your imaging capabilities?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our digital imaging solutions can enhance your practice.
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