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

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f5f5f5;font-family:Arial,sans-serif">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5">
    <tr>
      <td style="padding:20px 24px;background:#0c0c0c;color:#fff">
        <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#c69a2c">MARSA Project</div>
        <div style="font-size:18px;margin-top:4px;font-weight:600">Nuevo contacto web</div>
      </td>
    </tr>
    <tr><td style="padding:8px 0">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
        ${row('Nombre', d.name)}
        ${row('Motivo', d.reason)}
        ${row('Teléfono', phoneIntl)}
        ${row('WhatsApp', waLink)}
        ${row('Email', d.email)}
        ${row('Mensaje', d.message)}
        ${row('Recibido', receivedAt)}
        ${row('gclid', d.gclid)}
      </table>
    </td></tr>
    <tr><td style="padding:16px 24px 20px;font-family:Arial,sans-serif;font-size:12px;color:#888">
      Responde a este correo para contactar al paciente por email, o abre WhatsApp:
      <a href="${waLink}" style="color:#c69a2c">${esc(waLink)}</a>
    </td></tr>
  </table>
</body></html>`
}

export function renderConfirmationEmail(d: ContactInput): string {
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f5f5f5;font-family:Arial,sans-serif">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e5e5">
    <tr>
      <td style="padding:24px;background:#0c0c0c;color:#fff">
        <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#c69a2c">MARSA Project</div>
        <div style="font-size:20px;margin-top:6px;font-weight:600">Gracias, ${esc(d.name)}.</div>
      </td>
    </tr>
    <tr><td style="padding:24px;color:#333;font-size:15px;line-height:1.55">
      <p style="margin:0 0 12px">Recibimos tu solicitud sobre <strong>${esc(d.reason)}</strong>.</p>
      <p style="margin:0 0 12px">Un miembro del equipo te contactará al <strong>+52 ${esc(d.phone)}</strong> lo antes posible en horario de atención.</p>
      <p style="margin:0 0 20px">Si prefieres respuesta inmediata, escríbenos por WhatsApp:</p>
      <p style="margin:0"><a href="https://wa.me/527225356109" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:600">Abrir WhatsApp</a></p>
    </td></tr>
    <tr><td style="padding:16px 24px;background:#fafafa;border-top:1px solid #eee;color:#888;font-size:12px">
      P.º Cristóbal Colón 128-MZ 027, Residencial Colón y Col Ciprés, 50120 Toluca de Lerdo, Méx. · Tel. 722 535 6109
    </td></tr>
  </table>
</body></html>`
}
