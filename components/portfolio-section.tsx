"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const projects = [
  {
    title: "E-Commerce Premium",
    category: "Site de Alta Conversão",
    image: "/images/portfolio-1.jpg",
  },
  {
    title: "FitTrack App",
    category: "Aplicativo Mobile",
    image: "/images/portfolio-2.jpg",
  },
  {
    title: "Studio Brand Identity",
    category: "Identidade Visual",
    image: "/images/portfolio-3.jpg",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Portfólio
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Projetos que geram resultado
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Conheça alguns dos projetos que criamos para empresas que
              decidiram escalar com a Connect.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
