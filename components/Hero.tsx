'use client'

import { MessageCircle, ChevronDown } from 'lucide-react'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 55% 40%, rgba(59,170,42,0.16) 0%, transparent 65%), linear-gradient(165deg, #0E1A0C 0%, #111F0E 40%, #0A1408 70%, #0E1A0C 100%)',
        }}
      />

      {/* Grain texture */}
      <div className="hero-grain" />

      {/* Grid overlay */}
      <div className="hero-grid-bg" />

      {/* Vertical accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['18%', '38%', '62%', '82%'].map((left, i) => (
          <div
            key={left}
            className="hero-vline"
            style={{ left, ['--delay' as string]: `${0.5 + i * 0.3}s` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-[8vw] max-w-[880px]">
        {/* Badge */}
        <div
          className="anim-fade-up inline-flex items-center gap-3 mb-10"
          style={{ ['--delay' as string]: '0.3s' }}
        >
          <div className="w-10 h-px bg-green-brand" />
          <span className="text-green-brand text-[0.72rem] font-semibold tracking-[0.25em] uppercase">
            Desde 1991 — Uberlândia, Minas Gerais
          </span>
        </div>

        {/* Title */}
        <h1
          className="anim-fade-up font-display font-light leading-[1.05] tracking-[-0.01em] mb-7"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            ['--delay' as string]: '0.5s',
          }}
        >
          Inteligência
          <br />
          no mercado de
          <br />
          <em className="italic text-green-brand not-italic" style={{ fontStyle: 'italic' }}>
            grãos.
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="anim-fade-up font-light text-cream/55 max-w-[520px] leading-[1.82] mb-12"
          style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            ['--delay' as string]: '0.7s',
          }}
        >
          Conectamos produtores rurais às melhores oportunidades de
          comercialização de soja, milho e sorgo — com a experiência de 35 anos
          e a precisão de quem vive o mercado.
        </p>

        {/* CTAs */}
        <div
          className="anim-fade-up flex flex-wrap gap-4"
          style={{ ['--delay' as string]: '0.9s' }}
        >
          <a
            href="https://wa.me/5534999282714"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-green-brand text-cream text-[0.78rem] font-semibold tracking-[0.12em] uppercase px-8 py-4 rounded-[3px] transition-all duration-300 hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,170,42,0.35)]"
          >
            <MessageCircle size={16} />
            Falar com consultor
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleScroll(e, '#sobre')}
            className="inline-flex items-center gap-2.5 bg-transparent text-cream text-[0.78rem] font-medium tracking-[0.12em] uppercase px-8 py-4 rounded-[3px] border border-cream/20 transition-all duration-300 hover:border-cream/55 hover:bg-cream/[0.04]"
          >
            Conheça a empresa
          </a>
        </div>
      </div>

      {/* Stats — desktop only */}
      <div
        className="anim-fade-in hidden xl:flex absolute right-[8vw] bottom-[14vh] flex-col gap-8"
        style={{ ['--delay' as string]: '1.2s' }}
      >
        {[
          { n: '35+', l: 'Anos de mercado' },
          { n: '500+', l: 'Agricultores atendidos' },
          { n: '4', l: 'Estados de atuação' },
        ].map((stat, i) => (
          <div key={i}>
            {i > 0 && <div className="w-full h-px bg-green-brand/20 mb-8" />}
            <div className="text-right">
              <div className="font-impact text-[3.2rem] text-green-brand leading-none">
                {stat.n}
              </div>
              <div className="text-[0.68rem] tracking-[0.2em] uppercase text-cream/35 mt-1">
                {stat.l}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        className="anim-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ ['--delay' as string]: '1.5s' }}
      >
        <span className="text-[0.62rem] tracking-[0.28em] uppercase text-cream/28">
          Scroll
        </span>
        <div className="scroll-bar" />
      </div>
    </section>
  )
}
