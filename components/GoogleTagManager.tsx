import Script from 'next/script'

export default function GoogleTagManager() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-39M9QC5EXR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-39M9QC5EXR');
        `}
      </Script>
    </>
  )
}



//Legacy GTM from previous development but not used
// export default function GoogleTagManager() {
//   return (
//     <>
//       <Script id="google-tag-manager" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-N9TJ4QR');
//         `}
//       </Script>
//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-N9TJ4QR"
//           height="0"
//           width="0"
//           style={{ display: 'none', visibility: 'hidden' }}
//         />
//       </noscript>
//     </>
//   )
// } 