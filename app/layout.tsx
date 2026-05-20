import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-impact',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SoyMaiz Agro — Inteligência em Comercialização de Grãos',
  description:
    'Desde 1991, a SoyMaiz Agro conecta produtores rurais às melhores oportunidades de comercialização de soja, milho e sorgo no Brasil.',
  keywords: [
    'corretora grãos',
    'soja',
    'milho',
    'sorgo',
    'comercialização agrícola',
    'consultoria agro',
    'Minas Gerais',
    'Goiás',
  ],
  openGraph: {
    title: 'SoyMaiz Agro — Inteligência em Grãos',
    description: '35 anos conectando produtores ao mercado global de grãos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable} ${bebasNeue.variable}`}
    >
      <body className="font-body bg-bg-dark text-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
