import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '#sobre',        label: 'Sobre nós' },
  { href: '#socios',       label: 'Equipe' },
  { href: '#servicos',     label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#mercado',      label: 'Mercado' },
  { href: '#contato',      label: 'Contato' },
]

const contactLinks = [
  { href: 'https://wa.me/5534999282714', label: '(34) 99928-2714', external: true },
  { href: 'mailto:cristian.lange@soymaizagro.com.br', label: 'cristian.lange@soymaizagro.com.br', external: false },
  { href: 'mailto:ssimaocorretora@gmail.com', label: 'ssimaocorretora@gmail.com', external: false },
  { href: null, label: 'Uberlândia — MG', external: false },
]

export default function Footer() {
  return (
    <footer className="bg-[#050904] border-t border-green-brand/14 px-[8vw] pt-12 pb-8">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 lg:gap-16 pb-12 border-b border-white/[0.05] mb-8">
        {/* Brand */}
        <div>
          <Image
  src="/images/logo-soymaiz-final.png"
  alt="SoyMaiz Agro"
  width={320}
  height={120}
  className="object-contain object-left mb-5"
  style={{
    height: '120px',
    width: 'auto',
  }}
/>
          <p className="text-[0.85rem] text-cream/30 leading-[1.8] max-w-[300px]">
            Consultoria e assessoria em comercialização de grãos desde 1991.
            Conectando produtores rurais às melhores oportunidades de mercado
            em MG, GO, DF e PI.
          </p>
        </div>

        {/* Nav */}
        <div>
          <div className="text-[0.68rem] tracking-[0.25em] uppercase text-cream/26 font-semibold mb-5">
            Navegação
          </div>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-cream/42 text-[0.85rem] hover:text-green-brand transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[0.68rem] tracking-[0.25em] uppercase text-cream/26 font-semibold mb-5">
            Contato
          </div>
          <ul className="flex flex-col gap-3">
            {contactLinks.map((l, i) =>
              l.href ? (
                <li key={i}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-cream/42 text-[0.85rem] hover:text-green-brand transition-colors duration-300 break-all"
                  >
                    {l.label}
                  </a>
                </li>
              ) : (
                <li key={i} className="text-cream/42 text-[0.85rem]">
                  {l.label}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="text-[0.75rem] text-cream/20">
          © 2025 SoyMaiz Agro. Todos os direitos reservados.
        </div>
        <div className="text-[0.72rem] text-cream/16 tracking-[0.06em]">
          Lange Corretora Ltda · Uberlândia-MG
        </div>
      </div>
    </footer>
  )
}
