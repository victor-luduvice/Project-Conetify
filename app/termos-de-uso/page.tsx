export default function TermosUsoPage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-surface/80 p-8">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-5 font-display text-4xl font-bold text-text">Termos de Uso</h1>
        <p className="mt-5 text-sm text-text-muted">Texto em versão inicial para publicação, sujeito a revisão jurídica conforme a estrutura real de operação e atuação da empresa.</p>

        <div className="mt-8 space-y-6 text-text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-text">1. Aceitação</h2>
            <p className="mt-3">Ao acessar este site, o usuário concorda com os termos aqui descritos e com o uso responsável das informações e serviços disponibilizados.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text">2. Uso do site</h2>
            <p className="mt-3">O conteúdo deste site é fornecido para fins informativos e de apresentação da Connect, sem garantia de resultados ou promessas específicas de desempenho.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text">3. Propriedade intelectual</h2>
            <p className="mt-3">Todo o conteúdo, textos, marca, layout e materiais disponibilizados são de propriedade da Connect ou de seus parceiros, respeitando a legislação aplicável.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text">4. Contato</h2>
            <p className="mt-3">Para dúvidas sobre estes termos ou sobre tratamento de dados, o usuário pode entrar em contato pela página de contato do site ou pelo e-mail informado na marca.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
