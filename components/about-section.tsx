import { CheckCircle2 } from "lucide-react"

const values = [
  "Tecnologia de ponta e boas práticas de mercado",
  "Comunicação transparente em cada etapa",
  "Entregas no prazo com qualidade excepcional",
  "Suporte contínuo pós-lançamento",
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
              <div className="flex h-full flex-col items-center justify-center gap-4">
                <div className="text-7xl font-bold text-primary md:text-8xl">
                  C<span className="text-foreground">.</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Agência de Soluções Digitais
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg border border-border/60 bg-secondary/50 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xl font-bold text-primary">50+</p>
                    <p className="text-xs text-muted-foreground">Clientes ativos</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-secondary/50 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xl font-bold text-primary">12</p>
                    <p className="text-xs text-muted-foreground">Especialistas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre a Connect
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Parceiros no seu crescimento digital
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Somos uma agência especializada em criar experiências digitais que
              geram resultados reais. Combinamos design, tecnologia e
              estratégia para entregar soluções que transformam negócios.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
