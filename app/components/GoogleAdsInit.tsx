import Script from 'next/script'

const GOOGLE_ADS_ID = 'AW-17871428510'

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
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}
