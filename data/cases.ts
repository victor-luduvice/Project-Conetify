export type CaseStudy = {
  name: string;
  segment: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
};

export const cases: CaseStudy[] = [
  {
    name: 'Projeto em análise',
    segment: 'Negócios que querem melhorar conversão e presença digital',
    challenge: 'Estruturar uma presença digital clara, profissional e capaz de converter visitas em oportunidades reais.',
    solution: 'Diagnóstico estratégico, posicionamento, criação da narrativa comercial e definição da melhor estrutura de oferta.',
    result: 'Base sólida para atrair clientes mais certos e aumentar a consistência da captação.',
    image: '/images/placeholder-case.jpg',
  },
  {
    name: 'Projeto em análise',
    segment: 'Empresas com operação digital ainda dispersa',
    challenge: 'Concentrar canais, materiais e processos em uma comunicação mais homogênea e eficiente.',
    solution: 'Padronização visual, melhorias na experiência de navegação e alinhamento de mensagens em cada etapa da jornada.',
    result: 'Melhor percepção de marca e maior clareza na conversa com clientes e leads.',
    image: '/images/placeholder-case.jpg',
  },
  {
    name: 'Projeto em análise',
    segment: 'Negócios em expansão que precisam escalar sem perder qualidade',
    challenge: 'Aumentar o volume de demanda sem depender de vários fornecedores ou processos improvisados.',
    solution: 'Estratégia de atendimento, sistema de captação e suporte operacional com foco em performance e continuidade.',
    result: 'Mais previsibilidade na operação e melhor experiência para quem entra em contato.',
    image: '/images/placeholder-case.jpg',
  },
];
