# Connect Soluções Digitais

Site institucional em Next.js com páginas de serviços, formulário de contato, newsletter, avaliações, painel administrativo e páginas legais.

## Desenvolvimento local

```bash
npm install
cp .env.example .env.local
npm run dev
```

O site fica em `http://localhost:3000`. Para testar o painel administrativo localmente, preencha `NEWSLETTER_ADMIN_USERNAME`, `NEWSLETTER_ADMIN_PASSWORD` e `NEWSLETTER_AUTH_SECRET` em `.env.local`. A senha precisa ter pelo menos 12 caracteres e o segredo pelo menos 32.

Sem Supabase, o desenvolvimento local usa `data/newsletter-leads.json` e `data/comments.json`. Esses arquivos não são usados como armazenamento em produção.

## Serviços necessários em produção

### Supabase

Crie um projeto Supabase e execute o conteúdo de `supabase/schema.sql` no SQL Editor.

Nas variáveis de ambiente, configure `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` usando o endereço do projeto e a chave `service_role` do Supabase. A chave é secreta e deve existir somente no ambiente do servidor; não use o prefixo `NEXT_PUBLIC_` nela.

### Resend

Crie uma API key no Resend, verifique o domínio remetente e configure `RESEND_API_KEY` e `RESEND_FROM_EMAIL` com um endereço desse domínio. Configure `CONTACT_TO_EMAIL` com o endereço que receberá os pedidos. Sem essas configurações, a API do formulário responde como indisponível e não mostra confirmação falsa.

### Acesso administrativo

Configure `NEWSLETTER_ADMIN_USERNAME`, `NEWSLETTER_ADMIN_PASSWORD` e `NEWSLETTER_AUTH_SECRET`. Use uma senha com pelo menos 12 caracteres e gere um segredo aleatório com:

```bash
openssl rand -base64 48
```

O login do painel fica em `/admin/login` e `/newsletter-admin/login`.

## Publicação no Vercel

1. Envie a branch aprovada ao GitHub e faça merge na branch configurada como produção.
2. No Vercel, importe o repositório `victor-luduvice/Project-Conetify` e mantenha o preset Next.js e os comandos padrão (`npm run build`).
3. Em **Settings > Environment Variables**, cadastre as variáveis de Supabase, Resend e administração acima, além de `NEXT_PUBLIC_SITE_URL=https://www.connectsolucoes.com.br`. Aplique as variáveis ao ambiente Production.
4. Faça o deploy de produção e teste envio do formulário, inscrição da newsletter, avaliações e login administrativo.
5. Adicione `connectsolucoes.com.br` e `www.connectsolucoes.com.br` em **Settings > Domains** e configure no DNS os registros indicados pelo Vercel.

`MAILCHIMP_API_KEY`, `MAILCHIMP_LIST_ID` e `GOOGLE_SHEETS_WEBHOOK_URL` são integrações opcionais para cópia dos novos inscritos. `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID` também são opcionais.

## Comandos

- `npm run dev`: desenvolvimento local
- `npm run lint`: lint
- `npx tsc --noEmit`: verificação de tipos
- `npm run build`: build de produção

## Conteúdo

O conteúdo da marca e dos serviços fica centralizado em `data/`. As páginas e rotas ficam em `app/`, os componentes em `components/` e integrações/validações em `lib/`.
