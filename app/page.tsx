import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'

import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cases } from '@/data/cases'
import { differentials } from '@/data/differentials'
import { faqItems } from '@/data/faq'
import { services } from '@/data/services'
import { siteConfig } from '@/data/site'
import { steps } from '@/data/steps'

const trustItems = [
  'Atendimento direto com o fundador',
  'Soluções sob medida',
  'Tecnologia moderna e performance',
]

const floatingChips = ['SEO', 'IA 24/7', 'CRM', 'Ads']

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="conteudo-principal">
        <section id="inicio" className="section-shell relative overflow-hidden">
          <div className="container-shell grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div>
              <span className="eyebrow">Soluções digitais completas</span>
              <h1 className="mt-6 max-w-[640px] font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] text-text">
                Conectamos o seu negócio ao <span className="gradient-text">digital que dá resultado</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
                Sites de alta conversão, aplicativos, agentes de IA, CRM e tráfego pago com um único parceiro e estratégia integrada do início ao fim.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contato" className="btn-primary">
                  Solicitar orçamento
                </a>
                <a href={siteConfig.whatsappLink} className="btn-secondary">
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-text-muted">
                <a href="#servicos" className="inline-flex items-center gap-1 text-primary hover:text-primary-hover">
                  Ver serviços <ChevronRight className="h-4 w-4" />
                </a>
              </div>

              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-3 text-sm text-text-muted">
                    <span className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="grid-pattern absolute inset-0 rounded-[2rem] opacity-30" />
              <div className="relative rounded-[2rem] border border-border bg-surface/80 p-5 shadow-glow">
                <div className="rounded-[1.6rem] border border-primary/20 bg-[#0a1d21] p-4">
                  <div className="flex items-center justify-center rounded-[1.2rem] border border-primary/20 bg-[#0d252c] p-6">
                    <Image
                      src="/images/files/connect-logo-horizontal-fundo-escuro.png"
                      alt="Logo da Connect"
                      width={420}
                      height={120}
                      className="h-auto max-w-[90%]"
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    {floatingChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-primary/30 bg-[#0d252c] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.2rem] border border-primary/25 bg-bg px-4 py-3 text-center text-lg font-semibold text-text shadow-[0_0_30px_rgba(64,196,217,0.08)]">
                  Conexão digital
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section-shell bg-bg-elevated/60">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Serviços</span>
              <h2 className="section-title mt-4">O que a Connect faz pelo seu negócio</h2>
              <p className="mt-4 text-base text-text-muted">
                Estratégia, execução e acompanhamento com um só parceiro.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <article key={service.slug} className="brand-card flex h-full flex-col">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{service.description}</p>
                    <ul className="mt-5 space-y-3 text-sm text-text-muted">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/servicos/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover">
                      Saiba mais <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section-shell">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Como funciona</span>
              <h2 className="section-title mt-4">Do primeiro contato à entrega, sem complicação</h2>
            </div>

            <div className="relative mt-12 grid gap-5 md:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.title} className="relative rounded-[1.5rem] border border-border bg-surface/80 p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-ink">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-text">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="#contato" className="btn-primary">Começar meu projeto</a>
            </div>
          </div>
        </section>

        <section id="diferenciais" className="section-shell bg-bg-elevated/60">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Diferenciais</span>
              <h2 className="section-title mt-4">Por que escolher a Connect</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {differentials.map((item, index) => (
                <div key={item.title} className="brand-card">
                  <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/5 p-2 text-primary">
                    {index === 0 ? <Target className="h-5 w-5" /> : index === 1 ? <ShieldCheck className="h-5 w-5" /> : index === 2 ? <MessageCircle className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                  </div>
                  <h3 className="text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {siteConfig.showCases && (
          <section id="cases" className="section-shell">
            <div className="container-shell">
              <div className="mx-auto max-w-2xl text-center">
                <span className="eyebrow">Cases</span>
                <h2 className="section-title mt-4">Projetos que fazem sentido para o cliente</h2>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {cases.map((item) => (
                  <article key={item.name} className="overflow-hidden rounded-[1.5rem] border border-border bg-surface/80">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-surface" />
                    <div className="p-6">
                      <p className="text-xs uppercase tracking-[0.15em] text-primary">{item.segment}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-text">{item.name}</h3>
                      <p className="mt-3 text-sm text-text-muted"><strong className="text-text">Desafio:</strong> {item.challenge}</p>
                      <p className="mt-3 text-sm text-text-muted"><strong className="text-text">Solução:</strong> {item.solution}</p>
                      <p className="mt-3 text-sm text-text-muted"><strong className="text-text">Resultado:</strong> {item.result}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="sobre" className="section-shell">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-border bg-surface/70 p-7">
              <div className="flex h-56 items-center justify-center rounded-[1.5rem] border border-primary/30 bg-bg text-6xl text-primary">
                C
              </div>
            </div>
            <div>
              <span className="eyebrow">Sobre</span>
              <h2 className="section-title mt-4">Quem está por trás da Connect</h2>
              <p className="mt-5 text-lg leading-relaxed text-text-muted">
                {siteConfig.founder.bio}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Java'].map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-bg-elevated px-3 py-2 text-xs font-medium text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={siteConfig.linkedinUrl} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover">
                Ver no LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell bg-bg-elevated/60">
          <div className="container-shell max-w-4xl">
            <div className="text-center">
              <span className="eyebrow">FAQ</span>
              <h2 className="section-title mt-4">Perguntas frequentes</h2>
            </div>

            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question} className="rounded-[1.25rem] border border-border bg-surface/80 px-4">
                  <AccordionTrigger className="text-left text-base font-medium text-text">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-text-muted">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contato" className="section-shell relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(64,196,217,0.12),transparent_32%)]" />
          <div className="container-shell relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Vamos conversar</span>
              <h2 className="section-title mt-4">Vamos tirar o seu projeto do papel?</h2>
              <p className="mt-4 text-lg text-text-muted">
                Conte um pouco sobre o seu negócio. Respondemos o mais rápido possível.
              </p>

              <div className="mt-8 space-y-5 text-text-muted">
                <a href={siteConfig.whatsappLink} className="flex items-center gap-3 hover:text-text">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><MessageCircle className="h-4 w-4" /></span>
                  WhatsApp
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-text">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><ArrowRight className="h-4 w-4" /></span>
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><CheckCircle2 className="h-4 w-4" /></span>
                  {siteConfig.address}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-surface/80 p-5 shadow-glow md:p-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
