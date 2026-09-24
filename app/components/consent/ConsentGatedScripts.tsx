'use client'

import { Analytics } from '@vercel/analytics/next'
import ClarityInit from '../ClarityInit'
import MetricoolInit from '../MetricoolInit'
import HubSpotInit from '../HubSpotInit'
import MetaPixelInit from '../MetaPixelInit'
import { useConsent } from './ConsentProvider'

/**
 * Etiquetas que NO entienden Google Consent Mode y que, por tanto, no deben
 * cargarse siquiera sin permiso.
 *
 * Analiticas: Clarity (graba sesion), Metricool, Vercel Analytics y HubSpot
 * (sus cookies __hstc / hubspotutk son de seguimiento, y el widget de chat
 * llega con ellas).
 *
 * Marketing: Meta Pixel.
 *
 * Google Ads, GA4 y GTM si se cargan siempre, pero arrancan con todas las
 * señales denegadas por <ConsentModeInit /> y solo pasan a `granted` cuando el
 * visitante acepta. Ese es el mecanismo que Google define para ellas.
 *
 * SpeedInsights queda fuera: mide rendimiento, no comportamiento, y no se
 * declara como analítica en el aviso de privacidad.
 */
export default function ConsentGatedScripts() {
  const { consent } = useConsent()

  return (
    <>
      {consent?.analytics && (
        <>
          <ClarityInit />
          <MetricoolInit />
          <Analytics />
          <HubSpotInit />
        </>
      )}
      {consent?.marketing && <MetaPixelInit />}
    </>
  )
}
