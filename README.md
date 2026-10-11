# Connect Soluções Digitais

Site institucional em Next.js com foco em conversão, com navegação, conteúdo em português do Brasil, páginas de serviços, formulário de contato, FAQ, páginas legais e páginas de agradecimento.

## Como rodar

1. Instale as dependências:
   npm install
2. Copie o arquivo de ambiente:
   cp .env.example .env.local
3. Inicie o projeto:
   npm run dev

A aplicação fica disponível em http://localhost:3000.

## Variáveis de ambiente

Crie um arquivo .env.local com as seguintes variáveis:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=victor.connect1@outlook.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

## Estrutura principal

- app/: páginas do App Router
- components/: navegação, footer, formulário, botão de WhatsApp e blocos de seção
- data/: textos e conteúdos centralizados da marca
- lib/: utilitários, validação, analytics e UTM

## Como editar o conteúdo

O texto do site foi centralizado em arquivos dentro da pasta data/ para facilitar manutenção sem espalhar textos nos componentes.

Arquivos principais:

- data/site.ts
- data/services.ts
- data/steps.ts
- data/differentials.ts
- data/faq.ts
- data/cases.ts

## Observações

- O projeto mantém compatibilidade com o App Router do Next.js.
- Há pendências de dados reais que dependem do dono do projeto para confirmar links, e-mail, WhatsApp, logo e textos finais.
- A estrutura foi adaptada ao projeto atual sem quebrar as rotas existentes.
