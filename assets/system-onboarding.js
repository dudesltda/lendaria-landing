(() => {
  let attempts = 0;

  const mount = () => {
    const main = document.querySelector("#conteudo-principal");
    if (!main) {
      attempts += 1;
      if (attempts < 90) requestAnimationFrame(mount);
      return;
    }
    if (document.querySelector("[data-screen-label='08 Onboarding']")) return;

    const gallery = document.querySelector(".gallery-bar span");
    if (gallery) gallery.textContent = "// SISTEMA DE DESIGN · VOL. I · 09 FOLHAS · v0.2";

  const colofon = document.querySelector("[data-screen-label='08 Colofon']");
  if (colofon) {
    colofon.setAttribute("data-screen-label", "09 Colofon");
    const number = colofon.querySelector(".tab .nn");
    if (number) number.textContent = "09";
  }

  const ticks = ["00", "08", "16", "24", "32", "40", "48", "56", "64", "72", "80", "88", "96"];
  const ruler = (side) => `
    <div class="ruler ${side}">
      ${ticks.map((tick) => `<span data-n="${tick}"></span>`).join("")}
    </div>
  `;

  const sheet = document.createElement("article");
  sheet.className = "poster onboard-sheet";
  sheet.setAttribute("data-screen-label", "08 Onboarding");
  sheet.innerHTML = `
    ${ruler("left")}
    ${ruler("right")}
    <div class="tab">
      <div class="nn">08</div>
      <div class="lab">ATIVAR</div>
    </div>

    <div class="ph">
      <div>
        <div class="eyebrow">FOLHA 08 · ONBOARDING · ATIVAÇÃO</div>
        <h2 class="h">Primeiro uso.<br>Sem ritual.</h2>
      </div>
      <div class="meta">AHA EM 3 PASSOS<br>SKIP SEMPRE VISÍVEL<br>REPLAY NO AJUDA</div>
    </div>

    <div class="pb">
      <section class="onboard-hero" aria-labelledby="onboard-title">
        <div>
          <div class="onboard-kicker" style="color:var(--color-yellow)">[A · MOMENTO AHA]</div>
          <h3 id="onboard-title">Do zero ao primeiro avanço.</h3>
          <p>Onboarding não ensina tudo. Ele leva a pessoa até uma entrega real: perfil ajustado, trilha escolhida e primeira ação publicada.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px">
            <span class="onboard-status ok">+ 3 min</span>
            <span class="onboard-status warn">Pode pular</span>
            <span class="onboard-status">Repetível</span>
          </div>
        </div>

        <div class="onboard-steps" aria-label="Trilha de ativação">
          <div class="onboard-step">
            <span class="n">01</span>
            <div>
              <div class="t">Definir intenção</div>
              <div class="meta">1 pergunta, sem formulário longo</div>
            </div>
            <span class="onboard-status ok">Feito</span>
          </div>
          <div class="onboard-step">
            <span class="n">02</span>
            <div>
              <div class="t">Escolher trilha</div>
              <div class="meta">Recomendação com opção manual</div>
            </div>
            <span class="onboard-status warn">Agora</span>
          </div>
          <div class="onboard-step">
            <span class="n">03</span>
            <div>
              <div class="t">Publicar entrega</div>
              <div class="meta">Primeiro valor dentro do produto</div>
            </div>
            <span class="onboard-status">Próximo</span>
          </div>
          <div class="onboard-progress" aria-hidden="true"><span></span></div>
        </div>
      </section>

      <section class="onboard-grid">
        <div class="onboard-panel dark">
          <div class="onboard-kicker" style="color:var(--color-yellow)">[B · WELCOME COMPACTO]</div>
          <h4>Uma decisão. Depois produto.</h4>
          <p>Use tela inicial só quando existe uma escolha real. O resto vira estado contextual dentro da interface.</p>
          <div class="onboard-mini-app">
            <div class="onboard-toolbar">
              <span class="onboard-code">Perfil inicial</span>
              <span class="onboard-control">Pular</span>
            </div>
            <div class="onboard-field">
              <label class="onboard-code" for="system-onboard-goal">Seu foco agora</label>
              <input id="system-onboard-goal" class="onboard-input" value="Criar meu primeiro agente de IA" readonly>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <span class="onboard-control primary">Começar</span>
                <span class="onboard-control">Explorar sozinho</span>
              </div>
            </div>
          </div>
        </div>

        <div class="onboard-panel">
          <div class="onboard-kicker">[C · COACHMARK CONTEXTUAL]</div>
          <h4>Mostre no ponto de uso.</h4>
          <p>A dica aparece quando a pessoa encontra a função. Nunca cobre a tela inteira sem necessidade.</p>
          <div class="onboard-coach">
            <div class="onboard-hotspot" aria-hidden="true"></div>
            <div class="onboard-tooltip">
              <h5>Escolha uma trilha.</h5>
              <p>Recomendamos uma rota inicial, mas a decisão continua com você.</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
                <span class="onboard-control primary">Entendi</span>
                <span class="onboard-control">Não mostrar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div style="display:flex;align-items:center;gap:24px;margin-bottom:18px">
          <span class="onboard-kicker">[D · EMPTY STATES]</span>
          <div style="flex:1;border-top:1px dashed var(--color-rule-cool)"></div>
          <span class="onboard-kicker" style="color:var(--color-mute)">4 tipos obrigatórios</span>
        </div>
        <div class="onboard-state-grid">
          <div class="onboard-empty">
            <div class="glyph">01</div>
            <h4>Primeiro uso</h4>
            <p>Explique o que nasce aqui e ofereça um modelo pronto.</p>
            <span class="action">Usar modelo</span>
          </div>
          <div class="onboard-empty">
            <div class="glyph">∅</div>
            <h4>Sem resultado</h4>
            <p>Mostre o filtro ativo e dê uma saída clara.</p>
            <span class="action">Limpar filtros</span>
          </div>
          <div class="onboard-empty">
            <div class="glyph">!</div>
            <h4>Sem acesso</h4>
            <p>Diga quem libera, sem culpar a pessoa.</p>
            <span class="action">Solicitar acesso</span>
          </div>
          <div class="onboard-empty">
            <div class="glyph">×</div>
            <h4>Erro</h4>
            <p>Nomeie o problema, preserve o trabalho e permita tentar de novo.</p>
            <span class="action">Tentar novamente</span>
          </div>
        </div>
      </section>

      <section class="onboard-grid">
        <div class="onboard-panel">
          <div class="onboard-kicker">[E · LOADING]</div>
          <h4>Skeleton antes de spinner.</h4>
          <p>Carregamento deve preservar a forma do conteúdo esperado.</p>
          <div class="onboard-skeleton" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="onboard-code">.onboard-skeleton · conteúdo em até 800 ms</div>
        </div>

        <div class="onboard-panel">
          <div class="onboard-kicker">[F · RETORNO]</div>
          <h4>Feedback curto, útil e reversível.</h4>
          <p>Toast confirma. Banner orienta. Erro mostra recuperação.</p>
          <div class="onboard-toast">
            <span class="icon">✓</span>
            <div>
              <div class="onboard-code">Progresso salvo</div>
              <p style="margin:3px 0 0;color:var(--color-ink)">Você pode continuar a trilha depois.</p>
            </div>
            <span class="onboard-control">Desfazer</span>
          </div>
          <div class="onboard-field" style="padding-left:0;padding-right:0">
            <label class="onboard-code" for="system-onboard-error">Nome da primeira entrega</label>
            <input id="system-onboard-error" class="onboard-input is-error" value="Entrega sem objetivo" readonly>
            <span class="onboard-status error">Defina um resultado observável</span>
          </div>
        </div>
      </section>
    </div>

    <div class="pf">
      <span>LENDÁR[IA] · DS / VOL.I</span>
      <span>FOLHA 08 / 09</span>
      <span>ONBOARDING · EMPTY · LOADING · FEEDBACK</span>
    </div>
  `;

    if (colofon) main.insertBefore(sheet, colofon);
    else main.appendChild(sheet);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => requestAnimationFrame(mount), { once: true });
  } else {
    requestAnimationFrame(mount);
  }
})();
