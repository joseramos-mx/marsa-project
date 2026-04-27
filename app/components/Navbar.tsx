import Link from 'next/link'

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MarsaLogo() {
  return (
    <img src="marsa logo.png" alt="MARSA Logo" className='h-15'/>
  )
}

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-8 py-5">

        {/* Left — navigation links */}
        <nav className="flex items-center gap-7 text-white/90 text-sm font-light">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            Solutions <ChevronDown />
          </button>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            Company <ChevronDown />
          </button>
          <Link href="#" className="hover:text-white transition-colors">
            Partnerships
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Center — logo (absolutely centered) */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 top-3 hover:opacity-80 transition-opacity"
          aria-label="MARSA Home"
        >
          <MarsaLogo />
        </Link>

        {/* Right — language + auth */}
        <div className="flex items-center gap-3 text-sm">
          <button className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors cursor-pointer">
            English <ChevronDown />
          </button>
          <Link
            href="#"
            className="border border-white/70 text-white px-5 py-1.5 rounded-full text-sm hover:bg-white/10 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="bg-[#b3f424] text-black font-semibold px-5 py-1.5 rounded-full text-sm hover:bg-[#c8ff40] transition-colors"
          >
            Sign up
          </Link>
        </div>

      </div>
    </header>
  )
}
