# Changelog da atualização do site

## Fase 0 - Auditoria inicial
- Registro da auditoria do projeto atual e do plano de refatoração.
- Arquivos principais: `AUDITORIA.md`, `README.md`, `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `components/navbar.tsx`, `components/footer.tsx`.

## Fase 1 - Fundamentos visuais
- Ajuste de tipografia, tokens de marca, paleta escura e styling base para a identidade Connect.
- Arquivos principais: `app/layout.tsx`, `app/globals.css`, `tailwind.config.ts`, `app/design-system/page.tsx`.

## Fase 2 - Layout global
- Reestruturação do header, rodapé e botões de CTA com foco em conversão e WhatsApp.
- Arquivos principais: `components/navbar.tsx`, `components/footer.tsx`, `components/layout/CookieBanner.tsx`, `components/layout/WhatsAppFloat.tsx`.

## Fase 3 - Home e conteúdo
- Nova home com hero, serviços, passos, diferenciais, FAQ, sobre e formulário de contato.
- Arquivos principais: `app/page.tsx`, `data/site.ts`, `data/services.ts`, `data/steps.ts`, `data/differentials.ts`, `data/faq.ts`, `data/cases.ts`.

## Fase 4 - Formulário e conversão
- Estrutura do formulário de contato, validação e páginas de confirmação.
- Arquivos principais: `components/contact-form.tsx`, `app/api/contato/route.ts`, `lib/validators.ts`, `lib/utm.ts`, `app/obrigado/page.tsx`.

## Fase 5 - Páginas e SEO
- Criação de páginas de serviço, legais, 404, sitemap e robots.
- Arquivos principais: `app/servicos/[slug]/page.tsx`, `app/politica-de-privacidade/page.tsx`, `app/termos-de-uso/page.tsx`, `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`.
