'use client'

import { MessageCircle } from 'lucide-react'

import { siteConfig } from '@/data/site'
import { track } from '@/lib/analytics'

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappLink}
      aria-label="Falar com a Connect no WhatsApp"
      onClick={() => track('click_whatsapp', { origin: 'flutuante' })}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
