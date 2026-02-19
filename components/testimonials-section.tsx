"use client"

import { Star } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const testimonials = [
  {
    name: "Rafael Mendes",
    role: "CEO, TechNova",
    initials: "RM",
    quote:
      "A Connect triplicou nossas conversões em 3 meses. A equipe entendeu nosso negócio e entregou muito além do esperado.",
  },
  {
    name: "Carolina Alves",
    role: "Diretora de Marketing, Bloom",
    initials: "CA",
    quote:
      "O agente de IA que implementaram reduziu nosso tempo de atendimento em 70%. Resultados reais e mensuráveis.",
  },
  {
    name: "Diego Ferreira",
    role: "Fundador, GreenScale",
    initials: "DF",
    quote:
      "Do branding ao app, a Connect cuidou de tudo. Nosso posicionamento digital nunca esteve tão forte.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Depoimentos
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              O que nossos clientes dizem
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Resultados reais de empresas que confiaram na Connect para escalar
              seu ecossistema digital.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm">
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.quote}"`}
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-border/40 pt-5">
                  {/* Avatar with initials */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
