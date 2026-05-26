// vinheta-scenes.jsx · v2
// Brand bumper for Academia Lendár[IA]. 32s. Brutalist editorial.
// Narrativa segue o manifesto: condição → ruptura → transcendência →
// quem somos → ofício → prova → assinatura.

// ─────────────────────────────────────────────────────────────────────────────
// PALETTE & FONTS
// ─────────────────────────────────────────────────────────────────────────────
const LEND = {
  ink:    '#191919',
  paper:  '#FFFFF0',
  bege:   '#F2EBDA',
  yellow: '#F6C324',
  yellowDeep: '#E0AE15',
  mute:   '#6B6B6B',
};

const FONT_DISPLAY = '"Archivo Black", "Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif';
const FONT_SANS    = '"Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif';
const FONT_MONO    = '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace';

// Mechanical out-ease — approx cubic-bezier(0.2,0,0,1)
const easeMech = (t) => 1 - Math.pow(1 - t, 4);

// Mild back-out for cards
const easeBackOut = (t) => {
  const c1 = 1.4, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

// ─────────────────────────────────────────────────────────────────────────────
// EDITORIAL CHROME — crop marks, top bar, timecode, page number
// ─────────────────────────────────────────────────────────────────────────────
const ACTS = [
  { start: 0,    end: 4.5,  label: 'ATO 01/07 · A CONDIÇÃO',     code: '001' },
  { start: 4.5,  end: 7.5,  label: 'ATO 02/07 · A RUPTURA',       code: '002' },
  { start: 7.5,  end: 11.5, label: 'ATO 03/07 · A TRANSCENDÊNCIA',code: '003' },
  { start: 11.5, end: 17,   label: 'ATO 04/07 · A MARCA',         code: '004' },
  { start: 17,   end: 23,   label: 'ATO 05/07 · O OFÍCIO',        code: '005' },
  { start: 23,   end: 27,   label: 'ATO 06/07 · A PROVA',         code: '006' },
  { start: 27,   end: 32,   label: 'ATO 07/07 · O SELO',          code: '007' },
];

function EditorialChrome() {
  const time = useTime();
  const act = ACTS.find(a => time >= a.start && time < a.end) || ACTS[ACTS.length - 1];

  const fgFor = (t) => {
    if (t < 4.5)  return LEND.paper;
    if (t < 7.5)  return LEND.ink;
    if (t < 11.5) return LEND.paper;
    if (t < 17)   return LEND.ink;
    if (t < 23)   return LEND.ink;
    if (t < 27)   return LEND.paper;
    return LEND.ink;
  };
  const fg = fgFor(time);

  const tc = (t) => {
    const tot = Math.max(0, t);
    const m = Math.floor(tot / 60);
    const s = Math.floor(tot % 60);
    const ff = Math.floor((tot * 24) % 24);
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}:${String(ff).padStart(2,'0')}`;
  };

  const mono = {
    fontFamily: FONT_MONO,
    fontSize: 14,
    letterSpacing:0,
    textTransform: 'uppercase',
    color: fg,
    fontWeight: 500,
    transition: 'color 100ms linear',
  };

  const CropMark = ({ left, top, right, bottom, rot }) => (
    <div style={{
      position: 'absolute',
      left, top, right, bottom,
      width: 28, height: 28,
      borderTop: `2px solid ${fg}`,
      borderLeft: `2px solid ${fg}`,
      transform: `rotate(${rot}deg)`,
      transformOrigin: 'top left',
      opacity: 0.9,
    }} />
  );

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 100 }}>
      <CropMark left={40} top={40} rot={0} />
      <CropMark right={40} top={40} rot={90} />
      <CropMark left={40} bottom={40} rot={-90} />
      <CropMark right={40} bottom={40} rot={180} />

      <div style={{ ...mono, position: 'absolute', left: 88, top: 44 }}>
        [VINHETA · LENDÁR[IA] · 2026]
      </div>
      <div style={{ ...mono, position: 'absolute', right: 88, top: 44, textAlign: 'right' }}>
        {act.label}
      </div>
      <div style={{ ...mono, position: 'absolute', left: 88, bottom: 44 }}>
        <span style={{ display: 'inline-block', width: 8, height: 8, background: LEND.yellow, marginRight: 10, transform: 'translateY(-1px)' }} />
        TC {tc(time)} / 00:32:00
      </div>
      <div style={{ ...mono, position: 'absolute', right: 88, bottom: 44, textAlign: 'right' }}>
        FRAME {act.code} · BUILDING ∞
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

function SceneBg({ color, children, label }) {
  return (
    <div data-screen-label={label} style={{
      position: 'absolute', inset: 0,
      background: color,
      overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

function Line({
  text, x, y, size = 140, color = LEND.paper, delay = 0, dur = 0.28,
  weight = 'normal', font = FONT_DISPLAY, lh = 0.92, ls = 0,
  align = 'left',
  underlineColor = null,
  underlineDelay = 0,
}) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / dur, 0, 1);
  if (t <= 0) return null;
  const e = easeMech(t);
  const opacity = e;
  const ty = (1 - e) * 14;

  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';

  const uT = underlineColor ? clamp((localTime - delay - underlineDelay) / 0.5, 0, 1) : 0;
  const uE = easeMech(uT);

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontWeight: weight,
      fontSize: size,
      color,
      lineHeight: lh,
      letterSpacing: ls,
      whiteSpace: 'pre',
      textTransform: 'uppercase',
      willChange: 'transform, opacity',
    }}>
      {text}
      {underlineColor && (
        <div style={{
          width: `${uE * 100}%`,
          height: Math.max(4, size * 0.05),
          background: underlineColor,
          marginTop: Math.max(8, size * 0.05),
        }} />
      )}
    </div>
  );
}

function Eyebrow({ text, x, y, delay = 0, color = LEND.ink, size = 18, bracket = true, align = 'left' }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / 0.25, 0, 1);
  if (t <= 0) return null;
  const opacity = easeMech(t);
  const ty = (1 - opacity) * 6;
  const translateX = align === 'center' ? '-50%' : '0';

  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: FONT_MONO,
      fontWeight: 500,
      fontSize: size,
      letterSpacing:0,
      textTransform: 'uppercase',
      color,
      whiteSpace: 'pre',
    }}>
      {bracket ? `[ ${text} ]` : text}
    </div>
  );
}

function Cursor({ x, y, w = 18, h = 110, color = LEND.yellow }) {
  const { localTime } = useSprite();
  const on = Math.floor(localTime * 2) % 2 === 0;
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: w, height: h,
      background: color,
      opacity: on ? 1 : 0.0,
    }} />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACT 01 — A CONDIÇÃO (0 — 4.5s)
// ink. Manifesto opens.
// ─────────────────────────────────────────────────────────────────────────────
function SceneCondicao() {
  return (
    <Sprite start={0} end={4.5}>
      <SceneBg color={LEND.ink} label="01 A condição">
        <Eyebrow text="DO MANIFESTO LENDÁRIO · LINHA 01"
                 x={180} y={250} delay={0.1} color={LEND.mute} size={18} bracket={false} />

        <Line text="POR 200 MIL ANOS,"  x={180} y={310} size={150} color={LEND.paper}  delay={0.55} />
        <Line text="FOMOS REFÉNS"       x={180} y={490} size={150} color={LEND.paper}  delay={1.30} />
        <Line text="DA BIOLOGIA."       x={180} y={670} size={150} color={LEND.yellow} delay={2.05} />

        {/* cursor at end of last line */}
        <CursorAtEnd />

        {/* massive ghost "01" in background */}
        <GhostNumber n="01" delay={0.0} />
      </SceneBg>
    </Sprite>
  );
}

function CursorAtEnd() {
  return <Cursor x={1085} y={680} w={20} h={130} color={LEND.yellow} />;
}

function GhostNumber({ n, delay = 0 }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / 0.4, 0, 1);
  return (
    <div style={{
      position: 'absolute', right: 200, bottom: 180,
      fontFamily: FONT_DISPLAY,
      fontSize: 360,
      color: LEND.paper,
      opacity: t * 0.06,
      lineHeight: 0.8,
      letterSpacing:0,
    }}>{n}</div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACT 02 — A RUPTURA (4.5 — 7.5s)
// Yellow shock. "HOJE." monumental, alone.
// ─────────────────────────────────────────────────────────────────────────────
function SceneRuptura() {
  return (
    <Sprite start={4.5} end={7.5}>
      <SceneBg color={LEND.yellow} label="02 A ruptura">
        <HojeMonument />
      </SceneBg>
    </Sprite>
  );
}

function HojeMonument() {
  const { localTime } = useSprite();
  // entry: 0 - 0.2s fade + scale 1.12 → 1.0
  // shadow: appears at 0.25s
  // press: 1.6 - 1.75s small press toward shadow (down-right)
  const tIn = clamp(localTime / 0.22, 0, 1);
  const eIn = easeMech(tIn);
  const scale = 1.12 - 0.12 * eIn;
  const opacity = eIn;

  const tShadow = clamp((localTime - 0.25) / 0.3, 0, 1);
  const shadowSize = Math.round(easeMech(tShadow) * 16);

  const tPress = clamp((localTime - 1.6) / 0.15, 0, 1);
  const pressE = easeMech(tPress);
  const offX = Math.round(pressE * 10);
  const offY = Math.round(pressE * 10);
  // when pressed, shadow collapses
  const effectiveShadow = Math.round(shadowSize * (1 - pressE * 0.85));

  const shadow = effectiveShadow > 0
    ? `${effectiveShadow}px ${effectiveShadow}px 0 ${LEND.ink}`
    : 'none';

  return (
    <div style={{
      position: 'absolute',
      left: '50%', top: '50%',
      transform: `translate(calc(-50% + ${offX}px), calc(-50% + ${offY}px - 20px)) scale(${scale})`,
      opacity,
      fontFamily: FONT_DISPLAY,
      fontSize: 480,
      lineHeight: 0.85,
      letterSpacing:0,
      color: LEND.ink,
      textTransform: 'uppercase',
      textShadow: shadow,
      willChange: 'transform, opacity',
    }}>
      HOJE.
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACT 03 — A TRANSCENDÊNCIA (7.5 — 11.5s)
// ink. The payoff. "Está na hora de TRANSCENDER."
// ─────────────────────────────────────────────────────────────────────────────
function SceneTranscender() {
  return (
    <Sprite start={7.5} end={11.5}>
      <SceneBg color={LEND.ink} label="03 A transcendência">
        {/* yellow rule top-left, structural mark */}
        <YellowRule />

        <Eyebrow text="ESTÁ NA HORA DE" x={180} y={350} delay={0.15} color={LEND.yellow} size={28} bracket={true} />

        <Line text="TRANSCENDER."
              x={180} y={420} size={220} color={LEND.yellow}
              delay={0.5} dur={0.32}
              ls={0}
              underlineColor={LEND.paper}
              underlineDelay={0.5} />

        <Eyebrow text="A primeira lição da Academia."
                 x={180} y={770} delay={1.8} color={LEND.paper} size={20} bracket={false} />
      </SceneBg>
    </Sprite>
  );
}

function YellowRule() {
  const { localTime } = useSprite();
  const t = clamp((localTime - 0.1) / 0.4, 0, 1);
  const e = easeMech(t);
  return (
    <div style={{
      position: 'absolute',
      left: 180, top: 180,
      width: 120 * e, height: 8,
      background: LEND.yellow,
    }} />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACT 04 — A MARCA (11.5 — 17s)
// Paper. ACADEMIA / LENDÁR[IA]™ + tagline.
// ─────────────────────────────────────────────────────────────────────────────
function SceneMarca() {
  return (
    <Sprite start={11.5} end={17}>
      <SceneBg color={LEND.paper} label="04 A marca">
        <Eyebrow text="A MARCA" x={180} y={250} delay={0.05} color={LEND.ink} size={20} />

        <Line text="ACADEMIA" x={180} y={310} size={220} color={LEND.ink}
              delay={0.3} dur={0.32} ls={0} />

        <LendariaBuild />

        {/* tagline */}
        <MarcaTagline />

        {/* small mark in corner — fades in late */}
        <CornerMark />
      </SceneBg>
    </Sprite>
  );
}

function LendariaBuild() {
  const { localTime } = useSprite();
  const baseY = 580;
  const baseX = 180;

  // single text run "LENDÁR[IA]" keeps kerning intact; we animate via
  //  - opacity reveal of the whole word
  //  - a yellow flash that pulses behind [IA] only (inner span)
  //  - ™ pops in after the flash
  const lendarT = clamp((localTime - 0.95) / 0.35, 0, 1);
  const lendarE = easeMech(lendarT);
  if (lendarT <= 0) return null;

  // Flash sin curve 0→1→0 over 0.5s starting at 1.55s
  const flashLocal = clamp((localTime - 1.55) / 0.55, 0, 1);
  const flashOp = flashLocal > 0 && flashLocal < 1
    ? Math.sin(flashLocal * Math.PI) * 0.9
    : 0;

  const tmT = clamp((localTime - 2.05) / 0.3, 0, 1);
  const tmE = easeMech(tmT);

  const size = 220;

  return (
    <div style={{
      position: 'absolute', left: baseX, top: baseY,
      fontFamily: FONT_DISPLAY,
      fontSize: size,
      color: LEND.ink,
      lineHeight: 0.92,
      letterSpacing:0,
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'baseline',
      whiteSpace: 'pre',
    }}>
      <span style={{
        opacity: lendarE,
        transform: `translateY(${(1 - lendarE) * 14}px)`,
        display: 'inline-block',
        willChange: 'transform, opacity',
      }}>
        LENDÁR<span style={{
          background: `rgba(246, 195, 36, ${flashOp})`,
          padding: '0 0.02em',
          margin: '0 -0.02em',
          transition: 'none',
        }}>[IA]</span>
      </span>

      <span style={{
        fontFamily: FONT_MONO,
        fontSize: size * 0.18,
        fontWeight: 700,
        opacity: tmE,
        transform: `translateY(${-size * 0.62}px) scale(${0.9 + 0.1 * tmE})`,
        display: 'inline-block',
        marginLeft: 10,
        color: LEND.ink,
        letterSpacing: 0,
      }}>™</span>
    </div>
  );
}

function MarcaTagline() {
  const { localTime } = useSprite();
  const t = clamp((localTime - 3.0) / 0.4, 0, 1);
  if (t <= 0) return null;
  const e = easeMech(t);
  return (
    <div style={{
      position: 'absolute',
      left: 180, top: 850,
      width: 1560,
      opacity: e,
      transform: `translateY(${(1 - e) * 10}px)`,
      fontFamily: FONT_SANS,
      fontWeight: 500,
      fontSize: 36,
      color: LEND.ink,
      lineHeight: 1.15,
      letterSpacing:0,
    }}>
      Um ecossistema de educação <span style={{ background: LEND.yellow, padding: '0 .12em' }}>+ inovação</span> para potencializar pessoas com IA generativa.
    </div>
  );
}

function CornerMark() {
  const { localTime } = useSprite();
  const t = clamp((localTime - 3.4) / 0.4, 0, 1);
  if (t <= 0) return null;
  const e = easeMech(t);
  return (
    <img src="assets/logo/lockup-black.svg" alt="Academia Lendár[IA]" style={{
      position: 'absolute',
      right: 180, top: 300,
      width: 420, height: 'auto',
      opacity: e,
      transform: `scale(${0.9 + 0.1 * e})`,
    }} />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACT 05 — O OFÍCIO (17 — 23s)
// Bege. 3 pillars: CLAREZA · OFÍCIO · IA — single-word punchlines.
// ─────────────────────────────────────────────────────────────────────────────
function SceneOficio() {
  return (
    <Sprite start={17} end={23}>
      <SceneBg color={LEND.bege} label="05 O ofício">
        <Eyebrow text="OS TRÊS PILARES DE UMA VIDA LENDÁRIA"
                 x={180} y={200} delay={0.1} color={LEND.ink} size={20} />

        <Line text="UMA VIDA LENDÁRIA"
              x={180} y={250} size={110} color={LEND.ink} delay={0.4} dur={0.3} ls={0} />
        <Line text="EXIGE TRÊS COISAS."
              x={180} y={380} size={110} color={LEND.ink} delay={0.7} dur={0.3} ls={0} />

        <PillarCard idx={0} word="CLAREZA" sub="Inteligência + Autoconsciência" num="01" delay={1.4} variant="paper" />
        <PillarCard idx={1} word="OFÍCIO"  sub="Impacto + Arte"                  num="02" delay={1.75} variant="ink" />
        <PillarCard idx={2} word="IA"      sub="Inteligência Artificial"         num="03" delay={2.10} variant="yellow" />
      </SceneBg>
    </Sprite>
  );
}

function PillarCard({ idx, word, sub, num, delay, variant }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / 0.4, 0, 1);
  if (t <= 0) return null;
  const e = easeBackOut(t);
  const ty = (1 - t) * -240;
  const opacity = clamp(t * 2, 0, 1);

  const w = 500, h = 540, gap = 30;
  const totalW = 3 * w + 2 * gap; // 1560
  const startX = (1920 - totalW) / 2; // 180
  const x = startX + idx * (w + gap);
  const y = 540;

  const tilt = idx === 1 ? 0.5 : -0.5;
  const settleE = clamp(t, 0, 1);

  const bg = variant === 'ink' ? LEND.ink : variant === 'yellow' ? LEND.yellow : LEND.paper;
  const fg = variant === 'ink' ? LEND.paper : LEND.ink;

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      width: w, height: h,
      background: bg,
      color: fg,
      border: `2px solid ${LEND.ink}`,
      boxShadow: `12px 12px 0 ${LEND.ink}`,
      transform: `translateY(${ty}px) rotate(${tilt * (1 - settleE * 0.6)}deg) scale(${0.97 + 0.03 * e})`,
      opacity,
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      willChange: 'transform, opacity',
    }}>
      <div>
        <div style={{
          fontFamily: FONT_MONO,
          fontSize: 16,
          letterSpacing:0,
          textTransform: 'uppercase',
          fontWeight: 500,
          opacity: 0.85,
        }}>
          [PILAR {num}]
        </div>
        <div style={{
          marginTop: 32,
          fontFamily: FONT_DISPLAY,
          fontSize: 100,
          lineHeight: 0.92,
          letterSpacing:0,
          textTransform: 'uppercase',
        }}>{word}</div>
        <div style={{
          marginTop: 18,
          height: 4,
          width: 64,
          background: variant === 'yellow' ? LEND.ink : LEND.yellow,
        }} />
        <div style={{
          marginTop: 20,
          fontFamily: FONT_SANS,
          fontWeight: 500,
          fontSize: 24,
          lineHeight: 1.25,
          letterSpacing:0,
          textTransform: 'none',
        }}>{sub}</div>
      </div>

      <div style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 240,
        lineHeight: 0.8,
        letterSpacing:0,
        opacity: variant === 'paper' ? 0.07 : 0.18,
        alignSelf: 'flex-end',
        marginRight: -8,
        marginBottom: -28,
      }}>{num}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACT 06 — A PROVA (23 — 27s)
// Ink. 3 counters tick up.
// ─────────────────────────────────────────────────────────────────────────────
function SceneProva() {
  return (
    <Sprite start={23} end={27}>
      <SceneBg color={LEND.ink} label="06 A prova">
        <Eyebrow text="A ALQUIMIA EM NÚMEROS" x={180} y={200} delay={0.1} color={LEND.yellow} size={22} />

        <Line text="O QUE A ACADEMIA"   x={180} y={260} size={110} color={LEND.paper} delay={0.35} dur={0.28} />
        <Line text="ENTREGA. CONCRETO." x={180} y={390} size={110} color={LEND.paper} delay={0.55} dur={0.28} />

        {/* Three columns, 500 wide each, gap 30 = 1560, centered x=180. */}
        <Counter x={180}  y={600} target={12} suffix=""    label="MÓDULOS"             delay={1.15} />
        <Counter x={710}  y={600} target={48} suffix="H"   label="DE CONTEÚDO PRÁTICO"  delay={1.40} />
        <Counter x={1240} y={600} target={7}  suffix=""    label="ARQUÉTIPOS HEROICOS"  delay={1.65} />
      </SceneBg>
    </Sprite>
  );
}

function Counter({ x, y, target, suffix, label, delay }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / 0.9, 0, 1);
  if (t <= 0) return null;
  const e = easeMech(t);
  const value = Math.round(target * e);

  const opacity = clamp(t * 3, 0, 1);
  const ty = (1 - clamp(t * 2, 0, 1)) * 30;

  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: 500,
      opacity, transform: `translateY(${ty}px)`,
    }}>
      <div style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 240,
        lineHeight: 0.85,
        letterSpacing:0,
        color: LEND.yellow,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}<span style={{ fontSize: 160 }}>{suffix}</span>
      </div>
      <div style={{
        marginTop: 16,
        width: 360,
        height: 4,
        background: LEND.yellow,
        opacity: 0.6,
      }} />
      <div style={{
        marginTop: 16,
        fontFamily: FONT_MONO,
        fontSize: 20,
        letterSpacing:0,
        textTransform: 'uppercase',
        color: LEND.paper,
        fontWeight: 500,
        maxWidth: 460,
      }}>
        {label}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACT 07 — O SELO (27 — 32s)
// Yellow. Text left, ∞ right — no overlap. Signoff bottom.
// ─────────────────────────────────────────────────────────────────────────────
function SceneSelo() {
  return (
    <Sprite start={27} end={32}>
      <SceneBg color={LEND.yellow} label="07 O selo">
        <Eyebrow text="O SELO LENDÁRIO" x={180} y={210} delay={0.1} color={LEND.ink} size={22} />

        {/* Stack — left half */}
        <Line text="CONSTRUINDO" x={180} y={260} size={160} color={LEND.ink} delay={0.3} dur={0.30} ls={0} />
        <Line text="O INFINITO,"  x={180} y={420} size={160} color={LEND.ink} delay={0.6} dur={0.30} ls={0} />
        <Line text="HOJE."        x={180} y={580} size={160} color={LEND.ink} delay={0.9} dur={0.30} ls={0}
              underlineColor={LEND.ink} underlineDelay={1.6} />

        {/* Giant ∞ — right half, monumental but contained */}
        <BigInfinity />

        {/* Signoff bottom */}
        <SignOff />
      </SceneBg>
    </Sprite>
  );
}

function BigInfinity() {
  const { localTime } = useSprite();
  const t = clamp((localTime - 1.3) / 0.55, 0, 1);
  if (t <= 0) return null;
  const e = easeMech(t);
  const scale = 0.82 + 0.18 * e;

  // Pulse on entry settle: a tiny breath
  const pulse = Math.sin(Math.max(0, localTime - 1.85) * 1.6) * 0.012;

  return (
    <div style={{
      position: 'absolute',
      right: 200, top: 270,
      fontFamily: FONT_DISPLAY,
      fontSize: 420,
      lineHeight: 0.8,
      color: LEND.ink,
      letterSpacing:0,
      opacity: e,
      transform: `scale(${scale + (e === 1 ? pulse : 0)})`,
      transformOrigin: 'center',
    }}>∞</div>
  );
}

function SignOff() {
  const { localTime } = useSprite();
  const t = clamp((localTime - 2.4) / 0.45, 0, 1);
  if (t <= 0) return null;
  const e = easeMech(t);
  return (
    <div style={{
      position: 'absolute', left: 180, bottom: 200,
      opacity: e,
      transform: `translateY(${(1 - e) * 10}px)`,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16,
    }}>
      <div>
        <img src="assets/logo/lockup-black.svg" alt="Academia Lendár[IA]" style={{ width: 460, height: 'auto', display: 'block' }} />
        <div style={{
          fontFamily: FONT_MONO,
          fontSize: 18,
          letterSpacing:0,
          textTransform: 'uppercase',
          marginTop: 18,
          color: LEND.ink,
        }}>academialendaria.ai · entre na caçada →</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────────────────
function VinhetaVideo() {
  return (
    <React.Fragment>
      <SceneCondicao />
      <SceneRuptura />
      <SceneTranscender />
      <SceneMarca />
      <SceneOficio />
      <SceneProva />
      <SceneSelo />
      <EditorialChrome />
    </React.Fragment>
  );
}

Object.assign(window, {
  LEND, FONT_DISPLAY, FONT_SANS, FONT_MONO, easeMech, easeBackOut,
  EditorialChrome, SceneBg, Line, Eyebrow, Cursor,
  SceneCondicao, SceneRuptura, SceneTranscender, SceneMarca,
  SceneOficio, SceneProva, SceneSelo,
  PillarCard, Counter, BigInfinity, SignOff, LendariaBuild,
  VinhetaVideo,
});
