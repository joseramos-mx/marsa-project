'use client'

import { useState, type KeyboardEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { DENY_ALL, GRANT_ALL, CONSENT_VERSION } from '../../../lib/consent'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }

type Choice = { v: number; analytics: boolean; marketing: boolean }

/**
 * Control pulsable dentro de la tarjeta.
 *
 * No puede ser un <button>: el toast de Sileo ES un <button>, y anidar uno
 * dentro de otro es invalido — la propia libreria lo esquiva renderizando su
 * accion como <a>. Ademas su onPointerDown llama a setPointerCapture y se
 * traga el clic de los hijos, salvo en los que llevan `data-sileo-button`.
 *
 * De ahi el <span role="button">: valido dentro de un boton, con el atributo
 * que desactiva la captura, y con teclado propio porque un span no lo trae.
 */
function Pressable({
  onPress,
  className,
  children,
  label,
  role = 'button',
  checked,
  disabled = false,
}: {
  onPress?: () => void
  className: string
  children?: ReactNode
  label?: string
  role?: 'button' | 'switch'
  checked?: boolean
  disabled?: boolean
}) {
  const handleKey = (e: KeyboardEvent) => {
    if (disabled) return
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      onPress?.()
    }
  }

  return (
    <span
      role={role}
      tabIndex={disabled ? -1 : 0}
      data-sileo-button
      aria-label={label}
      aria-checked={role === 'switch' ? checked : undefined}
      aria-disabled={disabled || undefined}
      onClick={disabled ? undefined : onPress}
      onKeyDown={handleKey}
      className={className}
    >
      {children}
    </span>
  )
}

/** Interruptor accesible, construido sobre Pressable por el mismo motivo. */
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
    <Pressable
      role="switch"
      checked={checked}
      label={label}
      disabled={locked}
      onPress={() => onChange?.(!checked)}
      className={`relative w-9 h-5 shrink-0 rounded-full transition-colors duration-200 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8d974]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] ${
        checked ? 'bg-linear-to-r from-[#c69a2c] to-[#f8d974]' : 'bg-white/15'
      } ${locked ? 'opacity-45 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </Pressable>
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
    'inline-flex items-center justify-center cursor-pointer select-none px-3.5 py-2 rounded-full border border-white/20 text-white/75 text-[11px] font-medium uppercase tracking-[0.1em] hover:border-white/40 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f8d974]/70'
  const solidBtn =
    'inline-flex items-center justify-center cursor-pointer select-none px-3.5 py-2 rounded-full bg-linear-to-r from-[#c69a2c] via-[#f8d974] to-[#c69a2c] text-black text-[11px] font-semibold uppercase tracking-[0.1em] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60'

  return (
    <div className="w-full" style={GEIST}>
      <p className="text-white/70 text-[12.5px] leading-relaxed">
        {t('body')}{' '}
        <Link href="/aviso-de-privacidad#cookies" data-sileo-button className={linkCls}>
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
          <Pressable
            className={solidBtn}
            onPress={() => onSave({ v: CONSENT_VERSION, analytics, marketing })}
          >
            {t('save')}
          </Pressable>
        ) : (
          <Pressable className={ghostBtn} onPress={() => setExpanded(true)}>
            {t('customize')}
          </Pressable>
        )}

        <Pressable className={ghostBtn} onPress={() => onSave({ ...DENY_ALL })}>
          {t('rejectAll')}
        </Pressable>

        {!expanded && (
          <Pressable className={solidBtn} onPress={() => onSave({ ...GRANT_ALL })}>
            {t('acceptAll')}
          </Pressable>
        )}
      </div>
    </div>
  )
}
