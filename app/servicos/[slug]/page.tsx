import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { services } from '@/data/services'
import { siteConfig } from '@/data/site'
import { steps } from '@/data/steps'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return { title: 'Serviço não encontrado | Connect' }
  }

  return {
    title: `${service.title} | Connect Soluções Digitais`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-bg">
      <section className="section-shell">
        <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Serviço</span>
            <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight text-text">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-text-muted">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contato" className="btn-primary">Solicitar orçamento</a>
              <a href={siteConfig.whatsappLink} className="btn-secondary">Falar no WhatsApp</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface/80 p-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-text">Para quem é</h2>
            <p className="mt-4 text-text-muted">
              Ideal para negócios que querem vender mais, melhorar a experiência do cliente e organizar a operação digital sem depender de vários fornecedores.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-bg-elevated/60">
        <div className="container-shell">
          <h2 className="section-title">O que está incluso</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="brand-card flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <p className="text-sm text-text-muted">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <h2 className="section-title">Como funciona</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-border bg-surface/80 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-ink">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-text">{step.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-bg-elevated/60">
        <div className="container-shell max-w-4xl">
          <h2 className="section-title">Perguntas frequentes sobre o serviço</h2>
          <div className="mt-8 space-y-4 text-text-muted">
            <div className="rounded-2xl border border-border bg-surface/80 p-5">
              <p className="font-medium text-text">Quem costuma contratar esse serviço?</p>
              <p className="mt-2 text-sm">Empresas que precisam de presença digital, atendimento melhor e mais clareza no processo comercial.</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 p-5">
              <p className="font-medium text-text">O que precisa para começar?</p>
              <p className="mt-2 text-sm">Basta ter uma conversa inicial e entender o objetivo, a audiência e o que precisa ser melhorado.</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 p-5">
              <p className="font-medium text-text">Há suporte depois da entrega?</p>
              <p className="mt-2 text-sm">Sim. Acompanhamos a entrega e possuímos apoio para evoluções e ajustes quando necessário, com alinhamento de escopo e prioridades conforme a etapa do projeto.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="section-shell">
        <div className="container-shell rounded-[2rem] border border-border bg-surface/80 p-8 text-center">
          <h2 className="section-title">Quer conhecer a melhor solução para o seu caso?</h2>
          <p className="mt-4 text-text-muted">Fale com a Connect e vamos entender o que seu negócio precisa.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/#contato" className="btn-primary">
              Solicitar orçamento
            </a>
            <Link href="/" className="btn-secondary">
              Voltar para home
            </Link>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
            <ArrowRight className="h-4 w-4" />
            Fale com a Connect
          </div>
        </div>
      </section>
    </main>
  )
}
