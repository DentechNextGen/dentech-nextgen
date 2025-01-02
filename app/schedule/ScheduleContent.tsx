'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    Calendly?: any
  }
}

export function ScheduleContent() {
  useEffect(() => {
    // Only initialize if Calendly is loaded
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jane-kaminski/introductory-call?hide_gdpr_banner=1',
        parentElement: document.getElementById('calendly-inline-widget'),
      });
    }
  }, []);

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js" 
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/jane-kaminski/introductory-call?hide_gdpr_banner=1',
              parentElement: document.getElementById('calendly-inline-widget'),
            });
          }
        }}
      />
      <div 
        id="calendly-inline-widget" 
        className="w-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] rounded-2xl bg-gray-50"
        style={{ 
          minWidth: '320px',
          height: 'calc(100vh - 400px)',
          maxHeight: '900px'
        }}
      />
    </>
  )
} 