(()=>{var{useMemo:S,useState:z}=React,{Tag:t,Button:f,TopNav:I,Footer:_,Marquee:E,SkipLink:M,Container:s}=window;const x=[{group:"Funda\xE7\xE3o",title:"Manifesto",file:"Manifesto 20e1c63260bc8135b4b0f9128685317b.md",role:"chamado",status:"curado"},{group:"Funda\xE7\xE3o",title:"Manifesto Lend\xE1rio",file:"Manifesto/Legendary Manifesto 20e1c63260bc8127badee8f1869ab1a4.md",role:"tradu\xE7\xE3o",status:"curado"},{group:"Funda\xE7\xE3o",title:"Miss\xE3o, Vis\xE3o e Posicionamento",file:"Missa\u0303o, Visa\u0303o e Posicionamento 20e1c63260bc8179b9a9e7d6980f0d8d.md",role:"norte",status:"curado"},{group:"Funda\xE7\xE3o",title:"Vida Lend\xE1ria",file:"Vida Lenda\u0301ria 20e1c63260bc81abb16cf4b396186025.md",role:"origem",status:"curado"},{group:"Funda\xE7\xE3o",title:"Hist\xF3ria da Academia Lend\xE1r[IA]",file:"Histo\u0301ria da Academia Lenda\u0301r[IA] 20e1c63260bc811395ebe8ecc2c925cf.md",role:"pr\xF3logo",status:"fonte sem corpo"},{group:"Funda\xE7\xE3o",title:"Hist\xF3ria do Founder",file:"Histo\u0301ria do Founder (Alan Nicolas) 20e1c63260bc817cbad5e34d197c0ec5.md",role:"origem humana",status:"fonte sem corpo"},{group:"Cosmologia",title:"Os 3 Pilares",file:"Os 3 Pilares 20e1c63260bc8127b8c7d6e2461187a4.md",role:"sistema",status:"curado"},{group:"Cosmologia",title:"Nossos S\xEDmbolos",file:"Nossos Simbolos 2441c63260bc8066b566e57a2bf153f3.md",role:"rituais",status:"curado"},{group:"C\xF3digo Di\xE1rio",title:"Valores",file:"Valores 20e1c63260bc817382b2f11f9140f0e7.md",role:"virtudes",status:"curado"},{group:"C\xF3digo Di\xE1rio",title:"Nossos 8 Mantras",file:"Nossos 8 Mantras 20e1c63260bc81029a1fcb3f0baa4a29.md",role:"ritmo",status:"curado"},{group:"C\xF3digo Di\xE1rio",title:"Os 10 Mandamentos Lend\xE1rios",file:"Os 10 Mandamentos Lenda\u0301rios 20e1c63260bc812494c0c2df98ba4a66.md",role:"limites",status:"curado"},{group:"C\xF3digo Di\xE1rio",title:"4 Princ\xEDpios Guia",file:"4 Princi\u0301pios Guia 20e1c63260bc81448286f13117711456.md",role:"b\xFAssola",status:"curado"},{group:"Arquitetura de Gente",title:"Sobre nosso time",file:"Sobre nosso time 20e1c63260bc8100ad70f402e9c23e54.md",role:"perfil",status:"curado"},{group:"Arquitetura de Gente",title:"Sobre nossos l\xEDderes",file:"Sobre nossos li\u0301deres 20e1c63260bc8181889dc49454cd63a1.md",role:"lideran\xE7a",status:"curado"},{group:"Arquitetura de Gente",title:"Quando e quem contratar?",file:"Quando e quem contratar 20e1c63260bc810982a5ef36e92dabe2.md",role:"crit\xE9rio",status:"curado"},{group:"Arquitetura de Gente",title:"Quem N\xC3O contratar?",file:"Quem NA\u0303O contratar 20e1c63260bc81d9b0a5c83676cf8e20.md",role:"anti-perfil",status:"curado"},{group:"Arquitetura de Gente",title:"Quem demitir?",file:"Quem demitir 20e1c63260bc81748683e1b35bc5006c.md",role:"transi\xE7\xE3o",status:"curado"},{group:"Execu\xE7\xE3o",title:"Crescendo R\xE1pido e Certo",file:"Crescendo Ra\u0301pido e Certo 20e1c63260bc8192bb4dfdd0fe849834.md",role:"escala",status:"curado"},{group:"Execu\xE7\xE3o",title:"Da Teoria a A\xE7\xE3o",file:"Da Teoria a Ac\u0327a\u0303o 20e1c63260bc8154aa88dca139527e61.md",role:"pr\xE1tica",status:"curado"},{group:"Execu\xE7\xE3o",title:"Frameworks de Decis\xE3o",file:"Frameworks de Decisa\u0303o 20e1c63260bc81b59e22d73e75c636ba.md",role:"decis\xE3o",status:"curado"}],R=[{id:"leitura",n:"00",label:"Leitura",title:"Caderno integral."},{id:"manifesto",n:"01",label:"Manifesto",title:"Postura antes de discurso."},{id:"norte",n:"02",label:"Norte",title:"Miss\xE3o, vis\xE3o e posicionamento."},{id:"simbolos",n:"03",label:"S\xEDmbolos",title:"Lemniscata, 8 e lentes amarelas."},{id:"ciclos",n:"04",label:"Cosmologia",title:"Clareza contra piloto autom\xE1tico."},{id:"pilares",n:"05",label:"Pilares",title:"Crit\xE9rio, of\xEDcio e IA."},{id:"valores",n:"06",label:"Valores",title:"Nove virtudes operacionais."},{id:"mantras",n:"07",label:"Mantras",title:"Oito frases para repetir e viver."},{id:"mandamentos",n:"08",label:"Mandamentos",title:"Liberdade sem microgerenciamento."},{id:"gente",n:"09",label:"Gente",title:"Quem entra e quem n\xE3o entra."},{id:"execucao",n:"10",label:"Execu\xE7\xE3o",title:"Crescer r\xE1pido e certo."},{id:"decisao",n:"11",label:"Decis\xE3o",title:"Frameworks para cortar ru\xEDdo."},{id:"atlas",n:"12",label:"Atlas",title:"As 20 p\xE1ginas fonte."}],b=(window.CULTURA_LENDARIA_READINGS||[]).map(e=>{const a=x.find(r=>r.file===e.file),o=`leitura-${e.index}`;return{...e,id:o,group:(a==null?void 0:a.group)||"Fonte",role:(a==null?void 0:a.role)||"documento",status:(a==null?void 0:a.status)||"curado"}});const L=[{title:"Lemniscata",glyph:"\u221E",label:"Legado",body:"O infinito n\xE3o \xE9 conceito. \xC9 caminho. Do aprender ao ensinar, do artificial ao natural, do dar ao receber."},{title:"Oito",glyph:"8",label:"A\xE7\xE3o",body:"O infinito de p\xE9. Teoria que virou pr\xE1tica, filosofia que virou neg\xF3cio, intensidade 8 ou 80."},{title:"Lentes Amarelas",glyph:"\u25C9",label:"Vis\xE3o",body:"Tecnologia cognitiva. Aumenta contraste, reduz ru\xEDdo e mostra padr\xF5es onde antes havia massa cinza."}],$=[{title:"Intelig\xEAncia e Autoconhecimento",tag:"SER",body:"Capacidade de resolver problemas complexos com fome real de evolu\xE7\xE3o pessoal. Busca pela verdade antes de performance.",counter:"Pilar 01"},{title:"Of\xEDcio e Resultado",tag:"FAZER",body:"Trabalhar no que faz melhor. Levar interesse para o of\xEDcio, of\xEDcio para entrega e liberdade para responsabilidade.",counter:"Pilar 02"},{title:"Intelig\xEAncia Artificial",tag:"TER",body:"Usar IA como extens\xE3o do trabalho. Antes de exigir dos alunos, a equipe precisa usar no pr\xF3prio dia a dia.",counter:"Pilar 03"}],q=[["Testa IA no trabalho real","Usa desculpas"],["Assume responsabilidade","Culpa os outros"],["Registra decis\xF5es","Confia na mem\xF3ria"],["Entrega mais do que o esperado","Entrega o m\xEDnimo poss\xEDvel"],["Foca no essencial 0,8%","Dispersa em baixa relev\xE2ncia"],["Gera resultados sem mimimi","Reclama mais do que age"],["Cultiva rela\xE7\xF5es transparentes","Vive em fofoca e manipula\xE7\xE3o"],["Aprende e ensina constantemente","Guarda conhecimento para si"]],D=[{title:"Clareza",prompt:"Ser claro n\xE3o \xE9 ser rude. Clareza \xE9 gentileza.",tool:"Lanterna da Clareza"},{title:"Excel\xEAncia com Velocidade",prompt:"Fa\xE7a o melhor no tempo que tiver. Erre r\xE1pido, barato e diferente.",tool:"Rel\xF3gio 8 ou 80"},{title:"Foco no Essencial",prompt:"Pareto tr\xEAs vezes: os 0,8% que geram 51,2% dos resultados.",tool:"L\xE2mina do Corte"},{title:"Resultados sem Mimimi",prompt:"Resolva ou traga a melhor solu\xE7\xE3o. Reclamar n\xE3o move nada.",tool:"Martelo de Execu\xE7\xE3o"},{title:"Sinceridade Absoluta",prompt:"\xC9 verdadeiro? \xC9 bom? \xC9 \xFAtil? Se passar nas 3 peneiras, fale.",tool:"Espada das 3 Peneiras"},{title:"Autonomia com Colabora\xE7\xE3o",prompt:"Decis\xE3o pr\xF3pria, responsabilidade coletiva, dire\xE7\xE3o compartilhada.",tool:"Mapa da Guilda"},{title:"Empolga\xE7\xE3o Desconfort\xE1vel",prompt:"Queime seu melhor trabalho quando o pr\xF3ximo n\xEDvel exigir.",tool:"Tocha da Reinven\xE7\xE3o"},{title:"Comprometimento Total",prompt:"Depois da decis\xE3o, todos carregam o peso da execu\xE7\xE3o.",tool:"Contrato com o Infinito"},{title:"Abund\xE2ncia e Generosidade",prompt:"Entregue mais do que o esperado. Conhecimento compartilhado cresce.",tool:"Fonte de Abund\xE2ncia"}],O=[["I","Divirta-se","Cuide das tarefas sem esquecer de cuidar de voc\xEA."],["II","Aprenda algo novo todo dia","Sede de conhecimento como h\xE1bito operacional."],["III","Ensine para evoluir","Ensinar organiza o pr\xF3prio conhecimento e aumenta autonomia coletiva."],["IV","Zele pela harmonia do time","Confian\xE7a, respeito e senso de comunidade s\xE3o infraestrutura."],["V","Pense e aja como dono","Questione decis\xF5es ruins e assuma responsabilidade pelas entregas."],["VI","Espalhe generosidade e gratid\xE3o","A cola que fortalece rela\xE7\xF5es e aumenta o padr\xE3o do ambiente."],["VII","Importe-se","Trate as coisas, atividades e pessoas como se fossem suas."],["VIII","Loom no lugar de Zoom","Ass\xEDncrono antes de s\xEDncrono. Protege foco, energia e clareza."]],F=["Pessoas acima de processos.","Contexto, n\xE3o controle.","Liberdade com responsabilidade.","Excel\xEAncia sem desculpas.","Melhoria cont\xEDnua.","Transpar\xEAncia radical.","Resultado mensur\xE1vel.","Adapta\xE7\xE3o r\xE1pida.","\xC9tica inabal\xE1vel.","Dire\xE7\xE3o clara."],V=[{title:"Quem merece o manto",label:"Time",body:"Curiosidade, resili\xEAncia, bom senso, sinceridade, criatividade, coragem e autonomia respons\xE1vel.",image:"rpg/images/heroes/personagens-herois-lineup.png",alt:"Lineup de her\xF3is lend\xE1rios em estilo RPG."},{title:"Quem lidera",label:"Lideran\xE7a",body:"D\xE1 contexto, sobe o padr\xE3o, protege a integridade do time e lidera pelo exemplo.",image:"assets/photography/alan-portrait-laptop-yellow-glasses.jpg",alt:"Alan Nicolas com \xF3culos amarelos em frente ao laptop."},{title:"Quem n\xE3o entra",label:"Anti-perfil",body:"Muito esfor\xE7o e pouca entrega, talento sem alinhamento, pol\xEDtica interna, resist\xEAncia \xE0 IA e apego ao conforto.",image:"rpg/images/monsters/variacoes-monstro-nevoa-da-confusao.png",alt:"Varia\xE7\xF5es visuais da N\xE9voa da Confus\xE3o."}],P=["Clareza e alinhamento semanal.","Autonomia com responsabilidade total.","Feedback cont\xEDnuo e transparente.","Foco em resultado mensur\xE1vel.","IA aplicada no trabalho real.","Mentoria e pr\xE1tica cont\xEDnua.","Decis\xE3o informada por dados.","Experimenta\xE7\xE3o r\xE1pida.","Entrega com consequ\xEAncia real.","Capricho na execu\xE7\xE3o."],B=[{title:"Vai definir metas?",answer:"Lei do Retorno Decrescente",body:"Excesso de metas dilui foco e reduz excel\xEAncia na execu\xE7\xE3o."},{title:"Vai criar site ou landing page?",answer:"Mobile First",body:"Sempre crie primeiro para celular. A interface pequena revela o que \xE9 essencial."},{title:"Vai marcar reuni\xE3o?",answer:"Reuni\xE3o = c\xE2ncer",body:"Prefira Loom ou mensagens longas e descritivas. Se a reuni\xE3o estiver ruim, pode sair."},{title:"Vai contratar?",answer:"Teste com IA primeiro",body:"Antes de contratar, prove que a tarefa n\xE3o pode ser simplificada, automatizada ou removida com IA."}],j=`
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
`;function G(){return React.createElement("style",null,j)}function c({id:e,tone:a="paper",children:o}){return React.createElement("section",{id:e,className:`culture-section${a==="yellow"?" is-yellow":a==="warm"?" is-warm":a==="ink"?" is-ink":""}`,"data-screen-label":e},o)}function W(){return React.createElement("nav",{className:"chapter-rail","aria-label":"Cap\xEDtulos da Cultura Lend\xE1ria"},React.createElement("div",{className:"chapter-rail__track"},R.map(e=>React.createElement("a",{key:e.id,href:`#${e.id}`},React.createElement("span",{className:"n"},e.n),React.createElement("span",{className:"l"},e.label)))))}function Q(e){try{return decodeURIComponent(e)}catch(a){return e}}function C(e,a){if(/^https?:\/\//.test(a))return a;if(a.startsWith("../../../"))return"referencias/brand/diagrama-vida-lendaria-vs-vida-mediocre.jpg";const o=e.file.includes("/")?e.file.split("/").slice(0,-1).join("/"):"";return`docs/Cultura Lenda\u0301r[IA]/${o?`${o}/`:""}${a}`}function H(e,a){if(/^https?:\/\//.test(a)||a.startsWith("#"))return a;const o=e.file.includes("/")?e.file.split("/").slice(0,-1).join("/"):"",r=a.startsWith("./")?a.slice(2):a,i=r.includes("/")||!o?r:`${o}/${r}`,l=Q(i),m=b.find(p=>p.file===l||p.file===i);return m?`#${m.id}`:C(e,a)}function v(e,a,o){return e.replace(/<img[^>]*>\s*/g,"").split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g).filter(Boolean).map((l,m)=>{const p=`${a}-${m}`;if(l.startsWith("**")&&l.endsWith("**"))return React.createElement("strong",{key:p},l.slice(2,-2));if(l.startsWith("`")&&l.endsWith("`"))return React.createElement("code",{key:p},l.slice(1,-1));const h=l.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return h?React.createElement("a",{key:p,href:H(o,h[2])},h[1]):React.createElement(React.Fragment,{key:p},l)})}function w(e,a,o){return e.map((r,i)=>React.createElement(React.Fragment,{key:`${a}-${i}`},i>0?React.createElement("br",null):null,v(r,`${a}-inline-${i}`,o)))}function N(e){return/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(e)}function T(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(a=>a.trim())}function U({reading:e}){var i;const a=e.markdown.split(/\r?\n/),o=[];let r=(i=a[0])!=null&&i.startsWith("# ")?1:0;for(;r<a.length;){const l=a[r];if(!l.trim()){r+=1;continue}const m=l.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(m){o.push(React.createElement("figure",{className:"reader-image",key:`image-${r}`},React.createElement("img",{src:C(e,m[2]),alt:m[1]||e.title,loading:"lazy"}),React.createElement("figcaption",{className:"culture-caption"},m[1]||e.title))),r+=1;continue}const p=l.match(/^(#{1,6})\s+(.+)$/);if(p){const n=p[1].length,d=n<=2?"h4":n===3?"h5":"h6";o.push(React.createElement(d,{key:`heading-${r}`},v(p[2],`heading-${r}`,e))),r+=1;continue}if(l.trim().startsWith(">")){const n=[];for(;r<a.length&&a[r].trim().startsWith(">");)n.push(a[r].replace(/^\s*>\s?/,"")),r+=1;o.push(React.createElement("blockquote",{className:"reader-quote",key:`quote-${r}`},React.createElement("p",null,w(n.filter(Boolean),`quote-${r}`,e))));continue}if(l.trim().startsWith("|")&&N(a[r+1]||"")){const n=T(l);r+=2;const d=[];for(;r<a.length&&a[r].trim().startsWith("|");)d.push(T(a[r])),r+=1;o.push(React.createElement("div",{className:"reader-table-wrap",key:`table-${r}`},React.createElement("table",{className:"reader-table"},React.createElement("thead",null,React.createElement("tr",null,n.map((u,g)=>React.createElement("th",{key:`${u}-${g}`},v(u,`table-h-${r}-${g}`,e))))),React.createElement("tbody",null,d.map((u,g)=>React.createElement("tr",{key:`row-${r}-${g}`},u.map((A,k)=>React.createElement("td",{key:`cell-${r}-${g}-${k}`},v(A,`table-${r}-${g}-${k}`,e)))))))));continue}if(l.match(/^(\s*)([-*]|\d+\.)\s+(.+)$/)){const n=[];for(;r<a.length;){const d=a[r].match(/^(\s*)([-*]|\d+\.)\s+(.+)$/);if(!d)break;n.push({level:Math.floor(d[1].length/4),marker:d[2],text:d[3]}),r+=1}o.push(React.createElement("div",{className:"reader-list-block",key:`list-${r}`},n.map((d,u)=>React.createElement("div",{className:"reader-list-row",key:`list-${r}-${u}`,style:{paddingLeft:d.level*28}},React.createElement("span",{className:"marker"},d.marker),React.createElement("span",null,v(d.text,`list-${r}-${u}`,e))))));continue}const y=[];for(;r<a.length;){const n=a[r];if(!n.trim()||/^(#{1,6})\s+/.test(n)||/^!\[([^\]]*)\]\(([^)]+)\)$/.test(n)||n.trim().startsWith(">")||n.match(/^(\s*)([-*]|\d+\.)\s+(.+)$/)||n.trim().startsWith("|")&&N(a[r+1]||""))break;y.push(n.trim()),r+=1}o.push(React.createElement("p",{key:`paragraph-${r}`},w(y,`paragraph-${r}`,e)))}return React.createElement("div",{className:"reader-body"},o)}function Y(){return React.createElement(c,{id:"leitura",tone:"paper"},React.createElement(s,null,React.createElement(t,{variant:"bare"},"00 \xB7 CADERNO INTEGRAL"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"As 20 p\xE1ginas completas para leitura."),React.createElement("p",{className:"culture-copy is-muted",style:{marginTop:28}},"Esta \xE9 a camada integral do deck: conte\xFAdo fonte preservado, naveg\xE1vel e leg\xEDvel. A s\xEDntese visual continua abaixo, mas a cultura agora n\xE3o depende de resumo."),React.createElement("div",{className:"reader-layout"},React.createElement("aside",{className:"reader-index","aria-label":"\xCDndice das fontes completas"},React.createElement("div",{className:"reader-index__head"},React.createElement("div",{className:"culture-mono"},"\xCDNDICE COMPLETO")),b.map(e=>React.createElement("a",{key:e.id,href:`#${e.id}`},React.createElement("span",{className:"num"},String(e.index).padStart(2,"0")),React.createElement("span",null,React.createElement("span",{className:"title"},e.title),React.createElement("span",{className:"culture-mono meta"},e.group," \xB7 ",e.lineCount," linhas"))))),React.createElement("div",{className:"reader-stack"},b.map(e=>React.createElement("article",{className:"reader-article",id:e.id,key:e.file},React.createElement("header",{className:"reader-article__head"},React.createElement("div",{className:"reader-article__num"},String(e.index).padStart(2,"0")),React.createElement("div",{className:"reader-article__title"},React.createElement(t,{variant:"bare",style:{color:"var(--color-yellow)"}},e.group," \xB7 ",e.role),React.createElement("h3",null,e.title,"."),React.createElement("div",{className:"culture-mono",style:{color:"var(--color-mute-soft)",marginTop:14}},e.status," \xB7 fonte: ",e.file))),React.createElement(U,{reading:e})))))))}function Z(){return React.createElement("header",{className:"culture-hero"},React.createElement(s,null,React.createElement("div",{className:"culture-hero__inner"},React.createElement("div",null,React.createElement("div",{className:"culture-meta-row"},React.createElement(t,{variant:"dark"},"CULTURA LEND\xC1RIA"),React.createElement(t,{variant:"outline"},"20 P\xC1GINAS FONTE"),React.createElement(t,{variant:"outline"},"DECK VIVO")),React.createElement("h1",{className:"culture-hero__title"},"Cultura ",React.createElement("mark",null,"Lend\xE1ria"),"."),React.createElement("p",{className:"culture-lead"},"N\xE3o \xE9 handbook. N\xE3o \xE9 blog. \xC9 o mapa da nossa forma de pensar, decidir, contratar, liderar e executar usando IA sem teatro."),React.createElement("div",{style:{display:"flex",gap:16,flexWrap:"wrap",marginTop:36}},React.createElement(f,{variant:"dark",size:"lg",arrow:!0,block:!0,as:"a",href:"#manifesto"},"Abrir o deck"),React.createElement(f,{variant:"secondary",size:"lg",as:"a",href:"rpg/cacada-mediocridade.html"},"Ver RPG interno \u2192"))),React.createElement("figure",{className:"culture-hero__visual"},React.createElement("img",{src:"referencias/brand/diagrama-vida-lendaria-vs-vida-mediocre.jpg",alt:"Diagrama Vida Lend\xE1ria versus Vida Med\xEDocre."}),React.createElement("figcaption",{className:"culture-hero__caption"},React.createElement("span",null,"// diagrama can\xF4nico"),React.createElement("span",null,"Vida Lend\xE1ria vs. Vida Med\xEDocre"))))))}function J(){return React.createElement(c,{id:"manifesto",tone:"paper"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro",style:{gridTemplateColumns:"minmax(0, .9fr) minmax(0, 1.1fr)",alignItems:"start"}},React.createElement("div",null,React.createElement(t,{variant:"bare"},"01 \xB7 MANIFESTO"),React.createElement("h2",{className:"culture-title"},"O chamado aos que recusam a mediocridade."),React.createElement("p",{className:"culture-copy is-muted",style:{marginTop:28}},"O manifesto n\xE3o explica a empresa. Ele define postura: inconformismo, excel\xEAncia e conhecimento posto em a\xE7\xE3o.")),React.createElement("div",{className:"manifesto-lines"},["Por 200 mil anos, fomos ref\xE9ns da biologia.","Hoje, a IA mudou o custo de pensar e produzir.","\xC9 para quem prefere testar a repetir.","Conhecimento parado n\xE3o vale nada.","Melhoramos o trabalho toda semana."].map((a,o)=>React.createElement("div",{className:"manifesto-line",key:a},React.createElement("span",{className:"idx"},String(o+1).padStart(2,"0")),React.createElement("span",{className:"txt"},a)))))))}function K(){return React.createElement(c,{id:"norte",tone:"warm"},React.createElement(s,null,React.createElement("div",{className:"mission-board"},React.createElement("div",{className:"mission-statement"},React.createElement(t,{variant:"bare",style:{color:"var(--color-yellow)"}},"02 \xB7 NORTE"),React.createElement("h3",null,"Juntar gente boa para construir com IA."),React.createElement("p",{className:"culture-copy",style:{marginTop:28,color:"var(--color-paper)"}},"Para criar solu\xE7\xF5es, aulas e neg\xF3cios que resolvem problemas reais. Essa frase filtra produto, lideran\xE7a, contrata\xE7\xE3o, conte\xFAdo e comunidade.")),React.createElement("div",{className:"culture-deck-card is-yellow"},React.createElement(t,{variant:"dark"},"POSICIONAMENTO"),React.createElement("h3",{style:{marginTop:20}},"Aula, pr\xE1tica e comunidade."),React.createElement("p",{className:"culture-card-copy"},"A Academia Lend\xE1r[IA] coloca IA no trabalho de quem cria, vende, lidera ou opera. A vis\xE3o \xE9 simples: formar pessoas que usam IA para produzir melhor."),React.createElement("div",{className:"culture-mono",style:{marginTop:28,borderTop:"2px solid var(--color-ink)",paddingTop:14}},"Fonte: Miss\xE3o, Vis\xE3o e Posicionamento")))))}function X(){return React.createElement(c,{id:"simbolos",tone:"yellow"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro",style:{gridTemplateColumns:"minmax(0, .8fr) minmax(0, 1.2fr)",alignItems:"end",marginBottom:56}},React.createElement("div",null,React.createElement(t,{variant:"dark"},"03 \xB7 S\xCDMBOLOS"),React.createElement("h2",{className:"culture-title",style:{marginTop:20}},"Forma antes de ru\xEDdo.")),React.createElement("p",{className:"culture-copy"},"Sem forma, cultura vira frase solta. A nossa forma \xE9 clara: lemniscata, n\xFAmero 8, lentes amarelas, brackets, tocha e rituais de reconhecimento.")),React.createElement("div",{className:"symbol-grid"},L.map((e,a)=>React.createElement("article",{className:`culture-deck-card${a===1?" is-ink":""}`,key:e.title},React.createElement(t,{variant:a===1?"bare":"dark",style:a===1?{color:"var(--color-yellow)"}:void 0},e.label),React.createElement("span",{className:"symbol-glyph"},e.glyph),React.createElement("h3",null,e.title,"."),React.createElement("p",{className:"culture-card-copy"},e.body))))))}function ee(){return React.createElement(c,{id:"ciclos",tone:"paper"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro",style:{gridTemplateColumns:"minmax(0, .8fr) minmax(0, 1.2fr)",alignItems:"end",marginBottom:48}},React.createElement("div",null,React.createElement(t,{variant:"bare"},"04 \xB7 COSMOLOGIA"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"Toda decis\xE3o alimenta um dos lobos.")),React.createElement("p",{className:"culture-copy is-muted"},"A cultura torna vis\xEDvel a escolha di\xE1ria: clareza ou confus\xE3o, a\xE7\xE3o ou in\xE9rcia, dire\xE7\xE3o ou piloto autom\xE1tico.")),React.createElement("div",{className:"cycle-board"},React.createElement("div",{className:"cycle-panel"},React.createElement(t,{variant:"dark"},"VIDA LEND\xC1RIA"),React.createElement("h3",{className:"culture-title",style:{fontSize:"clamp(42px, 6vw, 86px)",marginTop:18}},"Ciclo virtuoso."),React.createElement("div",{className:"cycle-loop"},["Clareza","Fazer","Realiza\xE7\xE3o","Ter","Liberdade","Ser"].map(e=>React.createElement("div",{className:"cycle-node",key:e},e)))),React.createElement("div",{className:"cycle-panel is-dark"},React.createElement(t,{variant:"bare",style:{color:"var(--color-yellow)"}},"VIDA MED\xCDOCRE"),React.createElement("h3",{className:"culture-title",style:{fontSize:"clamp(42px, 6vw, 86px)",marginTop:18,color:"var(--color-paper)"}},"Ciclo vicioso."),React.createElement("div",{className:"cycle-loop"},["Confus\xE3o","Ser","Corrida de Ratos","Fazer","Frustra\xE7\xE3o","Ter"].map(e=>React.createElement("div",{className:"cycle-node",key:e},e))))),React.createElement("div",{className:"vs-table","aria-label":"Comparativo Lend\xE1rio versus Med\xEDocre"},React.createElement("div",{className:"vs-row"},React.createElement("div",null,"Lend\xE1rio"),React.createElement("div",null,"Med\xEDocre")),q.map(([e,a])=>React.createElement("div",{className:"vs-row",key:e},React.createElement("div",null,e),React.createElement("div",null,a))))))}function ae(){return React.createElement(c,{id:"pilares",tone:"ink"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro",style:{gridTemplateColumns:"minmax(0, .9fr) minmax(0, 1.1fr)",alignItems:"end",marginBottom:56}},React.createElement("div",null,React.createElement(t,{variant:"bare",style:{color:"var(--color-yellow)"}},"05 \xB7 TR\xCAS PILARES"),React.createElement("h2",{className:"culture-title is-wide",style:{color:"var(--color-paper)",marginTop:18}},"A funda\xE7\xE3o da Vida Lend\xE1ria.")),React.createElement("p",{className:"culture-copy",style:{color:"var(--color-paper)"}},"Os 3 pilares s\xE3o crit\xE9rio de pertencimento. Se algum estiver ausente, n\xE3o estamos diante de algu\xE9m alinhado \xE0 vis\xE3o.")),React.createElement("div",{className:"pillar-grid"},$.map((e,a)=>React.createElement("article",{className:`culture-deck-card${a===1?" is-yellow":""}`,key:e.title},React.createElement("div",{className:"culture-mono",style:{display:"flex",justifyContent:"space-between",gap:12}},React.createElement("span",null,e.counter),React.createElement("span",null,e.tag)),React.createElement("h3",{style:{marginTop:22}},e.title,"."),React.createElement("p",{className:"culture-card-copy"},e.body))))))}function re(){return React.createElement(c,{id:"valores",tone:"warm"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro is-even",style:{gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",alignItems:"end",marginBottom:56}},React.createElement("div",null,React.createElement(t,{variant:"bare"},"06 \xB7 VALORES"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"Valores que viram ferramenta.")),React.createElement("p",{className:"culture-copy is-muted"},"Falar de valores \xE9 f\xE1cil. Dif\xEDcil \xE9 vivenci\xE1-los. Aqui cada valor vira um artefato de decis\xE3o, um item de invent\xE1rio e uma pergunta de comportamento.")),React.createElement("div",{className:"values-grid"},D.map((e,a)=>React.createElement("article",{className:`culture-deck-card value-card${a%4===1?" is-yellow":""}`,key:e.title},React.createElement(t,{variant:a%4===1?"dark":"bare"},String(a+1).padStart(2,"0")),React.createElement("h3",{style:{marginTop:18}},e.title,"."),React.createElement("p",{className:"culture-card-copy"},e.prompt),React.createElement("div",{className:"tool"},React.createElement("div",{className:"culture-mono"},"ITEM EQUIPADO"),React.createElement("strong",{style:{fontFamily:"var(--font-sans)",display:"block",marginTop:6}},e.tool)))))))}function oe(){return React.createElement(c,{id:"mantras",tone:"paper"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro",style:{gridTemplateColumns:"minmax(0, .9fr) minmax(0, 1.1fr)",alignItems:"end",marginBottom:56}},React.createElement("div",null,React.createElement(t,{variant:"bare"},"07 \xB7 MANTRAS"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"O \xF3bvio precisa ser repetido.")),React.createElement("p",{className:"culture-copy is-muted"},"Mantras s\xE3o a vers\xE3o di\xE1ria dos valores. N\xE3o s\xE3o frases para p\xF4ster. S\xE3o comandos de comportamento que aparecem em decis\xF5es pequenas.")),React.createElement("div",{className:"mantra-track"},O.map(([e,a,o])=>React.createElement("article",{className:"mantra-card",key:a},React.createElement("span",{className:"roman"},e),React.createElement("h3",{className:"culture-deck-card h3",style:{fontFamily:"var(--font-display)",fontSize:28,lineHeight:1,textTransform:"uppercase",margin:0}},a,"."),React.createElement("p",{className:"culture-card-copy",style:{marginTop:"auto"}},o))))))}function ie(){return React.createElement(c,{id:"mandamentos",tone:"yellow"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro",style:{gridTemplateColumns:"minmax(0, .8fr) minmax(0, 1.2fr)",alignItems:"end",marginBottom:56}},React.createElement("div",null,React.createElement(t,{variant:"dark"},"08 \xB7 MANDAMENTOS"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"Contexto, n\xE3o controle.")),React.createElement("p",{className:"culture-copy"},"Os mandamentos existem para evitar o falso rem\xE9dio do microgerenciamento. Menos regra r\xEDgida, mais clareza de julgamento humano.")),React.createElement("div",{className:"commandment-wall"},F.map((e,a)=>React.createElement("article",{className:"commandment",key:e},React.createElement("span",{className:"n"},String(a+1).padStart(2,"0")),React.createElement("span",{className:"t"},e))))))}function te(){return React.createElement(c,{id:"gente",tone:"warm"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro",style:{gridTemplateColumns:"minmax(0, .8fr) minmax(0, 1.2fr)",alignItems:"end",marginBottom:56}},React.createElement("div",null,React.createElement(t,{variant:"bare"},"09 \xB7 ARQUITETURA DE GENTE"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"O time \xE9 a maior vantagem competitiva.")),React.createElement("p",{className:"culture-copy is-muted"},"A cultura define quem entra, quem lidera, quem n\xE3o entra e quando uma transi\xE7\xE3o \xE9 necess\xE1ria. Manter desalinhamento n\xE3o \xE9 gentileza.")),React.createElement("div",{className:"people-grid"},V.map(e=>React.createElement("article",{className:"culture-deck-card people-card",key:e.title},React.createElement("img",{src:e.image,alt:e.alt}),React.createElement("div",{className:"body"},React.createElement(t,{variant:"bare"},e.label),React.createElement("h3",{style:{marginTop:16}},e.title,"."),React.createElement("p",{className:"culture-card-copy"},e.body)))))))}function le(){return React.createElement(c,{id:"execucao",tone:"ink"},React.createElement(s,null,React.createElement("div",{className:"growth-board"},React.createElement("div",null,React.createElement(t,{variant:"bare",style:{color:"var(--color-yellow)"}},"10 \xB7 CRESCENDO R\xC1PIDO E CERTO"),React.createElement("h2",{className:"culture-title is-wide",style:{color:"var(--color-paper)",marginTop:18}},"Velocidade com trilho."),React.createElement("p",{className:"culture-copy",style:{color:"var(--color-paper)",marginTop:28}},"Crescer devagar sem errar \xE9 f\xE1cil. Crescer r\xE1pido errando caro tamb\xE9m. Nosso padr\xE3o \xE9 crescer r\xE1pido e certo, com lideran\xE7a distribu\xEDda e aprendizagem p\xFAblica."),React.createElement("div",{style:{marginTop:32}},React.createElement(f,{variant:"primary",size:"lg",as:"a",href:"#decisao",arrow:!0},"Ver frameworks"))),React.createElement("div",{className:"growth-list"},P.map((e,a)=>React.createElement("div",{className:"growth-item",key:e},React.createElement("span",{className:"n"},String(a+1).padStart(2,"0")),React.createElement("span",{className:"t"},e)))))))}function ne(){return React.createElement(c,{id:"decisao",tone:"paper"},React.createElement(s,null,React.createElement("div",{className:"culture-grid culture-section-intro is-even",style:{gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr)",alignItems:"end",marginBottom:56}},React.createElement("div",null,React.createElement(t,{variant:"bare"},"11 \xB7 FRAMEWORKS DE DECIS\xC3O"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"Corte o ru\xEDdo antes que ele vire processo.")),React.createElement("p",{className:"culture-copy is-muted"},"A cultura tamb\xE9m aparece nas pequenas regras operacionais: menos metas, mobile first, ass\xEDncrono antes de reuni\xE3o, IA antes de headcount.")),React.createElement("div",{className:"framework-grid"},B.map((e,a)=>React.createElement("article",{className:`culture-deck-card${a===1?" is-yellow":""}`,key:e.title},React.createElement(t,{variant:a===1?"dark":"bare"},e.title),React.createElement("h3",{style:{marginTop:18}},e.answer,"."),React.createElement("p",{className:"culture-card-copy"},e.body)))),React.createElement("div",{className:"culture-grid",style:{gridTemplateColumns:"1fr 1fr",marginTop:48}},React.createElement("figure",{className:"framework-shot"},React.createElement("img",{src:"docs/Cultura Lenda\u0301r[IA]/Frameworks de Decisa\u0303o/Captura_de_Tela_2024-07-27_as_09.57.10.jpg",alt:"Refer\xEAncia visual de consumo mobile do YouTube."}),React.createElement("figcaption",{className:"culture-caption",style:{marginTop:12}},"Fonte visual: Mobile First para YouTube")),React.createElement("figure",{className:"framework-shot"},React.createElement("img",{src:"docs/Cultura Lenda\u0301r[IA]/Frameworks de Decisa\u0303o/Captura_de_Tela_2024-07-27_as_10.08.21.jpg",alt:"Refer\xEAncia visual de consumo mobile de sites."}),React.createElement("figcaption",{className:"culture-caption",style:{marginTop:12}},"Fonte visual: Mobile First para sites")))))}function se(){const e=S(()=>["Todos",...Array.from(new Set(x.map(i=>i.group)))],[]),[a,o]=z("Todos"),r=a==="Todos"?x:x.filter(i=>i.group===a);return React.createElement(c,{id:"atlas",tone:"warm"},React.createElement(s,null,React.createElement(t,{variant:"bare"},"12 \xB7 ATLAS DE FONTES"),React.createElement("h2",{className:"culture-title is-wide",style:{marginTop:18}},"Todas as 20 p\xE1ginas est\xE3o representadas."),React.createElement("p",{className:"culture-copy is-muted",style:{marginTop:28}},"Este atlas confere a pasta Notion exportada contra o deck vivo. Cada p\xE1gina tem uma fun\xE7\xE3o no sistema, mesmo quando o export atual trouxe apenas t\xEDtulo."),React.createElement("div",{className:"source-toolbar",role:"toolbar","aria-label":"Filtrar fontes por grupo"},e.map(i=>React.createElement("button",{key:i,type:"button",className:a===i?"is-active":"",onClick:()=>o(i)},i))),React.createElement("div",{className:"source-grid"},r.map((i,l)=>React.createElement("article",{className:`source-card${i.status==="fonte sem corpo"?" is-empty":""}`,key:i.file},React.createElement("div",{className:"culture-mono",style:{display:"flex",justifyContent:"space-between",gap:12}},React.createElement("span",null,String(l+1).padStart(2,"0")),React.createElement("span",null,i.group)),React.createElement("h4",null,i.title,"."),React.createElement("div",{className:"culture-mono"},i.role," \xB7 ",i.status),React.createElement("div",{className:"culture-mono file"},i.file))))))}function ce(){return React.createElement(c,{id:"fecho",tone:"ink"},React.createElement(s,null,React.createElement("div",{className:"final-board"},React.createElement(t,{variant:"bare",style:{color:"var(--color-yellow)"}},"CONSTRUINDO O INFINITO, HOJE"),React.createElement("h2",{className:"culture-kilo",style:{marginTop:20}},"Honre o conhecimento com ",React.createElement("mark",null,"a\xE7\xE3o"),"."),React.createElement("p",{className:"culture-copy",style:{color:"var(--color-paper)",margin:"34px auto 0"}},"A cultura n\xE3o vive no arquivo. Vive no gesto repetido: clareza, coragem, IA, entrega, generosidade, responsabilidade e execu\xE7\xE3o."),React.createElement("div",{style:{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap",marginTop:40}},React.createElement(f,{variant:"primary",size:"lg",as:"a",href:"manifesto/index.html",arrow:!0},"Ler manifesto"),React.createElement(f,{variant:"ghost",size:"lg",as:"a",href:"rpg/cacada-mediocridade.html",style:{color:"var(--color-yellow)"}},"Entrar na ca\xE7ada \u2192")))))}function de(){return React.createElement("div",{className:"culture-shell"},React.createElement(G,null),React.createElement(M,null),React.createElement(I,{active:"Cultura",basePath:"",showCta:!1}),React.createElement("main",{id:"conteudo-principal",className:"culture-page"},React.createElement(Z,null),React.createElement(W,null),React.createElement(Y,null),React.createElement(J,null),React.createElement(K,null),React.createElement(X,null),React.createElement(E,{items:["Lend\xE1rio","Clareza","A\xE7\xE3o","IA First","\u221E","8 ou 80"]}),React.createElement(ee,null),React.createElement(ae,null),React.createElement(re,null),React.createElement(oe,null),React.createElement(ie,null),React.createElement(te,null),React.createElement(le,null),React.createElement(ne,null),React.createElement(se,null),React.createElement(ce,null)),React.createElement(_,{basePath:""}))}ReactDOM.createRoot(document.getElementById("app")).render(React.createElement(de,null));})();
