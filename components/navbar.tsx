"use client"

import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { navItems, siteConfig } from '@/data/site'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#071012]/80 backdrop-blur-xl">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-ink"
      >
        Pular para o conteúdo
      </a>
      <nav className="container-shell flex items-center justify-between py-4">
        <a href="#inicio" className="flex items-center gap-3 text-base font-semibold tracking-tight text-text">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-transparent">
            <Image
              src="/images/files/connect-logo-simbolo-fundo-escuro.png"
              alt="Logo da Connect"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </span>
          <span className="font-display text-[1.8rem] leading-none text-white">Connect</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-text-muted hover:text-text">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex md:items-center md:gap-3">
          <a href="#contato" className="btn-primary">
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="rounded-full border border-primary/40 p-2 text-text md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <ul className="container-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-text-muted hover:bg-surface hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contato" onClick={() => setMobileOpen(false)} className="btn-primary w-full">
                Solicitar orçamento
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
