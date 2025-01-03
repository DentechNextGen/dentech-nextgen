'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CloudIcon, ShieldCheckIcon, ServerStackIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function ManagedServices() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/managed-services.webp',
    'managed-services-graphics-1.webp',
    'managed-services-graphics-2.webp',
    'managed-services-graphics-3.webp',
    'managed-services-graphics-4.webp',
    'managed-services-graphics-5.webp'
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
                      alt="Managed Services"
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
                          alt={`Managed Services Screenshot ${index + 1}`}
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
                    Managed Services
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Dental IT Security Services Managed For You
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Your practice&apos;s data and security are more important than ever. Businesses that hold patient health information (including dental practices) are often a major target for cybersecurity threats.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Even small practices are often targets because many hackers see them as low-hanging fruit, less likely to have the time and resources to stay protected. Beyond this, you never know when your data and hardware will be vulnerable to a physical threat such as fire, inclement weather, or even theft.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    That&apos;s why our team at Dentech offers a wide variety of managed services mentioned below. While you focus on serving patients, we can do all the heavy lifting to keep your dental practice&apos;s network secure, safeguard your data, and help you remain HIPAA compliant.
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
              Advanced Managed Services Solutions
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <CloudIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  DenCloud™ - Never Lose Important Data Again
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">DenCloud offers a secure and cost-effective solution for your dental practice&apos;s data storage and backup, protecting against device failure, malware, and natural disasters with offsite storage and cloud access from any device. Daily email backup status reports and robust tech safeguards ensure compliance and prevent costly HIPAA violations.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/dencloud.webp"
                      alt="DenCloud"
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
                    <ShieldCheckIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Firewall Management and Antivirus Monitoring
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Dentech&apos;s Firewall Management system provides real-time protection for dental practices, stopping threats and offering weekly network health reports, traffic monitoring, website filtering, and automatic antivirus updates, all under warranty. Additionally, Dentech&apos;s Antivirus Monitoring updates protections automatically, notifies you of new threats, and shields against ransomware and other cyber threats, ensuring peace of mind without needing technical expertise.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/firewall.webp"
                      alt="Firewall Management"
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
                    <ServerStackIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Service & Network IT Services For Dental Practices
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">With Dentech&apos;s proactive monitoring, anticipate and resolve tech issues before they impact your practice, covering servers, switches, and the internet, while providing weekly reports and monitoring critical events, backups, and connection health. Avoid costly downtime that can lead to significant sales and productivity losses annually.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/itservices.webp"
                      alt="IT Services"
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
                    <Cog6ToothIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Automatic Server and Computer Patch Management
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Dentech&apos;s Patch Management ensures your dental practice&apos;s servers and workstations are always updated with the latest security patches, protecting against vulnerabilities and giving you control over updates. Stay focused on your practice, not IT maintenance, and prevent common security issues that lead to breaches.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/server.webp"
                      alt="Server Management"
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
                Ready to secure your practice?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our managed services solutions can transform your practice.
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