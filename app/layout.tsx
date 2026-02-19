import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Connect | Agência de Soluções Digitais Premium',
  description:
    'Desenvolvemos sites, aplicativos, identidade visual e Chatbots com IA para escalar o seu negócio.',
}

export const viewport: Viewport = {
  themeColor: '#181c24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
