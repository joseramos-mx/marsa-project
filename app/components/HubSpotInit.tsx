export const HUBSPOT_PORTAL_ID = '51897708'

/**
 * HubSpot: codigo de seguimiento + widget de chat.
 *
 * A diferencia del resto de etiquetas del sitio, esta NO usa next/script.
 * El motivo es el validador de HubSpot: comprueba la instalacion buscando el
 * <script> en el HTML de la pagina, y next/script con "afterInteractive" no
 * deja ninguno — solo un <link rel="preload"> y una entrada en la carga util
 * de React, porque inyecta el tag al hidratar. La validacion fallaba por eso.
 *
 * `defer` y no `async`, que es lo que diferencia este caso del embed original:
 *
 * - con `async`, React 19 iza el <script> al <head> y acaba por delante de
 *   <HubSpotConsentInit />, que Next coloca al principio del <body>. HubSpot
 *   podria arrancar sin haber leido el consentimiento;
 * - con `defer` el tag se queda donde lo pongamos y no se ejecuta hasta que
 *   el documento esta parseado, o sea despues de cualquier script en linea.
 *   El orden deja de ser una carrera y pasa a estar garantizado.
 *
 * Ninguno de los dos bloquea el parseo, asi que el cambio no cuesta nada. Es
 * ademas lo que pide el embed del panel: <script async defer> antes de
 * </body>, donde `async` solo servia para el caso sin `defer`.
 *
 * El id "hs-script-loader" se conserva porque HubSpot lo usa para reconocer
 * su propio loader. La URL del panel viene sin protocolo ("//js.hs-scripts
 * .com/..."), herencia de cuando convivian http y https; aqui se fija a https.
 *
 * Se carga siempre, sin esperar a la tarjeta de cookies: que no rastree sin
 * permiso lo garantiza <HubSpotConsentInit />. Mismo trato que GTM.
 */
export default function HubSpotInit() {
  return (
    <script
      id="hs-script-loader"
      defer
      src={`https://js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
    />
  )
}
