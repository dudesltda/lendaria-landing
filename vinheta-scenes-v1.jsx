// vinheta-scenes.jsx
// Brand bumper for Academia Lendár[IA]. 32s. Brutalist editorial register.
// All scenes live inside <Stage> from animations.jsx.

// ─────────────────────────────────────────────────────────────────────────────
// PALETTE & FONTS (matches colors_and_type.css)
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

// Ease that matches the system token `cubic-bezier(0.2, 0, 0, 1)` — mechanical.
const easeMech = (t) => {
  // approximate cubic-bezier(0.2,0,0,1) — fast in, hard stop.
  // Use easeOutQuart as a close stand-in.
  return 1 - Math.pow(1 - t, 4);
};

// ─────────────────────────────────────────────────────────────────────────────
// EDITORIAL CHROME — crop marks, top bar, timecode, page number
// Persistent across all scenes; never inside a Sprite.
// ─────────────────────────────────────────────────────────────────────────────
function EditorialChrome() {
  const time = useTime();

  // Which ACT label to show at the top right
  const acts = [
    { start: 0,    end: 5,    label: 'ATO 01/07 · A VOID',           code: '001' },
    { start: 5,    end: 8.5,  label: 'ATO 02/07 · HOJE',             code: '002' },
    { start: 8.5,  end: 12,   label: 'ATO 03/07 · TRANSCENDÊNCIA',   code: '003' },
    { start: 12,   end: 17,   label: 'ATO 04/07 · A MARCA',          code: '004' },
    { start: 17,   end: 23,   label: 'ATO 05/07 · OS TRÊS PILARES',  code: '005' },
    { start: 23,   end: 27,   label: 'ATO 06/07 · A ALQUIMIA',       code: '006' },
    { start: 27,   end: 32,   label: 'ATO 07/07 · O INFINITO',       code: '007' },
  ];
  const act = acts.find(a => time >= a.start && time < a.end) || acts[acts.length - 1];

  // Background lookup so chrome inks/papers match the current scene
  const bgFor = (t) => {
    if (t < 5)    return { bg: LEND.ink,    fg: LEND.paper };
    if (t < 8.5)  return { bg: LEND.yellow, fg: LEND.ink };
    if (t < 12)   return { bg: LEND.ink,    fg: LEND.yellow };
    if (t < 17)   return { bg: LEND.paper,  fg: LEND.ink };
    if (t < 23)   return { bg: LEND.bege,   fg: LEND.ink };
    if (t < 27)   return { bg: LEND.ink,    fg: LEND.paper };
    return            { bg: LEND.yellow, fg: LEND.ink };
  };
  const { fg } = bgFor(time);

  // Format timecode as 00:00:00 (mm:ss:ff at 24fps)
  const tc = (t) => {
    const tot = Math.max(0, t);
    const m = Math.floor(tot / 60);
    const s = Math.floor(tot % 60);
    const ff = Math.floor((tot * 24) % 24);
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}:${String(ff).padStart(2,'0')}`;
  };

  const monoBase = {
    fontFamily: FONT_MONO,
    fontSize: 14,
    letterSpacing:0,
    textTransform: 'uppercase',
    color: fg,
    fontWeight: 500,
    transition: 'color 100ms linear',
  };

  // Crop mark — small L-bracket
  const CropMark = ({ left, top, right, bottom, rot }) => (
    <div style={{
      position: 'absolute',
      left, top, right, bottom,
      width: 28, height: 28,
      borderTop: `2px solid ${fg}`,
      borderLeft: `2px solid ${fg}`,
      transform: `rotate(${rot}deg)`,
      transformOrigin: 'top left',
      transition: 'border-color 100ms linear',
      opacity: 0.9,
    }} />
  );

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 100 }}>
      {/* Crop marks */}
      <CropMark left={40} top={40} rot={0} />
      <CropMark right={40} top={40} rot={90} />
      <CropMark left={40} bottom={40} rot={-90} />
      <CropMark right={40} bottom={40} rot={180} />

      {/* Top-left: brand id */}
      <div style={{ ...monoBase, position: 'absolute', left: 88, top: 44 }}>
        [VINHETA · LENDÁR[IA] · 2026]
      </div>
      {/* Top-right: act label */}
      <div style={{ ...monoBase, position: 'absolute', right: 88, top: 44, textAlign: 'right' }}>
        {act.label}
      </div>

      {/* Bottom-left: timecode */}
      <div style={{ ...monoBase, position: 'absolute', left: 88, bottom: 44 }}>
        <span style={{ display: 'inline-block', width: 8, height: 8, background: LEND.yellow, marginRight: 10, transform: 'translateY(-1px)' }} />
        TC {tc(time)} / 00:32:00
      </div>
      {/* Bottom-right: frame id */}
      <div style={{ ...monoBase, position: 'absolute', right: 88, bottom: 44, textAlign: 'right' }}>
        FRAME {act.code} · BUILDING ∞
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

// Full-bleed background painted while the sprite is live. Hard-cut between scenes.
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

// A line of display type that fades + slides up 14px over `dur` after `delay`.
function Line({
  text, x, y, size = 140, color = LEND.paper, delay = 0, dur = 0.28,
  weight = 'normal', font = FONT_DISPLAY, lh = 0.92, ls = 0,
  align = 'left',
  underline = false,
}) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / dur, 0, 1);
  if (t <= 0) return null;
  const e = easeMech(t);
  const opacity = e;
  const ty = (1 - e) * 14;

  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';

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
      {underline && (
        <div style={{
          width: `${e * 100}%`,
          height: Math.max(4, size * 0.06),
          background: LEND.yellow,
          marginTop: 12,
        }} />
      )}
    </div>
  );
}

// Mono caption / eyebrow tag
function Eyebrow({ text, x, y, delay = 0, color = LEND.ink, size = 18, bracket = true, align = 'left' }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / 0.2, 0, 1);
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

// Blinking cursor block
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
// SCENE 1 — A VOID (0 — 5s)
// Black background. Manifesto opening lines stack in.
// ─────────────────────────────────────────────────────────────────────────────
function SceneVoid() {
  return (
    <Sprite start={0} end={5}>
      <SceneBg color={LEND.ink} label="01 A void">
        {/* big quiet structure */}
        <Line text="POR 200 MIL ANOS,"  x={180} y={310} size={140} color={LEND.paper} delay={0.6} />
        <Line text="FOMOS REFÉNS"       x={180} y={470} size={140} color={LEND.paper} delay={1.4} />
        <Line text="DA BIOLOGIA."       x={180} y={630} size={140} color={LEND.yellow} delay={2.2} />

        {/* cursor at end of last line */}
        <Sprite start={2.2 + 0} end={5}>
          <CursorAfter />
        </Sprite>

        {/* small annotation */}
        <Eyebrow text="MANIFESTO · LINHA 01" x={180} y={780} delay={3.0} color={LEND.mute} size={16} />

        {/* tiny page number bottom-right area, editorial */}
        <Sprite start={3.2} end={5}><PageMark n="01" /></Sprite>
      </SceneBg>
    </Sprite>
  );
}

function CursorAfter() {
  return <Cursor x={1180} y={638} w={20} h={120} color={LEND.yellow} />;
}

function PageMark({ n }) {
  const { localTime } = useSprite();
  const t = clamp(localTime / 0.3, 0, 1);
  return (
    <div style={{
      position: 'absolute', right: 180, bottom: 200,
      fontFamily: FONT_DISPLAY,
      fontSize: 220,
      color: LEND.paper,
      opacity: t * 0.08,
      lineHeight: 0.8,
    }}>{n}</div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 2 — HOJE. (5 — 8.5s)
// Hard cut to yellow. "HOJE." slams in, then a printer's-block press settles it.
// ─────────────────────────────────────────────────────────────────────────────
function SceneHoje() {
  return (
    <Sprite start={5} end={8.5}>
      <SceneBg color={LEND.yellow} label="02 Hoje.">
        <HojeSlam />

        {/* mono ticker at bottom */}
        <Eyebrow text="O LIMIAR DA INTELIGÊNCIA ARTIFICIAL"
                 x={180} y={870} delay={0.9} color={LEND.ink} size={20} />

        {/* a black bar that slams in from the left */}
        <SlideBar />

        {/* huge ∞ ghost off to the side */}
        <GhostInf />
      </SceneBg>
    </Sprite>
  );
}

function HojeSlam() {
  const { localTime } = useSprite();
  // animation: 0.0 - 0.2 SLAM (scale 1.55 → 1.0)
  //            0.2 - 1.5 hold
  //            1.5 - 1.7 press (translate 0 → 14,14 + shadow appears)
  //            then hold
  const tSlam  = clamp(localTime / 0.22, 0, 1);
  const slamE  = 1 - Math.pow(1 - tSlam, 5);
  const scale  = 1.55 - 0.55 * slamE;
  const opacity = tSlam;

  const tPress = clamp((localTime - 1.6) / 0.16, 0, 1);
  const pressE = easeMech(tPress);
  const offX = pressE * 16;
  const offY = pressE * 16;
  const shadow = pressE === 0 ? 'none' : `${-pressE * 16}px ${-pressE * 16}px 0 ${LEND.ink}`;

  return (
    <div style={{
      position: 'absolute',
      left: '50%', top: '50%',
      transform: `translate(calc(-50% + ${offX}px), calc(-50% + ${offY}px - 40px)) scale(${scale})`,
      opacity,
      fontFamily: FONT_DISPLAY,
      fontSize: 460,
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

function SlideBar() {
  const { localTime } = useSprite();
  const t = clamp((localTime - 0.6) / 0.35, 0, 1);
  const e = easeMech(t);
  const x = -800 + 800 * e;
  if (t <= 0) return null;
  return (
    <div style={{
      position: 'absolute',
      left: x, top: 180,
      width: 600, height: 38,
      background: LEND.ink,
    }} />
  );
}

function GhostInf() {
  const { localTime, duration } = useSprite();
  const t = clamp((localTime - 0.4) / 0.4, 0, 1);
  // drift right slowly
  const drift = clamp(localTime / duration, 0, 1);
  return (
    <div style={{
      position: 'absolute',
      right: 80, bottom: 80,
      fontFamily: FONT_DISPLAY,
      fontSize: 360,
      lineHeight: 0.8,
      color: LEND.ink,
      opacity: t * 0.08,
      transform: `translateX(${-drift * 20}px)`,
    }}>∞</div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 3 — TRANSCENDEMOS. (8.5 — 12s)
// Hard cut to ink. Yellow display type. Underline. Counter-cut to scene 2.
// ─────────────────────────────────────────────────────────────────────────────
function SceneTranscendemos() {
  return (
    <Sprite start={8.5} end={12}>
      <SceneBg color={LEND.ink} label="03 Transcendemos.">
        <Line text="TRANSCENDEMOS." x={180} y={420} size={260} color={LEND.yellow}
              delay={0.1} dur={0.30} ls={0} underline />

        <Eyebrow text="O FIM DE 200 MIL ANOS DE BIOLOGIA"
                 x={180} y={770} delay={0.6} color={LEND.paper} size={20} />

        {/* sliding marquee strip */}
        <MarqueeStrip />
      </SceneBg>
    </Sprite>
  );
}

function MarqueeStrip() {
  const { localTime, duration } = useSprite();
  const t = clamp((localTime - 0.4) / 0.4, 0, 1);
  if (t <= 0) return null;
  // drift the text leftward over the scene
  const drift = clamp(localTime / duration, 0, 1) * 600;
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, top: 870,
      height: 70,
      background: LEND.yellow,
      overflow: 'hidden',
      borderTop: `2px solid ${LEND.ink}`,
      transform: `translateY(${(1 - t) * 70}px)`,
    }}>
      <div style={{
        whiteSpace: 'nowrap',
        position: 'absolute',
        top: 18,
        left: -drift,
        fontFamily: FONT_MONO,
        fontWeight: 700,
        fontSize: 28,
        letterSpacing:0,
        color: LEND.ink,
        textTransform: 'uppercase',
      }}>
        CONSTRUINDO O INFINITO, HOJE. ∞ &nbsp; · &nbsp; CONSTRUINDO O INFINITO, HOJE. ∞ &nbsp; · &nbsp; CONSTRUINDO O INFINITO, HOJE. ∞ &nbsp; · &nbsp; CONSTRUINDO O INFINITO, HOJE. ∞
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 4 — A MARCA (12 — 17s)
// Ivory paper. ACADEMIA / LENDÁR[IA] with bracket snap.
// ─────────────────────────────────────────────────────────────────────────────
function SceneMarca() {
  return (
    <Sprite start={12} end={17}>
      <SceneBg color={LEND.paper} label="04 A marca">
        <Eyebrow text="A MARCA" x={180} y={260} delay={0.05} color={LEND.ink} size={20} />

        <Line text="ACADEMIA" x={180} y={310} size={220} color={LEND.ink}
              delay={0.25} dur={0.3} ls={0} />

        <LendariaBuild />

        {/* tagline */}
        <Sprite start={3.0} end={5}><MarcaTagline /></Sprite>

        {/* tiny tag */}
        <Eyebrow text="ECOSSISTEMA DE EDUCAÇÃO + INOVAÇÃO" x={180} y={970} delay={3.3} color={LEND.ink} size={16} />
      </SceneBg>
    </Sprite>
  );
}

function LendariaBuild() {
  const { localTime } = useSprite();

  // Build sequence within scene 4:
  // 0.9s  "LENDÁR" appears
  // 1.5s  "[" slides in from left
  // 1.6s  "IA" fades + scales in
  // 1.7s  "]" slides in from right
  // 1.85s yellow flash behind [IA]
  // 2.05s "™" appears

  const baseY = 580;
  const baseX = 180;

  const lendarT = clamp((localTime - 0.9) / 0.3, 0, 1);
  const lendarE = easeMech(lendarT);
  if (lendarT <= 0) return null;

  // bracket open
  const openT = clamp((localTime - 1.5) / 0.18, 0, 1);
  const openE = easeMech(openT);
  // close
  const closeT = clamp((localTime - 1.7) / 0.18, 0, 1);
  const closeE = easeMech(closeT);
  // IA
  const iaT = clamp((localTime - 1.6) / 0.2, 0, 1);
  const iaE = easeMech(iaT);
  // flash
  const flashT = clamp((localTime - 1.85) / 0.4, 0, 1);
  const flashOp = flashT < 0.5 ? flashT * 2 : (1 - (flashT - 0.5) * 2);
  // ™
  const tmT = clamp((localTime - 2.05) / 0.25, 0, 1);
  const tmE = easeMech(tmT);

  const size = 220;
  // LENDÁR width approx — measured by eye for Archivo Black at 220px
  const lendarW = 740; // px estimated
  const bracketSize = size * 1.1;

  return (
    <div style={{
      position: 'absolute', left: baseX, top: baseY,
      fontFamily: FONT_DISPLAY,
      fontSize: size,
      color: LEND.ink,
      lineHeight: 0.92,
      letterSpacing:0,
      textTransform: 'uppercase',
      display: 'flex', alignItems: 'baseline',
      whiteSpace: 'pre',
    }}>
      <span style={{
        opacity: lendarE,
        transform: `translateY(${(1 - lendarE) * 14}px)`,
        display: 'inline-block',
      }}>LENDÁR</span>

      {/* yellow flash behind [IA] */}
      <span style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'baseline',
      }}>
        <span style={{
          position: 'absolute',
          left: -8, right: -8,
          top: '12%', bottom: '12%',
          background: LEND.yellow,
          opacity: flashOp * 0.85,
          zIndex: 0,
        }} />
        <span style={{
          position: 'relative', zIndex: 1,
          opacity: openE,
          transform: `translateX(${(1 - openE) * -50}px)`,
          display: 'inline-block',
          color: LEND.ink,
        }}>[</span>
        <span style={{
          position: 'relative', zIndex: 1,
          opacity: iaE,
          transform: `scale(${0.7 + 0.3 * iaE})`,
          transformOrigin: 'center',
          display: 'inline-block',
          color: LEND.ink,
        }}>IA</span>
        <span style={{
          position: 'relative', zIndex: 1,
          opacity: closeE,
          transform: `translateX(${(1 - closeE) * 50}px)`,
          display: 'inline-block',
          color: LEND.ink,
        }}>]</span>
      </span>

      <span style={{
        fontFamily: FONT_MONO,
        fontSize: size * 0.18,
        fontWeight: 700,
        opacity: tmE,
        transform: `translateY(${-size * 0.62}px) scale(${0.9 + 0.1 * tmE})`,
        display: 'inline-block',
        marginLeft: 8,
        color: LEND.ink,
        letterSpacing: 0,
      }}>™</span>
    </div>
  );
}

function MarcaTagline() {
  const { localTime } = useSprite();
  const t = clamp(localTime / 0.4, 0, 1);
  const e = easeMech(t);
  return (
    <div style={{
      position: 'absolute',
      left: 180, top: 840,
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
      Um ecossistema de educação <span style={{ background: LEND.yellow, padding: '0 .08em' }}>+ inovação</span> para potencializar pessoas com IA generativa.
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 5 — TRÊS PILARES (17 — 23s)
// Bege background. Three brutalist cards drop in.
// ─────────────────────────────────────────────────────────────────────────────
function ScenePilares() {
  return (
    <Sprite start={17} end={23}>
      <SceneBg color={LEND.bege} label="05 Os três pilares">
        <Eyebrow text="OS TRÊS PILARES DE UMA VIDA LENDÁRIA" x={180} y={170} delay={0.1} color={LEND.ink} size={22} />

        <Line text="UMA VIDA LENDÁRIA"
              x={180} y={220} size={120} color={LEND.ink} delay={0.4} dur={0.3} ls={0} />
        <Line text="EXIGE TRÊS COISAS." x={180} y={360} size={120} color={LEND.ink} delay={0.7} dur={0.3} ls={0} />

        <PillarCard idx={0} title="INTELIGÊNCIA" sub="+ AUTOCONSCIÊNCIA" num="01" delay={1.3} variant="paper" />
        <PillarCard idx={1} title="IMPACTO"      sub="+ ARTE"            num="02" delay={1.7} variant="ink" />
        <PillarCard idx={2} title="INTELIGÊNCIA" sub="ARTIFICIAL"        num="03" delay={2.1} variant="yellow" />
      </SceneBg>
    </Sprite>
  );
}

function PillarCard({ idx, title, sub, num, delay, variant }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / 0.35, 0, 1);
  if (t <= 0) return null;

  // Overshoot drop
  const back = (x) => {
    const c1 = 1.4, c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  };
  const e = back(t);
  const ty = (1 - t) * -200;       // falls in from above
  const opacity = clamp(t * 2, 0, 1);

  const w = 480;
  const h = 540;
  const gap = 30;
  const totalW = 3 * w + 2 * gap;
  const startX = (1920 - totalW) / 2;
  const x = startX + idx * (w + gap);
  const y = 560;

  // tilt nudge alternating
  const tilt = idx === 1 ? 0.6 : -0.6;

  const bg = variant === 'ink' ? LEND.ink : variant === 'yellow' ? LEND.yellow : LEND.paper;
  const fg = variant === 'ink' ? LEND.paper : LEND.ink;
  const sh = `12px 12px 0 ${LEND.ink}`;

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      width: w, height: h,
      background: bg,
      color: fg,
      border: `2px solid ${LEND.ink}`,
      boxShadow: sh,
      transform: `translateY(${ty}px) rotate(${tilt * (1 - clamp(t, 0, 1) * 0.6)}deg) scale(${0.97 + 0.03 * e})`,
      opacity,
      padding: 36,
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
          marginTop: 24,
          fontFamily: FONT_DISPLAY,
          fontSize: 76,
          lineHeight: 0.92,
          letterSpacing:0,
          textTransform: 'uppercase',
        }}>{title}</div>
        <div style={{
          marginTop: 8,
          fontFamily: FONT_DISPLAY,
          fontSize: 56,
          lineHeight: 0.92,
          letterSpacing:0,
          textTransform: 'uppercase',
          opacity: 0.95,
        }}>{sub}</div>
      </div>

      <div style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 200,
        lineHeight: 0.8,
        letterSpacing:0,
        opacity: variant === 'paper' ? 0.08 : 0.18,
        alignSelf: 'flex-end',
      }}>{num}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 6 — A ALQUIMIA EM NÚMEROS (23 — 27s)
// Ink. Three giant counters tick up.
// ─────────────────────────────────────────────────────────────────────────────
function SceneNumeros() {
  return (
    <Sprite start={23} end={27}>
      <SceneBg color={LEND.ink} label="06 A alquimia em números">
        <Eyebrow text="A ALQUIMIA EM NÚMEROS" x={180} y={180} delay={0.1} color={LEND.yellow} size={22} />
        <Line text="O QUE A ACADEMIA"   x={180} y={240} size={110} color={LEND.paper} delay={0.35} dur={0.28} />
        <Line text="ENTREGA. CONCRETO." x={180} y={360} size={110} color={LEND.paper} delay={0.55} dur={0.28} />

        <Counter x={210}  y={580} target={12} suffix=""    label="MÓDULOS"            delay={1.1} />
        <Counter x={830}  y={580} target={48} suffix="H"   label="DE CONTEÚDO PRÁTICO" delay={1.3} />
        <Counter x={1430} y={580} target={7}  suffix=""    label="ARQUÉTIPOS HEROICOS" delay={1.5} />
      </SceneBg>
    </Sprite>
  );
}

function Counter({ x, y, target, suffix, label, delay }) {
  const { localTime } = useSprite();
  const t = clamp((localTime - delay) / 0.9, 0, 1);
  const e = easeMech(t);
  const value = Math.floor(target * e);

  if (t <= 0) return null;

  const opacity = clamp(t * 3, 0, 1);
  const ty = (1 - clamp(t * 2, 0, 1)) * 30;

  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      opacity, transform: `translateY(${ty}px)`,
    }}>
      <div style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 280,
        lineHeight: 0.85,
        letterSpacing:0,
        color: LEND.yellow,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}<span style={{ fontSize: 180 }}>{suffix}</span>
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
        fontSize: 22,
        letterSpacing:0,
        textTransform: 'uppercase',
        color: LEND.paper,
        fontWeight: 500,
        maxWidth: 360,
      }}>
        {label}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 7 — A ASSINATURA (27 — 32s)
// Yellow. CONSTRUINDO O INFINITO, HOJE. Giant ∞. Mark.
// ─────────────────────────────────────────────────────────────────────────────
function SceneAssinatura() {
  return (
    <Sprite start={27} end={32}>
      <SceneBg color={LEND.yellow} label="07 Construindo o infinito, hoje">
        <Line text="CONSTRUINDO" x={180} y={260} size={200} color={LEND.ink} delay={0.2} dur={0.28} />
        <Line text="O INFINITO,"  x={180} y={460} size={200} color={LEND.ink} delay={0.55} dur={0.28} />
        <Line text="HOJE." x={180} y={660} size={200} color={LEND.ink} delay={0.95} dur={0.28} />

        <BigInfinity />

        {/* corner mark / sign-off */}
        <Sprite start={2.6} end={5}><SignOff /></Sprite>
      </SceneBg>
    </Sprite>
  );
}

function BigInfinity() {
  const { localTime, duration } = useSprite();
  const t = clamp((localTime - 1.5) / 0.5, 0, 1);
  const e = easeMech(t);
  if (t <= 0) return null;

  // tiny breathing — keep static per system but allow scale-in
  const scale = 0.85 + 0.15 * e;

  return (
    <div style={{
      position: 'absolute',
      right: 200, top: 240,
      fontFamily: FONT_DISPLAY,
      fontSize: 700,
      lineHeight: 0.8,
      color: LEND.ink,
      letterSpacing:0,
      opacity: e,
      transform: `scale(${scale})`,
      transformOrigin: 'right center',
    }}>∞</div>
  );
}

function SignOff() {
  const { localTime } = useSprite();
  const t = clamp(localTime / 0.4, 0, 1);
  const e = easeMech(t);
  return (
    <div style={{
      position: 'absolute', left: 180, bottom: 220,
      opacity: e,
      transform: `translateY(${(1 - e) * 10}px)`,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16,
    }}>
      <div>
        <img src="assets/logo/lockup-black.svg" alt="Academia Lendár[IA]" style={{ width: 500, height: 'auto', display: 'block' }} />
        <div style={{
          fontFamily: FONT_MONO,
          fontSize: 20,
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
      <SceneVoid />
      <SceneHoje />
      <SceneTranscendemos />
      <SceneMarca />
      <ScenePilares />
      <SceneNumeros />
      <SceneAssinatura />
      <EditorialChrome />
    </React.Fragment>
  );
}

Object.assign(window, {
  LEND, FONT_DISPLAY, FONT_SANS, FONT_MONO, easeMech,
  EditorialChrome, SceneBg, Line, Eyebrow, Cursor,
  SceneVoid, SceneHoje, SceneTranscendemos, SceneMarca,
  ScenePilares, SceneNumeros, SceneAssinatura,
  PillarCard, Counter, BigInfinity, SignOff,
  VinhetaVideo,
});
