'use client'

import { Analytics } from '@vercel/analytics/next'
import ClarityInit from '../ClarityInit'
import MetricoolInit from '../MetricoolInit'
import MetaPixelInit from '../MetaPixelInit'
import { useConsent } from './ConsentProvider'

/**
 * Etiquetas que NO saben escuchar una señal de consentimiento y que, por
 * tanto, no deben cargarse siquiera sin permiso.
 *
 * Analiticas: Clarity (graba sesion), Metricool y Vercel Analytics.
 *
 * Marketing: Meta Pixel.
 *
 * Google Ads, GA4, GTM y HubSpot si se cargan siempre, pero arrancan con todo
 * denegado —<ConsentModeInit /> para las de Google, <HubSpotConsentInit />
 * para HubSpot— y solo pasan a concedido cuando el visitante acepta. Es el
 * mecanismo que cada uno de esos proveedores define para sus etiquetas.
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
        </>
      )}
      {consent?.marketing && <MetaPixelInit />}
    </>
  )
}
