export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen bg-bg px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-border bg-surface/80 p-8">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-5 font-display text-4xl font-bold text-text">Política de Privacidade</h1>
        <p className="mt-5 text-sm text-text-muted">// TODO(owner): revisar com um advogado antes de publicar.</p>

        <div className="mt-8 space-y-6 text-text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-text">1. Informações coletadas</h2>
            <p className="mt-3">Coletamos dados fornecidos no formulário de contato, como nome, e-mail, WhatsApp, serviço de interesse e mensagem. Também podemos registrar informações técnicas de navegação e campanhas, como parâmetros UTM.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text">2. Finalidade do tratamento</h2>
            <p className="mt-3">Utilizamos esses dados para responder solicitações, entender melhor o projeto, atender por WhatsApp ou e-mail e melhorar campanhas de marketing digital de forma mais eficiente.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text">3. Base legal</h2>
            <p className="mt-3">A base legal para o tratamento é o consentimento do titular e a necessidade de execução de contrato ou relacionamento comercial, conforme aplicável.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text">4. Compartilhamento</h2>
            <p className="mt-3">Dados podem ser compartilhados com ferramentas de atendimento e comunicação, como e-mail e plataformas de analytics, sempre de acordo com boas práticas e com o mínimo necessário.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-text">5. Direitos do titular</h2>
            <p className="mt-3">O titular pode solicitar confirmação da existência do tratamento, acesso, correção, exclusão, portabilidade e revogação do consentimento, por meio do canal de contato da empresa.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
