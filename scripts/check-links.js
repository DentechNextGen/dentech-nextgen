import http from 'http';

const urls = [
  '/about',
  '/features',
  '/support',
  '/blog',
  '/resources',
  '/schedule',
  '/go-to-assist',
  '/features/practice-management',
  '/features/voice-activated-charting',
  '/features/document-management',
  '/features/patient-check-in',
  '/features/patient-communication',
  '/features/digital-imaging',
  '/features/eservices',
  '/features/managed-services',
  '/features/hardware-solutions',
  '/privacy',
  '/docs/End-of-Year-2022.pdf',
  '/docs/Tesia-Dental-Payer-Listing-Condensed-v04.27.21.pdf',
  '/docs/Tesia-Dental-Payer-Listing-v05.14.25.pdf',
  '/docs/Business-Associate-Agreement-2021.pdf',
  '/docs/License-Transfer-Instructions-and-Important-Information.pdf',
  '/docs/Dentech-System-Requirements-2024.pdf'
];

const checkUrl = (url) => {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: url,
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      resolve({
        url,
        status: res.statusCode,
        ok: res.statusCode === 200
      });
    });

    req.on('error', (error) => {
      resolve({
        url,
        status: 'error',
        ok: false,
        error: error.message
      });
    });

    req.end();
  });
};

const checkAllUrls = async () => {
  console.log('Checking URLs for 404s...\n');
  
  const results = await Promise.all(urls.map(checkUrl));
  
  console.log('Results:');
  console.log('=========\n');
  
  const ok = results.filter(r => r.ok);
  const notOk = results.filter(r => !r.ok);
  
  if (ok.length > 0) {
    console.log('✅ Working URLs:');
    ok.forEach(result => {
      console.log(`  ${result.url} (${result.status})`);
    });
    console.log();
  }
  
  if (notOk.length > 0) {
    console.log('❌ Broken URLs:');
    notOk.forEach(result => {
      console.log(`  ${result.url} (${result.status})`);
    });
    console.log();
  }
  
  console.log(`Summary: ${ok.length} working, ${notOk.length} broken`);
};

// Wait a bit for the dev server to start up
setTimeout(checkAllUrls, 5000); 
