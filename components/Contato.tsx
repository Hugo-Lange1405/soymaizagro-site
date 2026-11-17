'use client'

import { Mail, MapPin } from 'lucide-react'
import SectionTag from './SectionTag'
import RevealWrapper from './RevealWrapper'

const channels = [
  {
    icon: <Mail size={18} />,
    label: 'E-mail',
    value: 'cristian.lange@soymaizagro.com.br',
    href: 'mailto:cristian.lange@soymaizagro.com.br',
  },
  {
    icon: <Mail size={18} />,
    label: 'E-mail alternativo',
    value: 'ssimaocorretora@gmail.com',
    href: 'mailto:ssimaocorretora@gmail.com',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Localização',
    value: 'Uberlândia, Minas Gerais',
    href: null,
  },
]

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative py-[8rem] px-[8vw] overflow-hidden"
      style={{ background: '#142110' }}
    >
      {/* Background number */}
      <div className="absolute right-[-5vw] top-1/2 -translate-y-1/2 font-impact text-[30vw] text-green-brand/[0.04] pointer-events-none leading-none select-none">
        35
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left */}
        <RevealWrapper>
          <SectionTag label="Fale conosco" />
          <h2
            className="font-display font-light leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
          >
            Vamos conversar
            <br />
            sobre seu{' '}
            <em className="italic text-green-brand">próximo contrato.</em>
          </h2>
          <p className="text-[0.95rem] text-cream/55 leading-[1.85] mb-10">
            Seja para comercializar sua safra, entender o mercado ou receber
            nosso boletim diário — nossa equipe está pronta. Respondemos com
            agilidade e sem enrolação.
          </p>

          <div className="flex flex-col gap-3.5">
            {channels.map((ch) => {
              const Inner = (
                <>
                  <div className="w-10 h-10 rounded-full bg-green-brand/12 flex items-center justify-center flex-shrink-0 text-green-brand">
                    {ch.icon}
                  </div>
                  <div>
                    <div className="text-[0.68rem] tracking-[0.14em] uppercase text-cream/36 mb-0.5">
                      {ch.label}
                    </div>
                    <div className="text-[0.9rem] font-medium">{ch.value}</div>
                  </div>
                </>
              )

              return ch.href ? (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="channel-item flex items-center gap-4 px-5 py-4 border border-white/[0.06] rounded-[4px] text-cream transition-all duration-300"
                >
                  {Inner}
                </a>
              ) : (
                <div
                  key={ch.label}
                  className="flex items-center gap-4 px-5 py-4 border border-white/[0.06] rounded-[4px] text-cream"
                >
                  {Inner}
                </div>
              )
            })}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
