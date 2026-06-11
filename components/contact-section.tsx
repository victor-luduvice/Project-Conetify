"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, User, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const solutions = [
  "Site de Alta Conversão",
  "Aplicativo Mobile",
  "Identidade Visual",
  "Agente de IA",
  "Implantação de CRM",
  "Gestão de Tráfego Pago",
  "Outro",
];

const whatsappNumber = "5579998333341";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [solution, setSolution] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = `Olá! Meu nome é ${name}.
E-mail: ${email}
Solução desejada: ${solution}
Mensagem: ${message}`;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contato
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Vamos escalar o seu negócio?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
                Preencha o formulário e nossa equipe entrará em contato em até
                24 horas com uma proposta personalizada.
              </p>
            </div>
          </FadeIn>

          {submitted ? (
            <FadeIn direction="none">
              <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-12 text-center backdrop-blur-sm">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Pronto! Abrindo WhatsApp...
                </h3>
                <p className="mt-2 text-muted-foreground">
                  A mensagem foi preparada e o WhatsApp será aberto em uma nova
                  aba.
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="mt-12 rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <User className="h-4 w-4 text-muted-foreground" />
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="seu@email.com"
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Solution selector */}
                <div className="mt-5">
                  <label
                    htmlFor="solution"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground"
                  >
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    Qual solução você busca?
                  </label>
                  <select
                    id="solution"
                    name="solution"
                    required
                    value={solution}
                    onChange={(event) => setSolution(event.target.value)}
                    className="w-full appearance-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="" disabled className="text-muted-foreground">
                      Selecione uma opção
                    </option>
                    {solutions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Descreva brevemente o que precisa..."
                    className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="glow-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 sm:w-auto"
                >
                  Enviar Mensagem
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
