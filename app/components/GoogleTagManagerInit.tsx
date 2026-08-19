import Script from 'next/script'

export const GTM_ID = 'GTM-PNW476K2'

/**
 * Contenedor de Google Tag Manager.
 *
 * Es el snippet oficial del panel, pero servido por next/script en lugar de
 * un <script> suelto en el <head>: asi Next lo deduplica por id y lo carga
 * con la estrategia "afterInteractive", la misma que usa el componente
 * oficial <GoogleTagManager> de @next/third-parties.
 *
 * El <noscript> que acompana a este snippet vive en app/[locale]/layout.tsx,
 * como primer hijo de <body>, que es donde Google pide que se coloque.
 */
export default function GoogleTagManagerInit() {
  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  )
}
