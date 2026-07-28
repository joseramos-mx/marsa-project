import Script from 'next/script'

const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID

export default function GoogleAdsInit() {
  if (!GADS_ID) return null

  return (
    <>
      <Script
        id="google-ads-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GADS_ID}');
        `}
      </Script>
    </>
  )
}
