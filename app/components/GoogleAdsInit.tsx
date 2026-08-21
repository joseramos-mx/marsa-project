import Script from 'next/script'

/**
 * Carga gtag.js UNA sola vez y configura todas las propiedades que lo usan:
 *   - Google Ads (AW-...) para conversiones
 *   - GA4 (G-...) para analitica
 *
 * gtag.js es una libreria compartida: cargar el script dos veces (una por
 * propiedad) duplicaria peticiones y puede duplicar el conteo. Por eso se
 * carga un solo <script> y se emite un `config` por propiedad.
 *
 * Los IDs admiten override por entorno para poder apuntar a propiedades de
 * prueba, pero llevan valor por defecto: si la variable no esta definida en
 * el despliegue, el seguimiento sigue funcionando.
 *
 * Las señales de consentimiento NO se emiten aqui. <ConsentModeInit /> las
 * declara denegadas con estrategia beforeInteractive, por delante de este
 * script y del contenedor de GTM.
 */
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-18394009075'
const GA4_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-ZLKMQC2J6S'

export default function GoogleAdsInit() {
  const ids = [GOOGLE_ADS_ID, GA4_ID].filter(Boolean)
  if (ids.length === 0) return null

  const configCalls = ids.map((id) => `gtag('config', '${id}');`).join('\n          ')

  return (
    <>
      <Script
        id="google-ads-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          ${configCalls}
        `}
      </Script>
    </>
  )
}
