'use client';

import Script from 'next/script';

export const ServiceWorkerRegistration = () => {
  return (
    <Script
      id="service-worker-registration"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
              }).catch(error => {
                console.log('ServiceWorker registration failed: ', error);
              });
            });
          }
        `,
      }}
    />
  );
};
