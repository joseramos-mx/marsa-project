export const META_PIXEL_ID = '1066577606350235'

/**
 * Meta Pixel (Facebook / Instagram Ads).
 *
 * El snippet del Administrador de Eventos, con dos cambios.
 *
 * 1. fbq('consent', 'revoke') antes de 'init'. Es el patron que Meta publica
 *    para consentimiento: el pixel se carga, pero no envia nada hasta que se
 *    concede. La concesion la emite pushConsentUpdate() al montar. Meta pide
 *    llamar a revoke en CADA pagina, y por eso el snippet va en linea: se
 *    ejecuta en cada carga, antes de que hidrate nada.
 *
 * 2. Se omite el <noscript><img>. Dispara un PageView sin pasar por ninguna
 *    comprobacion, y como la tarjeta de cookies necesita JavaScript, un
 *    visitante sin JS no puede consentir nunca: incluirlo seria rastrear
 *    justo a quien no ha podido decir que si.
 *
 * Igual que HubSpot, no usa next/script: "afterInteractive" no deja ningun
 * <script> en el HTML servido —solo una entrada en la carga util de React,
 * porque inyecta el tag al hidratar— y el validador de Meta no encontraba el
 * pixel. Un <script> en linea normal si queda en el HTML.
 */
const SNIPPET = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('consent', 'revoke');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`

export default function MetaPixelInit() {
  return <script id="meta-pixel" dangerouslySetInnerHTML={{ __html: SNIPPET }} />
}
