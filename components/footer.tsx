import Link from 'next/link'

import { siteConfig } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-elevated/60">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1.3fr] md:items-start">
        <div>
          <div className="mb-3 flex items-center gap-2 text-text">
            <span className="font-display text-2xl">Connect</span>
            <span className="text-primary">.</span>
          </div>
          <p className="max-w-sm text-sm text-text-muted">
            Soluções digitais completas para negócios que querem crescer com estratégia, clareza e resultado.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-text">Navegação</h3>
          <ul className="space-y-3 text-sm text-text-muted">
            <li><a href="#servicos" className="hover:text-text">Serviços</a></li>
            <li><a href="#como-funciona" className="hover:text-text">Como funciona</a></li>
            <li><a href="#sobre" className="hover:text-text">Sobre</a></li>
            <li><a href="#faq" className="hover:text-text">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-text">Legais</h3>
          <ul className="space-y-3 text-sm text-text-muted">
            <li><Link href="/politica-de-privacidade" className="hover:text-text">Política de Privacidade</Link></li>
            <li><Link href="/termos-de-uso" className="hover:text-text">Termos de Uso</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg text-text">Contato</h3>
          <ul className="space-y-3 text-sm text-text-muted">
            <li>{siteConfig.address}</li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-text">{siteConfig.email}</a></li>
            <li><a href={siteConfig.whatsappLink} className="hover:text-text">WhatsApp</a></li>
            <li><a href={siteConfig.linkedinUrl} className="hover:text-text">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="container-shell flex flex-col gap-3 border-t border-border py-5 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <p>© {year} {siteConfig.brand}. {siteConfig.cnpj}</p>
        <p>Desenvolvido para gerar contatos qualificados.</p>
      </div>
    </footer>
  )
}
