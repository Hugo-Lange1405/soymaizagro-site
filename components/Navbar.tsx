'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '#sobre',        label: 'Sobre'        },
  { href: '#socios',       label: 'Equipe'       },
  { href: '#servicos',     label: 'Serviços'     },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#mercado',      label: 'Mercado'      },
  { href: '#contato',      label: 'Contato'      },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    const wasOpen = menuOpen
    setMenuOpen(false)
    setTimeout(
      () => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      wasOpen ? 380 : 0
    )
  }

  return (
    <>
      {/* ─────────────────── NAV BAR ─────────────────── */}
      <nav
        style={{
          position:   'fixed',
          top: 0, left: 0, right: 0,
          zIndex:     50,
          height:     scrolled ? '68px' : '88px',
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding:    '0 5vw',
          background: scrolled ? 'rgba(5,8,5,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(59,170,42,0.10)' : 'transparent'}`,
          transition: 'height 0.45s cubic-bezier(0.16,1,0.3,1), background 0.45s ease, border-color 0.45s ease, backdrop-filter 0.45s ease',
        }}
      >
        {/* ── Wordmark ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="SoyMaiz Agro"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            lineHeight: 1,
            display: 'flex',
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/logo-soymaiz-final.png"
            alt="SoyMaiz Agro"
            width={320}
            height={120}
            style={{
              objectFit: 'contain',
              height: '62px',
              width: 'auto',
            }}  
            priority
          />
        </button>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center" style={{ gap: '34px' }}>

          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-desktop-link font-body"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontSize: '0.66rem',
                fontWeight: 500,
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: 'rgba(250,250,248,0.58)',
                transition: 'color 0.22s ease',
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Divider */}
          <div
            aria-hidden
            style={{ width: '1px', height: '13px', background: 'rgba(250,250,248,0.09)', flexShrink: 0 }}
          />

          {/* CTA */}
          <a
            href="https://wa.me/5534999282714"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn font-body"
            style={{
              display: 'inline-block',
              fontSize: '0.66rem',
              fontWeight: 600,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#3BAA2A',
              border: '1px solid rgba(59,170,42,0.35)',
              padding: '9px 22px',
              transition: 'color 0.25s, border-color 0.25s, background 0.25s, box-shadow 0.25s, transform 0.2s',
            }}
          >
            Falar com consultor
          </a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className="lg:hidden flex flex-col justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            gap: '5px',
            width: '36px',
            height: '36px',
          }}
        >
          <span style={{
            display: 'block', height: '1px', background: '#FAFAF8', width: '22px',
            transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            transition: 'transform 0.32s cubic-bezier(0.16,1,0.3,1)',
          }} />
          <span style={{
            display: 'block', height: '1px', background: '#FAFAF8', width: '15px',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.2s ease',
          }} />
          <span style={{
            display: 'block', height: '1px', background: '#FAFAF8', width: '20px',
            transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            transition: 'transform 0.32s cubic-bezier(0.16,1,0.3,1)',
          }} />
        </button>
      </nav>

      {/* ─────────────────── MOBILE OVERLAY ─────────────────── */}
      <div
        className="fixed inset-0 z-40 flex flex-col lg:hidden"
        style={{
          background: 'rgba(4,6,4,0.97)',
          backdropFilter:       menuOpen ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: menuOpen ? 'blur(24px)' : 'none',
          opacity:       menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.38s ease',
        }}
      >
        {/* Top accent line */}
        <div style={{
          height: '1px',
          marginTop: '88px',
          background: 'linear-gradient(90deg, rgba(59,170,42,0.55), rgba(59,170,42,0.06) 55%, transparent)',
        }} />

        {/* Links */}
        <nav
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 8vw 8vh',
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="mobile-nav-item font-display text-left"
              style={{
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                cursor: 'pointer',
                padding: '18px 0',
                fontWeight: 300,
                fontSize: 'clamp(1.9rem, 5.5vw, 3rem)',
                letterSpacing: '-0.01em',
                color: 'rgba(250,250,248,0.72)',
                opacity:   menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(-18px)',
                transition: `color 0.2s ease, opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.055}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.055}s`,
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Mobile CTA */}
          <a
            href="https://wa.me/5534999282714"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-body font-semibold text-center"
            style={{
              display: 'block',
              marginTop: '36px',
              padding: '17px 0',
              background: '#3BAA2A',
              color: '#FAFAF8',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              opacity:   menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: `background 0.25s, opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${NAV_LINKS.length * 0.055 + 0.06}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${NAV_LINKS.length * 0.055 + 0.06}s`,
            }}
          >
            Falar com consultor
          </a>

          <p
            className="font-body"
            style={{
              marginTop: '28px',
              fontSize: '0.56rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'rgba(250,250,248,0.18)',
              opacity: menuOpen ? 1 : 0,
              transition: `opacity 0.4s ease ${NAV_LINKS.length * 0.055 + 0.18}s`,
            }}
          >
            Uberlândia, Minas Gerais · Est. 1991
          </p>
        </nav>
      </div>
    </>
  )
}
