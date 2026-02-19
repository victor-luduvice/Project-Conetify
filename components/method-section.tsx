"use client"

import { Search, Lightbulb, Rocket } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analisamos o gargalo atual do seu negócio para identificar oportunidades de crescimento digital.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estratégia",
    description:
      "Desenhamos a solução personalizada IA, Design ou Tráfego alinhada ao seu objetivo de negócio.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execução & Escala",
    description:
      "Implementamos e otimizamos continuamente para gerar lucro real e resultados mensuráveis.",
  },
]

export function MethodSection() {
  return (
    <section id="metodo" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nosso Método
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Nosso Método de Conexão
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Um processo claro e eficiente para transformar sua presença
              digital em resultados concretos.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-16">
          {/* Connecting dotted line (desktop only) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[60px] hidden h-px lg:block"
            aria-hidden="true"
          >
            <div className="mx-auto h-px max-w-3xl border-t-2 border-dashed border-primary/20" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="relative z-10 mb-6 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {step.number}
                    </span>
                    <step.icon className="mt-2 h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
