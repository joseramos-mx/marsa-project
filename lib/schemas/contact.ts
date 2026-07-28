import { z } from 'zod'

export const REASONS = [
  'Diente fracturado',
  'Me faltan dientes',
  'Diseño de sonrisa',
  'Otro',
] as const

export type ContactReason = (typeof REASONS)[number]

// Mexican mobile: 10 digits, accept common separators / country code, then normalize.
const phoneRaw = z
  .string()
  .trim()
  .min(10, 'Ingresa 10 dígitos')
  .transform((v) => v.replace(/\D/g, ''))
  .pipe(
    z
      .string()
      .regex(
        /^(?:52)?\d{10}$/,
        'Teléfono inválido — ingresa 10 dígitos (Ej. 7221234567)',
      )
      .transform((v) => (v.length === 12 ? v.slice(2) : v)),
  )

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nombre demasiado corto').max(80),
  phone: phoneRaw,
  email: z
    .union([z.literal(''), z.string().trim().email('Email inválido').max(120)])
    .optional()
    .transform((v) => (v ? v : undefined)),
  reason: z.enum(REASONS, { message: 'Selecciona un motivo' }),
  message: z.string().trim().max(1000).optional().transform((v) => v || undefined),
  consent: z
    .union([z.literal('on'), z.literal('true'), z.literal(true)])
    .transform(() => true as const),
  gclid: z.string().trim().max(200).optional().transform((v) => v || undefined),
  // Anti-spam fields
  website: z.string().max(0, 'spam').optional().default(''),
  ts: z.coerce.number().int().positive(),
})

export type ContactInput = z.infer<typeof contactSchema>
