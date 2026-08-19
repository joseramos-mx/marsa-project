'use client'

import { Analytics } from '@vercel/analytics/next'
import ClarityInit from '../ClarityInit'
import MetricoolInit from '../MetricoolInit'
import { useConsent } from './ConsentProvider'

/**
 * Etiquetas que NO entienden Google Consent Mode y que, por tanto, no deben
 * cargarse siquiera sin permiso: Clarity (graba sesión), Metricool y Vercel
 * Analytics.
 *
 * Google Ads, GA4 y GTM sí se cargan siempre, pero arrancan con todas las
 * señales denegadas por <ConsentModeInit /> y solo pasan a `granted` cuando el
 * visitante acepta. Ese es el mecanismo que Google define para ellas.
 *
 * SpeedInsights queda fuera: mide rendimiento, no comportamiento, y no se
 * declara como analítica en el aviso de privacidad.
 */
export default function ConsentGatedScripts() {
  const { consent } = useConsent()

  if (!consent?.analytics) return null

  return (
    <>
      <ClarityInit />
      <MetricoolInit />
      <Analytics />
    </>
  )
}
