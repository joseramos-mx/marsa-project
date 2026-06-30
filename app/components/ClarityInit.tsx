'use client'

import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

const CLARITY_PROJECT_ID = 'x2d7wn0idh'

/**
 * Initializes Microsoft Clarity (session replay + heatmaps) on mount.
 * Uses the official @microsoft/clarity npm package — equivalent to the
 * inline snippet from the Clarity dashboard, but tree-shakeable, typed,
 * and easy to extend (identify, setTag, event, consent, etc.).
 */
export default function ClarityInit() {
  useEffect(() => {
    Clarity.init(CLARITY_PROJECT_ID)
  }, [])
  return null
}
