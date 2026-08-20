'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackEvent } from '../../lib/gtag'

export const PHONE_E164 = '+527225356109'
export const PHONE_DISPLAY = '722 535 6109'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
  /** De donde sale el clic: alimenta `link_location` en GA4. */
  src?: string
  children: ReactNode
}

/**
 * Enlace `tel:` instrumentado.
 *
 * A diferencia de WhatsApp no hace falta pagina puente: `tel:` no navega, el
 * navegador entrega la llamada al sistema y la pagina sigue viva, asi que el
 * evento tiene tiempo de salir.
 */
export default function PhoneLink({ src = 'desconocido', children, ...anchorProps }: Props) {
  return (
    <a
      href={`tel:${PHONE_E164}`}
      onClick={() => trackEvent('phone_click', { link_location: src })}
      {...anchorProps}
    >
      {children}
    </a>
  )
}
