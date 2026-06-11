"use client"

import Image from "next/image"
import Link from "next/link" 
import { ExternalLink } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

const projects = [
  {
    title: "Progress Embalagens",
    category: "Site de Alta Conversão",
    image: "/images/imgProgress.png",
    href: "https://www.progressba.com.br",
  },
  {
    title: "FitTrack App",
    category: "Aplicativo Mobile",
    image: "/images/fittrack-app.jpg",
    // href 
  },
  {
    title: "Studio Brand Identity",
    category: "Identidade Visual",
    image: "/images/portfolio-3.jpg",
    // href
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
          {projects.map((project, i) => {
            // Criamos a estrutura da imagem com o overlay separada para não duplicar código
            const CardImage = (
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
            )

            return (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30">
                  
                  {/* 2. Condição: Se tiver href, envolve no Link. Se não tiver, renderiza só a imagem */}
                  {project.href ? (
                    <Link 
                      href={project.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      {CardImage}
                    </Link>
                  ) : (
                    CardImage
                  )}

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
            )
          })}
        </div>
      </div>
    </section>
  )
}