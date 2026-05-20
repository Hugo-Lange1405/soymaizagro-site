'use client'

import { useEffect, useRef, useState } from 'react'
import SectionTag from './SectionTag'
import RevealWrapper from './RevealWrapper'

const chartBars = [
  { month: 'Mar', height: 58,  delay: 0.3 },
  { month: 'Abr', height: 88,  delay: 0.5 },
  { month: 'Mai', height: 72,  delay: 0.7 },
  { month: 'Jun', height: 108, delay: 0.9 },
  { month: 'Jul', height: 92,  delay: 1.1 },
  { month: 'Ago', height: 128, delay: 1.3 },
]

function ChartBar({ month, height, delay, animate }: {
  month: string
  height: number
  delay: number
  animate: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="chart-bar"
        style={{
          ['--bar-height' as string]: `${height}px`,
          ['--bar-delay' as string]: animate ? `${delay}s` : '9999s',
          height: animate ? undefined : '0px',
        }}
      />
      <div className="text-[0.62rem] text-cream/36 text-center mt-1.5">
        {month}
      </div>
    </div>
  )
}

export default function Mercado() {
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartVisible, setChartVisible] = useState(false)

  useEffect(() => {
    const el = chartRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChartVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="mercado" className="py-[8rem] px-[8vw] bg-bg-dark">
      <RevealWrapper>
        <SectionTag label="Inteligência de mercado" />
      </RevealWrapper>
      <RevealWrapper delay={0.1}>
        <h2
          className="font-display font-light leading-[1.1] mb-16"
          style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}
        >
          Análise que
          <br />
          <em className="italic text-green-brand">orienta decisões.</em>
        </h2>
      </RevealWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured card */}
        <RevealWrapper delay={0.2} className="lg:col-span-2">
          <div
            ref={chartRef}
            className="mkt-card featured relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-9 rounded-[4px] border overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(59,170,42,0.07), rgba(14,26,12,0.5))',
              borderColor: 'rgba(59,170,42,0.15)',
            }}
          >
            {/* Left */}
            <div>
              <div className="text-[0.65rem] tracking-[0.25em] uppercase text-green-brand font-semibold mb-4">
                Visão de Mercado · Soja 2025/26
              </div>
              <h3 className="font-display text-[1.4rem] font-light leading-[1.3] mb-3">
                Safra recorde pressiona no curto prazo, fundamentos globais
                sustentam o médio prazo
              </h3>
              <p className="text-[0.85rem] text-cream/50 leading-[1.82] mb-6">
                A colheita brasileira avança com alta de 17,4%, pressionando as
                bases e realizando lucros na CBOT. O suporte vem do óleo de soja
                e da expectativa pelo relatório WASDE. Nossa análise aponta
                janelas táticas de venda estratégica.
              </p>
              <a
                href="https://wa.me/5534999282714"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-brand text-cream text-[0.72rem] font-semibold tracking-[0.12em] uppercase px-6 py-3 rounded-[3px] transition-all duration-300 hover:bg-green-dark hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(59,170,42,0.35)]"
              >
                Receber boletim diário
              </a>
            </div>

            {/* Chart */}
            <div className="flex gap-4 items-end justify-end">
              {chartBars.map((bar) => (
                <ChartBar key={bar.month} {...bar} animate={chartVisible} />
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Card 2 */}
        <RevealWrapper delay={0.2}>
          <div className="mkt-card relative p-9 rounded-[4px] border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-400 hover:border-green-brand/20">
            <div className="text-[0.65rem] tracking-[0.25em] uppercase text-green-brand font-semibold mb-4">
              Milho · Perspectiva Regional
            </div>
            <h3 className="font-display text-[1.4rem] font-light leading-[1.3] mb-3">
              Demanda por etanol sustenta o mercado de milho no Brasil
            </h3>
            <p className="text-[0.85rem] text-cream/50 leading-[1.82]">
              Com desafios climáticos na safrinha e demanda aquecida do setor
              sucroenergético, o mercado de milho apresenta suporte consistente
              nas praças regionais de MG e GO.
            </p>
          </div>
        </RevealWrapper>

        {/* Card 3 */}
        <RevealWrapper delay={0.3}>
          <div className="mkt-card relative p-9 rounded-[4px] border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-400 hover:border-green-brand/20">
            <div className="text-[0.65rem] tracking-[0.25em] uppercase text-green-brand font-semibold mb-4">
              Câmbio · Estratégia
            </div>
            <h3 className="font-display text-[1.4rem] font-light leading-[1.3] mb-3">
              Dólar elevado abre janela para travar receita em moeda forte
            </h3>
            <p className="text-[0.85rem] text-cream/50 leading-[1.82]">
              Com o real pressionado e CBOT em patamar favorável, produtores
              com disponibilidade de grão têm oportunidade de fixar preço em
              contratos dólar, protegendo margens da próxima safra.
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
