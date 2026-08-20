'use client'

import { useEffect } from 'react'
import { fireConversion, GADS_ID, GADS_CONVERSION_LABEL } from '../../lib/gtag'

// TODO(marketing): fill NEXT_PUBLIC_GADS_CONVERSION_LABEL with the label from
// the "Lead form" conversion action in Google Ads (Tools → Conversions).

export default function ThanksConversion() {
  useEffect(() => {
    if (!GADS_ID || !GADS_CONVERSION_LABEL) return
    fireConversion(`${GADS_ID}/${GADS_CONVERSION_LABEL}`)
  }, [])
  return null
}
