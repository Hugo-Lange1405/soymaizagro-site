'use client'

import { useState } from 'react'
import { MessageCircle, Mail, MapPin, Send } from 'lucide-react'
import SectionTag from './SectionTag'
import RevealWrapper from './RevealWrapper'

const channels = [
  {
    icon: <MessageCircle size={18} />,
    label: 'WhatsApp',
    value: '(34) 99928-2714',
    href: 'https://wa.me/5534999282714',
  },
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
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendWA = () => {
    const text = [
      `Olá! Meu nome é ${form.name || 'Visitante'}.`,
      `Interesse: ${form.interest || 'Informações gerais'}`,
      form.phone ? `Telefone: ${form.phone}` : '',
      form.message ? `Mensagem: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/5534999282714?text=${encodeURIComponent(text)}`, '_blank')
  }

  const inputClass =
    'form-input w-full bg-white/[0.04] border border-white/[0.08] rounded-[3px] px-4 py-3 font-body text-[0.88rem] text-cream transition-all duration-300 outline-none appearance-none'

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

        {/* Right — Form */}
        <RevealWrapper delay={0.2}>
          <div className="relative bg-white/[0.03] border border-green-brand/14 rounded-[4px] p-10 overflow-hidden">
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: 'linear-gradient(90deg, #3BAA2A, transparent)' }}
            />

            <h3 className="font-display text-[1.6rem] font-light mb-1">
              Envie uma mensagem
            </h3>
            <p className="text-[0.82rem] text-cream/38 mb-8">
              Resposta em até 2 horas úteis
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-[0.7rem] tracking-[0.14em] uppercase text-cream/38 font-medium mb-2">
                  Nome completo
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[0.7rem] tracking-[0.14em] uppercase text-cream/38 font-medium mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(xx) xxxxx-xxxx"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[0.7rem] tracking-[0.14em] uppercase text-cream/38 font-medium mb-2">
                  Interesse
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <option value="">Selecione o assunto</option>
                  <option>Comercialização de Soja</option>
                  <option>Comercialização de Milho</option>
                  <option>Comercialização de Sorgo</option>
                  <option>Receber Boletim de Mercado</option>
                  <option>Análise de Mercado</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.7rem] tracking-[0.14em] uppercase text-cream/38 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  placeholder="Conte um pouco sobre sua operação ou dúvida..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <button
                onClick={sendWA}
                className="w-full flex items-center justify-center gap-2.5 bg-green-brand text-cream text-[0.78rem] font-semibold tracking-[0.12em] uppercase px-8 py-4 rounded-[3px] transition-all duration-300 hover:bg-green-dark hover:-translate-y-px hover:shadow-[0_12px_40px_rgba(59,170,42,0.35)]"
              >
                <Send size={16} />
                Enviar pelo WhatsApp
              </button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
