'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { DENY_ALL, GRANT_ALL, CONSENT_VERSION } from '../../../lib/consent'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }

type Choice = { v: number; analytics: boolean; marketing: boolean }

/** Interruptor accesible. Sin <input> para que herede el estilo del sitio. */
function Toggle({
  checked,
  onChange,
  label,
  locked = false,
}: {
  checked: boolean
  onChange?: (v: boolean) => void
  label: string
  locked?: boolean
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={locked}
      onClick={() => onChange?.(!checked)}
      className={`relative w-9 h-5 shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8d974]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] ${
        checked ? 'bg-linear-to-r from-[#c69a2c] to-[#f8d974]' : 'bg-white/15'
      } ${locked ? 'opacity-45 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </button>
  )
}

function Row({
  title,
  description,
  checked,
  onChange,
  locked,
}: {
  title: string
  description: string
  checked: boolean
  onChange?: (v: boolean) => void
  locked?: boolean
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 border-b border-white/8 last:border-b-0">
      <div className="min-w-0">
        <p className="text-white text-[12.5px] font-semibold leading-snug">{title}</p>
        <p className="text-white/45 text-[11.5px] leading-relaxed mt-0.5">{description}</p>
      </div>
      <Toggle checked={checked} onChange={onChange} label={title} locked={locked} />
    </div>
  )
}

/**
 * Contenido de la tarjeta de consentimiento. Se pasa como `description` al
 * toast de Sileo, que acepta ReactNode; por eso mantiene su propio estado
 * para los interruptores en lugar de depender de un contexto externo.
 */
export default function ConsentCard({
  initialExpanded = false,
  initial,
  onSave,
}: {
  initialExpanded?: boolean
  initial?: { analytics: boolean; marketing: boolean }
  onSave: (choice: Choice) => void
}) {
  const t = useTranslations('cookies')
  const [expanded, setExpanded] = useState(initialExpanded)
  const [analytics, setAnalytics] = useState(initial?.analytics ?? false)
  const [marketing, setMarketing] = useState(initial?.marketing ?? false)

  const linkCls = 'text-[#f8d974] underline underline-offset-2 hover:text-white transition-colors'
  const ghostBtn =
    'px-3.5 py-2 rounded-full border border-white/20 text-white/75 text-[11px] font-medium uppercase tracking-[0.1em] hover:border-white/40 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8d974]/70'
  const solidBtn =
    'px-3.5 py-2 rounded-full bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60'

  return (
    <div className="w-full" style={GEIST}>
      <p className="text-white/70 text-[12.5px] leading-relaxed">
        {t('body')}{' '}
        <Link href="/aviso-de-privacidad#cookies" className={linkCls}>
          {t('privacyLink')}
        </Link>
        .
      </p>

      {expanded && (
        <div className="mt-3.5 rounded-xl border border-white/10 bg-black/25 px-3.5 py-1">
          <Row
            title={t('necessary.title')}
            description={t('necessary.description')}
            checked
            locked
          />
          <Row
            title={t('analytics.title')}
            description={t('analytics.description')}
            checked={analytics}
            onChange={setAnalytics}
          />
          <Row
            title={t('marketing.title')}
            description={t('marketing.description')}
            checked={marketing}
            onChange={setMarketing}
          />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 mt-4">
        {expanded ? (
          <button
            type="button"
            className={solidBtn}
            onClick={() => onSave({ v: CONSENT_VERSION, analytics, marketing })}
          >
            {t('save')}
          </button>
        ) : (
          <button type="button" className={ghostBtn} onClick={() => setExpanded(true)}>
            {t('customize')}
          </button>
        )}

        <button type="button" className={ghostBtn} onClick={() => onSave({ ...DENY_ALL })}>
          {t('rejectAll')}
        </button>

        {!expanded && (
          <button type="button" className={solidBtn} onClick={() => onSave({ ...GRANT_ALL })}>
            {t('acceptAll')}
          </button>
        )}
      </div>
    </div>
  )
}
