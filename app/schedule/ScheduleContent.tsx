'use client'

import { useEffect } from 'react'
import { siteConfig } from '@/src/config'

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (opts: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

const ScheduleContent = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script')
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)

    // Once the script is loaded, initialize the widget
    script.onload = () => {
      if (window.Calendly) {
        const element = document.getElementById('calendly-inline-widget')
        if (element) {
          window.Calendly.initInlineWidget({
            url: siteConfig.links.calendly,
            parentElement: element
          })
        }
      }
    }

    return () => {
      // Cleanup
      const widget = document.getElementById('calendly-inline-widget')
      if (widget) {
        widget.innerHTML = ''
      }
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div 
      id="calendly-inline-widget"
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}

export { ScheduleContent } 