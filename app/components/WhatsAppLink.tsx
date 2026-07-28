'use client'

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { fireConversionThen, GADS_ID, GADS_WHATSAPP_LABEL } from '../../lib/gtag'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
  href: string
  children: ReactNode
  /** Override the default WhatsApp conversion label (rare). */
  sendTo?: string
}

/**
 * Anchor to wa.me / whatsapp URLs that fires a Google Ads conversion event
 * BEFORE navigating. Falls back to a plain link if gtag or the env vars
 * aren't configured yet.
 */
export default function WhatsAppLink({
  href,
  children,
  sendTo,
  target = '_blank',
  rel = 'noopener noreferrer',
  ...anchorProps
}: Props) {
  const conversionTarget = sendTo ?? (GADS_ID && GADS_WHATSAPP_LABEL
    ? `${GADS_ID}/${GADS_WHATSAPP_LABEL}`
    : null)

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!conversionTarget) return
    // Middle-click / cmd-click / ctrl-click → let the browser handle it, no need to defer.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      fireConversionThen(conversionTarget, () => {})
      return
    }
    // Same-tab navigation: defer navigation so the beacon can flush.
    if (target !== '_blank') {
      e.preventDefault()
      fireConversionThen(conversionTarget, () => {
        window.location.href = href
      })
      return
    }
    // New tab: the tab is already opening, just fire and forget.
    fireConversionThen(conversionTarget, () => {})
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      {...anchorProps}
    >
      {children}
    </a>
  )
}
