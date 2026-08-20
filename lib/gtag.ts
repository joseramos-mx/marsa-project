// Tipos y helpers para gtag.js (Google Ads / GA4).
// El script lo carga <GoogleAdsInit /> desde el layout raiz, y las señales de
// consentimiento las declara <ConsentModeInit /> antes que nada.

type GtagCommand = 'js' | 'config' | 'event' | 'set' | 'consent'

type GtagFn = {
  (command: 'js', config: Date): void
  (command: 'config', targetId: string, config?: Record<string, unknown>): void
  (command: 'event', eventName: string, params?: Record<string, unknown>): void
  (command: GtagCommand, ...args: unknown[]): void
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: GtagFn
  }
}

/* Los IDs admiten override por entorno pero llevan valor por defecto, para que
   la medicion no dependa de que las variables esten definidas en el despliegue. */
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-17871428510'
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-ZLKMQC2J6S'

/* Etiquetas de conversion de Google Ads. Se rellenan desde
   Herramientas -> Conversiones en el panel de Ads. Sin ellas los eventos de
   GA4 siguen funcionando; solo se omite la conversion de Ads. */
export const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ?? ''
export const GADS_WHATSAPP_LABEL = process.env.NEXT_PUBLIC_GADS_WHATSAPP_LABEL ?? ''

/* ─────────────────────────────────────────────────────────────
   GA4
   ───────────────────────────────────────────────────────────── */

/**
 * Envia un evento a GA4.
 *
 * Se acota con `send_to` a la propiedad de GA4: sin eso, gtag emitiria el
 * evento tambien hacia Google Ads y ensuciaria el informe de conversiones.
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return
  const gtag = window.gtag
  if (typeof gtag !== 'function') return
  gtag('event', name, { send_to: GA_ID, ...params })
}

/** Pageview virtual, para pasos que no son una navegacion real de Next. */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined') return
  const gtag = window.gtag
  if (typeof gtag !== 'function') return
  gtag('event', 'page_view', {
    send_to: GA_ID,
    page_path: path,
    page_location: window.location.href,
    ...(title ? { page_title: title } : {}),
  })
}

/* ─────────────────────────────────────────────────────────────
   Google Ads
   ───────────────────────────────────────────────────────────── */

/** Dispara una conversion de Google Ads. Devuelve true si gtag estaba listo. */
export function fireConversion(sendTo: string, params: Record<string, unknown> = {}): boolean {
  if (typeof window === 'undefined') return false
  const gtag = window.gtag
  if (typeof gtag !== 'function') return false
  gtag('event', 'conversion', { send_to: sendTo, ...params })
  return true
}

/**
 * Dispara una conversion y llama a `done` cuando la etiqueta ha salido, o tras
 * un timeout de seguridad. Util antes de navegar fuera del sitio.
 */
export function fireConversionThen(
  sendTo: string,
  done: () => void,
  timeoutMs = 800,
): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    done()
    return
  }
  let fired = false
  const callback = () => {
    if (fired) return
    fired = true
    done()
  }
  window.setTimeout(callback, timeoutMs)
  window.gtag('event', 'conversion', {
    send_to: sendTo,
    event_callback: callback,
  })
}

/** `send_to` de la conversion de WhatsApp, o null si falta la etiqueta. */
export function whatsappConversionTarget(): string | null {
  return GADS_ID && GADS_WHATSAPP_LABEL ? `${GADS_ID}/${GADS_WHATSAPP_LABEL}` : null
}

/** `send_to` de la conversion de lead, o null si falta la etiqueta. */
export function leadConversionTarget(): string | null {
  return GADS_ID && GADS_CONVERSION_LABEL ? `${GADS_ID}/${GADS_CONVERSION_LABEL}` : null
}
