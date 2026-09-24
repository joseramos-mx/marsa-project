import Script from 'next/script'

/**
 * HubSpot — valores por defecto de consentimiento.
 *
 * El equivalente de <ConsentModeInit /> para HubSpot, y por el mismo motivo:
 * el script de seguimiento se carga siempre —HubSpot valida la instalacion
 * buscandolo en el HTML— pero arranca sin permiso para nada, y solo pasa a
 * `true` cuando el visitante acepta. ConsentProvider emite ese update.
 *
 * `disableHubSpotCookieBanner` apaga la tarjeta de cookies propia de HubSpot:
 * aqui la lleva <ConsentProvider />, y dos banners serian absurdos.
 *
 * Debe ejecutarse ANTES que js.hs-scripts.com, de ahi "beforeInteractive":
 * la doc de HubSpot exige que el flag este puesto antes de que su banner
 * cargue, y el estado de consentimiento lo leen sus scripts al arrancar.
 *
 * Ojo: HubSpot NO persiste este valor entre cargas —lo dice su doc— asi que
 * el update se reenvia en cada visita desde pushConsentUpdate().
 */
export default function HubSpotConsentInit() {
  return (
    <Script id="hubspot-consent-default" strategy="beforeInteractive">
      {`
        window.disableHubSpotCookieBanner = true;
        window._hsp = window._hsp || [];
        window._hsp.push(['setHubSpotConsent', {
          analytics: false,
          advertisement: false,
          functionality: true
        }]);
      `}
    </Script>
  )
}
