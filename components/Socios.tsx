import Image from 'next/image'
import SectionTag from './SectionTag'
import RevealWrapper from './RevealWrapper'

const socios = [
  {
    name: 'Carlos Luiz Lange',
    role: 'Sócio Fundador',
    desc: 'Pioneiro no plantio de soja no cerrado (1977). Ex-gerente comercial da Coopercana (MT) e Grupo Algar. 35 anos à frente da empresa, com visão única do agronegócio brasileiro.',
    photo: '/images/carlos.jpg',
  },
  {
    name: 'Cristian Lange',
    role: 'Sócio & Diretor Comercial',
    desc: 'Eng. Agrônomo (UFU). MBA em Marketing e Finanças — FGV e Dom Cabral. 25 anos em multinacionais: Syngenta e BASF (Diretor de Vendas Norte, 2018–2025).',
    photo: '/images/cristian.jpg',
  },
  {
    name: 'Hugo Lange',
    role: 'Sócio & Inteligência de Mercado',
    desc: 'Eng. Agrônomo (UNA) e formando em Engenharia da Computação (Uniube). Responsável pela inteligência de mercado e área administrativa da SoyMaiz Agro.  ',
    photo: '/images/hugo-final.png',
  },
]

export default function Socios() {
  return (
    <section id="socios" className="py-[8rem] px-[8vw] bg-[#0A1208]">
      <RevealWrapper>
        <SectionTag label="Liderança" />
      </RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2
          className="font-display font-light leading-[1.1] mb-16"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
        >
          Quem está{' '}
          <em className="italic text-green-brand">por trás.</em>
        </h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[400px] md:max-w-none">
        {socios.map((s, i) => (
          <RevealWrapper key={s.name} delay={i * 0.1}>
            <div className="group border border-green-brand/12 rounded-[4px] overflow-hidden bg-bg-card transition-all duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-green-brand/42 hover:-translate-y-2 hover:shadow-[0_28px_64px_rgba(0,0,0,0.55)]">
              {/* Photo */}
              <div className="relative h-[300px] overflow-hidden bg-bg-surface">
                <Image
                  src={s.photo}
                  alt={s.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(10,18,8,0.65) 0%, transparent 55%)',
                  }}
                />
                {/* Bottom green bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{
                    background: 'linear-gradient(90deg, #3BAA2A, transparent)',
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-7">
                <div className="text-[0.65rem] tracking-[0.22em] uppercase text-green-brand font-semibold mb-2">
                  {s.role}
                </div>
                <div className="font-display text-[1.48rem] font-medium mb-3.5 leading-[1.2]">
                  {s.name}
                </div>
                <div className="text-[0.83rem] text-cream/48 leading-[1.78]">
                  {s.desc}
                </div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
