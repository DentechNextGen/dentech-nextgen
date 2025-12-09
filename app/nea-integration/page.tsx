"use client";

import YouTubeVideo from "@/components/YouTubeVideo";
import NewCTA from "@/app/support/components/NewCTA";

export default function NEAIntegrationVideo() {
  return (
    <main className="bg-white">
      {/* Header Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              End Claim Delays: Supercharge Your Workflow with Dentech&apos;s NEA Integration
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn how Dentech&apos;s powerful NEA Integration, powered by FastAttach, can transform your claim submission process. Discover how to eliminate manual attachments, accelerate reimbursements, and streamline your revenue cycle management.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <YouTubeVideo videoId="" className="w-full" />
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

