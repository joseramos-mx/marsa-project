import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  /** Deja de usarse: el destino lo construye la pagina puente. Se acepta por compatibilidad. */
  href?: string
  /** De donde sale el clic: alimenta `link_location` en GA4. */
  src?: string
  /** Mensaje prellenado opcional para la conversacion. */
  text?: string
  children: ReactNode
}

/**
 * Enlace a WhatsApp que pasa por /ir/whatsapp en lugar de ir directo a wa.me.
 *
 * El rodeo es deliberado: wa.me es un dominio de terceros donde no se puede
 * medir nada. Con la pagina puente obtenemos una vista de pagina real, la
 * conversion se dispara sin competir con la navegacion, y el parametro `src`
 * nos dice que boton genera conversaciones.
 *
 * Es un enlace normal, sin JavaScript: funciona aunque falle la hidratacion.
 */
export default function WhatsAppLink({
  src = 'desconocido',
  text,
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
  href: _ignoredHref,
  ...anchorProps
}: Props) {
  const params = new URLSearchParams({ src })
  if (text) params.set('text', text)

  return (
    <a href={`/ir/whatsapp?${params.toString()}`} target={target} rel={rel} {...anchorProps}>
      {children}
    </a>
  )
}
