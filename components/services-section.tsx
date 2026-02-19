"use client"

import {
  Globe,
  Smartphone,
  Palette,
  Bot,
  Users,
  TrendingUp,
} from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const services = [
  {
    icon: Globe,
    title: "Sites de Alta Conversão",
    description:
      "Landing pages e e-commerces rápidos, responsivos e otimizados para SEO que transformam visitantes em clientes reais.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e multiplataforma com UX excepcional para iOS e Android, conectados ao seu ecossistema digital.",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description:
      "Marcas memoráveis com logotipos, paletas e guidelines que comunicam a essência do seu negócio com impacto.",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description:
      "Assistentes virtuais inteligentes que automatizam atendimento, qualificam leads e impulsionam vendas 24/7.",
  },
  {
    icon: Users,
    title: "Implantação de CRM",
    description:
      "Configuração e personalização de CRM para organizar sua base de clientes e otimizar o funil de vendas.",
  },
  {
    icon: TrendingUp,
    title: "Gestão de Tráfego Pago",
    description:
      "Campanhas estratégicas no Google Ads e Meta Ads para escalar seu alcance com ROI mensurável.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nossos Serviços
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Soluções digitais completas para o seu negócio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Da estratégia à execução, entregamos resultados que impulsionam o
              crescimento da sua empresa.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <article className="glow-button group relative h-full rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
