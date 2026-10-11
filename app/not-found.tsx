import Link from 'next/link'
import { Home, MessageCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="w-full max-w-xl rounded-[2rem] border border-border bg-surface/80 p-8 text-center shadow-glow">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display text-4xl font-bold text-text">Página não encontrada</h1>
        <p className="mt-4 text-text-muted">
          O conteúdo que você procura não está mais disponível ou foi movido.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="mr-2 h-4 w-4" />
            Voltar para a home
          </Link>
          <a href="https://wa.me/5511980000000?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Connect%20e%20gostaria%20de%20um%20or%C3%A7amento." className="btn-secondary">
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}
