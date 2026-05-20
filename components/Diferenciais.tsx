import SectionTag from './SectionTag'
import RevealWrapper from './RevealWrapper'

const items = [
  {
    n: '01',
    title: 'Relacionamento consolidado',
    desc: 'Décadas de parceria com as maiores tradings globais e frigoríficos líderes. Acesso privilegiado a condições fora do mercado convencional — para o produtor ganhar mais.',
  },
  {
    n: '02',
    title: 'Transparência total na operação',
    desc: 'Comissão fixa e transparente. Nota fiscal emitida apenas após o recebimento de cada contrato pelo produtor. Nenhuma taxa oculta, nenhum conflito de interesse.',
  },
  {
    n: '03',
    title: 'Inteligência de mercado diária',
    desc: 'Mais de 20 anos de boletim informativo enviado todas as manhãs. Uma vantagem real de tempo e informação para decisões de comercialização mais rápidas e acertadas.',
  },
  {
    n: '04',
    title: 'Equipe de alta performance',
    desc: 'Formação técnica em agronomia, finanças e computação. Experiência acumulada nas maiores multinacionais do agro brasileiro — Syngenta e BASF.',
  },
]

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="relative py-[8rem] px-[8vw] overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #142110, #0E1A0C)',
      }}
    >
      {/* Watermark text */}
      <div className="dif-bg absolute font-impact text-[18vw] text-green-brand/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
        GRÃOS
      </div>

      <div className="relative z-10">
        <RevealWrapper>
          <SectionTag label="Por que a SoyMaiz" />
        </RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2
            className="font-display font-light leading-[1.1] mb-16"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
          >
            O que nos torna
            <br />
            <em className="italic text-green-brand">diferentes.</em>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <RevealWrapper key={item.n} delay={i * 0.1}>
              <div className="group relative flex gap-6 items-start p-8 border border-green-brand/[0.08] rounded-[4px] overflow-hidden transition-all duration-400 hover:border-green-brand/32">
                {/* Hover fill */}
                <div className="absolute inset-0 bg-green-brand/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                {/* Number */}
                <div className="font-impact text-[3.5rem] text-green-brand/[0.17] leading-none flex-shrink-0 transition-colors duration-400 group-hover:text-green-brand/38">
                  {item.n}
                </div>

                {/* Body */}
                <div className="relative z-10">
                  <h3 className="font-display text-[1.25rem] font-medium mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] text-cream/50 leading-[1.78]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
