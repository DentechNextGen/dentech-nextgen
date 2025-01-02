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
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jane-kaminski/introductory-call?hide_gdpr_banner=1',
        parentElement: document.getElementById('calendly-inline-widget'),
      });
    }
  }, []);

  return (
    <div className="relative w-full">
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
        className="w-full min-h-screen md:min-h-[800px] rounded-2xl bg-gray-50"
        style={{ 
          minWidth: '320px',
          height: 'calc(100vh - 200px)',
          maxHeight: '1000px'
        }}
      />
    </div>
  )
} 