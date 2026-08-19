import Script from 'next/script'

/**
 * Consent Mode v2 — valores por defecto.
 *
 * Debe ejecutarse ANTES que gtag.js y que el contenedor de GTM, porque las
 * etiquetas leen el estado de consentimiento en cuanto arrancan. Por eso usa
 * la estrategia "beforeInteractive": Next lo inyecta en el HTML inicial, por
 * delante de cualquier codigo de la app.
 *
 * Todo arranca denegado salvo lo estrictamente necesario. Si el visitante ya
 * habia respondido, ConsentProvider emite un `consent update` en cuanto monta;
 * `wait_for_update` da un margen para que ese update llegue antes de que las
 * etiquetas decidan.
 */
export default function ConsentModeInit() {
  return (
    <Script id="consent-mode-default" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          personalization_storage: 'denied',
          functionality_storage: 'granted',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `}
    </Script>
  )
}
