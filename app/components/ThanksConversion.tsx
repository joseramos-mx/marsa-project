'use client'

import { useEffect, useRef } from 'react'
import { trackEvent, fireConversion, leadConversionTarget } from '../../lib/gtag'

const SEEN_KEY = 'marsa_leads_reportados'

/** Devuelve true la primera vez que ve este lead; false en recargas. */
function claimLead(lid: string): boolean {
  try {
    const raw = window.sessionStorage.getItem(SEEN_KEY)
    const seen: string[] = raw ? JSON.parse(raw) : []
    if (seen.includes(lid)) return false
    seen.push(lid)
    window.sessionStorage.setItem(SEEN_KEY, JSON.stringify(seen.slice(-20)))
    return true
  } catch {
    // Si sessionStorage no esta disponible seguimos adelante: `transaction_id`
    // hace que Google deduplique igualmente en su lado.
    return true
  }
}

/**
 * Confirmacion final de lead en la Thank You Page.
 *
 * Solo dispara si la URL trae `lid`, el identificador que genera el server
 * action tras enviar el correo. Eso descarta dos casos que antes inflaban las
 * conversiones: las visitas directas a /gracias y los envios de bots atrapados
 * por el honeypot, que llegan aqui sin `lid`.
 *
 * `transaction_id` permite ademas que Google deduplique en su lado si el mismo
 * lead se reportara dos veces.
 */
export default function ThanksConversion({ lid }: { lid?: string }) {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current || !lid) return
    if (!claimLead(lid)) return
    fired.current = true

    // GA4: el lead efectivo, distinto del intento de envio.
    trackEvent('generate_lead', { transaction_id: lid, currency: 'MXN', value: 0 })

    const target = leadConversionTarget()
    if (target) fireConversion(target, { transaction_id: lid })
  }, [lid])

  return null
}
