'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DocumentTextIcon, PencilSquareIcon, ClipboardDocumentListIcon, FolderOpenIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function DocumentManagement() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/document-management.webp',
    'dendox-graphics-1.webp',
    'dendox-graphics-2.webp',
    'dendox-graphics-3.webp',
    'dendox-graphics-4.webp',
    'dendox-graphics-5.webp'
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
                </div>
              </div>

              {/* Content */}
              <div className="mt-16 lg:mt-0 lg:col-start-2">
                <div className="text-left">
                  <FiveStars />
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Document Management
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Organize your patient documents
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Never lose a document again. Using DenDox as your document management tool propels your practice far beyond the realm of merely going paperless. Thousands of practices trust DenDox to efficiently produce and access patient records, all the while minimizing the risks and regulatory challenges associated with misplaced paper files.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Simplify your workflow with our Drag-and-Drop Upload feature—there's no need for window-switching or extra prompts.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Benefit from our Automatic Audits and keep a watchful eye on every document alteration. Furthermore, with our Secure Encryption, you can ensure utmost patient privacy and remain in full compliance with HIPAA regulations.
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
              Advanced Document Management Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <DocumentTextIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Enjoy The Benefits Of A Paperless Office
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Practice owners, dental assistants, hygienists, receptionists — anyone who needs to quickly access or update patient records can do so in seconds. Streamlining work and centralizing updates. Freeing up more time for patient care.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/paperless.webp"
                      alt="Paperless Office"
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
                    <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  An Easy Way For Patients To Sign Documents
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Treatment consent forms, insurance confirmations, new patient intake forms–all this and more can be digitally signed and stored inside DenDox.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/sign.webp"
                      alt="Digital Document Signing"
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
                    <ClipboardDocumentListIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Everything You Need, At Your Fingertips
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Medical histories, Explanation of Benefits (EOBs), questionnaires, past communications, patient's clinical charts, the list goes on. Files can be securely created and managed from anywhere (PC, Tablet, Mobile, and more).</p>
                  <p className="mt-6">
                    <Image
                      src="/images/fingertips.webp"
                      alt="Document Access"
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
                    <FolderOpenIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Quickly Access Patient Files
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Regardless what information a patient can provide over the phone or during an appointment, finding files is a breeze. You or your staff can search by patient name, patient ID, social security number, DOB, phone number, and more.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/files.webp"
                      alt="Quick File Access"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 