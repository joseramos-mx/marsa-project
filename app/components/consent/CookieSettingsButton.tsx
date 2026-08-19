'use client'

import { useTranslations } from 'next-intl'
import { useConsent } from './ConsentProvider'

/**
 * Reabre la tarjeta de consentimiento con el panel de categorías desplegado.
 * El aviso de privacidad remite a este control, así que debe estar siempre
 * accesible desde el pie de página.
 */
export default function CookieSettingsButton({ className }: { className?: string }) {
  const t = useTranslations('footer')
  const { openPreferences } = useConsent()

  return (
    <button type="button" onClick={openPreferences} className={className}>
      {t('cookies')}
    </button>
  )
}
