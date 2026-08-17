import Image from 'next/image'
import Link from 'next/link'
import WhatsAppLink from '../../../components/WhatsAppLink'

const GEIST = { fontFamily: 'var(--font-geist-sans)' }
const ALBERT = { fontFamily: 'var(--font-albert-sans)' }

const WHATSAPP_URL = 'https://wa.me/527225356109?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20implantes%20dentales'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-[#080808] border-t border-white/8 py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Marsa Project" className="w-fit hover:opacity-80 transition-opacity">
              <Image src="/logo.svg" alt="Marsa Project" width={140} height={36} className="h-9 object-contain" style={{ width: 'auto' }} />
            </Link>
            <p className="text-white/55 text-[14px] leading-relaxed max-w-xs" style={GEIST}>
              Marsa Project · Implantes Dentales en Toluca
            </p>
          </div>

          <div className="flex flex-col gap-3 text-[14px] text-white/60" style={GEIST}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-1" style={ALBERT}>
              Contacto
            </p>
            <address className="not-italic leading-relaxed">
              P.º Cristóbal Colón 128-MZ 027<br />
              Residencial Colón y Col. Ciprés<br />
              50120 Toluca de Lerdo, Méx.
            </address>
            <a href="tel:+527225356109" className="hover:text-white transition-colors w-fit">
              722 535 6109
            </a>
            <WhatsAppLink href={WHATSAPP_URL} className="hover:text-white transition-colors w-fit">
              WhatsApp
            </WhatsAppLink>
          </div>

          <div className="flex flex-col gap-2 text-[14px] text-white/60" style={GEIST}>
            <p className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-1" style={ALBERT}>
              Horarios
            </p>
            <p>Lunes a viernes: 10:00 a.m. – 8:00 p.m.</p>
            <p>Sábado: 10:00 a.m. – 4:00 p.m.</p>
            <p className="text-white/40">Domingo: Cerrado</p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-white/35 text-[12px]" style={GEIST}>
            &copy; {year} Marsa Project. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-white/45" style={GEIST}>
            <Link href="/aviso-de-privacidad" className="hover:text-white transition-colors">
              Aviso de privacidad
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/" className="hover:text-white transition-colors">
              Ir al sitio principal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
