"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

interface CommentData {
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export function CommentsSection() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    void fetchComments();
  }, []);

  async function fetchComments() {
    const response = await fetch("/api/comments");
    if (response.ok) {
      const data = await response.json();
      setComments(data.comments ?? []);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!name.trim() || !comment.trim()) {
      setError("Por favor, preencha nome, avaliação e comentário.");
      return;
    }

    setLoading(true);
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, rating, comment }),
    });
    setLoading(false);

    if (!response.ok) {
      const data = await response.json();
      setError(data.error || "Erro ao enviar comentário.");
      return;
    }

    setSubmitted(true);
    setName("");
    setComment("");
    setRating(5);
    void fetchComments();
  }

  return (
    <section id="avaliacoes" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Avaliações
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Deixe sua avaliação ou veja o que outros clientes acham
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Avaliações ajudam pessoas a entenderem seu trabalho e dão prova
              social para sua empresa.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
              {submitted ? (
                <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center">
                  <p className="text-xl font-semibold text-foreground">
                    Obrigado pela avaliação!
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Sua opinião já foi registrada e aparecerá no painel.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-foreground"
                      htmlFor="comment-name"
                    >
                      Nome
                    </label>
                    <input
                      id="comment-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Seu nome"
                      className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-foreground"
                      htmlFor="comment-rating"
                    >
                      Avaliação
                    </label>
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 5 }).map((_, index) => {
                        const value = index + 1;
                        return (
                          <button
                            type="button"
                            key={value}
                            onClick={() => setRating(value)}
                            className={`rounded-full p-2 transition ${
                              rating >= value
                                ? "bg-primary/10 text-primary"
                                : "bg-secondary/50 text-muted-foreground"
                            }`}
                          >
                            <Star className="h-4 w-4" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-foreground"
                      htmlFor="comment-text"
                    >
                      Comentário
                    </label>
                    <textarea
                      id="comment-text"
                      rows={4}
                      value={comment}
                      onChange={(event) => setComment(event.target.value)}
                      placeholder="Conte como nossa solução ajudou sua empresa..."
                      className="w-full resize-none rounded-2xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  {error ? (
                    <p className="text-sm text-destructive">{error}</p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Enviando..." : "Enviar avaliação"}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-5">
              {comments.length === 0 ? (
                <div className="rounded-3xl border border-border/60 bg-card/50 p-8 text-center text-muted-foreground">
                  Nenhuma avaliação enviada ainda.
                </div>
              ) : (
                comments.slice(0, 4).map((item) => (
                  <article
                    key={`${item.name}-${item.createdAt}`}
                    className="rounded-3xl border border-border/60 bg-card/50 p-6 shadow-sm"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(item.createdAt).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={
                            index < item.rating
                              ? "h-4 w-4 fill-primary text-primary"
                              : "h-4 w-4 text-muted-foreground"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.comment}
                    </p>
                  </article>
                ))
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
