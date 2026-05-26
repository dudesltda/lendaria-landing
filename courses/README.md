# Academia Lendár[IA] — Course UI

Protótipo estático das superfícies de curso da Academia Lendár[IA], no registro brutalista preto + amarelo da marca.

## Arquivos

| Arquivo | O que é |
|---|---|
| `../curso.html` | **Landing de curso/comunidade** — página pública de oferta e preço. |
| `platform.html` | **Plataforma do aluno** — dashboard logado com sidebar, progresso, comunidade e aulas. |
| `lesson.html` | **Player de aula** — visão de aula com área de vídeo, transcrição, exercícios e navegação anterior/próxima. |
| `../components.jsx` | Fonte dos componentes compartilhados: `Nav`, `Footer`, `Marquee`, `Tag`, `Button`, `ModuleCard`, `Stat`, `Testimonial`, `PricingCard`, `Sidebar`, `LessonRow`, `VideoPlaceholder`, `Avatar`, `BracketHeadline`. |
| `../components.compiled.js` | Runtime minificado dos componentes compartilhados. |
| `../assets/compiled/courses-platform.compiled.js` | Runtime minificado do dashboard. |
| `../assets/compiled/courses-lesson.compiled.js` | Runtime minificado do player de aula. |

## Conventions

- Componentes e estilos são HTML/CSS/React UMD estático; não há roteador, autenticação real ou chamadas de API.
- Tokens vêm de `../colors_and_type.css`; ajustes responsivos ficam em `../responsive.css`.
- O motivo de colchetes aparece em `Tag` (`<Tag>MÓDULO 03</Tag>` → `[MÓDULO 03]`) e em `BracketHeadline`.
- As páginas carregam React em produção e bundles compilados. Não reintroduza `@babel/standalone` nas rotas de curso.

## Caveats

- Conteúdo, progresso, exercícios e comunidade são dados estáticos.
- Formulários não submetem para backend e o player não toca vídeo real.
- Para rotas, manutenção e QA, consulte `../docs/implementation.md`.
