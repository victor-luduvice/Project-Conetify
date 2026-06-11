import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";
import { getNewsletterLeads } from "@/lib/newsletter";

export default async function NewsletterAdmin() {
  const token = cookies().get(AUTH_COOKIE_NAME)?.value;

  if (!verifyAdminToken(token)) {
    redirect("/newsletter-admin/login");
  }

  const leads = getNewsletterLeads();

  return (
    <div className="min-h-screen bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-card/70 p-10 shadow-lg shadow-black/5 backdrop-blur-sm">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Leads cadastrados</h1>
            <p className="mt-2 text-muted-foreground">
              Esta página mostra os e-mails salvos pelo formulário de
              newsletter.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="rounded-2xl border border-border/60 bg-secondary/50 px-4 py-3 text-sm text-foreground">
              Total: <span className="font-semibold">{leads.length}</span>
            </div>
            <a
              href="/api/newsletter/logout"
              className="inline-flex rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
            >
              Sair
            </a>
          </div>
        </div>

        {leads.length === 0 ? (
          <p className="text-muted-foreground">Nenhum lead cadastrado ainda.</p>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm">
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
          </div>
        )}
      </div>
    </div>
  );
}
