// Types + tiny helpers for gtag.js (Google Ads / GA).
// The script itself is loaded by <GoogleAdsInit /> in the root layout.

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

export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID ?? ''
export const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ?? ''
export const GADS_WHATSAPP_LABEL = process.env.NEXT_PUBLIC_GADS_WHATSAPP_LABEL ?? ''

/** Fire a Google Ads conversion. Returns true if gtag is ready. */
export function fireConversion(sendTo: string, params: Record<string, unknown> = {}): boolean {
  if (typeof window === 'undefined') return false
  const gtag = window.gtag
  if (typeof gtag !== 'function') return false
  gtag('event', 'conversion', { send_to: sendTo, ...params })
  return true
}

/**
 * Fire a Google Ads conversion and invoke `done` once the tag has flushed
 * (or after a short timeout as a fallback). Use before navigating away.
 * See: https://developers.google.com/tag-platform/gtagjs/reference#event
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
