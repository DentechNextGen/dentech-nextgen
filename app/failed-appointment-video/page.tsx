"use client";

import YouTubeVideo from "@/components/YouTubeVideo";
import NewCTA from "@/app/support/components/NewCTA";

export default function FailedAppointmentVideo() {
  return (
    <main className="bg-white">
      {/* Header Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Master Dentech&apos;s Appointment Tracking Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn how to unlock peak efficiency and recapture revenue with
              Dentech&apos;s sophisticated appointment tracking tools. Discover
              how to minimize missed appointments, optimize your schedule, and
              boost your practice&apos;s performance.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <YouTubeVideo videoId="EDonohVXacQ" className="w-full" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="flex justify-center">
          <NewCTA />
        </div>
      </div>
    </main>
  );
}
