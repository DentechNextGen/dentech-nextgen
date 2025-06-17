"use client";

import Banner from "@/app/components/Banner";
import SplashtopEmbed from "../components/SplashtopEmbed";
import { ArrowPathIcon, ShieldCheckIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Quick Setup",
    description: "Download and run our secure remote support tool - no installation required",
    icon: ArrowPathIcon,
  },
  {
    name: "Secure Connection",
    description: "Industry-standard encryption ensures your session is private and secure",
    icon: ShieldCheckIcon,
  },
  {
    name: "Cross-Platform",
    description: "Support for both Windows and Mac operating systems",
    icon: ComputerDesktopIcon,
  },
];

export default function RemoteSupportPage() {
  return (
    <main className="bg-white">
      <Banner
        title="Remote Support"
        content="Connect with our support team instantly. Our secure remote access tool allows us to assist you quickly and efficiently with any technical issues you may encounter."
      />

      {/* Download Section */}
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Windows Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-lime-600 mb-8">
                <Image
                  src="/icons/windows.svg"
                  alt="Windows"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Windows Support</h3>
              <p className="text-gray-600 mb-8">
                Click the button below to download our secure remote support tool for Windows. Once downloaded, run the application and share the session code with our support team.
              </p>
              <SplashtopEmbed platform="win" color="green" />
            </div>

            {/* Mac Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-lime-600 mb-8">
                <Image
                  src="/icons/apple.svg"
                  alt="Mac"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mac Support</h3>
              <p className="text-gray-600 mb-8">
                Click the button below to download our secure remote support tool for Mac. Once downloaded, open the application and share the session code with our support team.
              </p>
              <SplashtopEmbed platform="mac" color="green" />
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
            <ol className="space-y-4 text-gray-600">
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">1</span>
                <span>Click the download button for your operating system (Windows or Mac)</span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">2</span>
                <span>Run the downloaded Splashtop SOS application</span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">3</span>
                <span>A session code will appear - share this code with our support team</span>
              </li>
              <li className="flex gap-x-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-600 text-white">4</span>
                <span>Our technician will connect to your computer and assist you with your issue</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
