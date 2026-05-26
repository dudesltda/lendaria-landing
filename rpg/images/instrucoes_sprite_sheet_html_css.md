# Instruções — Sprite Sheet Técnico para HTML/CSS

Este documento consolida as instruções para gerar, salvar e usar o sprite sheet técnico de assets do universo **Caçada à Mediocridade** em HTML/CSS.

## Objetivo

Criar um sprite sheet técnico, não uma galeria visual.

A diferença:

- **Asset sheet visual:** bonito para apresentação, com nomes, números, composição livre.
- **Sprite sheet para HTML:** grade rígida, cada ícone no mesmo tamanho, sem texto externo e com coordenadas previsíveis.

## Especificação do arquivo

```markdown
Arquivo: legendary-tools-sprite.png
Grade: 8 colunas × 6 linhas
Total: 48 assets
Cada célula: 256 × 256 px
Tamanho final: 2048 × 1536 px
Fundo: transparente ou bege sólido #F2EBDA
Padding interno por ícone: 32 px
Estilo: preto/branco com amarelo pontual
```

Cada asset precisa ficar **centralizado dentro da célula**, sem encostar nas bordas.

Nada de número, título ou legenda dentro do sprite.  
O nome entra no HTML, não na imagem.

---

## Prompt para gerar o sprite

```markdown
Crie um sprite sheet técnico para uso em HTML/CSS com assets do universo “Caçada à Mediocridade”.

Formato:
- Sprite sheet em grade rígida.
- 8 colunas por 6 linhas.
- 48 assets no total.
- Cada célula deve ter exatamente o mesmo tamanho visual.
- Cada ícone deve estar centralizado dentro da própria célula.
- Deixar bastante margem interna para recorte.
- Fundo transparente, ou fundo bege editorial #F2EBDA se transparência não for possível.
- Não criar página.
- Não criar mockup.
- Não criar cards.
- Não criar labels fora dos objetos.
- Não adicionar números.
- Não adicionar nomes abaixo dos ícones.
- Não juntar objetos em uma cena.
- Cada item deve funcionar isoladamente como ícone/asset recortável.

Estilo:
Playful Brutalist Doodle UI.
Doodle preto e branco, linha grossa, leve imperfeição, visual limpo, brutalista, editorial e lúdico.
Usar amarelo ácido/dourado apenas em detalhes importantes.
Sem sombras realistas.
Sem textura pesada.
Sem perspectiva exagerada.
Cada asset deve parecer desenhado no mesmo sistema visual.

Assets, em ordem da esquerda para direita, de cima para baixo:

1. Blueprint enrolado
2. Blueprint aberto
3. Óculos amarelos
4. Escudo do Foco com “NÃO”
5. Mapa do Horizonte / quadro dos sonhos
6. Lanterna da Clareza
7. Tesoura do Corte
8. Livro Vivo

9. Chave de Protocolo com etiqueta “SISTEMA”
10. Compasso da Autoevolução
11. Botão Ship
12. Ampulheta da Presença
13. Caderno Backlog Frio com “DEPOIS”
14. Placa Modo Avião
15. Régua do Essencial
16. Carimbo Escolha Lendária carimbando o símbolo do infinito

17. Lupa da Clareza
18. Martelo de Implementação
19. Mochila do Explorador
20. Estrela-guia
21. Símbolo do Infinito
22. Símbolo da Confusão, rabisco circular com seta vertical atravessando
23. IA Familiar, pequena criatura meio chama, meio cursor, meio estrela
24. Baú de Recompensa

25. Post-it
26. Clip
27. Lápis
28. Caneta e marca-texto
29. Lista de Foco
30. Alvo Essencial
31. Marco de Conquista
32. Ponte de Transição

33. Bateria da Energia
34. Peça do Sistema
35. Caminho Claro
36. Direção Escolhida
37. Diálogo Interno
38. Mensagem da Vida
39. Mente Clara
40. Coração Presente

41. Comunidade de Apoio
42. Evolução Contínua
43. Ciclo de Revisão
44. Engrenagem do Sistema
45. Impulso de Ação
46. Bloqueio de Ruído
47. Caixa de Possibilidades
48. Próxima Versão

Regras simbólicas:
- O símbolo do infinito é positivo e reservado para heróis, evolução e Vida Lendária.
- O símbolo da confusão deve ser claramente diferente do infinito.
- Inimigos não aparecem neste sprite.
- Heróis humanos não aparecem neste sprite.
- A IA Familiar pode aparecer como companion pequeno, simpático e não dominante.
- O carimbo deve carimbar o símbolo do infinito, não estrela.

Resultado esperado:
Uma única imagem sprite sheet, limpa, organizada, pronta para ser usada em HTML/CSS por background-position.

```

---

## Ordem oficial dos assets

| # | Slug CSS | Nome | Coluna | Linha | Background position em 128px |
|---:|---|---|---:|---:|---|
| 01 | `blueprint-roll` | Blueprint enrolado | 0 | 0 | `0px 0px` |
| 02 | `blueprint-open` | Blueprint aberto | 1 | 0 | `-128px 0px` |
| 03 | `yellow-glasses` | Óculos amarelos | 2 | 0 | `-256px 0px` |
| 04 | `focus-shield` | Escudo do Foco | 3 | 0 | `-384px 0px` |
| 05 | `horizon-map` | Mapa do Horizonte | 4 | 0 | `-512px 0px` |
| 06 | `clarity-lantern` | Lanterna da Clareza | 5 | 0 | `-640px 0px` |
| 07 | `cut-scissors` | Tesoura do Corte | 6 | 0 | `-768px 0px` |
| 08 | `living-book` | Livro Vivo | 7 | 0 | `-896px 0px` |
| 09 | `protocol-key` | Chave de Protocolo | 0 | 1 | `0px -128px` |
| 10 | `autoevolution-compass` | Compasso da Autoevolução | 1 | 1 | `-128px -128px` |
| 11 | `ship-button` | Botão Ship | 2 | 1 | `-256px -128px` |
| 12 | `presence-hourglass` | Ampulheta da Presença | 3 | 1 | `-384px -128px` |
| 13 | `cold-backlog-notebook` | Caderno Backlog Frio | 4 | 1 | `-512px -128px` |
| 14 | `airplane-mode-sign` | Placa Modo Avião | 5 | 1 | `-640px -128px` |
| 15 | `essential-ruler` | Régua do Essencial | 6 | 1 | `-768px -128px` |
| 16 | `legendary-choice-stamp` | Carimbo Escolha Lendária | 7 | 1 | `-896px -128px` |
| 17 | `clarity-magnifier` | Lupa da Clareza | 0 | 2 | `0px -256px` |
| 18 | `implementation-hammer` | Martelo de Implementação | 1 | 2 | `-128px -256px` |
| 19 | `explorer-backpack` | Mochila do Explorador | 2 | 2 | `-256px -256px` |
| 20 | `guiding-star` | Estrela-guia | 3 | 2 | `-384px -256px` |
| 21 | `infinity-symbol` | Símbolo do Infinito | 4 | 2 | `-512px -256px` |
| 22 | `confusion-symbol` | Símbolo da Confusão | 5 | 2 | `-640px -256px` |
| 23 | `ai-familiar` | IA Familiar | 6 | 2 | `-768px -256px` |
| 24 | `reward-chest` | Baú de Recompensa | 7 | 2 | `-896px -256px` |
| 25 | `post-it` | Post-it | 0 | 3 | `0px -384px` |
| 26 | `paperclip` | Clip | 1 | 3 | `-128px -384px` |
| 27 | `pencil` | Lápis | 2 | 3 | `-256px -384px` |
| 28 | `pen-highlighter` | Caneta e marca-texto | 3 | 3 | `-384px -384px` |
| 29 | `focus-list` | Lista de Foco | 4 | 3 | `-512px -384px` |
| 30 | `essential-target` | Alvo Essencial | 5 | 3 | `-640px -384px` |
| 31 | `achievement-flag` | Marco de Conquista | 6 | 3 | `-768px -384px` |
| 32 | `transition-bridge` | Ponte de Transição | 7 | 3 | `-896px -384px` |
| 33 | `energy-battery` | Bateria da Energia | 0 | 4 | `0px -512px` |
| 34 | `system-piece` | Peça do Sistema | 1 | 4 | `-128px -512px` |
| 35 | `clear-path` | Caminho Claro | 2 | 4 | `-256px -512px` |
| 36 | `chosen-direction` | Direção Escolhida | 3 | 4 | `-384px -512px` |
| 37 | `inner-dialogue` | Diálogo Interno | 4 | 4 | `-512px -512px` |
| 38 | `life-message` | Mensagem da Vida | 5 | 4 | `-640px -512px` |
| 39 | `clear-mind` | Mente Clara | 6 | 4 | `-768px -512px` |
| 40 | `present-heart` | Coração Presente | 7 | 4 | `-896px -512px` |
| 41 | `support-community` | Comunidade de Apoio | 0 | 5 | `0px -640px` |
| 42 | `continuous-evolution` | Evolução Contínua | 1 | 5 | `-128px -640px` |
| 43 | `review-cycle` | Ciclo de Revisão | 2 | 5 | `-256px -640px` |
| 44 | `system-gear` | Engrenagem do Sistema | 3 | 5 | `-384px -640px` |
| 45 | `action-impulse` | Impulso de Ação | 4 | 5 | `-512px -640px` |
| 46 | `noise-block` | Bloqueio de Ruído | 5 | 5 | `-640px -640px` |
| 47 | `possibility-box` | Caixa de Possibilidades | 6 | 5 | `-768px -640px` |
| 48 | `next-version` | Próxima Versão | 7 | 5 | `-896px -640px` |

---

## Como usar no HTML

```html
<div class="legendary-sprite legendary-sprite--yellow-glasses" aria-hidden="true"></div>
<div class="legendary-sprite legendary-sprite--blueprint-roll" aria-hidden="true"></div>
<div class="legendary-sprite legendary-sprite--focus-shield" aria-hidden="true"></div>
```

Exemplo com texto acessível:

```html
<div class="tool-card">
  <span class="legendary-sprite legendary-sprite--yellow-glasses" aria-hidden="true"></span>
  <h3>Óculos Amarelos</h3>
  <p>Permitem ver clareza onde outros veem ruído.</p>
</div>
```

---

## CSS pronto

```css
/* legendary-tools-sprite.css */

:root {
  --legendary-sprite-url: url("/assets/legendary-tools-sprite.png");
  --legendary-sprite-display-size: 128px;
  --legendary-sprite-bg-width: 1024px;
  --legendary-sprite-bg-height: 768px;
}

.legendary-sprite {
  display: inline-block;
  width: var(--legendary-sprite-display-size);
  height: var(--legendary-sprite-display-size);
  background-image: var(--legendary-sprite-url);
  background-repeat: no-repeat;
  background-size: var(--legendary-sprite-bg-width) var(--legendary-sprite-bg-height);
  vertical-align: middle;
}


.legendary-sprite--blueprint-roll {
  background-position: 0px 0px;
}

.legendary-sprite--blueprint-open {
  background-position: -128px 0px;
}

.legendary-sprite--yellow-glasses {
  background-position: -256px 0px;
}

.legendary-sprite--focus-shield {
  background-position: -384px 0px;
}

.legendary-sprite--horizon-map {
  background-position: -512px 0px;
}

.legendary-sprite--clarity-lantern {
  background-position: -640px 0px;
}

.legendary-sprite--cut-scissors {
  background-position: -768px 0px;
}

.legendary-sprite--living-book {
  background-position: -896px 0px;
}

.legendary-sprite--protocol-key {
  background-position: 0px -128px;
}

.legendary-sprite--autoevolution-compass {
  background-position: -128px -128px;
}

.legendary-sprite--ship-button {
  background-position: -256px -128px;
}

.legendary-sprite--presence-hourglass {
  background-position: -384px -128px;
}

.legendary-sprite--cold-backlog-notebook {
  background-position: -512px -128px;
}

.legendary-sprite--airplane-mode-sign {
  background-position: -640px -128px;
}

.legendary-sprite--essential-ruler {
  background-position: -768px -128px;
}

.legendary-sprite--legendary-choice-stamp {
  background-position: -896px -128px;
}

.legendary-sprite--clarity-magnifier {
  background-position: 0px -256px;
}

.legendary-sprite--implementation-hammer {
  background-position: -128px -256px;
}

.legendary-sprite--explorer-backpack {
  background-position: -256px -256px;
}

.legendary-sprite--guiding-star {
  background-position: -384px -256px;
}

.legendary-sprite--infinity-symbol {
  background-position: -512px -256px;
}

.legendary-sprite--confusion-symbol {
  background-position: -640px -256px;
}

.legendary-sprite--ai-familiar {
  background-position: -768px -256px;
}

.legendary-sprite--reward-chest {
  background-position: -896px -256px;
}

.legendary-sprite--post-it {
  background-position: 0px -384px;
}

.legendary-sprite--paperclip {
  background-position: -128px -384px;
}

.legendary-sprite--pencil {
  background-position: -256px -384px;
}

.legendary-sprite--pen-highlighter {
  background-position: -384px -384px;
}

.legendary-sprite--focus-list {
  background-position: -512px -384px;
}

.legendary-sprite--essential-target {
  background-position: -640px -384px;
}

.legendary-sprite--achievement-flag {
  background-position: -768px -384px;
}

.legendary-sprite--transition-bridge {
  background-position: -896px -384px;
}

.legendary-sprite--energy-battery {
  background-position: 0px -512px;
}

.legendary-sprite--system-piece {
  background-position: -128px -512px;
}

.legendary-sprite--clear-path {
  background-position: -256px -512px;
}

.legendary-sprite--chosen-direction {
  background-position: -384px -512px;
}

.legendary-sprite--inner-dialogue {
  background-position: -512px -512px;
}

.legendary-sprite--life-message {
  background-position: -640px -512px;
}

.legendary-sprite--clear-mind {
  background-position: -768px -512px;
}

.legendary-sprite--present-heart {
  background-position: -896px -512px;
}

.legendary-sprite--support-community {
  background-position: 0px -640px;
}

.legendary-sprite--continuous-evolution {
  background-position: -128px -640px;
}

.legendary-sprite--review-cycle {
  background-position: -256px -640px;
}

.legendary-sprite--system-gear {
  background-position: -384px -640px;
}

.legendary-sprite--action-impulse {
  background-position: -512px -640px;
}

.legendary-sprite--noise-block {
  background-position: -640px -640px;
}

.legendary-sprite--possibility-box {
  background-position: -768px -640px;
}

.legendary-sprite--next-version {
  background-position: -896px -640px;
}
```

---

## Manifest JSON

Salve como:

```markdown
legendary-tools-manifest.json
```

```json
{
  "sprite": "legendary-tools-sprite.png",
  "cellSize": 256,
  "columns": 8,
  "rows": 6,
  "totalItems": 48,
  "sourceSize": {
    "width": 2048,
    "height": 1536
  },
  "recommendedDisplaySize": {
    "width": 128,
    "height": 128
  },
  "cssBackgroundSizeAt128": {
    "width": 1024,
    "height": 768
  },
  "items": {
    "blueprint-roll": {
      "index": 1,
      "name": "Blueprint enrolado",
      "description": "Rolo de planta arquitetônica com linhas técnicas visíveis.",
      "col": 0,
      "row": 0,
      "sourceX": 0,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": 0,
        "y": 0
      }
    },
    "blueprint-open": {
      "index": 2,
      "name": "Blueprint aberto",
      "description": "Folha aberta com mapa simples, setas, blocos e rota destacada.",
      "col": 1,
      "row": 0,
      "sourceX": 256,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": -128,
        "y": 0
      }
    },
    "yellow-glasses": {
      "index": 3,
      "name": "Óculos amarelos",
      "description": "Óculos redondos com lentes amarelas.",
      "col": 2,
      "row": 0,
      "sourceX": 512,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": -256,
        "y": 0
      }
    },
    "focus-shield": {
      "index": 4,
      "name": "Escudo do Foco",
      "description": "Escudo físico com a palavra “NÃO” no centro.",
      "col": 3,
      "row": 0,
      "sourceX": 768,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": -384,
        "y": 0
      }
    },
    "horizon-map": {
      "index": 5,
      "name": "Mapa do Horizonte",
      "description": "Quadro dos sonhos com fotos, setas, montanhas e estrela-guia.",
      "col": 4,
      "row": 0,
      "sourceX": 1024,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": -512,
        "y": 0
      }
    },
    "clarity-lantern": {
      "index": 6,
      "name": "Lanterna da Clareza",
      "description": "Lanterna de mão projetando feixe amarelo.",
      "col": 5,
      "row": 0,
      "sourceX": 1280,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": -640,
        "y": 0
      }
    },
    "cut-scissors": {
      "index": 7,
      "name": "Tesoura do Corte",
      "description": "Tesoura grande cortando fios, papéis e post-its.",
      "col": 6,
      "row": 0,
      "sourceX": 1536,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": -768,
        "y": 0
      }
    },
    "living-book": {
      "index": 8,
      "name": "Livro Vivo",
      "description": "Caderno/livro usado, com abas, marcações e anotações.",
      "col": 7,
      "row": 0,
      "sourceX": 1792,
      "sourceY": 0,
      "displayBackgroundPosition": {
        "x": -896,
        "y": 0
      }
    },
    "protocol-key": {
      "index": 9,
      "name": "Chave de Protocolo",
      "description": "Chave física misturada com USB, com pequena etiqueta “SISTEMA”.",
      "col": 0,
      "row": 1,
      "sourceX": 0,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": 0,
        "y": -128
      }
    },
    "autoevolution-compass": {
      "index": 10,
      "name": "Compasso da Autoevolução",
      "description": "Compasso de desenho técnico misturado com bússola.",
      "col": 1,
      "row": 1,
      "sourceX": 256,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": -128,
        "y": -128
      }
    },
    "ship-button": {
      "index": 11,
      "name": "Botão Ship",
      "description": "Botão físico de mesa com a palavra “SHIP”.",
      "col": 2,
      "row": 1,
      "sourceX": 512,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": -256,
        "y": -128
      }
    },
    "presence-hourglass": {
      "index": 12,
      "name": "Ampulheta da Presença",
      "description": "Ampulheta pequena, simples e reconhecível.",
      "col": 3,
      "row": 1,
      "sourceX": 768,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": -384,
        "y": -128
      }
    },
    "cold-backlog-notebook": {
      "index": 13,
      "name": "Caderno Backlog Frio",
      "description": "Caderno ou caixa de ideias com etiqueta “DEPOIS”.",
      "col": 4,
      "row": 1,
      "sourceX": 1024,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": -512,
        "y": -128
      }
    },
    "airplane-mode-sign": {
      "index": 14,
      "name": "Placa Modo Avião",
      "description": "Plaquinha de mesa com “MODO AVIÃO”.",
      "col": 5,
      "row": 1,
      "sourceX": 1280,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": -640,
        "y": -128
      }
    },
    "essential-ruler": {
      "index": 15,
      "name": "Régua do Essencial",
      "description": "Régua amarela/preta, com marcações fortes.",
      "col": 6,
      "row": 1,
      "sourceX": 1536,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": -768,
        "y": -128
      }
    },
    "legendary-choice-stamp": {
      "index": 16,
      "name": "Carimbo Escolha Lendária",
      "description": "Carimbo físico carimbando o símbolo do infinito, não estrela.",
      "col": 7,
      "row": 1,
      "sourceX": 1792,
      "sourceY": 256,
      "displayBackgroundPosition": {
        "x": -896,
        "y": -128
      }
    },
    "clarity-magnifier": {
      "index": 17,
      "name": "Lupa da Clareza",
      "description": "Lupa grande revelando uma seta simples.",
      "col": 0,
      "row": 2,
      "sourceX": 0,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": 0,
        "y": -256
      }
    },
    "implementation-hammer": {
      "index": 18,
      "name": "Martelo de Implementação",
      "description": "Martelo pequeno, de construção/protótipo.",
      "col": 1,
      "row": 2,
      "sourceX": 256,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": -128,
        "y": -256
      }
    },
    "explorer-backpack": {
      "index": 19,
      "name": "Mochila do Explorador",
      "description": "Mochila simples com patches de jornada.",
      "col": 2,
      "row": 2,
      "sourceX": 512,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": -256,
        "y": -256
      }
    },
    "guiding-star": {
      "index": 20,
      "name": "Estrela-guia",
      "description": "Estrela dourada simples, como marcador de direção.",
      "col": 3,
      "row": 2,
      "sourceX": 768,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": -384,
        "y": -256
      }
    },
    "infinity-symbol": {
      "index": 21,
      "name": "Símbolo do Infinito",
      "description": "Símbolo positivo reservado para heróis, evolução e Vida Lendária.",
      "col": 4,
      "row": 2,
      "sourceX": 1024,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": -512,
        "y": -256
      }
    },
    "confusion-symbol": {
      "index": 22,
      "name": "Símbolo da Confusão",
      "description": "Rabisco circular embolado com seta vertical atravessando.",
      "col": 5,
      "row": 2,
      "sourceX": 1280,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": -640,
        "y": -256
      }
    },
    "ai-familiar": {
      "index": 23,
      "name": "IA Familiar",
      "description": "Pequena criatura companion, meio chama, meio cursor, meio estrela.",
      "col": 6,
      "row": 2,
      "sourceX": 1536,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": -768,
        "y": -256
      }
    },
    "reward-chest": {
      "index": 24,
      "name": "Baú de Recompensa",
      "description": "Pequeno baú com brilho amarelo saindo de dentro.",
      "col": 7,
      "row": 2,
      "sourceX": 1792,
      "sourceY": 512,
      "displayBackgroundPosition": {
        "x": -896,
        "y": -256
      }
    },
    "post-it": {
      "index": 25,
      "name": "Post-it",
      "description": "Post-it amarelo simples, sem cena complexa.",
      "col": 0,
      "row": 3,
      "sourceX": 0,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": 0,
        "y": -384
      }
    },
    "paperclip": {
      "index": 26,
      "name": "Clip",
      "description": "Clip metálico simples.",
      "col": 1,
      "row": 3,
      "sourceX": 256,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": -128,
        "y": -384
      }
    },
    "pencil": {
      "index": 27,
      "name": "Lápis",
      "description": "Lápis preto/amarelo.",
      "col": 2,
      "row": 3,
      "sourceX": 512,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": -256,
        "y": -384
      }
    },
    "pen-highlighter": {
      "index": 28,
      "name": "Caneta e marca-texto",
      "description": "Caneta e marca-texto como ferramentas de anotação.",
      "col": 3,
      "row": 3,
      "sourceX": 768,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": -384,
        "y": -384
      }
    },
    "focus-list": {
      "index": 29,
      "name": "Lista de Foco",
      "description": "Lista curta/checklist de foco.",
      "col": 4,
      "row": 3,
      "sourceX": 1024,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": -512,
        "y": -384
      }
    },
    "essential-target": {
      "index": 30,
      "name": "Alvo Essencial",
      "description": "Alvo com seta no centro.",
      "col": 5,
      "row": 3,
      "sourceX": 1280,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": -640,
        "y": -384
      }
    },
    "achievement-flag": {
      "index": 31,
      "name": "Marco de Conquista",
      "description": "Bandeira no topo de uma montanha/marco.",
      "col": 6,
      "row": 3,
      "sourceX": 1536,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": -768,
        "y": -384
      }
    },
    "transition-bridge": {
      "index": 32,
      "name": "Ponte de Transição",
      "description": "Ponte simples conectando dois lados.",
      "col": 7,
      "row": 3,
      "sourceX": 1792,
      "sourceY": 768,
      "displayBackgroundPosition": {
        "x": -896,
        "y": -384
      }
    },
    "energy-battery": {
      "index": 33,
      "name": "Bateria da Energia",
      "description": "Bateria com carga amarela.",
      "col": 0,
      "row": 4,
      "sourceX": 0,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": 0,
        "y": -512
      }
    },
    "system-piece": {
      "index": 34,
      "name": "Peça do Sistema",
      "description": "Peça de quebra-cabeça ou módulo de sistema.",
      "col": 1,
      "row": 4,
      "sourceX": 256,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": -128,
        "y": -512
      }
    },
    "clear-path": {
      "index": 35,
      "name": "Caminho Claro",
      "description": "Estrada/caminho com horizonte visível.",
      "col": 2,
      "row": 4,
      "sourceX": 512,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": -256,
        "y": -512
      }
    },
    "chosen-direction": {
      "index": 36,
      "name": "Direção Escolhida",
      "description": "Placa de direção simples.",
      "col": 3,
      "row": 4,
      "sourceX": 768,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": -384,
        "y": -512
      }
    },
    "inner-dialogue": {
      "index": 37,
      "name": "Diálogo Interno",
      "description": "Balão de fala com reticências.",
      "col": 4,
      "row": 4,
      "sourceX": 1024,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": -512,
        "y": -512
      }
    },
    "life-message": {
      "index": 38,
      "name": "Mensagem da Vida",
      "description": "Envelope/carta simbólica.",
      "col": 5,
      "row": 4,
      "sourceX": 1280,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": -640,
        "y": -512
      }
    },
    "clear-mind": {
      "index": 39,
      "name": "Mente Clara",
      "description": "Cérebro simples com brilho/clareza.",
      "col": 6,
      "row": 4,
      "sourceX": 1536,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": -768,
        "y": -512
      }
    },
    "present-heart": {
      "index": 40,
      "name": "Coração Presente",
      "description": "Coração amarelo/positivo.",
      "col": 7,
      "row": 4,
      "sourceX": 1792,
      "sourceY": 1024,
      "displayBackgroundPosition": {
        "x": -896,
        "y": -512
      }
    },
    "support-community": {
      "index": 41,
      "name": "Comunidade de Apoio",
      "description": "Grupo simples de pessoas/figuras.",
      "col": 0,
      "row": 5,
      "sourceX": 0,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": 0,
        "y": -640
      }
    },
    "continuous-evolution": {
      "index": 42,
      "name": "Evolução Contínua",
      "description": "Planta brotando ou símbolo de crescimento contínuo.",
      "col": 1,
      "row": 5,
      "sourceX": 256,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": -128,
        "y": -640
      }
    },
    "review-cycle": {
      "index": 43,
      "name": "Ciclo de Revisão",
      "description": "Calendário ou setas circulares de revisão.",
      "col": 2,
      "row": 5,
      "sourceX": 512,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": -256,
        "y": -640
      }
    },
    "system-gear": {
      "index": 44,
      "name": "Engrenagem do Sistema",
      "description": "Engrenagem robusta.",
      "col": 3,
      "row": 5,
      "sourceX": 768,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": -384,
        "y": -640
      }
    },
    "action-impulse": {
      "index": 45,
      "name": "Impulso de Ação",
      "description": "Raio/energia de ação.",
      "col": 4,
      "row": 5,
      "sourceX": 1024,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": -512,
        "y": -640
      }
    },
    "noise-block": {
      "index": 46,
      "name": "Bloqueio de Ruído",
      "description": "Ícone de bloqueio/silenciar ruído.",
      "col": 5,
      "row": 5,
      "sourceX": 1280,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": -640,
        "y": -640
      }
    },
    "possibility-box": {
      "index": 47,
      "name": "Caixa de Possibilidades",
      "description": "Caixa aberta com luz/amarelo.",
      "col": 6,
      "row": 5,
      "sourceX": 1536,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": -768,
        "y": -640
      }
    },
    "next-version": {
      "index": 48,
      "name": "Próxima Versão",
      "description": "Bandeira ou marcador de próxima versão.",
      "col": 7,
      "row": 5,
      "sourceX": 1792,
      "sourceY": 1280,
      "displayBackgroundPosition": {
        "x": -896,
        "y": -640
      }
    }
  }
}
```

---

## Arquivos recomendados

A versão profissional entrega três arquivos:

```markdown
legendary-tools-sprite.png
legendary-tools-sprite.css
legendary-tools-manifest.json
```

Assim a página consegue usar os assets como ícones de inventário, cards de skill, botões, status e recompensas sem recortar manualmente.

---

## Checklist de validação

Antes de usar o sprite no site, conferir:

- [ ] A imagem final tem 2048 × 1536 px.
- [ ] Existem 8 colunas e 6 linhas.
- [ ] Cada célula tem 256 × 256 px.
- [ ] Os 48 assets estão centralizados.
- [ ] Não há nomes, números ou legendas fora dos objetos.
- [ ] Não há monstros.
- [ ] Não há heróis humanos.
- [ ] O símbolo do infinito aparece apenas como símbolo positivo.
- [ ] O símbolo da confusão é visualmente diferente do infinito.
- [ ] O carimbo carimba o símbolo do infinito, não uma estrela.
- [ ] O fundo é transparente ou #F2EBDA.
- [ ] O CSS usa `background-position`.
- [ ] O manifest bate com a ordem dos assets.

---

## Prompt em inglês, se precisar

```markdown
What would this look like as an HTML-ready sprite sheet? I want a technical sprite format, not a visual asset gallery, so each icon can be used individually in the page through CSS background-position.
```
