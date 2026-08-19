/**
 * Estado de consentimiento de cookies.
 *
 * Se guarda en una cookie de primera parte para que sobreviva entre visitas y
 * pueda leerse tambien desde el servidor si algun dia hace falta.
 */

export const CONSENT_COOKIE = 'marsa_consent'
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 180 // 180 días

/**
 * Versión del consentimiento. Subir este número invalida las respuestas
 * anteriores y vuelve a pedir permiso: hazlo cuando cambien las categorías
 * o los proveedores declarados en el aviso de privacidad.
 */
export const CONSENT_VERSION = 1

export type ConsentCategory = 'analytics' | 'marketing'

export type ConsentState = {
  v: number
  analytics: boolean
  marketing: boolean
  /** Fecha ISO en que el usuario respondió; sirve como prueba de consentimiento. */
  ts: string
}

export const DENY_ALL: Omit<ConsentState, 'ts'> = {
  v: CONSENT_VERSION,
  analytics: false,
  marketing: false,
}

export const GRANT_ALL: Omit<ConsentState, 'ts'> = {
  v: CONSENT_VERSION,
  analytics: true,
  marketing: true,
}

/** Lee el consentimiento guardado. Devuelve null si no hay o si caducó por versión. */
export function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null

  const raw = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${CONSENT_COOKIE}=`))
    ?.split('=')
    .slice(1)
    .join('=')

  if (!raw) return null

  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as ConsentState
    if (parsed?.v !== CONSENT_VERSION) return null
    return {
      v: parsed.v,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      ts: typeof parsed.ts === 'string' ? parsed.ts : '',
    }
  } catch {
    return null
  }
}

export function writeConsent(state: Omit<ConsentState, 'ts'>): ConsentState {
  const full: ConsentState = { ...state, ts: new Date().toISOString() }
  if (typeof document !== 'undefined') {
    const secure = window.location.protocol === 'https:' ? '; Secure' : ''
    document.cookie =
      `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(full))}` +
      `; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`
  }
  return full
}

/* ─────────────────────────────────────────────────────────────
   Google Consent Mode v2
   ───────────────────────────────────────────────────────────── */

type ConsentValue = 'granted' | 'denied'

/**
 * Traduce nuestras dos categorías a las señales de Consent Mode v2.
 * `security_storage` y `functionality_storage` van siempre concedidas:
 * corresponden a lo estrictamente necesario.
 */
export function toConsentModeSignals(state: {
  analytics: boolean
  marketing: boolean
}): Record<string, ConsentValue> {
  const ad: ConsentValue = state.marketing ? 'granted' : 'denied'
  const analytics: ConsentValue = state.analytics ? 'granted' : 'denied'

  return {
    ad_storage: ad,
    ad_user_data: ad,
    ad_personalization: ad,
    analytics_storage: analytics,
    personalization_storage: analytics,
    functionality_storage: 'granted',
    security_storage: 'granted',
  }
}

/** Envía el `consent update` a gtag. No hace nada si gtag aún no existe. */
export function pushConsentUpdate(state: { analytics: boolean; marketing: boolean }): void {
  if (typeof window === 'undefined') return
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  if (typeof gtag !== 'function') return
  gtag('consent', 'update', toConsentModeSignals(state))
}

/* ─────────────────────────────────────────────────────────────
   Store externo
   La cookie es estado que vive fuera de React. Exponerla como un
   store con useSyncExternalStore evita tener que hacer setState
   dentro de un efecto al montar.
   ───────────────────────────────────────────────────────────── */

let cached: ConsentState | null | undefined
const listeners = new Set<() => void>()

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/** Snapshot en cliente. Cachea para devolver siempre la misma referencia. */
export function getConsentSnapshot(): ConsentState | null {
  if (cached === undefined) cached = readConsent()
  return cached
}

/** En el servidor nunca hay consentimiento conocido. */
export function getConsentServerSnapshot(): ConsentState | null {
  return null
}

/** Persiste la elección, refresca el snapshot y notifica a los suscriptores. */
export function setStoredConsent(choice: Omit<ConsentState, 'ts'>): ConsentState {
  cached = writeConsent(choice)
  listeners.forEach((l) => l())
  return cached
}
