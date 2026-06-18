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
  title: {
    default: 'SoyMaiz Agro — Comercialização de Grãos',
    template: '%s | SoyMaiz Agro',
  },

  description:
    'Consultoria e assessoria em comercialização de soja, milho e sorgo. Desde 1991 conectando produtores rurais às melhores oportunidades de mercado.',

  keywords: [
    'SoyMaiz Agro',
    'corretora de grãos',
    'comercialização de soja',
    'comercialização de milho',
    'comercialização de sorgo',
    'consultoria agro',
    'mercado de grãos',
    'Uberlândia',
    'Minas Gerais',
    'Goiás',
    'Distrito Federal',
    'Piauí',
  ],

  openGraph: {
    title: 'SoyMaiz Agro — Comercialização de Grãos',
    description:
      'Desde 1991 conectando produtores rurais às melhores oportunidades no mercado de soja, milho e sorgo.',
    url: 'https://soymaizagro.com.br',
    siteName: 'SoyMaiz Agro',
    type: 'website',
    locale: 'pt_BR',
  },

  icons: {
    icon: '/images/favicon.png',
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
