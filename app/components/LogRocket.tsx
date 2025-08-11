import Script from 'next/script'

export default function LogRocket() {
  return (
    <>
      <Script
        src="https://cdn.lgrckt-in.com/LogRocket.min.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <Script id="logrocket-init" strategy="afterInteractive">
        {`
          if (window.LogRocket) {
            window.LogRocket.init('zwttpz/dentech');
          }
        `}
      </Script>
    </>
  )
}
