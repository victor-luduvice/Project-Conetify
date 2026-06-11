import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";
import { getNewsletterLeads } from "@/lib/newsletter";
import { getAllComments } from "@/lib/comments";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!verifyAdminToken(token)) {
    redirect("/admin/login");
  }

  const leads = getNewsletterLeads();
  const comments = getAllComments();

  return (
    <div className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-6xl rounded-3xl border border-border/60 bg-card/70 p-10 shadow-lg shadow-black/5 backdrop-blur-sm">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Painel administrativo</h1>
            <p className="mt-2 text-muted-foreground">
              Aqui você acessa os leads cadastrados na newsletter.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="rounded-2xl border border-border/60 bg-secondary/50 px-4 py-3 text-sm text-foreground">
              Total de leads:{" "}
              <span className="font-semibold">{leads.length}</span>
            </div>
            <a
              href="/api/admin/logout"
              className="inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
            >
              Sair
            </a>
          </div>
        </div>

        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm">
            <div className="border-b border-border/60 bg-muted/5 px-6 py-4">
              <h2 className="text-lg font-semibold text-foreground">
                Leads da newsletter
              </h2>
            </div>
            {leads.length === 0 ? (
              <div className="p-6 text-muted-foreground">
                Nenhum lead cadastrado ainda.
              </div>
            ) : (
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-muted/50 text-muted-foreground">
                  <tr>
                    <th className="border-b border-border px-4 py-3">E-mail</th>
                    <th className="border-b border-border px-4 py-3">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map(
                    (
                      lead: { email: string; createdAt: string },
                      index: number,
                    ) => (
                      <tr
                        key={`${lead.email}-${index}`}
                        className="odd:bg-card even:bg-background"
                      >
                        <td className="border-b border-border px-4 py-3">
                          {lead.email}
                        </td>
                        <td className="border-b border-border px-4 py-3">
                          {new Date(lead.createdAt).toLocaleString("pt-BR")}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            )}
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm">
            <div className="border-b border-border/60 bg-muted/5 px-6 py-4">
              <h2 className="text-lg font-semibold text-foreground">
                Comentários recentes
              </h2>
            </div>
            {comments.length === 0 ? (
              <div className="p-6 text-muted-foreground">
                Nenhum comentário enviado ainda.
              </div>
            ) : (
              <div className="divide-y divide-border">
                {comments.map((comment, index: number) => (
                  <div
                    key={`${comment.name}-${comment.createdAt}`}
                    className="px-6 py-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {comment.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(comment.createdAt).toLocaleDateString(
                            "pt-BR",
                          )}
                        </p>
                      </div>
                      <div className="flex gap-1 text-primary">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <span
                            key={starIndex}
                            className={
                              starIndex < comment.rating
                                ? "text-primary"
                                : "text-muted-foreground"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {comment.comment}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
