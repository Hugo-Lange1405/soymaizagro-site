import Navbar       from '@/components/Navbar'
import Ticker       from '@/components/Ticker'
import Sobre        from '@/components/Sobre'
import Socios       from '@/components/Socios'
import Servicos     from '@/components/Servicos'
import Diferenciais from '@/components/Diferenciais'
import Mercado      from '@/components/Mercado'
import Contato      from '@/components/Contato'
import Footer       from '@/components/Footer'

const stats = [
  { n: '35+',  l: 'Anos de mercado'      },
  { n: '500+', l: 'Produtores atendidos' },
  { n: '4',    l: 'Estados de atuação'   },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ─────────────────── HERO ─────────────────── */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          style={{ background: '#050805' }}
        >
          {/* Subtle left glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 10% 55%, rgba(59,170,42,0.05) 0%, transparent 70%)',
            }}
          />

          {/* Accent line beneath navbar */}
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              top: '84px',
              height: '1px',
              background:
                'linear-gradient(90deg, rgba(59,170,42,0.5), rgba(59,170,42,0.08) 45%, transparent 80%)',
            }}
          />

          {/* ── Main grid ── */}
          <div
            className="relative z-10 px-[8vw] grid xl:grid-cols-[1fr_200px] gap-16 xl:gap-24 items-center"
            style={{ paddingTop: '144px', paddingBottom: '110px' }}
          >

            {/* Left — copy */}
            <div>

              {/* Eyebrow */}
              <p
                className="anim-fade-up"
                style={{
                  ['--delay' as string]: '0.1s',
                  fontSize: '0.58rem',
                  letterSpacing: '0.32em',
                  color: 'rgba(59,170,42,0.5)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '2.4rem',
                }}
              >
                Simão Corretora · Est. 1991
              </p>

              {/* H1 */}
              <h1
                className="anim-fade-up font-display font-light"
                style={{
                  ['--delay' as string]: '0.28s',
                  fontSize: 'clamp(4rem, 8.8vw, 9.4rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.032em',
                  color: '#FAFAF8',
                  marginBottom: '2.2rem',
                }}
              >
                Precisão
                <br />
                no mercado
                <br />
                <em
                  style={{
                    fontStyle: 'italic',
                    color: '#3BAA2A',
                  }}
                >
                  de grãos.
                </em>
              </h1>

              {/* Subtitle */}
              <p
                className="anim-fade-up font-body font-light"
                style={{
                  ['--delay' as string]: '0.46s',
                  fontSize: 'clamp(0.9rem, 1.15vw, 1.04rem)',
                  lineHeight: 1.84,
                  color: 'rgba(250,250,248,0.46)',
                  maxWidth: '450px',
                  marginBottom: '3.2rem',
                }}
              >
                Conectamos produtores rurais às melhores oportunidades de
                comercialização de soja, milho e sorgo — com 35 anos de
                experiência e a precisão de quem vive cada pregão.
              </p>

              {/* CTAs */}
              <div
                className="anim-fade-up flex flex-wrap"
                style={{
                  ['--delay' as string]: '0.6s',
                  gap: '12px',
                }}
              >
                <a
                  href="https://wa.me/5534999282714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-primary"
                >
                  Falar com consultor
                </a>
                <a
                  href="#sobre"
                  className="hero-cta-ghost"
                >
                  Conheça a empresa
                </a>
              </div>
            </div>

            {/* Right — stats (desktop only) */}
            <div
              className="anim-fade-in hidden xl:flex flex-col"
              style={{ ['--delay' as string]: '0.85s' }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div
                      style={{
                        height: '1px',
                        background: 'rgba(59,170,42,0.12)',
                        margin: '26px 0',
                      }}
                    />
                  )}
                  <div style={{ textAlign: 'right' }}>
                    <div
                      className="font-impact"
                      style={{ fontSize: '3.1rem', color: '#3BAA2A', lineHeight: 1 }}
                    >
                      {s.n}
                    </div>
                    <div
                      className="font-body"
                      style={{
                        fontSize: '0.58rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(250,250,248,0.26)',
                        marginTop: '5px',
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stats */}
          <div
            className="anim-fade-in xl:hidden relative z-10 px-[8vw] pb-20 flex flex-wrap gap-8"
            style={{ ['--delay' as string]: '0.85s' }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                {i > 0 && (
                  <div style={{ width: '1px', height: '28px', background: 'rgba(59,170,42,0.18)' }} />
                )}
                <div>
                  <div className="font-impact" style={{ fontSize: '2.2rem', color: '#3BAA2A', lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div
                    className="font-body"
                    style={{
                      fontSize: '0.58rem',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'rgba(250,250,248,0.28)',
                      marginTop: '4px',
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom data strip */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ borderTop: '1px solid rgba(59,170,42,0.07)' }}
          >
            <div
              className="px-[8vw] py-3.5 flex flex-wrap items-center"
              style={{ gap: '0' }}
            >
              {['Soja', 'Milho', 'Sorgo', 'Uberlândia — MG', 'MG · GO · DF · PI'].map((item, i) => (
                <span
                  key={i}
                  className="font-body"
                  style={{
                    fontSize: '0.56rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(250,250,248,0.15)',
                    paddingRight: '2.4rem',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Ticker />
        <Sobre />
        <Socios />
        <Servicos />
        <Diferenciais />
        <Mercado />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
