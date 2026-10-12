import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'

import { siteConfig } from '@/data/site'

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-6 py-16">
      <div className="w-full max-w-2xl rounded-[2rem] border border-border bg-surface/80 p-8 text-center shadow-glow">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <span className="eyebrow">Mensagem recebida</span>
        <h1 className="mt-5 font-display text-4xl font-bold text-text">Obrigado pelo contato!</h1>
        <p className="mt-4 text-lg text-text-muted">
          Sua mensagem foi recebida com sucesso. Em breve a Connect entra em contato para entender o seu projeto e apontar o próximo passo.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Voltar para a home
          </Link>
          <a href={siteConfig.whatsappLink} className="btn-secondary">
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-muted">
          <ArrowRight className="h-4 w-4 text-primary" />
          Próximos passos: diagnóstico, proposta e alinhamento do projeto.
        </div>
      </div>
    </main>
  )
}
