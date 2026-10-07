'use client'

import Script from 'next/script'

const CONTENTSQUARE_TAG_ID = '4f4fd74bf9316'

/**
 * Contentsquare (grabacion de sesion + mapas de calor).
 *
 * El panel entrega un <script src defer> suelto; next/script lo carga con
 * deduplicacion por id y la estrategia "afterInteractive" que la doc de Next
 * recomienda para analitica.
 */
export default function ContentsquareInit() {
  return (
    <Script
      id="contentsquare-tag"
      src={`https://t.contentsquare.net/uxa/${CONTENTSQUARE_TAG_ID}.js`}
      strategy="afterInteractive"
    />
  )
}
