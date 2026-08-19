'use client'

import Script from 'next/script'

const METRICOOL_HASH = 'b1bc37a4120db05756c1de434f71f80c'

declare global {
  interface Window {
    beTracker?: { t: (config: { hash: string }) => void }
  }
}

/**
 * Metricool tracking pixel.
 *
 * El snippet del panel de Metricool inyecta el <script> a mano y encadena
 * onreadystatechange/onload (herencia de IE). next/script hace lo mismo con
 * deduplicacion por id y las estrategias de carga de Next, asi que cargamos
 * be.js directamente y llamamos a beTracker.t() desde onLoad.
 *
 * "afterInteractive" es la estrategia que la doc de Next recomienda para
 * analitica; onLoad solo funciona en componentes cliente.
 */
export default function MetricoolInit() {
  return (
    <Script
      id="metricool-tracker"
      src="https://tracker.metricool.com/resources/be.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.beTracker?.t({ hash: METRICOOL_HASH })
      }}
    />
  )
}
