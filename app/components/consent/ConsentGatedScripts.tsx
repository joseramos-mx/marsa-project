'use client'

import { Analytics } from '@vercel/analytics/next'
import ClarityInit from '../ClarityInit'
import MetricoolInit from '../MetricoolInit'
import { useConsent } from './ConsentProvider'

/**
 * Etiquetas que NO saben escuchar una señal de consentimiento y que, por
 * tanto, no deben cargarse siquiera sin permiso: Clarity (graba sesion),
 * Metricool y Vercel Analytics.
 *
 * El resto —GTM, GA4, Google Ads, HubSpot y Meta Pixel— si se cargan siempre,
 * porque cada uno trae su propio mecanismo: arrancan con todo denegado desde
 * <ConsentModeInit />, <HubSpotConsentInit /> y el `revoke` del snippet de
 * <MetaPixelInit />, y solo pasan a concedido cuando el visitante acepta.
 * Ademas es lo que sus validadores de instalacion necesitan: buscan la
 * etiqueta en la pagina, y no aceptan cookies para encontrarla.
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
