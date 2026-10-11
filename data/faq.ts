export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'Quanto tempo leva para ter o meu site pronto?',
    answer: 'Depende do escopo, da complexidade e da velocidade de aprovação dos materiais. Em geral, seguimos uma etapa de diagnóstico, proposta e desenvolvimento com validações ao longo do processo. // TODO(owner): confirmar prazo real.',
  },
  {
    question: 'Vocês cuidam de domínio e hospedagem?',
    answer: 'Podemos orientar no processo e ajudar com a parte técnica da publicação, conforme a estrutura escolhida para o projeto. // TODO(owner): confirmar detalhes.',
  },
  {
    question: 'Atendem empresas de fora de Sergipe?',
    answer: 'Sim. A Connect atende clientes em todo o Brasil, com comunicação e execução digital à distância quando necessário. // TODO(owner): confirmar disponibilidade real.',
  },
  {
    question: 'No tráfego pago, o valor dos anúncios está incluso?',
    answer: 'O investimento em mídia e o valor de gestão são tratados separadamente. Isso permite controlar o orçamento e ajustar campanhas com mais clareza. // TODO(owner): confirmar regra de cobrança.',
  },
  {
    question: 'Posso contratar apenas um serviço?',
    answer: 'Sim. Você pode escolher o que precisa agora e ampliar depois, conforme a demanda do seu negócio. // TODO(owner): confirmar política comercial.',
  },
  {
    question: 'Como funciona o suporte depois da entrega?',
    answer: 'Acompanhamos a entrega e também o pós-lançamento com ajustes, orientações e suporte para manter o projeto funcionando e evoluindo. // TODO(owner): confirmar escalonamento do suporte.',
  },
];
