import Script from 'next/script'

// Add type declaration for LogRocket
declare global {
  interface Window {
    LogRocket: {
      init: (appId: string) => void;
    }
  }
}

export default function LogRocket() {
  return (
    <>
      <Script
        src="https://cdn.lgrckt-in.com/LogRocket.min.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={() => {
          // Initialize LogRocket after the script has fully loaded
          if (window.LogRocket) {
            window.LogRocket.init('zwttpz/dentech');
          }
        }}
      />
    </>
  )
}