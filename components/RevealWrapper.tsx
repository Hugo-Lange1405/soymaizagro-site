'use client'

import { useEffect, useRef } from 'react'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function RevealWrapper({
  children,
  delay = 0,
  className = '',
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -55px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delay > 0 ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  )
}
