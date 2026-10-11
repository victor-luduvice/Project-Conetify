# Auditoria da atualização do site Connect

## O que já está de acordo
- Estrutura Next.js App Router já funcionando com Tailwind e UI base em componentes reutilizáveis.
- Projeto com suporte a landing page comercial, navegação e blocos de conteúdo estáticos.
- Dependências relevantes já instaladas para formulários, acessibilidade e animações.
- Estrutura de `app/`, `components/`, `lib/` e `data/` já organizada o suficiente para manter o projeto funcional.

## Divergências em relação ao prompt
- O branding e a linguagem do site ainda estão centrados em "Conetify" e não em "Connect Soluções Digitais".
- A home atual não segue a ordem e a estratégia de conversão da brief (objetivo principal: gerar contatos qualificados).
- Ausência dos elementos exigidos: header sticky com CTA, WhatsApp flutuante, FAQ estruturado, páginas legais, formulário robusto e SEO completo.
- Fontes e tokens visuais não estão alinhados com o design proposto (escuro, tecnológico, turquesa sofisticado).
- Conteúdo ainda está espalhado em componentes e não centralizado em dados.
- Faltam páginas de serviço, obrigado, privacidade, termos, sitemap, robots, analytics e consentimento.

## Plano de refatoração
1. Definir base visual e tokens globais em Tailwind e CSS.
2. Reorganizar navegação, layout e home com foco em conversão.
3. Centralizar textos e dados em arquivos de conteúdo.
4. Implementar formulário com validação, UTM e envio em API.
5. Criar páginas de serviço, legais e 404.
6. Revisar SEO, acessibilidade, cookies e analytics.
7. Rodar lint, typecheck e build, corrigir erros e remover a página de design system antes do fechamento.
