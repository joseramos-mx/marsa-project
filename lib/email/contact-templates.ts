import type { ContactInput } from '../schemas/contact'

function esc(s: string | undefined | null): string {
  if (!s) return ''
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #ececec;font-family:Arial,sans-serif;font-size:13px;color:#555;width:180px;vertical-align:top">${esc(label)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #ececec;font-family:Arial,sans-serif;font-size:14px;color:#0c0c0c">${esc(value)}</td>
    </tr>`
}

export function renderNotificationEmail(d: ContactInput): string {
  const phoneIntl = `+52${d.phone}`
  const waLink = `https://wa.me/52${d.phone}`
  const receivedAt = new Date(d.ts).toLocaleString('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Mexico_City',
  })

  // Diseño plano y sobrio: los correos con cabeceras de color y mucho markup
  // puntúan peor en los filtros de spam, y este solo tiene que leerse rápido.
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#ffffff;font-family:Arial,sans-serif">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto">
    <tr>
      <td style="padding:0 0 14px;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#0c0c0c">
        Nuevo contacto web
      </td>
    </tr>
    <tr><td>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #ececec">
        ${row('Nombre', d.name)}
        ${/* En las landings el motivo se deriva del tratamiento; en /contacto
             lo elige el paciente. En ambos casos le sirve al equipo clínico
             para saber de que viene la consulta antes de llamar. */ ''}
        ${row('Motivo', d.reason)}
        ${row('Teléfono', phoneIntl)}
        ${row('WhatsApp', waLink)}
        ${row('Email', d.email)}
        ${row('Mensaje', d.message)}
        ${row('Recibido', receivedAt)}
        ${row('gclid', d.gclid)}
      </table>
    </td></tr>
    <tr><td style="padding:16px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#777">
      Responde a este correo para contactar al paciente por email, o abre WhatsApp:
      <a href="${waLink}" style="color:#8a6608">${esc(waLink)}</a>
    </td></tr>
  </table>
</body></html>`
}

export function renderConfirmationEmail(d: ContactInput): string {
  // Mismo criterio que el aviso al equipo: diseño plano y sin cabecera de
  // color. Tampoco se menciona el motivo — en las landings es un valor
  // derivado del tratamiento, no algo que el paciente haya escrito, y verlo
  // repetido de vuelta resulta extraño.
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#ffffff;font-family:Arial,sans-serif">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto">
    <tr>
      <td style="padding:0 0 16px;font-family:Arial,sans-serif;font-size:18px;font-weight:bold;color:#0c0c0c;border-bottom:1px solid #ececec">
        Gracias, ${esc(d.name)}.
      </td>
    </tr>
    <tr><td style="padding:18px 0 0;color:#333;font-size:15px;line-height:1.55;font-family:Arial,sans-serif">
      <p style="margin:0 0 12px">Recibimos tu solicitud.</p>
      <p style="margin:0 0 12px">Un miembro del equipo te contactará al <strong>+52 ${esc(d.phone)}</strong> lo antes posible en horario de atención.</p>
      <p style="margin:0 0 20px">Si prefieres respuesta inmediata, escríbenos por WhatsApp:</p>
      <p style="margin:0"><a href="https://wa.me/527225356109" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:bold">Abrir WhatsApp</a></p>
    </td></tr>
    <tr><td style="padding:20px 0 0;margin-top:16px;border-top:1px solid #ececec;color:#888;font-size:12px;font-family:Arial,sans-serif">
      P.º Cristóbal Colón 128-MZ 027, Residencial Colón y Col. Ciprés, 50120 Toluca de Lerdo, Méx. · Tel. 722 535 6109
    </td></tr>
  </table>
</body></html>`
}
