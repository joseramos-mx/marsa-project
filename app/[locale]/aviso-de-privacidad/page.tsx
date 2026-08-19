import type { Metadata } from 'next'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '../../../i18n/routing'
import LegalPage, { LegalSection } from '../../components/legal/LegalPage'

/* ─────────────────────────────────────────────────────────────
   DATOS PENDIENTES DE CONFIRMAR POR MARSA PROJECT
   Sustituir estos tres valores antes de publicar: la LFPDPPP exige
   identificar al responsable y ofrecer un medio real de contacto
   para el ejercicio de derechos ARCO.
   ───────────────────────────────────────────────────────────── */
const RAZON_SOCIAL = '[PENDIENTE: razón social completa]'
const RFC = '[PENDIENTE: RFC]'
const EMAIL_ARCO = '[PENDIENTE: correo para derechos ARCO]'

const DOMICILIO =
  'Paseo Cristóbal Colón 128-MZ 027, Residencial Colón y Col. Ciprés, 50120 Toluca de Lerdo, Estado de México'
const TELEFONO = '722 535 6109'
const UPDATED_AT = '19 de agosto de 2026'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const path = '/aviso-de-privacidad'
  return {
    title: 'Aviso de Privacidad',
    description:
      'Aviso de privacidad de Marsa Project conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.',
    alternates: {
      canonical: locale === routing.defaultLocale ? path : `/${locale}${path}`,
      languages: { 'es-MX': path, 'en-US': `/en${path}`, 'x-default': path },
    },
  }
}

export default async function AvisoDePrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <LegalPage
      title="Aviso de Privacidad"
      updatedAt={UPDATED_AT}
      intro="Este aviso describe qué datos personales recabamos, para qué los usamos y cómo puedes ejercer tus derechos, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad."
    >
      <LegalSection n={1} id="responsable" title="Identidad y domicilio del responsable">
        <p>
          <strong>{RAZON_SOCIAL}</strong> (&laquo;Marsa Project&raquo;), con Registro Federal de
          Contribuyentes <strong>{RFC}</strong> y domicilio en {DOMICILIO}, es responsable del
          tratamiento y protección de tus datos personales.
        </p>
        <p>
          Puedes contactarnos por teléfono al <strong>{TELEFONO}</strong>, en el correo{' '}
          <strong>{EMAIL_ARCO}</strong> o en el domicilio señalado.
        </p>
      </LegalSection>

      <LegalSection n={2} id="datos" title="Datos personales que recabamos">
        <p>Según cómo interactúes con nosotros, podemos recabar:</p>

        <h3>Datos de identificación y contacto</h3>
        <ul>
          <li>Nombre.</li>
          <li>Teléfono o número de WhatsApp.</li>
          <li>Correo electrónico, cuando decides proporcionarlo.</li>
          <li>El contenido del mensaje que nos envías.</li>
        </ul>

        <h3>Datos de navegación</h3>
        <ul>
          <li>Dirección IP, tipo de navegador y dispositivo, sistema operativo.</li>
          <li>Páginas visitadas, tiempo de permanencia e interacciones con la página.</li>
          <li>Origen de la visita, incluidos identificadores de campañas publicitarias.</li>
        </ul>

        <p>
          Estos datos se obtienen de forma directa cuando los proporcionas y de forma indirecta a
          través de las tecnologías descritas en la sección 8.
        </p>
      </LegalSection>

      <LegalSection n={3} id="sensibles" title="Datos personales sensibles">
        <p>
          Para agendar una valoración o responder a tu consulta puede ser necesario tratar{' '}
          <strong>datos personales sensibles relativos a tu estado de salud bucodental</strong>,
          como la ausencia de piezas dentales, el motivo de tu consulta o los antecedentes clínicos
          que nos compartas.
        </p>
        <p>
          La LFPDPPP exige tu <strong>consentimiento expreso</strong> para tratar este tipo de
          datos. Al marcar la casilla de aceptación del formulario, o al enviarnos esta información
          por WhatsApp, teléfono o correo, otorgas dicho consentimiento. Estos datos se tratan
          únicamente con fines clínicos y de atención, nunca con fines publicitarios, y no se
          transfieren a terceros con fines mercadotécnicos.
        </p>
        <p>
          Si prefieres no proporcionar información de salud a través del sitio, puedes limitarte a
          dejar tus datos de contacto y comentarnos tu caso durante la valoración presencial.
        </p>
      </LegalSection>

      <LegalSection n={4} id="finalidades" title="Finalidades del tratamiento">
        <h3>Finalidades primarias</h3>
        <p>Necesarias para la relación contigo:</p>
        <ul>
          <li>Contactarte para agendar, confirmar o reprogramar una valoración o cita.</li>
          <li>Responder tus dudas y darte información sobre tratamientos.</li>
          <li>Integrar y resguardar tu expediente clínico cuando te conviertas en paciente.</li>
          <li>Dar seguimiento a tu tratamiento y a las revisiones correspondientes.</li>
          <li>Cumplir obligaciones legales, fiscales y sanitarias aplicables.</li>
        </ul>

        <h3>Finalidades secundarias</h3>
        <p>
          No son necesarias para atenderte y <strong>puedes oponerte a ellas</strong> sin que eso
          afecte la atención que recibas:
        </p>
        <ul>
          <li>Enviarte recordatorios, promociones o información sobre nuevos tratamientos.</li>
          <li>Elaborar estadísticas y medir el desempeño de nuestras campañas publicitarias.</li>
          <li>
            Difundir testimonios o imágenes clínicas, <strong>únicamente</strong> si nos otorgas una
            autorización adicional, expresa y por separado.
          </li>
        </ul>
        <p>
          Para oponerte a las finalidades secundarias escribe a {EMAIL_ARCO} indicando cuáles deseas
          limitar.
        </p>
      </LegalSection>

      <LegalSection n={5} id="transferencias" title="Transferencias de datos">
        <p>
          <strong>No vendemos ni comercializamos tus datos personales.</strong> No realizamos
          transferencias que requieran tu consentimiento, salvo las que la ley permite sin él, como
          las solicitadas por autoridades competentes.
        </p>
        <p>
          Los proveedores que tratan datos por cuenta nuestra —alojamiento del sitio, correo,
          analítica y publicidad— actúan como encargados bajo contrato y solo pueden usar los datos
          para prestarnos el servicio. Algunos están ubicados fuera de México; se detallan en la
          sección 8.
        </p>
      </LegalSection>

      <LegalSection n={6} id="arco" title="Derechos ARCO">
        <p>Tienes derecho a:</p>
        <ul>
          <li>
            <strong>Acceder</strong> a los datos personales que tenemos sobre ti.
          </li>
          <li>
            <strong>Rectificarlos</strong> cuando sean inexactos o estén incompletos.
          </li>
          <li>
            <strong>Cancelarlos</strong> cuando consideres que no se requieren.
          </li>
          <li>
            <strong>Oponerte</strong> a su tratamiento para fines específicos.
          </li>
        </ul>
        <p>
          Para ejercerlos, envía una solicitud a <strong>{EMAIL_ARCO}</strong> con: tu nombre y un
          medio para comunicarte la respuesta; copia de una identificación oficial; una descripción
          clara de los datos y del derecho que quieres ejercer; y cualquier documento que respalde
          tu petición.
        </p>
        <p>
          Responderemos en un plazo máximo de <strong>20 días hábiles</strong> y, de resultar
          procedente, se hará efectiva dentro de los <strong>15 días hábiles</strong> siguientes.
        </p>
        <p>
          Ten en cuenta que la cancelación no procede cuando debamos conservar información por
          obligaciones legales, como los plazos de resguardo del expediente clínico.
        </p>
      </LegalSection>

      <LegalSection n={7} id="revocacion" title="Revocación del consentimiento">
        <p>
          Puedes revocar en cualquier momento el consentimiento que nos otorgaste, escribiendo a{' '}
          {EMAIL_ARCO} por el mismo procedimiento de la sección anterior. La revocación no tiene
          efectos retroactivos y en algunos casos no podremos atenderla de inmediato por
          obligaciones legales.
        </p>
        <p>
          Para dejar de recibir comunicaciones promocionales basta con responder a cualquiera de
          ellas solicitando la baja.
        </p>
      </LegalSection>

      <LegalSection n={8} id="cookies" title="Cookies y tecnologías de rastreo">
        <p>
          Este sitio utiliza cookies y tecnologías similares. Las estrictamente necesarias se
          instalan siempre, porque sin ellas el sitio no funciona; el resto{' '}
          <strong>solo se activan si las aceptas</strong> en el panel de configuración, al que
          puedes volver cuando quieras desde el enlace &laquo;Configurar cookies&raquo; del pie de
          página.
        </p>
        <table>
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Para qué sirve</th>
              <th>Proveedores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Necesarias</strong>
              </td>
              <td>Idioma, seguridad y tu propia elección de cookies. Siempre activas.</td>
              <td>Marsa Project, Vercel</td>
            </tr>
            <tr>
              <td>
                <strong>Analíticas</strong>
              </td>
              <td>
                Medir visitas, entender el uso del sitio y detectar errores. Incluye grabación de
                sesión y mapas de calor.
              </td>
              <td>Google Analytics, Microsoft Clarity, Metricool, Vercel Analytics</td>
            </tr>
            <tr>
              <td>
                <strong>Marketing</strong>
              </td>
              <td>Medir la eficacia de los anuncios y mostrar publicidad relevante.</td>
              <td>Google Ads, Google Tag Manager</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Microsoft Clarity</strong> puede grabar tu recorrido por la página —movimientos,
          clics y desplazamiento— para elaborar mapas de calor. No captura el contenido que
          escribes en los campos del formulario.
        </p>
        <p>
          También puedes bloquear o eliminar cookies desde la configuración de tu navegador. Si lo
          haces, algunas funciones del sitio pueden dejar de operar correctamente.
        </p>
      </LegalSection>

      <LegalSection n={9} id="whatsapp" title="Contacto por WhatsApp y redes sociales">
        <p>
          Si nos escribes por WhatsApp, la conversación se rige además por las políticas de
          privacidad de WhatsApp y Meta. Lo mismo aplica si interactúas con nosotros en Instagram.
          Te recomendamos no compartir información clínica detallada por esos canales.
        </p>
      </LegalSection>

      <LegalSection n={10} id="conservacion" title="Conservación de los datos">
        <p>
          Conservamos tus datos de contacto mientras exista una relación contigo y, después,
          durante los plazos necesarios para atender responsabilidades derivadas de esa relación.
          Los expedientes clínicos se resguardan por el plazo que fijan las disposiciones sanitarias
          aplicables.
        </p>
      </LegalSection>

      <LegalSection n={11} id="menores" title="Menores de edad">
        <p>
          La atención a menores de edad requiere la presencia y el consentimiento de quien ejerza la
          patria potestad o tutela. Este sitio no está dirigido a menores y no recabamos sus datos
          de forma intencionada a través de los formularios.
        </p>
      </LegalSection>

      <LegalSection n={12} id="cambios" title="Cambios al aviso de privacidad">
        <p>
          Podemos actualizar este aviso por cambios legales o en nuestros servicios. Publicaremos la
          versión vigente en esta misma dirección, indicando la fecha de actualización. Te sugerimos
          revisarla periódicamente.
        </p>
        <p>
          Si consideras que tu derecho a la protección de datos ha sido vulnerado, puedes acudir
          ante la autoridad competente en materia de protección de datos personales.
        </p>
        <p>
          Consulta también nuestros{' '}
          <Link href="/terminos-y-condiciones">Términos y Condiciones</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
