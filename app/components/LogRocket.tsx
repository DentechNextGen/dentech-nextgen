import Script from 'next/script'
import { useEffect } from 'react'

// Add type declaration for LogRocket
declare global {
  interface Window {
    LogRocket: {
      init: (appId: string) => void;
    }
  }
}

export default function LogRocket() {
  useEffect(() => {
    // Initialize LogRocket after component mounts
    if (window.LogRocket) {
      window.LogRocket.init('zwttpz/dentech');
    }
  }, []);

  return (
    <>
      <Script
        src="https://cdn.lgrckt-in.com/LogRocket.min.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  )
}