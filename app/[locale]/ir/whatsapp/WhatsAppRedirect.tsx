'use client'

import { useEffect, useRef } from 'react'
import { trackEvent, fireConversionThen, whatsappConversionTarget } from '../../../../lib/gtag'

/**
 * Dispara la medicion y salta a WhatsApp.
 *
 * Esta pagina existe para que el traspaso a WhatsApp sea medible: wa.me es un
 * dominio de terceros donde no se puede colocar una etiqueta, asi que la
 * "vista de pagina de la API de WhatsApp" se registra aqui, en primera parte.
 *
 * De paso elimina la carrera del beacon: al no estar navegando fuera del sitio
 * en el momento de disparar, la etiqueta tiene tiempo de salir.
 */
export default function WhatsAppRedirect({
  target,
  src,
}: {
  target: string
  src: string
}) {
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    done.current = true

    // Interaccion: de que boton del sitio vino el usuario.
    trackEvent('whatsapp_click', {
      link_location: src,
      link_url: target,
    })

    const go = () => window.location.replace(target)
    const conversion = whatsappConversionTarget()

    if (conversion) fireConversionThen(conversion, go, 700)
    else window.setTimeout(go, 120)
  }, [target, src])

  return null
}
