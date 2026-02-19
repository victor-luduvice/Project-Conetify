"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Watermark logo */}
      <div
        className="pointer-events-none absolute -bottom-20 -right-40 select-none opacity-[0.02] md:-right-24 lg:-right-10"
        aria-hidden="true"
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={2000}
          height={2000}
          className="h-[60vh] w-auto min-w-[60vh] object-contain md:h-[65vh] md:min-w-[65vh] lg:h-[70vh] lg:min-w-[70vh]"
        />
      </div>

      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #5eabf2 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Hub de Soluções Digitais Full-Service
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mx-auto mt-8 max-w-5xl text-balance text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="font-extrabold">Connect</span>{': A engrenagem tecnol\u00F3gica por tr\u00E1s do seu '}
            <span className="font-extrabold" style={{ color: "#5eabf2" }}>faturamento.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            De identidades visuais marcantes a agentes de IA personalizados.
            Conectamos cada etapa do seu ecossistema digital para escalar seu
            negócio.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="glow-button group inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
            >
              Iniciar Projeto Agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ver Serviços
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mx-auto mt-20 grid max-w-xl grid-cols-3 gap-8">
            {[
              { value: "150+", label: "Projetos Entregues" },
              { value: "98%", label: "Satisfação" },
              { value: "5+", label: "Anos de Mercado" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
