# Academia Lendár[IA] — Guia de Implementação

Este app é um protótipo estático do design system, marketing, curso e universo narrativo da Academia Lendár[IA]. Ele deve continuar simples: HTML, CSS, React UMD em produção nas telas que precisam de componentes, e assets locais.

## Rotas Principais

| Rota | Papel | Runtime |
|---|---|---|
| `/index.html` | Landing institucional e oferta principal. | React UMD + `components.compiled.js` + `assets/compiled/index.compiled.js` |
| `/curso.html` | Landing da Comunidade Lendária, módulos e preço. | React UMD + `components.compiled.js` + `assets/compiled/curso.compiled.js` |
| `/fundador.html` | Página do fundador Alan Nicolas. | React UMD + `components.compiled.js` + `assets/compiled/fundador.compiled.js` |
| `/cultura-lendaria.html` | Deck vivo da Cultura Lendária, com caderno integral das 20 páginas fonte e síntese visual. | React UMD + `components.compiled.js` + `assets/compiled/cultura-lendaria-content.generated.js` + `assets/compiled/cultura-lendaria.compiled.js` |
| `/styleguide-retro.html` | Styleguide editorial e componentes visuais. | React UMD + `components.compiled.js` + `assets/compiled/styleguide-retro.compiled.js` |
| `/courses/platform.html` | Dashboard estático do aluno. | React UMD + `components.compiled.js` + `assets/compiled/courses-platform.compiled.js` |
| `/courses/lesson.html` | Player estático de aula. | React UMD + `components.compiled.js` + `assets/compiled/courses-lesson.compiled.js` |
| `/manifesto/index.html` | Manifesto em PT-BR e EN. | HTML/CSS estático |
| `/rpg/cacada-mediocridade.html` | Entrada do universo RPG. | HTML/CSS estático + `assets/image-slot.js` |
| `/rpg/bestiario-02-nevoa-da-confusao.html` | Ficha de monstro. | HTML/CSS estático + `assets/image-slot.js` |
| `/rpg/heroi-05-arquiteto-da-autoevolucao.html` | Ficha de classe/herói. | HTML/CSS estático + `assets/image-slot.js` |
| `/rpg/heroi-05-arquiteto-da-autoevolucao-v2.html` | Variação visual da ficha de classe. | HTML/CSS estático |
| `/preview/*.html` | Recortes pequenos do design system. | HTML/CSS estático |
| `/vinheta-lendaria.html` | Vinheta/bumper de marca. | React UMD + Babel temporário |

## Arquitetura de Arquivos

| Arquivo/Pasta | Responsabilidade |
|---|---|
| `colors_and_type.css` | Tokens globais de cor, tipografia, escala, foco e utilitários base. |
| `responsive.css` | Correções responsivas globais e hardening de navegação, grids e overflow. |
| `components.jsx` | Fonte JSX dos componentes compartilhados. |
| `components.compiled.js` | Runtime minificado dos componentes compartilhados. |
| `cultura-lendaria.jsx` | Fonte JSX migrável do deck vivo de cultura. |
| `scripts/build-cultura-lendaria-content.mjs` | Gera o payload local com o Markdown integral das 20 páginas da Cultura Lendária. |
| `assets/compiled/cultura-lendaria-content.generated.js` | Conteúdo integral gerado a partir de `docs/Cultura Lendár[IA]/`. |
| `assets/compiled/` | Bundles minificados das páginas React principais. |
| `assets/perf.js` | Tuning progressivo de `img` e `video` inseridos no DOM. |
| `assets/image-slot.js` | Resolução de slots/imagens nas páginas RPG. |
| `assets/logo/` | Logo, marca e favicon oficiais. |
| `assets/icons/lucide/` | Subconjunto de ícones Lucide usado nas superfícies. |
| `assets/photography/`, `assets/social/`, `assets/heroes/`, `assets/monsters/` | Imagens já promovidas para uso nas páginas. |
| `referencias/` | Material bruto de inspiração, conteúdo e assets de referência. Não tratar como biblioteca final sem curadoria. |

## Runtime e Performance

- React e ReactDOM são carregados por CDN em versão `18.3.1` de produção, com `integrity` e `crossorigin`.
- Páginas React principais não usam `@babel/standalone`; o JSX foi pré-compilado para JavaScript minificado.
- `assets/perf.js` observa o DOM, aplica `decoding="async"` em imagens, prioriza a primeira imagem de conteúdo e aplica `loading="lazy"` nas demais.
- Vídeos recebem `preload="metadata"` quando a página não define um valor explícito.
- Logos e imagens dentro de navegação/header não são tratados como imagens de conteúdo para prioridade de carregamento.

## Manutenção

### Editar estilos

1. Edite `colors_and_type.css` para tokens, fundamentos visuais e utilitários base.
2. Edite `responsive.css` para comportamento responsivo, overflow, navegação e ajustes por viewport.
3. Verifique desktop e mobile. A marca permite blocos fortes, mas o texto não pode estourar o contêiner.

### Editar componentes compartilhados

1. Edite `components.jsx`.
2. Recompile `components.compiled.js` antes de validar no navegador.
3. Confirme que os componentes continuam exportados em `window`, porque as páginas dependem desse contrato.

### Editar páginas React

As páginas ativas carregam bundles em `assets/compiled/`. Se uma página precisar mudar, preserve este contrato:

- não carregar `react.development.js`;
- não carregar `@babel/standalone`;
- não usar `<script type="text/babel">` em rotas principais;
- carregar `components.compiled.js` antes do bundle da página;
- manter `assets/perf.js` antes do mount React.

No estado atual, os bundles de página são artefatos runtime. Antes de mudanças grandes em conteúdo/comportamento, extraia uma fonte JSX legível para a página alterada e só então gere o bundle compilado.

Para atualizar o caderno integral de `/cultura-lendaria.html` depois de mexer nos `.md` fonte:

```bash
node apps/lendaria-ds-new/scripts/build-cultura-lendaria-content.mjs
```

Depois recompile `cultura-lendaria.jsx` para `assets/compiled/cultura-lendaria.compiled.js`.

### Vinheta

`vinheta-lendaria.html` é a exceção atual: ela usa Babel porque chama `animations.jsx`, mas esse arquivo não está presente. Não converta a vinheta para bundle compilado sem antes restaurar ou substituir essa fonte.

## Checklist de QA

Use um servidor estático local:

```bash
cd apps/lendaria-ds-new
python3 -m http.server 4174
```

Verifique no mínimo:

- `/index.html`
- `/curso.html`
- `/fundador.html`
- `/cultura-lendaria.html`
- `/styleguide-retro.html`
- `/courses/platform.html`
- `/courses/lesson.html`
- `/manifesto/index.html`
- `/rpg/cacada-mediocridade.html`
- `/rpg/bestiario-02-nevoa-da-confusao.html`
- `/rpg/heroi-05-arquiteto-da-autoevolucao-v2.html`

Critérios:

- sem erros no console;
- sem 404 de assets;
- sem overflow horizontal em 390px e desktop;
- landmarks básicos presentes nas páginas principais;
- foco visível em links e botões;
- sem reintrodução de Babel nas rotas React principais;
- imagens carregando com `decoding`, `loading` e prioridade coerentes;
- texto em PT-BR com acentuação correta.

Comandos úteis a partir da raiz do monorepo:

```bash
rg -n "react\\.development|react-dom\\.development|babel\\.min\\.js|type=\"text/babel\"" apps/lendaria-ds-new -g '*.html'
npm run validate:yaml:changed
npm run doctor
```

O primeiro comando deve retornar apenas a vinheta enquanto `animations.jsx` continuar ausente.

## Limites Conhecidos

- O app não possui autenticação, backend, persistência ou roteamento real.
- As telas de curso são protótipos estáticos; progresso, comunidade, exercícios e player são demonstrativos.
- `referencias/` contém material bruto e duplicações; use apenas após curadoria.
- O diretório está ignorado pelo Git no monorepo atual. Defina a política de versionamento antes de tratar estas páginas como entrega versionada.
- O comando `npm run lint` do monorepo imprime problemas existentes fora deste app, embora saia com código 0 por configuração atual.
