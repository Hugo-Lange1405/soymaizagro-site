import SectionTag from './SectionTag'
import RevealWrapper from './RevealWrapper'

const stats = [
  { n: '35',   l: 'Anos de\nmercado'         },
  { n: '500+', l: 'Produtores\natendidos'     },
  { n: '4',    l: 'Estados de\natuação'       },
  { n: '20+',  l: 'Anos de boletim\ndiário'  },
]

const timeline = [
  {
    year: '1977',
    desc: 'Carlos Luiz Lange inicia o plantio pioneiro de soja no cerrado de Coromandel, MG — antes da consolidação do agronegócio brasileiro.',
  },
  {
    year: '1991',
    desc: 'Fundação da Simão Corretora em Uberlândia-MG. Início das operações de intermediação nos estados de MG, GO, DF e PI.',
  },
  {
    year: '2025',
    desc: 'Cristian e Hugo Lange entram como sócios. Reposicionamento da marca para SoyMaiz Agro com estrutura moderna e visão estratégica de longo prazo.',
  },
]

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative py-[9rem] px-[8vw] bg-bg-dark overflow-hidden"
    >

      {/* ── I. Header editorial ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16">

        <RevealWrapper>
          <SectionTag label="Nossa história" />
          <h2
            className="font-display font-light leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)' }}
          >
            Tradição que
            <br />
            o mercado{' '}
            <em className="italic text-green-brand">respeita.</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={0.12}>
          <p
            className="font-light text-cream/50 leading-[1.9]"
            style={{ fontSize: '0.95rem' }}
          >
            Nascemos no coração do cerrado mineiro, onde Carlos Luiz Lange —
            um dos pioneiros no plantio de soja do Brasil — fundou em 1991 a
            Simão Corretora. Três décadas e meia depois, a nova geração renova
            o legado com a SoyMaiz Agro: relações duradouras, análise precisa
            e execução impecável.
          </p>
        </RevealWrapper>
      </div>

      {/* ── Separator ── */}
      <div className="sobre-divider" />

      {/* ── II. Metrics band ── */}
      <RevealWrapper delay={0.08}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="sobre-stat-item">
              <div
                className="font-impact text-green-brand leading-none"
                style={{ fontSize: 'clamp(2.8rem, 4.2vw, 4.4rem)' }}
              >
                {s.n}
              </div>
              <div
                className="font-body text-cream/30 uppercase mt-2.5"
                style={{ fontSize: '0.57rem', letterSpacing: '0.2em', lineHeight: 1.6 }}
              >
                {s.l.split('\n').map((line, j) => (
                  <span key={j} className="block">{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>

      {/* ── Separator ── */}
      <div className="sobre-divider" />

      {/* ── III. Timeline + Mission ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-16">

        {/* Timeline */}
        <RevealWrapper delay={0.08}>
          <p
            className="font-body font-semibold uppercase text-cream/22 mb-10"
            style={{ fontSize: '0.57rem', letterSpacing: '0.3em' }}
          >
            Linha do tempo
          </p>

          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="sobre-tl-item"
                style={{ paddingBottom: i < timeline.length - 1 ? '2.4rem' : 0 }}
              >
                <div
                  className="font-impact text-green-brand leading-none mb-2"
                  style={{ fontSize: '1.55rem', letterSpacing: '0.04em' }}
                >
                  {item.year}
                </div>
                <p
                  className="font-light text-cream/48 leading-[1.78]"
                  style={{ fontSize: '0.86rem' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Mission */}
        <RevealWrapper delay={0.18}>
          <p
            className="font-body font-semibold uppercase text-cream/22 mb-10"
            style={{ fontSize: '0.57rem', letterSpacing: '0.3em' }}
          >
            Missão
          </p>

          <blockquote>
            <p
              className="font-display font-light italic text-cream/78 leading-[1.28]"
              style={{
                fontSize: 'clamp(1.55rem, 2.6vw, 2.5rem)',
                letterSpacing: '-0.01em',
                marginBottom: '2.4rem',
              }}
            >
              &ldquo;Entregar ao produtor rural a inteligência de mercado
              que transforma uma boa safra em um excelente negócio.&rdquo;
            </p>
          </blockquote>

          <div
            style={{
              width: '36px',
              height: '1px',
              background: '#3BAA2A',
              marginBottom: '1.6rem',
            }}
          />

          <div>
            <div
              className="font-body font-medium text-cream/65"
              style={{ fontSize: '0.9rem' }}
            >
              Carlos Luiz Lange
            </div>
            <div
              className="font-body text-cream/32 uppercase mt-1"
              style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}
            >
              Fundador · Simão Corretora, 1991
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
