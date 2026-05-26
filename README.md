# Academia Lendár[IA] · Design System

> **Construindo o infinito, hoje.**
>
> *Somos os alquimistas do conhecimento, os arquitetos do impossível, os heróis da revolução digital.*

Academia Lendár[IA] é um **ecossistema de IA para educação e inovação**: escola, comunidade e portfólio de startups dedicados a potencializar pessoas lendárias a construírem soluções e negócios com IA generativa que beneficiem a humanidade.

A marca é construída sobre o arquétipo **mago cibernético**: o **Mago** unido ao **Sábio**. Conhecimento honrado pela prática. Chama da inovação acesa. O colchete dentro de *Lendár[IA]* é a assinatura literal da marca: a palavra *Lendária* contém *IA*, abreviação de *Inteligência Artificial*. O colchete não é decoração, é gramática de marca.

Visualmente, isto é **editorial brutalista com mage-craft por baixo**: tipografia Swiss-modern em escala enorme, blocos duros de amarelo e preto, **bege/marfim quente para respiro editorial**, e símbolos de chama (tocha), infinito (∞) e cérebro. Rótulos entre colchetes em todo lugar. Sem gradientes suaves na UI. O único "glow" é o calor do amarelo sobre tinta. Pense Massimo Vignelli em relatório anual encontrando o grimório de um mago.

---

## Fontes

Este sistema foi sintetizado a partir de materiais fornecidos pelo fundador:

| Fonte | O quê | Caminho |
|---|---|---|
| Mood board do Pinterest | 17 imagens de referência: livros de brand-guideline no registro brutalista amarelo/preto | `referencias/pinterest/` |
| Logos oficiais | SVG + PNG dos lockups horizontais (preto + branco) e a marca [IA] | `assets/logo/`, `referencias/brand/` |
| Documento de posicionamento de marca | Arquétipo "mago cibernético", voz, paleta, símbolos | brief original, 04/06/23 |
| Manifesto Lendário | Manifesto poético em PT-BR + tradução EN | brief original |
| Missão / Visão / Posicionamento | Declarações estratégicas | brief original |

**Nenhum codebase de produção, biblioteca Figma ou produto vivo foi fornecido.** Layouts de componentes, densidade de dashboard e copy de UI são interpretação informada da marca, não recriação de um app existente. Sinalize qualquer coisa para revisão.

---

## Índice

| Arquivo / Pasta | O que tem dentro |
|---|---|
| `README.md` | Você está aqui. História da marca, voz, fundamentos visuais, iconografia. |
| `SKILL.md` | Manifesto Agent-Skill para uso downstream (Claude Code, outros agentes). |
| `colors_and_type.css` | Fonte única de verdade: tokens de cor, escala tipográfica, espaçamento, motion. |
| `assets/logo/` | Lockups oficiais (preto/branco SVG+PNG), variantes da marca [IA], favicon. |
| `assets/icons/lucide/` | Subset curado de 32 ícones Lucide (SVG, stroke 1.5px). |
| `assets/compiled/` | Bundles minificados das páginas estáticas com React. |
| `assets/perf.js` | Tuner de carregamento de imagens/vídeos usado por todas as superfícies HTML. |
| `preview/` | Cards HTML que populam a aba do Design System. |
| `manifesto/index.html` | Manifesto Lendário como página HTML standalone em PT-BR + EN. |
| `index.html` | Landing page de marketing. |
| `curso.html` | Landing do curso e preços. |
| `components.jsx` | Fonte dos componentes compartilhados do UI Kit. As páginas runtime carregam `components.compiled.js`. |
| `components.compiled.js` | Runtime minificado dos componentes compartilhados usado pelas páginas React ativas. |
| `courses/` | Plataforma logada do curso: `platform.html` (dashboard do aluno), `lesson.html` (player). |
| `rpg/` | Universo RPG: landing da caçada (`cacada-mediocridade.html`), entradas do bestiário (`bestiario-*.html`) e fichas de heróis/classes (`heroi-*.html`). |
| `docs/implementation.md` | Runtime estático, mapa de rotas, manutenção, QA e limites conhecidos. |

---

## Implementação atual

Este diretório é um protótipo estático de marca, marketing, plataforma de curso e universo RPG da Academia Lendár[IA]. Não depende de servidor de aplicação, roteador, banco de dados ou pipeline de build dentro do app.

### Como rodar localmente

Abra os arquivos HTML diretamente no navegador ou sirva a pasta com um servidor estático:

```bash
git clone https://github.com/oalanicolas/lendaria-ds.git
cd lendaria-ds
python3 -m http.server 4174
```

Depois acesse `http://localhost:4174/index.html`.

### Modelo de runtime

- Páginas React ativas usam React 18 UMD em modo produção, com SRI.
- Browser Babel foi removido das páginas React principais. Elas carregam `components.compiled.js` e o bundle correspondente em `assets/compiled/`.
- Páginas `preview/`, `manifesto/` e `rpg/` são HTML/CSS estático, com pequenos utilitários em `assets/image-slot.js` e `assets/perf.js`.
- `vinheta-lendaria.html` ainda usa Babel porque referencia `animations.jsx`, que não existe neste diretório. Não compile essa página até a fonte ausente ser restaurada ou substituída.

Para detalhes de rotas, manutenção e QA, consulte [`docs/implementation.md`](docs/implementation.md).

---

## Missão · Visão · Posicionamento

> **Missão.** Unir e potencializar pessoas lendárias com IA para construir soluções e negócios que beneficiem a humanidade.
>
> **Visão.** Ser referência mundial em educação de IA generativa aplicada a negócios, com um portfólio de startups de sucesso internacional.
>
> **Posicionamento.** Um ecossistema de educação e inovação para pessoas e negócios serem potencializados com inteligência artificial generativa.

---

## História da marca

**Nome.** *Academia Lendár[IA]*, composto em Archivo com o `[IA]` em *colchetes literais*. Sempre. O glifo de marca registrada (`™`) fica sobrescrito à direita do colchete de fechamento no lockup canônico. Nunca escreva "Lendária" sem os colchetes em superfícies de produto: os colchetes são o logo.

**Arquétipos.** Mago + Sábio. A figura do fundador é o mago cibernético: conhecimento mais tecnologia, introspectivo, vê o que outros não veem, traz clareza. Não é o tech-bro barulhento, nem a caricatura do guru espiritual.

**Três pilares de uma Vida Lendária.**

1. **Inteligência + Autoconhecimento.** Clareza é a mãe da ação.
2. **Impacto + Arte.** Operar na zona de gênio. Liberdade com responsabilidade.
3. **Inteligência Artificial.** Mindset AI-First. Amplificar tudo via IA.

**Símbolos.**

- **∞ (infinito).** Ações que ecoam até o infinito. "Construindo o infinito, hoje".
- **Tocha / chama.** A chama do conhecimento. "Mantenha a chama acesa".
- **Cérebro.** Conhecimento, inteligência. Às vezes o momento "exploding head".
- **`[ ]`** Os colchetes, a assinatura.

Use estes símbolos com parcimônia e nunca literalmente como emoji. Prefira formas tipográficas (∞ em display), SVGs abstratos do sistema de logos, ou fotografia (uma tocha real, um MRI de cérebro real).

---

## FUNDAMENTOS DE CONTEÚDO

### Tom: o mago, não o instrutor entediante

A voz tem dois registros. Escolha o certo para a superfície.

1. **Registro manifesto.** Poético, varrido, declarativo. Usado em hero pages, peças de marca, no Manifesto, CTAs finais, aniversários.
   > *"Por 200 mil anos, fomos reféns da biologia. Mas hoje, no limiar da inteligência artificial, está na hora de transcender."*

2. **Registro mago.** Enigmático, técnico, profundo, modesto. Usado em copy de marketing, copy de curso, posts de blog, rótulos de UI.
   > *"Não acelere o que não compreendeu. Mas, uma vez compreendido, não hesite."*

Ambos os registros compartilham estes traços:

- **Direto.** Ponto no final. Sem exclamação a menos que esteja citando um aluno.
- **Profundo sem pomposidade.** Um mago sabe. Não dá aula.
- **Tático por baixo da poesia.** Verbos concretos sempre ganham: *construir, forjar, transcender, mover, executar*.
- **Modesto.** Não dizemos "revolucionário". Dizemos "isto funciona". Os momentos grandiosos são CONQUISTADOS, não polvilhados.
- **Levemente conspiratório.** Uma piscadela de que o leitor e a marca estão por dentro de algo que o resto ainda não viu.

### Vocabulário

Palavras que **pertencem** ao sistema: *lendário, lendária, alquimia, alquimista, forjar, transcender, infinito (∞), chama, tocha, sábio, mago, gênio, ofício, arte, manifesto, ecossistema, evolução, alavancar, potencializar, ecoa, eternidade, congruência, clareza, execução.*

Palavras a **evitar**: *revolucionário* (overused), *disruptivo* (em fala de marketing; ok no manifesto), *game-changer, ninja, rockstar, guru, hack, secrets, finally*. Evite vocabulário hustle-bro. Somos magos, não hustlers.

### Pessoa

- **Você.** Trate o leitor como **"você"** (informal-formal padrão brasileiro). Nunca *tu*, nunca *o(a) senhor(a)*.
- **Nós.** Quando a marca fala de si, fala como *"nós, os lendários"*, primeira pessoa do plural coletiva. A marca é tribo, não departamento.

### Caixa

- **CAIXA ALTA** para headlines de display, rótulos de seção, CTAs e versos de abertura do manifesto. Este é o registro dominante para impacto.
- **Sentence case** para body copy e maioria dos rótulos de UI.
- **caixa baixa** com parcimônia, como sussurro editorial. Usada nas batidas mais silenciosas do manifesto.
- **Colchetes `[...]`** envolvem meta-rótulos, placeholders, metadata e a própria marca: `[IA]`, `[MÓDULO 03]`, `[seu nome]`, `[EM BREVE]`, `[LENDÁRIO]`. Os colchetes são a assinatura.

### Pontuação e glifos

- Headlines terminadas em ponto: *Forme-se na IA.* *Torne-se [LENDÁRIO].*
- Travessões longos (`—`) preferidos a hífens para quebras. Nunca " - ".
- **∞** é reservado para momentos de legado / infinito. Não polvilhe casualmente.
- Seta simples `→` para links direcionais e CTAs.

### Números e dados

- Numerais sempre em forma de dígito: *12 módulos*, *48h de conteúdo*, *R$ 1.997*.
- Estatísticas são numerais gigantes mais caption mono pequenina, estilo brutalista.
- Moeda: *R$ 1.997* (convenção brasileira, ponto como separador de milhar).

### Emoji

- **Evite emoji em marketing e UI.** Quebram o registro.
- Indicadores de status usam quadrados coloridos `▮` ou círculos amarelos, não emoji.
- A marca `™` e o glifo de infinito `∞` são tipográficos, não emoji.

### Exemplos de copy

> **Hero do manifesto.** Por 200 mil anos, fomos reféns da biologia. Hoje, transcendemos.
>
> **Hero de marketing.** Forme-se na IA. Torne-se [LENDÁRIO].
>
> **Sub-hero.** Um ecossistema de educação e inovação para você potencializar sua arte com IA generativa.
>
> **CTA primary.** Comece sua jornada →
>
> **CTA secondary.** Ler o manifesto
>
> **Module card.** [MÓDULO 03] · A alquimia do prompt.
>
> **Empty state.** Nada por aqui. Ainda.
>
> **Toast no enroll.** Você está dentro. [BEM-VINDO, LENDÁRIO]
>
> **Footer sign-off.** Construindo o infinito, hoje. ∞

---

## FUNDAMENTOS VISUAIS

### Cor

Quatro cores, estruturadas como hierarquia de intenção. **Não existe uma quinta.** Sem roxo, sem azul, sem verde polvilhado por variedade. Disciplina é o ponto.

| Token | Hex | Função |
|---|---|---|
| **Amarelo Lendário** | `#F6C324` | A tocha. Energia, ação, o presente. Marca primária. |
| **Preto** | `#191919` | O vazio. Tinta. Estrutura. Verdade. |
| **Branco Marfim** | `#FFFFF0` | Papel padrão. O branco marfim quente. |
| **Bege Lendário** | `#F2EBDA` | Superfície areia. Fundos editoriais, espaço de segunda página, campos de fotografia. |

Mais uma escala estrutural de cinzas (mute / mute-soft / rule) para hierarquia de body, e um único vermelho de sinal (`#E63946`) reservado para estados destrutivos de UI.

**As quatro cores fazem todo o trabalho.** Amarelo lidera, tinta estrutura, marfim respira, bege suaviza. A maioria das superfícies usa 2 cores (amarelo + tinta, marfim + tinta, bege + tinta). Superfícies de 3 cores ficam reservadas para hero / manifesto.

### Tipografia

- **Display:** Archivo Black. Tracking apertado, CAIXA ALTA, line-height 0.9 a 0.95. De 72px para cima.
- **Headlines e UI:** Archivo (400 / 500 / 600 / 700 / 800).
- **Mono / rótulos de dados:** JetBrains Mono, para `[RÓTULOS ENTRE COLCHETES]`, números de página, códigos, timestamps.
- **Registro manifesto:** Mesmas famílias, com line-height mais frouxo (1.15 a 1.3), itálico ocasional para ênfase, e drop caps permitidas.

Hierarquia vem da **escala**, não de cor ou peso. Um H1 é 6 a 10 vezes o tamanho do body. Não tente ser educado com isso.

### Espaçamento e ritmo

- **Grid base 8px.** Tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192.
- Margens externas generosas em superfícies de marketing (64 a 128px). A página deve parecer um broadsheet impresso, não um dashboard SaaS.
- Letter-spacing apertado em display. Tracking levemente solto em mono (`+0.04em`).

### Fundos

- **Blocos de cor chapados.** Amarelo, tinta, papel marfim, ou bege. Cortes horizontais duros entre eles, nunca fade.
- **Sem gradientes na UI.** Nunca. Páginas editoriais podem usar um corte duro entre bege e marfim para quebrar um scroll longo. É o mais próximo que chegamos de atmosfera.
- **Sem ruído, sem texturas.** Um padrão opcional: **listras diagonais preto sobre amarelo** a 4° para seções caution-tape.
- **Fotografia full-bleed permitida**, desde que alto contraste, levemente dessaturada, com cast quente em fundos bege. Fotografia é produto-no-amarelo, pessoa-candida-no-trabalho, ou retrato duotone em bege. Nunca cérebro-glowing-IA de banco de imagens.

### Bordas e raios

- **Corner radius: 0** em cards, botões, inputs. Só retângulos.
- **Border:** 1px ou 2px tinta sólida em superfícies claras. 2px amarelo sólido em tinta. Bordas são estruturais.
- As únicas formas arredondadas no sistema: o **círculo do avatar**, o **focus ring** (desenhado como outline-offset) e o **squircle do logo**.

### Sombras e elevação

- **Sem drop shadows em componentes de UI.** Elevação vira swap de cor ou border.
- A única sombra permitida é uma **sombra dura de 8px solid-ink** em CTAs hero e cards de pricing. Sombra de bloco de impressora, nunca soft.

### Estados de hover e press

- **Hover (botões):** inverter fill/text. 100ms linear.
- **Hover (links):** sublinhado aparece (2px, offset 6px).
- **Press:** translate 2px down-right, sombra dura colapsa para 0. Como apertar uma tecla real.
- **Focus:** 2px outline amarelo sólido a 2px offset em superfícies escuras. 2px tinta sólida em claras. Nunca azul.

### Animação

- **Esparsa e mecânica.** Só `linear` ou `cubic-bezier(0.2, 0, 0, 1)`. Sem spring. Sem bounce.
- 100ms (state) · 200ms (reveal) · 400ms (page transition).
- Marquee scroll permitido para section dividers (loop de 60s).
- **O glifo do infinito ∞ NÃO rotaciona.** É point-symmetric. Rotação lê como nada. Mantenha estático.

### Transparência e blur

- **Sem backdrop-blur. Sem fills semi-transparentes.** Uma superfície ou existe ou não existe.
- Exceção: scrims de modal em `rgba(14,14,14,0.88)`, efetivamente opaco.

### Cards

- Retângulos marfim / bege / tinta com border 2px tinta. Sem sombra, sem radius.
- Padding interno: 24px (compact) ou 32px (default).
- Título em Archivo Bold all-caps, depois uma linha meta em JetBrains Mono (`[MÓDULO 03] · 4H 12MIN`), depois body em Archivo Regular.
- Hover (interativo): translate `-2px, -2px`, ganha sombra dura `4px 4px 0 ink`.

### Regras de layout

- **Grid de 12 colunas** desktop / 6 tablet / 4 mobile. Gutters 24px / 16px.
- **Section dividers** são full-bleed: barra de tinta com uma linha mono, ou band amarelo com headline gigante. Quebras inequívocas.
- **Elementos fixos:** um top nav (64 a 72px, bg papel, border 2px tinta). Sem CTAs flutuantes, sem chat bubble, sem cookie banner estilizado fofo.

### Vibe das imagens

- **Quente e granulada.** Cast de filme, leve subexposição, pretos esmagados.
- Pessoas: candid, em ação, iluminadas por um lado. Sem sorrisos de stock-photo para a câmera.
- Produto/objeto: isolado em amarelo ou tinta chapados, com sombra real de iluminação.
- P&B aceitável para retratos em depoimentos e páginas de fundador.

### O motivo dos colchetes

A idiomática visual mais importante. Colchetes `[ ]` envolvem rótulos, metadata, status, o próprio logo. Compostos em Archivo Bold no mesmo tamanho da palavra envolvida, tracking `0.04em`. Nunca finos ou leves. São dispositivo estrutural, não pontuação.

Formas comuns no produto:

- `[MÓDULO 03]` · tag de módulo
- `[EM BREVE]` · badge coming-soon
- `[LENDÁRIO]` · tier pináculo da marca
- `[100% PRÁTICO]` · pilar de feature
- `[IA]` · embutido no logo

### O infinito ∞ e a tocha

Dois glifos de marca reservados.

- **`∞`** Usado como sign-off no footer, em certificados, no manifesto. Composto em Archivo no mesmo tamanho da tipografia ao redor. **Nunca rotacionado** (point-symmetric; rotação lê como sem movimento). **Nunca duotone.** Uma cor, grande.
- **Tocha / chama e cérebro.** Referenciados no brief como símbolos, mas **não** existem como glifos tipográficos e **não** desenhamos como SVG. São conceitos que pedem (a) fotografia real, ou (b) a mão de um ilustrador. SVGs geométricos falsos de tocha ou cérebro parecem amadores e quebram o sistema. Se precisar dessa superfície, deixe placeholder rotulado `[chama]` / `[cérebro]` até o asset certo chegar.

Ambos os glifos que DE FATO existem (`∞` e `[ ]`) são poderosos justamente porque são raros.

---

## ICONOGRAFIA

**Abordagem: utilitária, geométrica, nunca fofa.**

A marca não tem icon set desenhado nos materiais fornecidos. Para superfícies de produto adotamos **[Lucide](https://lucide.dev)** porque:

- Stroke 1.5px, geométrico, caps quadradas. Compatível visualmente com o registro brutalista.
- Licença MIT, disponível como SVG / React / CDN.
- Abrangente (~1500 ícones).

**Flag de substituição.** Isto é substituição. O brief de marca não especificou icon set. Se um set definitivo existir no produto real, troque. Um subset curado de 32 ícones vive em `assets/icons/lucide/`. Estenda sob demanda: `https://unpkg.com/lucide-static@latest/icons/<name>.svg`.

### Regras

- **Stroke 1.5px.** Sem ícones preenchidos na UI de produto. Filled fica reservado para indicadores de estado dentro do lockup do logo.
- **Preto sobre amarelo / amarelo sobre preto / preto sobre papel.** Ícones nunca usam terceira cor.
- **Dimensionados em passos de 8px.** Body-line 16px · UI 20px · hero 32 / 48px.
- Alinhados ao baseline ao lado do texto. `vertical-align: -2px` para o par 16/16.
- **Nunca envolva um ícone em círculo.** Sem chips, sem pílulas coloridas de fundo.

### O que deliberadamente NÃO usamos

- Emoji (quebra o registro).
- Caracteres Unicode como ícones (`★`, `✓`, `➜`). Exceção: `→` para link inline, `∞` e o motivo dos colchetes.
- Material / Font Awesome / ícones multicoloridos.

### Lockup do logo

- **Lockup horizontal primário:** `assets/logo/lockup-black.svg` (marca preta + wordmark preto com `[IA]` e `™`). Usar em fundos papel / amarelo.
- **Lockup horizontal inverso:** `assets/logo/lockup-white.svg`. Usar em fundos tinta.
- **Lockup amarelo:** `assets/logo/lockup-yellow.svg`. Usar em tinta apenas, quando quiser um pop monocromático.
- **Apenas a marca** (octógono arredondado com a rosa-dos-ventos de quatro pétalas dentro): `assets/logo/mark-black.svg` / `mark-yellow.svg` / `mark-white.svg`.
- **Favicon:** `assets/logo/favicon.png`, marca preta oficial em squircle amarelo.

Fallbacks PNG do lockup ficam disponíveis para superfícies que não renderizam SVG (assinaturas de email, masters de slide em ferramentas legadas).

---

## Ressalvas e questões em aberto

1. **Sem codebase, sem Figma.** Tudo aqui é interpretado de brief + mood board + logo oficial + Manifesto. Registro visual está bem fundamentado. UI de produto (densidade de dashboard, copy exata) é a melhor leitura possível. Confirme.
2. **Fontes.** Archivo Black + Archivo + JetBrains Mono são substituições Google Fonts para o que eventualmente pode ser uma família paga Swiss-modern (Söhne / Neue Haas Grotesk / Akkurat). **Flag: substituída.** Forneça as fontes licenciadas se você as tiver.
3. **Sistema de ícones.** Lucide é substituição. **Flag: substituída.**
4. **Manifesto em EN vs PT.** Ambas as versões ficam preservadas em `manifesto/` para uso internacional e nacional.
5. **Fotografia.** Sem fotos de marca reais. Os UI kits mostram placeholders `[FOTO]` onde fotos reais entrariam.

---

## Mídia pesada

Arquivos acima de 5MB ficam fora deste repositório (preservados localmente para futura adoção de Git LFS ou CDN externo):

- `assets/midia-kit-academia-lendaria.pdf`
- `referencias/founder/alan-nicolas-{ampulheta-moeda-sifrao,celular-camisa-branca,laptop-luz-quente,microfone-oculos,retrato-em-pe-estudio}.jpg`
- `referencias/media-kit/midia-kit-alan-academia-lendaria.pdf`

As 5 fotos consumidas pelo HTML em `assets/photography/` foram otimizadas com `sips` para ficar entre 0,5 e 0,6 MB (de 8 a 13 MB originais), mantendo qualidade retina (largura máxima 2400px, qualidade JPEG 82).
