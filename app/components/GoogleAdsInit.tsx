import Script from 'next/script'

const GOOGLE_ADS_ID = 'AW-17871428510'
const GA4_ID = 'G-ZLKMQC2J6S'

/**
 * Carga gtag.js UNA sola vez y configura todas las propiedades que lo usan:
 *   - Google Ads (AW-...) para conversiones
 *   - GA4 (G-...) para analitica
 *
 * gtag.js es una libreria compartida: cargar el script dos veces (una por
 * propiedad) duplicaria las peticiones y puede duplicar el conteo. Por eso
 * se carga un solo <script> y se emite un `config` por propiedad.
 */
export default function GoogleAdsInit() {
  return (
    <>
      <Script
        id="google-ads-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
          gtag('config', '${GA4_ID}');
        `}
      </Script>
    </>
  )
}
