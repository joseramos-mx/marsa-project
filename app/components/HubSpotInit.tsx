import Script from 'next/script'

export const HUBSPOT_PORTAL_ID = '51897708'

/**
 * HubSpot: codigo de seguimiento + widget de chat.
 *
 * El embed del panel es un <script async defer> con id "hs-script-loader";
 * conservamos ese id porque HubSpot lo usa para reconocer su propio loader.
 * next/script con "afterInteractive" reproduce ese async/defer y ademas evita
 * que el script se duplique al navegar entre rutas.
 *
 * La URL del panel viene sin protocolo ("//js.hs-scripts.com/..."), herencia
 * de la epoca en que convivian http y https. Aqui se fija a https.
 *
 * HubSpot instala cookies de seguimiento (__hstc, hubspotutk, __hssc) que el
 * aviso de privacidad declara como analiticas, asi que se carga solo con ese
 * consentimiento. Ver <ConsentGatedScripts />.
 */
export default function HubSpotInit() {
  return (
    <Script
      id="hs-script-loader"
      src={`https://js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
      strategy="afterInteractive"
    />
  )
}
