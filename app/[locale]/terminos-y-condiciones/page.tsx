import type { Metadata } from 'next'
import Link from 'next/link'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '../../../i18n/routing'
import LegalPage, { LegalSection } from '../../components/legal/LegalPage'

/* Mismos datos pendientes que en el aviso de privacidad. */
const RAZON_SOCIAL = '[PENDIENTE: razón social completa]'
const EMAIL_CONTACTO = '[PENDIENTE: correo de contacto]'

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
  const path = '/terminos-y-condiciones'
  return {
    title: 'Términos y Condiciones',
    description:
      'Términos y condiciones de uso del sitio web de Marsa Project, clínica dental en Toluca.',
    alternates: {
      canonical: locale === routing.defaultLocale ? path : `/${locale}${path}`,
      languages: { 'es-MX': path, 'en-US': `/en${path}`, 'x-default': path },
    },
  }
}

export default async function TerminosYCondicionesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <LegalPage
      title="Términos y Condiciones"
      updatedAt={UPDATED_AT}
      intro="Estos términos regulan el acceso y uso del sitio marsaproject.com. Al navegar por él aceptas quedar sujeto a ellos; si no estás de acuerdo, te pedimos que no lo utilices."
    >
      <LegalSection n={1} id="titular" title="Titular del sitio">
        <p>
          Este sitio es operado por <strong>{RAZON_SOCIAL}</strong> (&laquo;Marsa Project&raquo;),
          clínica dental con domicilio en {DOMICILIO}, teléfono <strong>{TELEFONO}</strong> y correo{' '}
          <strong>{EMAIL_CONTACTO}</strong>.
        </p>
      </LegalSection>

      <LegalSection n={2} id="objeto" title="Objeto y aceptación">
        <p>
          El sitio tiene una finalidad informativa y de contacto: dar a conocer los servicios
          odontológicos de Marsa Project y permitirte solicitar una valoración. El uso del sitio
          implica la aceptación plena de estos términos en la versión publicada en el momento del
          acceso.
        </p>
      </LegalSection>

      <LegalSection n={3} id="informacion-clinica" title="La información no sustituye una consulta">
        <p>
          <strong>
            El contenido de este sitio es informativo y no constituye un diagnóstico, una
            prescripción ni una recomendación clínica personalizada.
          </strong>{' '}
          Ninguna sección del sitio sustituye la valoración presencial de un profesional de la
          salud bucodental.
        </p>
        <p>
          La indicación de cualquier tratamiento, incluidos los implantes dentales, depende de las
          condiciones clínicas de cada paciente y debe determinarse mediante una valoración
          profesional. No garantizamos que un tratamiento concreto sea aplicable a tu caso.
        </p>
        <p>
          Si tienes una urgencia dental o de salud, acude de inmediato a un servicio médico; no
          utilices este sitio ni los formularios de contacto como vía de atención urgente.
        </p>
      </LegalSection>

      <LegalSection n={4} id="resultados" title="Resultados, testimonios y casos clínicos">
        <p>
          Las imágenes de casos clínicos y los testimonios publicados corresponden a pacientes
          reales que autorizaron su difusión. Se muestran a título ilustrativo.
        </p>
        <p>
          <strong>
            Los resultados pueden variar de acuerdo con las condiciones particulares de cada
            paciente.
          </strong>{' '}
          Los tiempos de tratamiento, la duración de los resultados y el número de sesiones
          dependen del caso concreto y se definen tras la valoración clínica.
        </p>
        <p>
          Las cifras de experiencia, número de pacientes o calificaciones que aparecen en el sitio
          son indicadores generales de la actividad de la clínica y no constituyen una promesa de
          resultado.
        </p>
      </LegalSection>

      <LegalSection n={5} id="citas" title="Solicitudes de valoración y citas">
        <p>
          El envío de un formulario, un mensaje de WhatsApp o una llamada constituye una{' '}
          <strong>solicitud de contacto</strong>, no una cita confirmada. Una cita solo queda
          agendada cuando el equipo de la clínica la confirma por el medio acordado contigo.
        </p>
        <p>
          Atendemos las solicitudes dentro de nuestro horario: lunes a viernes de 10:00 a 20:00 h y
          sábados de 10:00 a 16:00 h. Los domingos permanecemos cerrados.
        </p>
        <p>
          Los costos de los tratamientos dependen de las características de cada caso y se informan
          tras la valoración. Cualquier precio mencionado en el sitio o en campañas publicitarias es
          orientativo y no constituye una oferta vinculante.
        </p>
      </LegalSection>

      <LegalSection n={6} id="uso" title="Uso permitido del sitio">
        <p>Al utilizar el sitio te comprometes a:</p>
        <ul>
          <li>Proporcionar información veraz en los formularios de contacto.</li>
          <li>No utilizar el sitio con fines ilícitos o que perjudiquen a terceros.</li>
          <li>
            No intentar acceder sin autorización a áreas restringidas, ni interferir con su
            funcionamiento mediante robots, scrapers o envíos masivos.
          </li>
          <li>No reproducir el contenido con fines comerciales sin autorización previa.</li>
        </ul>
        <p>
          Podemos limitar o suspender el acceso a quien incumpla estas condiciones, así como aplicar
          medidas técnicas de protección frente a envíos automatizados.
        </p>
      </LegalSection>

      <LegalSection n={7} id="propiedad" title="Propiedad intelectual">
        <p>
          La marca, el logotipo, los textos, las fotografías, los videos y el diseño del sitio son
          propiedad de Marsa Project o se utilizan con la autorización correspondiente, y están
          protegidos por la legislación en materia de propiedad intelectual e industrial.
        </p>
        <p>
          Queda prohibida su reproducción, distribución o modificación sin consentimiento previo y
          por escrito. En particular, las fotografías de pacientes no pueden ser copiadas ni
          reutilizadas bajo ninguna circunstancia.
        </p>
      </LegalSection>

      <LegalSection n={8} id="terceros" title="Enlaces y servicios de terceros">
        <p>
          El sitio contiene enlaces a servicios de terceros, como WhatsApp, Instagram y Google Maps,
          y utiliza herramientas de analítica y publicidad. No controlamos esos servicios ni
          respondemos por sus contenidos o políticas; su uso se rige por sus propios términos.
        </p>
        <p>
          El detalle de las tecnologías de rastreo y de cómo gestionarlas está en el{' '}
          <Link href="/aviso-de-privacidad#cookies">Aviso de Privacidad</Link>.
        </p>
      </LegalSection>

      <LegalSection n={9} id="disponibilidad" title="Disponibilidad y limitación de responsabilidad">
        <p>
          Procuramos que el sitio esté disponible de forma continua y que su información sea
          correcta y esté actualizada, pero no garantizamos la ausencia de interrupciones, errores u
          omisiones.
        </p>
        <p>
          En la medida que permita la ley, Marsa Project no será responsable por daños derivados del
          uso o de la imposibilidad de uso del sitio, ni de decisiones tomadas únicamente con base
          en la información publicada sin mediar una valoración profesional.
        </p>
        <p>
          Nada en estos términos limita la responsabilidad que corresponda por la atención clínica
          efectivamente prestada, la cual se rige por la normativa sanitaria aplicable.
        </p>
      </LegalSection>

      <LegalSection n={10} id="datos" title="Protección de datos personales">
        <p>
          El tratamiento de los datos que nos proporcionas se rige por nuestro{' '}
          <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link>, que forma parte integral de
          estos términos.
        </p>
      </LegalSection>

      <LegalSection n={11} id="modificaciones" title="Modificaciones">
        <p>
          Podemos modificar estos términos en cualquier momento. La versión vigente será siempre la
          publicada en esta dirección, con su fecha de actualización. El uso del sitio después de
          una modificación implica su aceptación.
        </p>
      </LegalSection>

      <LegalSection n={12} id="jurisdiccion" title="Legislación aplicable y jurisdicción">
        <p>
          Estos términos se rigen por la legislación de los Estados Unidos Mexicanos. Para la
          interpretación y el cumplimiento de los mismos, las partes se someten a los tribunales
          competentes de <strong>Toluca de Lerdo, Estado de México</strong>, renunciando a cualquier
          otro fuero que pudiera corresponderles.
        </p>
        <p>
          La versión en español de este documento es la única vinculante; cualquier traducción se
          ofrece únicamente para facilitar su comprensión.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
