# Minimal Brutalist Footer

## 🧱 Arquitetura e Visão Geral
O objetivo deste refatoramento foi mesclar a estrutura de "Minimal Footer" (grid com links organizados e seções claras) com o nosso Branding **Brutalism**. 

- **Foco:** Contraste extremo, linhas fortes, fontes mono e interações secas (sem animações "fofas", tudo muito direto).
- **Abordagem:** Remoção da complexidade do React/Tailwind original e conversão direta para nosso Vanilla CSS com variáveis nativas do design system (`--color-ink`, `--color-paper`, `--color-yellow`).

---

## 📐 Anatomia do Footer

### 1. O Contêiner e o Grid Principal
- **Camada 0:** Fundo sólido `var(--color-paper)` que "dá peso" à página.
- **Camada 1 (Background Efeito):** Um fundo de `radial-gradient` escuro e opaco no topo, puxando sutilmente para a linguagem brutalista mas mantendo o minimalismo. (Simula o radial-gradient do exemplo).
- **Camada 2 (O `wrap`):** Um container limitador de largura (max 1000px).
    - **Bordas Grossas:** Ele carrega duas bordas laterais (`border-left` e `border-right: 2px solid --color-ink`) em desktop, para "encaixarotar" o conteúdo, muito comum no brutalismo.
    - **Grid de 3 Colunas:** `grid-template-columns: 4fr 1fr 1fr`. O lado esquerdo é a marca e o direito são as colunas de links.
    - O Grid colapsa para `1fr 1fr` e a marca passa a ocupar toda a linha de cima no Mobile.

### 2. A Identidade Visual (Lado Esquerdo)
- Logo iconizado em SVG puro (usando `lucide-grid-2x2-plus` como placeholder bruto).
- Um texto base `font-family: var(--font-mono)` para reforçar a estética de terminal/interface industrial.
- **Ícones Sociais em Caixas (Box-Shadow):**
    - **Estado Normal:** Fundo `paper`, borda sólida 2px `ink`, ícones monocromáticos (stroke).
    - **Estado Hover:** Pula bruscamente para o fundo `yellow`, deslocando 2px pra cima com um "hard shadow" inferior (box-shadow sólido sem blur) de `var(--color-ink)`. **Interação brutalista pura**.

### 3. As Colunas de Navegação (Recursos & Empresa)
- **Títulos:** Minimalistas, tamanho de fonte muito pequeno (`11px`), `font-mono` em uppercase com espaçamento entrelinhas frouxo (letter-spacing loose). Eles não gritam, eles "rotulam".
- **Links:** Fonte `var(--font-sans)`, legível e densa.
    - **Hover:** Ficam `var(--color-yellow)` com um sublinhado espesso (`text-decoration-thickness: 2px`). Sem transições demoradas, puro contraste.

### 4. Linhas Divisórias (Dividers)
A estrutura é separada verticalmente por `.footer-divider` — linhas sólidas e grossas (2px) que "rasgam" a interface de fora a fora, criando compartimentos herméticos de conteúdo.

### 5. Sign-off / Copyright (Rodapé do Rodapé)
- Cópia original do MinimalFooter para os termos legais.
- No canto direito, a frase de "assinar" a marca: "Construindo o infinito, hoje. [∞]" onde o símbolo infinito é desenhado nativamente com a máscara CSS SVG, aproveitando a cor local.

## 🚀 O Porquê das Escolhas
1. **Sem Flex/Grid Mágicos Desnecessários:** No brutalismo, o layout deve parecer montado à mão. Por isso, usamos o "encaixotamento" por bordas pesadas e não dependemos de sombras suaves para dar hierarquia. O uso da `var(--color-ink)` é predominante como tinta preta no papel para dar contraste e guiar o olho pelas secções do footer.
2. **Vanilla em vez de Framework:** Reproduzimos perfeitamente o comportamento do seu componente React e seus ícones do `lucide-react` injetando SVGs inline puristas e grid CSS nativo, preservando a performance sem adicionar Javascript.
