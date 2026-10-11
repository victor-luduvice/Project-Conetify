import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'

import { CookieBanner } from '@/components/layout/CookieBanner'
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat'

import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.connectsolucoes.com.br'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Connect Soluções Digitais | Sites, Apps, IA e Tráfego Pago em Aracaju',
  description:
    'Sites de alta conversão, aplicativos, IA, CRM e tráfego pago com estratégia integrada e atendimento direto do fundador.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Connect Soluções Digitais',
    description:
      'Sites de alta conversão, apps e estratégia digital para empresas que querem vender mais.',
    url: siteUrl,
    siteName: 'Connect Soluções Digitais',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect Soluções Digitais',
    description:
      'Sites de alta conversão, apps, IA, CRM e tráfego pago com estratégia integrada.',
  },
}

export const viewport: Viewport = {
  themeColor: '#071012',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
