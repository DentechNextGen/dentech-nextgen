'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Add type definition for Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement | null
        prefill?: Record<string, unknown>
        utm?: Record<string, unknown>
      }) => void
    }
  }
}

export function ScheduleContent() {
  useEffect(() => {
    // Create a function to initialize Calendly
    const initCalendly = () => {
      if (window.Calendly && document.getElementById('calendly-inline-widget')) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/jane-kaminski/introductory-call?hide_gdpr_banner=1',
          parentElement: document.getElementById('calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      }
    };

    // Try to initialize immediately if Calendly is already loaded
    initCalendly();

    // Also set up a listener for when the script loads
    const handleScriptLoad = () => {
      initCalendly();
    };

    window.addEventListener('calendly:ready', handleScriptLoad);

    return () => {
      window.removeEventListener('calendly:ready', handleScriptLoad);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="afterInteractive"
        onLoad={() => {
          // Trigger initialization when script loads
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/jane-kaminski/introductory-call?hide_gdpr_banner=1',
              parentElement: document.getElementById('calendly-inline-widget'),
              prefill: {},
              utm: {}
            });
          }
        }}
      />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Schedule a Demo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.
            </p>
          </div>
          <div className="mt-16 h-[800px]">
            <div 
              id="calendly-inline-widget" 
              className="w-full h-full"
              style={{ 
                minWidth: '320px',
                height: '100%',
                overflow: 'hidden'
              }} 
            />
          </div>
        </div>
      </div>
    </>
  )
} 