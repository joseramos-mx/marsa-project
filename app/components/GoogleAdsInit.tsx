import Script from 'next/script'

/**
 * Loads gtag.js once and configures every Google property we use:
 *   - NEXT_PUBLIC_GADS_ID  → Google Ads      (AW-…)
 *   - NEXT_PUBLIC_GA_ID    → Google Analytics 4 (G-…)
 * Both properties share the same gtag.js library, so we load it once
 * and issue a `config` call per property.
 */
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GoogleAdsInit() {
  const primaryId = GADS_ID || GA_ID
  if (!primaryId) return null

  const configCalls = [GADS_ID, GA_ID]
    .filter((id): id is string => Boolean(id))
    .map((id) => `gtag('config', '${id}');`)
    .join('\n          ')

  return (
    <>
      <Script
        id="google-ads-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${configCalls}
        `}
      </Script>
    </>
  )
}
