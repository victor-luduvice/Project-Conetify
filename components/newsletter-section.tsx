"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email.trim()) {
      setError("Digite um e-mail válido para receber novidades.");
      setLoading(false);
      return;
    }

    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.trim().toLowerCase() }),
    });

    setLoading(false);

    if (response.ok) {
      setSubmitted(true);
      setEmail("");
      return;
    }

    const data = await response.json();
    setError(data?.error || "Erro ao enviar. Tente novamente mais tarde.");
  }

  return (
    <section id="newsletter" className="py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <div className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-sm shadow-black/5 backdrop-blur-sm md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Newsletter
                </p>
                <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Receba novidades e ofertas exclusivas
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
                  Cadastre seu e-mail para receber conteúdo estratégico, estudos
                  de caso e lançamentos direto no seu inbox.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-3xl bg-primary/5 p-6 text-center">
                  <p className="text-base font-semibold text-foreground">
                    Obrigado! Seu e-mail foi cadastrado.
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Você já pode fechar esta janela.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-email" className="sr-only">
                      E-mail
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Digite seu melhor e-mail"
                      className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-4 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  {error ? (
                    <p className="text-sm text-destructive">{error}</p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Enviando..." : "Quero receber novidades"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
