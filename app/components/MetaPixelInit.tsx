import Script from 'next/script'

export const META_PIXEL_ID = '1066577606350235'

/**
 * Meta Pixel (Facebook / Instagram Ads).
 *
 * Es el snippet oficial del Administrador de Eventos, servido por next/script
 * igual que hacemos con GTM: mismo codigo, pero deduplicado por id y cargado
 * con "afterInteractive".
 *
 * El <noscript><img> del snippet original se omite a proposito. Dispara un
 * PageView sin pasar por ninguna comprobacion, y como la tarjeta de cookies
 * necesita JavaScript, un visitante sin JS jamas puede consentir: incluirlo
 * significaria rastrear justo a quien no ha podido decir que si.
 *
 * Meta Pixel no entiende Google Consent Mode, asi que no se carga hasta que
 * el visitante acepta la categoria de marketing. Ver <ConsentGatedScripts />.
 */
export default function MetaPixelInit() {
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  )
}
