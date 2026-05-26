// Academia Lendár[IA] - Cultura Lendária
// Fonte JSX migrável para Vite/Next. A rota estática atual compila este arquivo
// para assets/compiled/cultura-lendaria.compiled.js, sem parser de Markdown em runtime.

var { useMemo, useState } = React;
var { Tag, Button, TopNav, Footer, Marquee, SkipLink, Container } = window;

const sourcePages = [
  { group: "Fundação", title: "Manifesto", file: "Manifesto 20e1c63260bc8135b4b0f9128685317b.md", role: "chamado", status: "curado" },
  { group: "Fundação", title: "Manifesto Lendário", file: "Manifesto/Legendary Manifesto 20e1c63260bc8127badee8f1869ab1a4.md", role: "tradução", status: "curado" },
  { group: "Fundação", title: "Missão, Visão e Posicionamento", file: "Missão, Visão e Posicionamento 20e1c63260bc8179b9a9e7d6980f0d8d.md", role: "norte", status: "curado" },
  { group: "Fundação", title: "Vida Lendária", file: "Vida Lendária 20e1c63260bc81abb16cf4b396186025.md", role: "origem", status: "curado" },
  { group: "Fundação", title: "História da Academia Lendár[IA]", file: "História da Academia Lendár[IA] 20e1c63260bc811395ebe8ecc2c925cf.md", role: "prólogo", status: "fonte sem corpo" },
  { group: "Fundação", title: "História do Founder", file: "História do Founder (Alan Nicolas) 20e1c63260bc817cbad5e34d197c0ec5.md", role: "origem humana", status: "fonte sem corpo" },
  { group: "Cosmologia", title: "Os 3 Pilares", file: "Os 3 Pilares 20e1c63260bc8127b8c7d6e2461187a4.md", role: "sistema", status: "curado" },
  { group: "Cosmologia", title: "Nossos Símbolos", file: "Nossos Simbolos 2441c63260bc8066b566e57a2bf153f3.md", role: "rituais", status: "curado" },
  { group: "Código Diário", title: "Valores", file: "Valores 20e1c63260bc817382b2f11f9140f0e7.md", role: "virtudes", status: "curado" },
  { group: "Código Diário", title: "Nossos 8 Mantras", file: "Nossos 8 Mantras 20e1c63260bc81029a1fcb3f0baa4a29.md", role: "ritmo", status: "curado" },
  { group: "Código Diário", title: "Os 10 Mandamentos Lendários", file: "Os 10 Mandamentos Lendários 20e1c63260bc812494c0c2df98ba4a66.md", role: "limites", status: "curado" },
  { group: "Código Diário", title: "4 Princípios Guia", file: "4 Princípios Guia 20e1c63260bc81448286f13117711456.md", role: "bússola", status: "curado" },
  { group: "Arquitetura de Gente", title: "Sobre nosso time", file: "Sobre nosso time 20e1c63260bc8100ad70f402e9c23e54.md", role: "perfil", status: "curado" },
  { group: "Arquitetura de Gente", title: "Sobre nossos líderes", file: "Sobre nossos líderes 20e1c63260bc8181889dc49454cd63a1.md", role: "liderança", status: "curado" },
  { group: "Arquitetura de Gente", title: "Quando e quem contratar?", file: "Quando e quem contratar 20e1c63260bc810982a5ef36e92dabe2.md", role: "critério", status: "curado" },
  { group: "Arquitetura de Gente", title: "Quem NÃO contratar?", file: "Quem NÃO contratar 20e1c63260bc81d9b0a5c83676cf8e20.md", role: "anti-perfil", status: "curado" },
  { group: "Arquitetura de Gente", title: "Quem demitir?", file: "Quem demitir 20e1c63260bc81748683e1b35bc5006c.md", role: "transição", status: "curado" },
  { group: "Execução", title: "Crescendo Rápido e Certo", file: "Crescendo Rápido e Certo 20e1c63260bc8192bb4dfdd0fe849834.md", role: "escala", status: "curado" },
  { group: "Execução", title: "Da Teoria a Ação", file: "Da Teoria a Ação 20e1c63260bc8154aa88dca139527e61.md", role: "prática", status: "curado" },
  { group: "Execução", title: "Frameworks de Decisão", file: "Frameworks de Decisão 20e1c63260bc81b59e22d73e75c636ba.md", role: "decisão", status: "curado" },
];

const chapters = [
  { id: "leitura", n: "00", label: "Leitura", title: "Caderno integral." },
  { id: "manifesto", n: "01", label: "Manifesto", title: "Postura antes de discurso." },
  { id: "norte", n: "02", label: "Norte", title: "Missão, visão e posicionamento." },
  { id: "simbolos", n: "03", label: "Símbolos", title: "Lemniscata, 8 e lentes amarelas." },
  { id: "ciclos", n: "04", label: "Cosmologia", title: "Clareza contra piloto automático." },
  { id: "pilares", n: "05", label: "Pilares", title: "Critério, ofício e IA." },
  { id: "valores", n: "06", label: "Valores", title: "Nove virtudes operacionais." },
  { id: "mantras", n: "07", label: "Mantras", title: "Oito frases para repetir e viver." },
  { id: "mandamentos", n: "08", label: "Mandamentos", title: "Liberdade sem microgerenciamento." },
  { id: "gente", n: "09", label: "Gente", title: "Quem entra e quem não entra." },
  { id: "execucao", n: "10", label: "Execução", title: "Crescer rápido e certo." },
  { id: "decisao", n: "11", label: "Decisão", title: "Frameworks para cortar ruído." },
  { id: "atlas", n: "12", label: "Atlas", title: "As 20 páginas fonte." },
];

const readings = (window.CULTURA_LENDARIA_READINGS || []).map((reading) => {
  const source = sourcePages.find((page) => page.file === reading.file);
  const id = `leitura-${reading.index}`;
  return {
    ...reading,
    id,
    group: source?.group || "Fonte",
    role: source?.role || "documento",
    status: source?.status || "curado",
  };
});

const principles = [
  "Divirta-se. Isso te empolga?",
  "Divirta-se com pessoas Lendárias.",
  "Crie abundância para todos envolvidos.",
  "Se orgulhe do que está criando.",
];

const symbols = [
  {
    title: "Lemniscata",
    glyph: "∞",
    label: "Legado",
    body: "O infinito não é conceito. É caminho. Do aprender ao ensinar, do artificial ao natural, do dar ao receber.",
  },
  {
    title: "Oito",
    glyph: "8",
    label: "Ação",
    body: "O infinito de pé. Teoria que virou prática, filosofia que virou negócio, intensidade 8 ou 80.",
  },
  {
    title: "Lentes Amarelas",
    glyph: "◉",
    label: "Visão",
    body: "Tecnologia cognitiva. Aumenta contraste, reduz ruído e mostra padrões onde antes havia massa cinza.",
  },
];

const pillars = [
  {
    title: "Inteligência e Autoconhecimento",
    tag: "SER",
    body: "Capacidade de resolver problemas complexos com fome real de evolução pessoal. Busca pela verdade antes de performance.",
    counter: "Pilar 01",
  },
  {
    title: "Ofício e Resultado",
    tag: "FAZER",
    body: "Trabalhar no que faz melhor. Levar interesse para o ofício, ofício para entrega e liberdade para responsabilidade.",
    counter: "Pilar 02",
  },
  {
    title: "Inteligência Artificial",
    tag: "TER",
    body: "Usar IA como extensão do trabalho. Antes de exigir dos alunos, a equipe precisa usar no próprio dia a dia.",
    counter: "Pilar 03",
  },
];

const legendaryTraits = [
  ["Testa IA no trabalho real", "Usa desculpas"],
  ["Assume responsabilidade", "Culpa os outros"],
  ["Registra decisões", "Confia na memória"],
  ["Entrega mais do que o esperado", "Entrega o mínimo possível"],
  ["Foca no essencial 0,8%", "Dispersa em baixa relevância"],
  ["Gera resultados sem mimimi", "Reclama mais do que age"],
  ["Cultiva relações transparentes", "Vive em fofoca e manipulação"],
  ["Aprende e ensina constantemente", "Guarda conhecimento para si"],
];

const values = [
  {
    title: "Clareza",
    prompt: "Ser claro não é ser rude. Clareza é gentileza.",
    tool: "Lanterna da Clareza",
  },
  {
    title: "Excelência com Velocidade",
    prompt: "Faça o melhor no tempo que tiver. Erre rápido, barato e diferente.",
    tool: "Relógio 8 ou 80",
  },
  {
    title: "Foco no Essencial",
    prompt: "Pareto três vezes: os 0,8% que geram 51,2% dos resultados.",
    tool: "Lâmina do Corte",
  },
  {
    title: "Resultados sem Mimimi",
    prompt: "Resolva ou traga a melhor solução. Reclamar não move nada.",
    tool: "Martelo de Execução",
  },
  {
    title: "Sinceridade Absoluta",
    prompt: "É verdadeiro? É bom? É útil? Se passar nas 3 peneiras, fale.",
    tool: "Espada das 3 Peneiras",
  },
  {
    title: "Autonomia com Colaboração",
    prompt: "Decisão própria, responsabilidade coletiva, direção compartilhada.",
    tool: "Mapa da Guilda",
  },
  {
    title: "Empolgação Desconfortável",
    prompt: "Queime seu melhor trabalho quando o próximo nível exigir.",
    tool: "Tocha da Reinvenção",
  },
  {
    title: "Comprometimento Total",
    prompt: "Depois da decisão, todos carregam o peso da execução.",
    tool: "Contrato com o Infinito",
  },
  {
    title: "Abundância e Generosidade",
    prompt: "Entregue mais do que o esperado. Conhecimento compartilhado cresce.",
    tool: "Fonte de Abundância",
  },
];

const mantras = [
  ["I", "Divirta-se", "Cuide das tarefas sem esquecer de cuidar de você."],
  ["II", "Aprenda algo novo todo dia", "Sede de conhecimento como hábito operacional."],
  ["III", "Ensine para evoluir", "Ensinar organiza o próprio conhecimento e aumenta autonomia coletiva."],
  ["IV", "Zele pela harmonia do time", "Confiança, respeito e senso de comunidade são infraestrutura."],
  ["V", "Pense e aja como dono", "Questione decisões ruins e assuma responsabilidade pelas entregas."],
  ["VI", "Espalhe generosidade e gratidão", "A cola que fortalece relações e aumenta o padrão do ambiente."],
  ["VII", "Importe-se", "Trate as coisas, atividades e pessoas como se fossem suas."],
  ["VIII", "Loom no lugar de Zoom", "Assíncrono antes de síncrono. Protege foco, energia e clareza."],
];

const commandments = [
  "Pessoas acima de processos.",
  "Contexto, não controle.",
  "Liberdade com responsabilidade.",
  "Excelência sem desculpas.",
  "Melhoria contínua.",
  "Transparência radical.",
  "Resultado mensurável.",
  "Adaptação rápida.",
  "Ética inabalável.",
  "Direção clara.",
];

const peopleCards = [
  {
    title: "Quem merece o manto",
    label: "Time",
    body: "Curiosidade, resiliência, bom senso, sinceridade, criatividade, coragem e autonomia responsável.",
    image: "rpg/images/heroes/personagens-herois-lineup.png",
    alt: "Lineup de heróis lendários em estilo RPG.",
  },
  {
    title: "Quem lidera",
    label: "Liderança",
    body: "Dá contexto, sobe o padrão, protege a integridade do time e lidera pelo exemplo.",
    image: "assets/photography/alan-portrait-laptop-yellow-glasses.jpg",
    alt: "Alan Nicolas com óculos amarelos em frente ao laptop.",
  },
  {
    title: "Quem não entra",
    label: "Anti-perfil",
    body: "Muito esforço e pouca entrega, talento sem alinhamento, política interna, resistência à IA e apego ao conforto.",
    image: "rpg/images/monsters/variacoes-monstro-nevoa-da-confusao.png",
    alt: "Variações visuais da Névoa da Confusão.",
  },
];

const growthRules = [
  "Clareza e alinhamento semanal.",
  "Autonomia com responsabilidade total.",
  "Feedback contínuo e transparente.",
  "Foco em resultado mensurável.",
  "IA aplicada no trabalho real.",
  "Mentoria e prática contínua.",
  "Decisão informada por dados.",
  "Experimentação rápida.",
  "Entrega com consequência real.",
  "Capricho na execução.",
];

const frameworks = [
  {
    title: "Vai definir metas?",
    answer: "Lei do Retorno Decrescente",
    body: "Excesso de metas dilui foco e reduz excelência na execução.",
  },
  {
    title: "Vai criar site ou landing page?",
    answer: "Mobile First",
    body: "Sempre crie primeiro para celular. A interface pequena revela o que é essencial.",
  },
  {
    title: "Vai marcar reunião?",
    answer: "Reunião = câncer",
    body: "Prefira Loom ou mensagens longas e descritivas. Se a reunião estiver ruim, pode sair.",
  },
  {
    title: "Vai contratar?",
    answer: "Teste com IA primeiro",
    body: "Antes de contratar, prove que a tarefa não pode ser simplificada, automatizada ou removida com IA.",
  },
];

const STYLE = `
  .culture-page {
    background: var(--color-paper);
    color: var(--color-ink);
  }

  .culture-shell .lkd-nav-shell .lkd-nav {
    position: relative !important;
    top: auto !important;
    min-height: 56px !important;
    padding: 0 clamp(18px, 3vw, 32px) !important;
  }

  .culture-shell .lkd-nav-shell .lkd-nav__submenu {
    top: calc(100% + 2px) !important;
  }

  .culture-page * {
    box-sizing: border-box;
  }

  .culture-section {
    border-bottom: 2px solid var(--color-ink);
    padding: clamp(72px, 9vw, 144px) 0;
    position: relative;
  }

  .culture-section.is-yellow {
    background: var(--color-yellow);
  }

  .culture-section.is-warm {
    background: var(--color-paper-warm);
  }

  .culture-section.is-ink {
    background: var(--color-ink);
    color: var(--color-paper);
  }

  .culture-grid {
    display: grid;
    gap: clamp(24px, 4vw, 64px);
  }

  .culture-hero {
    background: var(--color-yellow);
    border-bottom: 2px solid var(--color-ink);
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: stretch;
  }

  .culture-hero__inner {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(320px, .88fr);
    gap: clamp(32px, 5vw, 80px);
    align-items: center;
    padding: clamp(64px, 8vw, 128px) 0;
  }

  .culture-hero__title,
  .culture-mega,
  .culture-title,
  .culture-kilo {
    font-family: var(--font-display);
    text-transform: uppercase;
    letter-spacing: 0;
    margin: 0;
  }

  .culture-hero__title {
    font-size: clamp(58px, 9vw, 136px);
    line-height: .88;
    max-width: 9.8ch;
  }

  .culture-hero__title mark,
  .culture-title mark,
  .culture-kilo mark {
    background: var(--color-ink);
    color: var(--color-yellow);
    padding: 0 .06em;
  }

  .culture-lead {
    font-family: var(--font-sans);
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.48;
    max-width: 58ch;
    margin: 32px 0 0;
  }

  .culture-meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 0 28px;
  }

  .culture-hero__visual {
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
    box-shadow: 12px 12px 0 var(--color-ink);
    transform: rotate(.6deg);
    overflow: hidden;
  }

  .culture-hero__visual img {
    display: block;
    width: 100%;
    height: auto;
  }

  .culture-hero__caption,
  .culture-caption,
  .culture-mono {
    font-family: var(--font-mono);
    font-size: 11px;
    letter-spacing: .08em;
    text-transform: uppercase;
    line-height: 1.45;
  }

  .culture-hero__caption {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    border-top: 2px solid var(--color-ink);
    background: var(--color-paper-warm);
  }

  .chapter-rail {
    background: var(--color-ink);
    color: var(--color-paper);
    border-bottom: 2px solid var(--color-ink);
    position: sticky;
    top: 0;
    z-index: 20;
    overflow-x: auto;
  }

  .chapter-rail__track {
    display: flex;
    gap: 0;
    min-width: max-content;
  }

  .chapter-rail a {
    border-right: 1px solid rgba(255, 255, 240, .18);
    color: var(--color-paper);
    min-height: 64px;
    padding: 12px 18px;
    display: grid;
    align-content: center;
    gap: 4px;
    text-decoration: none;
  }

  .chapter-rail a:hover,
  .chapter-rail a:focus-visible {
    background: var(--color-yellow);
    color: var(--color-ink);
  }

  .chapter-rail .n {
    font-family: var(--font-display);
    font-size: 18px;
    line-height: 1;
  }

  .chapter-rail .l {
    font-family: var(--font-mono);
    font-size:11px;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .culture-title {
    font-size: clamp(38px, 4.8vw, 70px);
    line-height: .98;
    max-width: 16ch;
    text-wrap: balance;
    overflow-wrap: normal;
    word-break: normal;
  }

  .culture-title.is-wide {
    max-width: 23ch;
  }

  .culture-kilo {
    font-size: clamp(48px, 7.8vw, 118px);
    line-height: .9;
    text-wrap: balance;
  }

  .culture-copy {
    font-family: var(--font-sans);
    font-size: 18px;
    line-height: 1.58;
    max-width: 62ch;
    margin: 0;
  }

  .culture-copy.is-muted {
    color: var(--color-mute);
  }

  .culture-section-intro {
    grid-template-columns: minmax(600px, .98fr) minmax(360px, 1.02fr) !important;
  }

  .culture-section-intro.is-even {
    grid-template-columns: minmax(520px, 1fr) minmax(420px, 1fr) !important;
  }

  .is-ink .culture-copy.is-muted {
    color: var(--color-mute-soft);
  }

  .culture-deck-card {
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
    color: var(--color-ink);
    padding: clamp(22px, 3vw, 36px);
    box-shadow: 8px 8px 0 var(--color-ink);
  }

  .culture-deck-card.is-yellow {
    background: var(--color-yellow);
  }

  .culture-deck-card.is-ink {
    background: var(--color-ink);
    color: var(--color-paper);
    border-color: var(--color-yellow);
    box-shadow: 8px 8px 0 var(--color-yellow);
  }

  .culture-deck-card h3,
  .culture-deck-card h4 {
    font-family: var(--font-display);
    text-transform: uppercase;
    letter-spacing: 0;
    line-height: .95;
    margin: 0;
  }

  .culture-deck-card h3 {
    font-size: clamp(32px, 4vw, 56px);
  }

  .culture-deck-card h4 {
    font-size: clamp(24px, 3vw, 36px);
  }

  .culture-card-copy {
    font-family: var(--font-sans);
    font-size: 15px;
    line-height: 1.55;
    margin: 16px 0 0;
  }

  .manifesto-lines {
    display: grid;
    gap: 16px;
    margin-top: 42px;
  }

  .manifesto-line {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 18px;
    align-items: baseline;
    border-top: 2px solid var(--color-ink);
    padding-top: 16px;
  }

  .manifesto-line .idx {
    font-family: var(--font-display);
    font-size: 36px;
    line-height: 1;
  }

  .manifesto-line .txt {
    font-family: var(--font-display);
    font-size: clamp(26px, 4vw, 54px);
    line-height: .98;
    text-transform: uppercase;
  }

  .mission-board {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 24px;
    align-items: stretch;
  }

  .mission-statement {
    background: var(--color-ink);
    color: var(--color-paper);
    border: 2px solid var(--color-ink);
    padding: clamp(32px, 5vw, 64px);
  }

  .mission-statement h3 {
    color: var(--color-yellow);
    font-family: var(--font-display);
    font-size: clamp(42px, 6vw, 84px);
    line-height: .9;
    letter-spacing: 0;
    text-transform: uppercase;
    margin: 18px 0 0;
  }

  .symbol-grid,
  .pillar-grid,
  .values-grid,
  .people-grid,
  .framework-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .symbol-glyph {
    font-family: var(--font-display);
    font-size: clamp(84px, 10vw, 160px);
    line-height: .75;
    display: block;
    margin: 18px 0 28px;
  }

  .cycle-board {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    border: 2px solid var(--color-ink);
  }

  .cycle-panel {
    padding: clamp(26px, 4vw, 48px);
    background: var(--color-paper);
  }

  .cycle-panel.is-dark {
    background: var(--color-ink);
    color: var(--color-paper);
  }

  .cycle-panel + .cycle-panel {
    border-left: 2px solid var(--color-ink);
  }

  .cycle-loop {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-top: 32px;
  }

  .cycle-node {
    border: 2px solid currentColor;
    min-height: 92px;
    padding: 14px;
    display: flex;
    align-items: end;
    font-family: var(--font-display);
    font-size: 22px;
    line-height: .95;
    text-transform: uppercase;
  }

  .cycle-panel:not(.is-dark) .cycle-node:nth-child(1),
  .cycle-panel:not(.is-dark) .cycle-node:nth-child(4) {
    background: var(--color-yellow);
  }

  .cycle-panel.is-dark .cycle-node {
    color: var(--color-paper);
    border-color: rgba(255, 255, 240, .35);
  }

  .cycle-panel.is-dark .cycle-node:nth-child(1),
  .cycle-panel.is-dark .cycle-node:nth-child(4) {
    color: var(--color-yellow);
    border-color: var(--color-yellow);
  }

  .vs-table {
    margin-top: 40px;
    border: 2px solid var(--color-ink);
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--color-paper);
  }

  .vs-row {
    display: contents;
  }

  .vs-row > div {
    padding: 14px 18px;
    border-top: 1px solid var(--color-rule);
    font-family: var(--font-sans);
    font-size: 15px;
    line-height: 1.35;
  }

  .vs-row:first-child > div {
    border-top: 0;
    background: var(--color-yellow);
    font-family: var(--font-display);
    font-size: 28px;
    text-transform: uppercase;
  }

  .vs-row > div:nth-child(2n) {
    border-left: 2px solid var(--color-ink);
  }

  .value-card {
    min-height: 280px;
    display: flex;
    flex-direction: column;
  }

  .value-card .tool {
    margin-top: auto;
    padding-top: 18px;
    border-top: 1px solid var(--color-rule);
  }

  .mantra-track {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border: 2px solid var(--color-ink);
  }

  .mantra-card {
    min-height: 260px;
    padding: 24px;
    border-right: 1px solid var(--color-rule);
    border-bottom: 1px solid var(--color-rule);
    background: var(--color-paper);
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .mantra-card:nth-child(3n) {
    background: var(--color-yellow);
  }

  .mantra-card .roman {
    font-family: var(--font-display);
    font-size: 54px;
    line-height: .8;
  }

  .commandment-wall {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
  }

  .commandment {
    background: var(--color-paper);
    color: var(--color-ink);
    border: 2px solid var(--color-ink);
    min-height: 190px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .commandment:nth-child(even) {
    background: var(--color-yellow);
  }

  .commandment .n {
    font-family: var(--font-display);
    font-size: 42px;
    line-height: .8;
  }

  .commandment .t {
    font-family: var(--font-display);
    font-size: 24px;
    line-height: 1;
    text-transform: uppercase;
  }

  .people-card {
    overflow: hidden;
    padding: 0;
  }

  .people-card img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-bottom: 2px solid var(--color-ink);
  }

  .people-card .body {
    padding: 24px;
  }

  .growth-board {
    display: grid;
    grid-template-columns: minmax(0, .75fr) minmax(0, 1.25fr);
    gap: 24px;
    align-items: start;
  }

  .growth-list {
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
    color: var(--color-ink);
  }

  .growth-item {
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr);
    border-top: 1px solid var(--color-rule);
    min-height: 68px;
  }

  .growth-item:first-child {
    border-top: 0;
  }

  .growth-item .n {
    background: var(--color-yellow);
    border-right: 2px solid var(--color-ink);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 28px;
  }

  .growth-item .t {
    display: flex;
    align-items: center;
    padding: 14px 18px;
    font-family: var(--font-sans);
    font-weight: 700;
    line-height: 1.35;
  }

  .framework-shot {
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
    padding: 14px;
    box-shadow: 8px 8px 0 var(--color-ink);
  }

  .framework-shot img {
    display: block;
    width: 100%;
    height: auto;
    border: 2px solid var(--color-ink);
  }

  .source-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 36px 0 28px;
  }

  .source-toolbar button {
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    padding: 10px 12px;
    cursor: pointer;
  }

  .source-toolbar button.is-active {
    background: var(--color-yellow);
  }

  .source-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }

  .source-card {
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
    padding: 16px;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .source-card.is-empty {
    background: var(--color-paper-warm);
    border-style: dashed;
  }

  .source-card h4 {
    font-family: var(--font-display);
    font-size: 25px;
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
  }

  .source-card .file {
    margin-top: auto;
    color: var(--color-mute);
    overflow-wrap: anywhere;
  }

  .reader-layout {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    gap: clamp(24px, 4vw, 56px);
    align-items: start;
    margin-top: 42px;
  }

  .reader-index {
    position: sticky;
    top: 84px;
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
    box-shadow: 8px 8px 0 var(--color-ink);
    max-height: calc(100vh - 108px);
    overflow: auto;
  }

  .reader-index__head {
    background: var(--color-ink);
    color: var(--color-yellow);
    padding: 14px 16px;
    border-bottom: 2px solid var(--color-ink);
  }

  .reader-index a {
    color: var(--color-ink);
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 10px;
    padding: 12px 14px;
    border-top: 1px solid var(--color-rule);
    text-decoration: none;
  }

  .reader-index a:first-of-type {
    border-top: 0;
  }

  .reader-index a:hover,
  .reader-index a:focus-visible {
    background: var(--color-yellow);
    outline: 0;
  }

  .reader-index .num {
    font-family: var(--font-display);
    font-size: 22px;
    line-height: .85;
  }

  .reader-index .title {
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 800;
    line-height: 1.15;
  }

  .reader-index .meta {
    grid-column: 2;
    color: var(--color-mute);
    margin-top: 3px;
  }

  .reader-stack {
    display: grid;
    gap: 28px;
  }

  .reader-article {
    border: 2px solid var(--color-ink);
    background: var(--color-paper);
  }

  .reader-article__head {
    background: var(--color-ink);
    color: var(--color-paper);
    display: grid;
    grid-template-columns: 112px minmax(0, 1fr);
    border-bottom: 2px solid var(--color-ink);
  }

  .reader-article__num {
    background: var(--color-yellow);
    color: var(--color-ink);
    font-family: var(--font-display);
    font-size: clamp(42px, 5.2vw, 70px);
    line-height: .8;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 12px;
  }

  .reader-article__title {
    padding: clamp(22px, 4vw, 42px);
  }

  .reader-article__title h3 {
    font-family: var(--font-display);
    font-size: clamp(32px, 3.7vw, 58px);
    line-height: .98;
    letter-spacing: 0;
    text-transform: uppercase;
    margin: 12px 0 0;
    text-wrap: balance;
  }

  .reader-body {
    padding: clamp(24px, 4vw, 52px);
    max-width: 980px;
  }

  .reader-body > *:first-child {
    margin-top: 0;
  }

  .reader-body p,
  .reader-body li,
  .reader-body .reader-list-row {
    font-family: var(--font-sans);
    font-size: clamp(17px, 1.35vw, 21px);
    line-height: 1.64;
  }

  .reader-body p {
    margin: 0 0 18px;
  }

  .reader-body h4,
  .reader-body h5,
  .reader-body h6 {
    font-family: var(--font-display);
    letter-spacing: 0;
    text-transform: uppercase;
    line-height: .96;
    margin: 40px 0 14px;
    text-wrap: balance;
  }

  .reader-body h4 {
    font-size: clamp(26px, 2.8vw, 42px);
  }

  .reader-body h5 {
    font-size: clamp(22px, 2.2vw, 32px);
  }

  .reader-body h6 {
    font-size: clamp(19px, 1.7vw, 24px);
  }

  .reader-body strong {
    font-weight: 900;
  }

  .reader-body code {
    background: var(--color-yellow);
    color: var(--color-ink);
    font-family: var(--font-mono);
    font-size: .88em;
    padding: .12em .32em;
  }

  .reader-body a {
    color: var(--color-ink);
    font-weight: 800;
    text-decoration-thickness: 2px;
    text-decoration-color: var(--color-yellow);
    text-underline-offset: 3px;
    overflow-wrap: anywhere;
  }

  .reader-list-block {
    display: grid;
    gap: 8px;
    margin: 0 0 22px;
  }

  .reader-list-row {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
  }

  .reader-list-row .marker {
    font-family: var(--font-display);
    color: var(--color-ink);
    line-height: 1.2;
  }

  .reader-quote {
    margin: 28px 0;
    padding: 24px;
    background: var(--color-ink);
    color: var(--color-paper);
    border: 2px solid var(--color-yellow);
    box-shadow: 8px 8px 0 var(--color-yellow);
  }

  .reader-quote p {
    margin-bottom: 12px;
  }

  .reader-quote p:last-child {
    margin-bottom: 0;
  }

  .reader-table-wrap {
    overflow-x: auto;
    margin: 28px 0;
    border: 2px solid var(--color-ink);
  }

  .reader-table {
    width: 100%;
    min-width: 680px;
    border-collapse: collapse;
    background: var(--color-paper);
  }

  .reader-table th,
  .reader-table td {
    border: 1px solid var(--color-rule);
    padding: 12px 14px;
    vertical-align: top;
    font-family: var(--font-sans);
    font-size: 15px;
    line-height: 1.42;
    text-align: left;
  }

  .reader-table th {
    background: var(--color-yellow);
    font-family: var(--font-display);
    font-size: 22px;
    line-height: .95;
    text-transform: uppercase;
  }

  .reader-image {
    margin: 28px 0;
    border: 2px solid var(--color-ink);
    background: var(--color-paper-warm);
    padding: 12px;
    box-shadow: 8px 8px 0 var(--color-ink);
  }

  .reader-image img {
    display: block;
    width: 100%;
    height: auto;
    border: 2px solid var(--color-ink);
  }

  .reader-image figcaption {
    margin-top: 10px;
  }

  .final-board {
    text-align: center;
    max-width: 920px;
    margin: 0 auto;
  }

  .final-board .culture-kilo {
    color: var(--color-paper);
    font-size: clamp(44px, 7vw, 96px);
    line-height: .92;
  }

  .final-board .culture-kilo mark {
    background: var(--color-yellow);
    color: var(--color-ink);
  }

  @media (max-width: 1120px) {
    .culture-section-intro,
    .culture-section-intro.is-even {
      grid-template-columns: minmax(0, 1fr) !important;
    }

    .culture-title,
    .culture-title.is-wide {
      max-width: 100%;
    }
  }

  @media (max-width: 980px) {
    .culture-hero__inner,
    .mission-board,
    .growth-board,
    .reader-layout {
      grid-template-columns: minmax(0, 1fr);
    }

    .reader-index {
      position: relative;
      top: auto;
      max-height: none;
    }

    .symbol-grid,
    .pillar-grid,
    .values-grid,
    .people-grid,
    .framework-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .cycle-board,
    .vs-table {
      grid-template-columns: minmax(0, 1fr);
    }

    .cycle-panel + .cycle-panel,
    .vs-row > div:nth-child(2n) {
      border-left: 0;
    }

    .mantra-track,
    .commandment-wall,
    .source-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 620px) {
    .culture-hero {
      min-height: auto;
    }

    .culture-hero__title {
      font-size: clamp(48px, 15vw, 76px);
    }

    .culture-title {
      font-size: clamp(34px, 10vw, 52px);
      line-height: 1;
    }

    .culture-section {
      padding: 64px 0;
    }

    .mantra-track,
    .commandment-wall,
    .source-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .manifesto-line {
      grid-template-columns: minmax(0, 1fr);
    }

    .reader-article__head {
      grid-template-columns: minmax(0, 1fr);
    }

    .reader-article__num {
      justify-content: flex-start;
    }
  }
`;

function StyleMount() {
  return <style>{STYLE}</style>;
}

function Section({ id, tone = "paper", children }) {
  const toneClass = tone === "yellow" ? " is-yellow" : tone === "warm" ? " is-warm" : tone === "ink" ? " is-ink" : "";
  return (
    <section id={id} className={`culture-section${toneClass}`} data-screen-label={id}>
      {children}
    </section>
  );
}

function ChapterRail() {
  return (
    <nav className="chapter-rail" aria-label="Capítulos da Cultura Lendária">
      <div className="chapter-rail__track">
        {chapters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`}>
            <span className="n">{chapter.n}</span>
            <span className="l">{chapter.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch (_error) {
    return value;
  }
}

function readingAssetHref(reading, href) {
  if (/^https?:\/\//.test(href)) return href;
  if (href.startsWith("../../../")) {
    return "referencias/brand/diagrama-vida-lendaria-vs-vida-mediocre.jpg";
  }

  const sourceDir = reading.file.includes("/") ? reading.file.split("/").slice(0, -1).join("/") : "";
  const prefix = sourceDir ? `${sourceDir}/` : "";
  return `docs/Cultura Lendár[IA]/${prefix}${href}`;
}

function readingLinkHref(reading, href) {
  if (/^https?:\/\//.test(href) || href.startsWith("#")) return href;

  const sourceDir = reading.file.includes("/") ? reading.file.split("/").slice(0, -1).join("/") : "";
  const rawTarget = href.startsWith("./") ? href.slice(2) : href;
  const rawRelative = rawTarget.includes("/") || !sourceDir ? rawTarget : `${sourceDir}/${rawTarget}`;
  const decodedRelative = safeDecode(rawRelative);
  const target = readings.find((candidate) => candidate.file === decodedRelative || candidate.file === rawRelative);

  return target ? `#${target.id}` : readingAssetHref(reading, href);
}

function renderInline(text, keyPrefix, reading) {
  const cleaned = text.replace(/<img[^>]*>\s*/g, "");
  const parts = cleaned.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={key}>{part.slice(1, -1)}</code>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a key={key} href={readingLinkHref(reading, linkMatch[2])}>
          {linkMatch[1]}
        </a>
      );
    }

    return <React.Fragment key={key}>{part}</React.Fragment>;
  });
}

function renderLinesWithBreaks(lines, keyPrefix, reading) {
  return lines.map((line, index) => (
    <React.Fragment key={`${keyPrefix}-${index}`}>
      {index > 0 ? <br /> : null}
      {renderInline(line, `${keyPrefix}-inline-${index}`, reading)}
    </React.Fragment>
  ));
}

function isTableSeparator(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function MarkdownBlocks({ reading }) {
  const lines = reading.markdown.split(/\r?\n/);
  const blocks = [];
  let cursor = lines[0]?.startsWith("# ") ? 1 : 0;

  while (cursor < lines.length) {
    const line = lines[cursor];

    if (!line.trim()) {
      cursor += 1;
      continue;
    }

    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      blocks.push(
        <figure className="reader-image" key={`image-${cursor}`}>
          <img src={readingAssetHref(reading, imageMatch[2])} alt={imageMatch[1] || reading.title} loading="lazy" />
          <figcaption className="culture-caption">{imageMatch[1] || reading.title}</figcaption>
        </figure>,
      );
      cursor += 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const TagName = level <= 2 ? "h4" : level === 3 ? "h5" : "h6";
      blocks.push(
        <TagName key={`heading-${cursor}`}>
          {renderInline(headingMatch[2], `heading-${cursor}`, reading)}
        </TagName>,
      );
      cursor += 1;
      continue;
    }

    if (line.trim().startsWith(">")) {
      const quoteLines = [];
      while (cursor < lines.length && lines[cursor].trim().startsWith(">")) {
        quoteLines.push(lines[cursor].replace(/^\s*>\s?/, ""));
        cursor += 1;
      }
      blocks.push(
        <blockquote className="reader-quote" key={`quote-${cursor}`}>
          <p>{renderLinesWithBreaks(quoteLines.filter(Boolean), `quote-${cursor}`, reading)}</p>
        </blockquote>,
      );
      continue;
    }

    if (line.trim().startsWith("|") && isTableSeparator(lines[cursor + 1] || "")) {
      const header = splitTableRow(line);
      cursor += 2;
      const rows = [];
      while (cursor < lines.length && lines[cursor].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[cursor]));
        cursor += 1;
      }
      blocks.push(
        <div className="reader-table-wrap" key={`table-${cursor}`}>
          <table className="reader-table">
            <thead>
              <tr>
                {header.map((cell, index) => (
                  <th key={`${cell}-${index}`}>{renderInline(cell, `table-h-${cursor}-${index}`, reading)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`row-${cursor}-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`cell-${cursor}-${rowIndex}-${cellIndex}`}>{renderInline(cell, `table-${cursor}-${rowIndex}-${cellIndex}`, reading)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    const listMatch = line.match(/^(\s*)([-*]|\d+\.)\s+(.+)$/);
    if (listMatch) {
      const items = [];
      while (cursor < lines.length) {
        const itemMatch = lines[cursor].match(/^(\s*)([-*]|\d+\.)\s+(.+)$/);
        if (!itemMatch) break;
        items.push({
          level: Math.floor(itemMatch[1].length / 4),
          marker: itemMatch[2],
          text: itemMatch[3],
        });
        cursor += 1;
      }
      blocks.push(
        <div className="reader-list-block" key={`list-${cursor}`}>
          {items.map((item, index) => (
            <div className="reader-list-row" key={`list-${cursor}-${index}`} style={{ paddingLeft: item.level * 28 }}>
              <span className="marker">{item.marker}</span>
              <span>{renderInline(item.text, `list-${cursor}-${index}`, reading)}</span>
            </div>
          ))}
        </div>,
      );
      continue;
    }

    const paragraphLines = [];
    while (cursor < lines.length) {
      const current = lines[cursor];
      if (!current.trim()) break;
      if (/^(#{1,6})\s+/.test(current)) break;
      if (/^!\[([^\]]*)\]\(([^)]+)\)$/.test(current)) break;
      if (current.trim().startsWith(">")) break;
      if (current.match(/^(\s*)([-*]|\d+\.)\s+(.+)$/)) break;
      if (current.trim().startsWith("|") && isTableSeparator(lines[cursor + 1] || "")) break;
      paragraphLines.push(current.trim());
      cursor += 1;
    }
    blocks.push(
      <p key={`paragraph-${cursor}`}>
        {renderLinesWithBreaks(paragraphLines, `paragraph-${cursor}`, reading)}
      </p>,
    );
  }

  return <div className="reader-body">{blocks}</div>;
}

function ReaderSection() {
  return (
    <Section id="leitura" tone="paper">
      <Container>
        <Tag variant="bare">00 · CADERNO INTEGRAL</Tag>
        <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>
          As 20 páginas completas para leitura.
        </h2>
        <p className="culture-copy is-muted" style={{ marginTop: 28 }}>
          Esta é a camada integral do deck: conteúdo fonte preservado, navegável e legível. A síntese visual continua abaixo, mas a cultura agora não depende de resumo.
        </p>

        <div className="reader-layout">
          <aside className="reader-index" aria-label="Índice das fontes completas">
            <div className="reader-index__head">
              <div className="culture-mono">ÍNDICE COMPLETO</div>
            </div>
            {readings.map((reading) => (
              <a key={reading.id} href={`#${reading.id}`}>
                <span className="num">{String(reading.index).padStart(2, "0")}</span>
                <span>
                  <span className="title">{reading.title}</span>
                  <span className="culture-mono meta">{reading.group} · {reading.lineCount} linhas</span>
                </span>
              </a>
            ))}
          </aside>

          <div className="reader-stack">
            {readings.map((reading) => (
              <article className="reader-article" id={reading.id} key={reading.file}>
                <header className="reader-article__head">
                  <div className="reader-article__num">{String(reading.index).padStart(2, "0")}</div>
                  <div className="reader-article__title">
                    <Tag variant="bare" style={{ color: "var(--color-yellow)" }}>{reading.group} · {reading.role}</Tag>
                    <h3>{reading.title}.</h3>
                    <div className="culture-mono" style={{ color: "var(--color-mute-soft)", marginTop: 14 }}>
                      {reading.status} · fonte: {reading.file}
                    </div>
                  </div>
                </header>
                <MarkdownBlocks reading={reading} />
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CultureHero() {
  return (
    <header className="culture-hero">
      <Container>
        <div className="culture-hero__inner">
          <div>
            <div className="culture-meta-row">
              <Tag variant="dark">CULTURA LENDÁRIA</Tag>
              <Tag variant="outline">20 PÁGINAS FONTE</Tag>
              <Tag variant="outline">DECK VIVO</Tag>
            </div>
            <h1 className="culture-hero__title">
              Cultura <mark>Lendária</mark>.
            </h1>
            <p className="culture-lead">
              Não é handbook. Não é blog. É o mapa da nossa forma de pensar, decidir, contratar, liderar e executar usando IA sem teatro.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 36 }}>
              <Button variant="dark" size="lg" arrow block as="a" href="#manifesto">
                Abrir o deck
              </Button>
              <Button variant="secondary" size="lg" as="a" href="rpg/cacada-mediocridade.html">
                Ver RPG interno →
              </Button>
            </div>
          </div>
          <figure className="culture-hero__visual">
            <img src="referencias/brand/diagrama-vida-lendaria-vs-vida-mediocre.jpg" alt="Diagrama Vida Lendária versus Vida Medíocre." />
            <figcaption className="culture-hero__caption">
              <span>// diagrama canônico</span>
              <span>Vida Lendária vs. Vida Medíocre</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </header>
  );
}

function ManifestoSection() {
  const lines = [
    "Por 200 mil anos, fomos reféns da biologia.",
    "Hoje, a IA mudou o custo de pensar e produzir.",
    "É para quem prefere testar a repetir.",
    "Conhecimento parado não vale nada.",
    "Melhoramos o trabalho toda semana.",
  ];

  return (
    <Section id="manifesto" tone="paper">
      <Container>
        <div className="culture-grid culture-section-intro" style={{ gridTemplateColumns: "minmax(0, .9fr) minmax(0, 1.1fr)", alignItems: "start" }}>
          <div>
            <Tag variant="bare">01 · MANIFESTO</Tag>
            <h2 className="culture-title">O chamado aos que recusam a mediocridade.</h2>
            <p className="culture-copy is-muted" style={{ marginTop: 28 }}>
              O manifesto não explica a empresa. Ele define postura: inconformismo, excelência e conhecimento posto em ação.
            </p>
          </div>
          <div className="manifesto-lines">
            {lines.map((line, index) => (
              <div className="manifesto-line" key={line}>
                <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                <span className="txt">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function MissionSection() {
  return (
    <Section id="norte" tone="warm">
      <Container>
        <div className="mission-board">
          <div className="mission-statement">
            <Tag variant="bare" style={{ color: "var(--color-yellow)" }}>02 · NORTE</Tag>
            <h3>Juntar gente boa para construir com IA.</h3>
            <p className="culture-copy" style={{ marginTop: 28, color: "var(--color-paper)" }}>
              Para criar soluções, aulas e negócios que resolvem problemas reais. Essa frase filtra produto, liderança, contratação, conteúdo e comunidade.
            </p>
          </div>
          <div className="culture-deck-card is-yellow">
            <Tag variant="dark">POSICIONAMENTO</Tag>
            <h3 style={{ marginTop: 20 }}>Aula, prática e comunidade.</h3>
            <p className="culture-card-copy">
              A Academia Lendár[IA] coloca IA no trabalho de quem cria, vende, lidera ou opera. A visão é simples: formar pessoas que usam IA para produzir melhor.
            </p>
            <div className="culture-mono" style={{ marginTop: 28, borderTop: "2px solid var(--color-ink)", paddingTop: 14 }}>
              Fonte: Missão, Visão e Posicionamento
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SymbolsSection() {
  return (
    <Section id="simbolos" tone="yellow">
      <Container>
        <div className="culture-grid culture-section-intro" style={{ gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)", alignItems: "end", marginBottom: 56 }}>
          <div>
            <Tag variant="dark">03 · SÍMBOLOS</Tag>
            <h2 className="culture-title" style={{ marginTop: 20 }}>Forma antes de ruído.</h2>
          </div>
          <p className="culture-copy">
            Sem forma, cultura vira frase solta. A nossa forma é clara: lemniscata, número 8, lentes amarelas, brackets, tocha e rituais de reconhecimento.
          </p>
        </div>
        <div className="symbol-grid">
          {symbols.map((symbol, index) => (
            <article className={`culture-deck-card${index === 1 ? " is-ink" : ""}`} key={symbol.title}>
              <Tag variant={index === 1 ? "bare" : "dark"} style={index === 1 ? { color: "var(--color-yellow)" } : undefined}>
                {symbol.label}
              </Tag>
              <span className="symbol-glyph">{symbol.glyph}</span>
              <h3>{symbol.title}.</h3>
              <p className="culture-card-copy">{symbol.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CyclesSection() {
  return (
    <Section id="ciclos" tone="paper">
      <Container>
        <div className="culture-grid culture-section-intro" style={{ gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)", alignItems: "end", marginBottom: 48 }}>
          <div>
            <Tag variant="bare">04 · COSMOLOGIA</Tag>
            <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>Toda decisão alimenta um dos lobos.</h2>
          </div>
          <p className="culture-copy is-muted">
            A cultura torna visível a escolha diária: clareza ou confusão, ação ou inércia, direção ou piloto automático.
          </p>
        </div>

        <div className="cycle-board">
          <div className="cycle-panel">
            <Tag variant="dark">VIDA LENDÁRIA</Tag>
            <h3 className="culture-title" style={{ fontSize: "clamp(42px, 6vw, 86px)", marginTop: 18 }}>Ciclo virtuoso.</h3>
            <div className="cycle-loop">
              {["Clareza", "Fazer", "Realização", "Ter", "Liberdade", "Ser"].map((node) => (
                <div className="cycle-node" key={node}>{node}</div>
              ))}
            </div>
          </div>
          <div className="cycle-panel is-dark">
            <Tag variant="bare" style={{ color: "var(--color-yellow)" }}>VIDA MEDÍOCRE</Tag>
            <h3 className="culture-title" style={{ fontSize: "clamp(42px, 6vw, 86px)", marginTop: 18, color: "var(--color-paper)" }}>Ciclo vicioso.</h3>
            <div className="cycle-loop">
              {["Confusão", "Ser", "Corrida de Ratos", "Fazer", "Frustração", "Ter"].map((node) => (
                <div className="cycle-node" key={node}>{node}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="vs-table" aria-label="Comparativo Lendário versus Medíocre">
          <div className="vs-row">
            <div>Lendário</div>
            <div>Medíocre</div>
          </div>
          {legendaryTraits.map(([legendary, mediocre]) => (
            <div className="vs-row" key={legendary}>
              <div>{legendary}</div>
              <div>{mediocre}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PillarsSection() {
  return (
    <Section id="pilares" tone="ink">
      <Container>
        <div className="culture-grid culture-section-intro" style={{ gridTemplateColumns: "minmax(0, .9fr) minmax(0, 1.1fr)", alignItems: "end", marginBottom: 56 }}>
          <div>
            <Tag variant="bare" style={{ color: "var(--color-yellow)" }}>05 · TRÊS PILARES</Tag>
            <h2 className="culture-title is-wide" style={{ color: "var(--color-paper)", marginTop: 18 }}>A fundação da Vida Lendária.</h2>
          </div>
          <p className="culture-copy" style={{ color: "var(--color-paper)" }}>
            Os 3 pilares são critério de pertencimento. Se algum estiver ausente, não estamos diante de alguém alinhado à visão.
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar, index) => (
            <article className={`culture-deck-card${index === 1 ? " is-yellow" : ""}`} key={pillar.title}>
              <div className="culture-mono" style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <span>{pillar.counter}</span>
                <span>{pillar.tag}</span>
              </div>
              <h3 style={{ marginTop: 22 }}>{pillar.title}.</h3>
              <p className="culture-card-copy">{pillar.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ValuesSection() {
  return (
    <Section id="valores" tone="warm">
      <Container>
        <div className="culture-grid culture-section-intro is-even" style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", alignItems: "end", marginBottom: 56 }}>
          <div>
            <Tag variant="bare">06 · VALORES</Tag>
            <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>Valores que viram ferramenta.</h2>
          </div>
          <p className="culture-copy is-muted">
            Falar de valores é fácil. Difícil é vivenciá-los. Aqui cada valor vira um artefato de decisão, um item de inventário e uma pergunta de comportamento.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <article className={`culture-deck-card value-card${index % 4 === 1 ? " is-yellow" : ""}`} key={value.title}>
              <Tag variant={index % 4 === 1 ? "dark" : "bare"}>{String(index + 1).padStart(2, "0")}</Tag>
              <h3 style={{ marginTop: 18 }}>{value.title}.</h3>
              <p className="culture-card-copy">{value.prompt}</p>
              <div className="tool">
                <div className="culture-mono">ITEM EQUIPADO</div>
                <strong style={{ fontFamily: "var(--font-sans)", display: "block", marginTop: 6 }}>{value.tool}</strong>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function MantrasSection() {
  return (
    <Section id="mantras" tone="paper">
      <Container>
        <div className="culture-grid culture-section-intro" style={{ gridTemplateColumns: "minmax(0, .9fr) minmax(0, 1.1fr)", alignItems: "end", marginBottom: 56 }}>
          <div>
            <Tag variant="bare">07 · MANTRAS</Tag>
            <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>O óbvio precisa ser repetido.</h2>
          </div>
          <p className="culture-copy is-muted">
            Mantras são a versão diária dos valores. Não são frases para pôster. São comandos de comportamento que aparecem em decisões pequenas.
          </p>
        </div>
        <div className="mantra-track">
          {mantras.map(([roman, title, body]) => (
            <article className="mantra-card" key={title}>
              <span className="roman">{roman}</span>
              <h3 className="culture-deck-card h3" style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1, textTransform: "uppercase", margin: 0 }}>{title}.</h3>
              <p className="culture-card-copy" style={{ marginTop: "auto" }}>{body}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CommandmentsSection() {
  return (
    <Section id="mandamentos" tone="yellow">
      <Container>
        <div className="culture-grid culture-section-intro" style={{ gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)", alignItems: "end", marginBottom: 56 }}>
          <div>
            <Tag variant="dark">08 · MANDAMENTOS</Tag>
            <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>Contexto, não controle.</h2>
          </div>
          <p className="culture-copy">
            Os mandamentos existem para evitar o falso remédio do microgerenciamento. Menos regra rígida, mais clareza de julgamento humano.
          </p>
        </div>
        <div className="commandment-wall">
          {commandments.map((commandment, index) => (
            <article className="commandment" key={commandment}>
              <span className="n">{String(index + 1).padStart(2, "0")}</span>
              <span className="t">{commandment}</span>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PeopleSection() {
  return (
    <Section id="gente" tone="warm">
      <Container>
        <div className="culture-grid culture-section-intro" style={{ gridTemplateColumns: "minmax(0, .8fr) minmax(0, 1.2fr)", alignItems: "end", marginBottom: 56 }}>
          <div>
            <Tag variant="bare">09 · ARQUITETURA DE GENTE</Tag>
            <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>O time é a maior vantagem competitiva.</h2>
          </div>
          <p className="culture-copy is-muted">
            A cultura define quem entra, quem lidera, quem não entra e quando uma transição é necessária. Manter desalinhamento não é gentileza.
          </p>
        </div>
        <div className="people-grid">
          {peopleCards.map((card) => (
            <article className="culture-deck-card people-card" key={card.title}>
              <img src={card.image} alt={card.alt} />
              <div className="body">
                <Tag variant="bare">{card.label}</Tag>
                <h3 style={{ marginTop: 16 }}>{card.title}.</h3>
                <p className="culture-card-copy">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ExecutionSection() {
  return (
    <Section id="execucao" tone="ink">
      <Container>
        <div className="growth-board">
          <div>
            <Tag variant="bare" style={{ color: "var(--color-yellow)" }}>10 · CRESCENDO RÁPIDO E CERTO</Tag>
            <h2 className="culture-title is-wide" style={{ color: "var(--color-paper)", marginTop: 18 }}>Velocidade com trilho.</h2>
          <p className="culture-copy" style={{ color: "var(--color-paper)", marginTop: 28 }}>
              Crescer devagar sem errar é fácil. Crescer rápido errando caro também. Nosso padrão é crescer rápido e certo, com liderança distribuída e aprendizagem pública.
            </p>
            <div style={{ marginTop: 32 }}>
              <Button variant="primary" size="lg" as="a" href="#decisao" arrow>
                Ver frameworks
              </Button>
            </div>
          </div>
          <div className="growth-list">
            {growthRules.map((rule, index) => (
              <div className="growth-item" key={rule}>
                <span className="n">{String(index + 1).padStart(2, "0")}</span>
                <span className="t">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function DecisionSection() {
  return (
    <Section id="decisao" tone="paper">
      <Container>
        <div className="culture-grid culture-section-intro is-even" style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", alignItems: "end", marginBottom: 56 }}>
          <div>
            <Tag variant="bare">11 · FRAMEWORKS DE DECISÃO</Tag>
            <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>Corte o ruído antes que ele vire processo.</h2>
          </div>
          <p className="culture-copy is-muted">
            A cultura também aparece nas pequenas regras operacionais: menos metas, mobile first, assíncrono antes de reunião, IA antes de headcount.
          </p>
        </div>
        <div className="framework-grid">
          {frameworks.map((framework, index) => (
            <article className={`culture-deck-card${index === 1 ? " is-yellow" : ""}`} key={framework.title}>
              <Tag variant={index === 1 ? "dark" : "bare"}>{framework.title}</Tag>
              <h3 style={{ marginTop: 18 }}>{framework.answer}.</h3>
              <p className="culture-card-copy">{framework.body}</p>
            </article>
          ))}
        </div>
        <div className="culture-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 48 }}>
          <figure className="framework-shot">
            <img src="docs/Cultura Lendár[IA]/Frameworks de Decisão/Captura_de_Tela_2024-07-27_as_09.57.10.jpg" alt="Referência visual de consumo mobile do YouTube." />
            <figcaption className="culture-caption" style={{ marginTop: 12 }}>Fonte visual: Mobile First para YouTube</figcaption>
          </figure>
          <figure className="framework-shot">
            <img src="docs/Cultura Lendár[IA]/Frameworks de Decisão/Captura_de_Tela_2024-07-27_as_10.08.21.jpg" alt="Referência visual de consumo mobile de sites." />
            <figcaption className="culture-caption" style={{ marginTop: 12 }}>Fonte visual: Mobile First para sites</figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  );
}

function AtlasSection() {
  const groups = useMemo(() => ["Todos", ...Array.from(new Set(sourcePages.map((page) => page.group)))], []);
  const [active, setActive] = useState("Todos");
  const pages = active === "Todos" ? sourcePages : sourcePages.filter((page) => page.group === active);

  return (
    <Section id="atlas" tone="warm">
      <Container>
        <Tag variant="bare">12 · ATLAS DE FONTES</Tag>
        <h2 className="culture-title is-wide" style={{ marginTop: 18 }}>Todas as 20 páginas estão representadas.</h2>
        <p className="culture-copy is-muted" style={{ marginTop: 28 }}>
          Este atlas confere a pasta Notion exportada contra o deck vivo. Cada página tem uma função no sistema, mesmo quando o export atual trouxe apenas título.
        </p>
        <div className="source-toolbar" role="toolbar" aria-label="Filtrar fontes por grupo">
          {groups.map((group) => (
            <button
              key={group}
              type="button"
              className={active === group ? "is-active" : ""}
              onClick={() => setActive(group)}
            >
              {group}
            </button>
          ))}
        </div>
        <div className="source-grid">
          {pages.map((page, index) => (
            <article className={`source-card${page.status === "fonte sem corpo" ? " is-empty" : ""}`} key={page.file}>
              <div className="culture-mono" style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{page.group}</span>
              </div>
              <h4>{page.title}.</h4>
              <div className="culture-mono">{page.role} · {page.status}</div>
              <div className="culture-mono file">{page.file}</div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FinalSection() {
  return (
    <Section id="fecho" tone="ink">
      <Container>
        <div className="final-board">
          <Tag variant="bare" style={{ color: "var(--color-yellow)" }}>CONSTRUINDO O INFINITO, HOJE</Tag>
          <h2 className="culture-kilo" style={{ marginTop: 20 }}>
            Honre o conhecimento com <mark>ação</mark>.
          </h2>
          <p className="culture-copy" style={{ color: "var(--color-paper)", margin: "34px auto 0" }}>
            A cultura não vive no arquivo. Vive no gesto repetido: clareza, coragem, IA, entrega, generosidade, responsabilidade e execução.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginTop: 40 }}>
            <Button variant="primary" size="lg" as="a" href="manifesto/index.html" arrow>
              Ler manifesto
            </Button>
            <Button variant="ghost" size="lg" as="a" href="rpg/cacada-mediocridade.html" style={{ color: "var(--color-yellow)" }}>
              Entrar na caçada →
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function App() {
  return (
    <div className="culture-shell">
      <StyleMount />
      <SkipLink />
      <TopNav active="Cultura" basePath="" showCta={false} />
      <main id="conteudo-principal" className="culture-page">
        <CultureHero />
        <ChapterRail />
        <ReaderSection />
        <ManifestoSection />
        <MissionSection />
        <SymbolsSection />
        <Marquee items={["Lendário", "Clareza", "Ação", "IA First", "∞", "8 ou 80"]} />
        <CyclesSection />
        <PillarsSection />
        <ValuesSection />
        <MantrasSection />
        <CommandmentsSection />
        <PeopleSection />
        <ExecutionSection />
        <DecisionSection />
        <AtlasSection />
        <FinalSection />
      </main>
      <Footer basePath="" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
