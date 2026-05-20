import SectionTag from './SectionTag'
import RevealWrapper from './RevealWrapper'

const services = [
  {
    title: 'Intermediação de Soja',
    desc: 'Negociação estratégica com as maiores tradings do mercado para garantir a melhor precificação para o produtor.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="10"/>
        <path d="M24 8v4M24 36v4M8 24h4M36 24h4"/>
        <path d="M13.1 13.1l2.8 2.8M32.1 32.1l2.8 2.8M32.1 13.1l-2.8 2.8M13.1 32.1l2.8 2.8"/>
      </svg>
    ),
  },
  {
    title: 'Intermediação de Milho e Sorgo',
    desc: 'Conexão direta com frigoríficos, fábricas de ração e indústrias. Atuação em mercadoria física disponível e contratos futuros com total segurança.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 38l10-14 8 8 10-16 8 10"/>
        <circle cx="36" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: 'Estratégias de Comercialização',
    desc: 'Assessoria em contratos futuros em R$ ou dólar (CBOT), mercadoria física, prêmios de porto e modalidades conforme o perfil de risco do produtor.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40V28l8-4 8 6 8-10 8 4V8"/>
        <path d="M8 20l8-4 8 6 8-10 8 4"/>
      </svg>
    ),
  },
  {
    title: 'Boletim Diário de Mercado',
    desc: 'Há mais de 20 anos enviamos análise de preços, cotações CBOT, prêmios de porto e notícias relevantes via e-mail e WhatsApp — antes do pregão abrir.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="36" height="36" rx="4"/>
        <path d="M14 24h20M14 16h12M14 32h16"/>
      </svg>
    ),
  },
  {
    title: 'Monitoramento Contínuo',
    desc: 'Acompanhamento das condições comerciais nos portos de Santos e Paranaguá, preços regionais em MG e GO, e cotações FOB em armazéns e fazendas.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z"/>
        <path d="M24 12v12l8 4"/>
      </svg>
    ),
  },
  {
    title: 'Análise de Competitividade',
    desc: 'Mapeamento das melhores ofertas das tradings na região do produtor — comparativo detalhado para decisões de venda mais inteligentes e rentáveis.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 8H8a4 4 0 00-4 4v24a4 4 0 004 4h32a4 4 0 004-4V20"/>
        <path d="M36 4l8 8-20 20H16v-8L36 4z"/>
      </svg>
    ),
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="py-[8rem] px-[8vw] bg-bg-dark">
      {/* Header */}
      <div className="flex justify-between items-end mb-16 gap-8 flex-wrap">
        <div>
          <RevealWrapper>
            <SectionTag label="O que fazemos" />
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2
              className="font-display font-light leading-[1.1]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
            >
              Serviços que
              <br />
              <em className="italic text-green-brand">geram resultado.</em>
            </h2>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={0.2} className="max-w-[340px]">
          <p className="text-[1.02rem] font-light text-cream/55 leading-[1.85]">
            Da análise de mercado à negociação final — em cada etapa da
            comercialização dos seus grãos.
          </p>
        </RevealWrapper>
      </div>

      {/* Grid */}
      <RevealWrapper>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: '1.5px',
            background: 'rgba(59,170,42,0.08)',
            border: '1px solid rgba(59,170,42,0.08)',
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-card group relative bg-bg-dark p-[2.8rem_2.2rem] overflow-hidden transition-all duration-400 cursor-default"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(59,170,42,0.08), rgba(14,26,12,0.5))' }}
              />

              {/* Icon */}
              <div className="relative z-10 w-11 h-11 text-green-brand mb-7">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-display text-[1.35rem] font-medium mb-3 transition-colors duration-300 group-hover:text-green-brand">
                {s.title}
              </h3>

              {/* Desc */}
              <p className="relative z-10 text-[0.85rem] text-cream/46 leading-[1.78] transition-colors duration-300 group-hover:text-cream/66">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  )
}
