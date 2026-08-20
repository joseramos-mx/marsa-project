'use client'

import { useEffect } from 'react'

export const GCLID_STORAGE_KEY = 'gclid'

/**
 * Captures the `gclid` query parameter on entry and persists it in
 * sessionStorage, so the form can attach it to the lead payload for offline
 * conversion imports. See docs.google.com/ads → Import offline conversions.
 */
export default function GclidCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const gclid = params.get('gclid')
      if (gclid) sessionStorage.setItem(GCLID_STORAGE_KEY, gclid)
    } catch {
      // sessionStorage may be unavailable (private mode / SSR) — ignore.
    }
  }, [])

  return null
}

export function readGclid(): string | null {
  if (typeof window === 'undefined') return null
  try {
    return sessionStorage.getItem(GCLID_STORAGE_KEY)
  } catch {
    return null
  }
}
