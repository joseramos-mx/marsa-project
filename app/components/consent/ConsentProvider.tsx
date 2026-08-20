'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { sileo, Toaster } from 'sileo'
import { useTranslations } from 'next-intl'
import {
  subscribeConsent,
  getConsentSnapshot,
  getConsentServerSnapshot,
  setStoredConsent,
  pushConsentUpdate,
  type ConsentState,
} from '../../../lib/consent'
import ConsentCard from './ConsentCard'

type ConsentContextValue = {
  /** null mientras el visitante no haya respondido. */
  consent: ConsentState | null
  /** Reabre la tarjeta con el panel de categorías desplegado. */
  openPreferences: () => void
}

const ConsentContext = createContext<ConsentContextValue>({
  consent: null,
  openPreferences: () => {},
})

export function useConsent() {
  return useContext(ConsentContext)
}

/**
 * Orquesta el consentimiento de cookies.
 *
 * La tarjeta se muestra como un toast fijo de Sileo (`duration: null`) cuyo
 * `description` es <ConsentCard />. Sileo aporta la animación de muelle y el
 * morphing; la lógica de consentimiento y el Consent Mode viven aquí.
 *
 * Los valores por defecto de Consent Mode los emite <ConsentModeInit /> con
 * estrategia beforeInteractive, por delante de gtag y GTM. Aquí solo se envía
 * el `update` cuando ya se conoce la respuesta.
 *
 * El estado se lee con useSyncExternalStore porque la cookie vive fuera de
 * React: así no hace falta un setState al montar.
 */
export default function ConsentProvider({ children }: { children: ReactNode }) {
  const t = useTranslations('cookies')
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  )
  const toastId = useRef<string | null>(null)

  const dismissCard = useCallback(() => {
    if (toastId.current) {
      sileo.dismiss(toastId.current)
      toastId.current = null
    }
  }, [])

  const commit = useCallback(
    (choice: { v: number; analytics: boolean; marketing: boolean }) => {
      const saved = setStoredConsent(choice)
      pushConsentUpdate(saved)
      dismissCard()
    },
    [dismissCard],
  )

  const showCard = useCallback(
    (expanded: boolean, initial?: { analytics: boolean; marketing: boolean }) => {
      dismissCard()
      toastId.current = sileo.show({
        type: 'info',
        duration: null,
        position: 'bottom-left',
        // `fill` fija el fondo de la tarjeta al gris del sitio en vez de
        // dejarlo al mapa de temas de Sileo.
        fill: '#141414',
        title: t('title'),
        description: (
          <ConsentCard initialExpanded={expanded} initial={initial} onSave={commit} />
        ),
      })
    },
    [commit, dismissCard, t],
  )

  const openPreferences = useCallback(() => {
    const current = getConsentSnapshot()
    showCard(true, current ?? { analytics: false, marketing: false })
  }, [showCard])

  // Visitante que ya respondió: aplicamos su elección sin volver a preguntar.
  useEffect(() => {
    if (consent) pushConsentUpdate(consent)
  }, [consent])

  // Visitante nuevo: la tarjeta aparece con un pequeño margen para no competir
  // con la carga inicial de la página.
  useEffect(() => {
    if (consent) return
    const id = window.setTimeout(() => showCard(false), 900)
    return () => window.clearTimeout(id)
  }, [consent, showCard])

  return (
    <ConsentContext.Provider value={{ consent, openPreferences }}>
      {children}
      {/*
        theme="light" NO significa tarjeta clara: en Sileo el tema describe la
        pagina. Con "light" el texto del toast se pinta claro, que es lo que
        necesita una tarjeta oscura. Ver la nota en globals.css.
      */}
      <Toaster position="bottom-left" theme="light" offset={{ bottom: 24, left: 24 }} />
    </ConsentContext.Provider>
  )
}
