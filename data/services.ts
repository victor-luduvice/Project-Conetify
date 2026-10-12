import {
  Bot,
  Globe,
  Palette,
  Smartphone,
  TrendingUp,
  Users,
} from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  icon: typeof Globe;
};

export const services: Service[] = [
  {
    slug: 'sites',
    title: 'Sites de Alta Conversão',
    description:
      'Landing pages e e-commerces rápidos, responsivos e otimizados para SEO.',
    benefits: ['Estratégia de conversão', 'Layout focado em ação', 'SEO com base em conteúdo relevante'],
    icon: Globe,
  },
  {
    slug: 'aplicativos',
    title: 'Aplicativos Mobile',
    description:
      'Apps nativos e multiplataforma para iOS e Android, com UX excepcional.',
    benefits: ['Experiência mobile pensada para uso real', 'Arquitetura escalável', 'Entrega com foco em usabilidade'],
    icon: Smartphone,
  },
  {
    slug: 'identidade-visual',
    title: 'Identidade Visual',
    description:
      'Logotipos, paletas e guidelines que comunicam a essência da marca.',
    benefits: ['Marca com consistência', 'Visual profissional', 'Posicionamento claro no mercado'],
    icon: Palette,
  },
  {
    slug: 'agentes-de-ia',
    title: 'Agentes de IA',
    description:
      'Assistentes virtuais que atendem, qualificam leads e impulsionam vendas 24/7.',
    benefits: ['Atendimento contínuo', 'Qualificação de oportunidades', 'Mais produtividade e agilidade'],
    icon: Bot,
  },
  {
    slug: 'crm',
    title: 'Implantação de CRM',
    description:
      'Configuração e personalização do CRM para organizar clientes e funil de vendas.',
    benefits: ['Processos mais organizados', 'Acompanhamento melhor do ciclo de vendas', 'Decisões com dados mais claros'],
    icon: Users,
  },
  {
    slug: 'trafego-pago',
    title: 'Gestão de Tráfego Pago',
    description:
      'Campanhas no Google Ads e Meta Ads com ROI mensurável.',
    benefits: ['Campanhas com foco em resultado', 'Mensuração e otimização', 'Estratégia ajustada ao público e ao objetivo'],
    icon: TrendingUp,
  },
];
