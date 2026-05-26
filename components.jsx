// ============================================================
//  Academia Lendár[IA] — shared UI Kit components
//  Plain JSX source. Active runtime pages load components.compiled.js.
//  All components are exported to window at the bottom before compilation.
// ============================================================

var { useState, useEffect, useRef } = React;

/* ---------- Atoms ---------- */

function Tag({ children, variant = "bare", style }) {
  // variants: bare | yellow | dark | outline | red | green
  const base = {
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing:0,
    textTransform: "uppercase",
    padding: variant === "bare" ? "0" : "6px 10px",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    whiteSpace: "nowrap",
  };
  const v = {
    bare:    { color: "var(--color-ink)" },
    yellow:  { background: "var(--color-yellow)", color: "var(--color-ink)" },
    dark:    { background: "var(--color-ink)",    color: "var(--color-yellow)" },
    outline: { border: "2px solid var(--color-ink)", padding: "4px 10px" },
    red:     { background: "var(--color-signal-red)", color: "var(--color-paper)" },
    green:   { background: "var(--color-signal-green)", color: "var(--color-paper)" },
  }[variant];
  return <span style={{ ...base, ...v, ...style }}>[{children}]</span>;
}

function Button({ children, variant = "primary", size = "md", as = "button", arrow = false, block = false, style, ...rest }) {
  const sizes = {
    sm: { padding: "9px 14px",  fontSize: 12 },
    md: { padding: "13px 20px", fontSize: 14 },
    lg: { padding: "17px 26px", fontSize: 16 },
  };
  const variants = {
    primary:     { background: "var(--color-yellow)", color: "var(--color-ink)",    border: "2px solid var(--color-ink)" },
    secondary:   { background: "transparent",         color: "var(--color-ink)",    border: "2px solid var(--color-ink)" },
    dark:        { background: "var(--color-ink)",    color: "var(--color-yellow)", border: "2px solid var(--color-ink)" },
    ghost:       { background: "transparent",         color: "var(--color-ink)",    border: "2px solid transparent" },
    destructive: { background: "transparent",         color: "var(--color-signal-red)", border: "2px solid var(--color-signal-red)" },
  };
  const baseStyle = {
    fontFamily: "var(--font-sans)", fontWeight: 700, letterSpacing:0,
    textTransform: "uppercase", cursor: "pointer", display: "inline-flex",
    alignItems: "center", gap: 10, transition: "all 100ms linear",
    boxShadow: "none", transform: "none",
    ...sizes[size], ...variants[variant], ...style,
  };
  const resetButton = el => {
    Object.assign(el.style, variants[variant], style || {}, {
      boxShadow: "none",
      transform: "none",
    });
  };
  const liftButton = el => {
    el.style.transform = "translate(-2px, -2px)";
    el.style.boxShadow = "6px 6px 0 var(--color-ink)";
    if (variant === "primary") {
      el.style.background = "var(--color-ink)";
      el.style.color = "var(--color-yellow)";
    }
    if (variant === "secondary") {
      el.style.background = "var(--color-ink)";
      el.style.color = "var(--color-paper)";
    }
    if (variant === "dark") {
      el.style.background = "var(--color-yellow)";
      el.style.color = "var(--color-ink)";
      el.style.borderColor = "var(--color-ink)";
    }
    if (variant === "ghost") {
      el.style.transform = "none";
      el.style.boxShadow = "none";
      el.style.color = "var(--color-mute)";
    }
    if (variant === "destructive") {
      el.style.background = "var(--color-signal-red)";
      el.style.color = "var(--color-paper)";
    }
  };
  const Comp = as;
  return (
    <Comp style={baseStyle}
      onMouseEnter={e => {
        liftButton(e.currentTarget);
      }}
      onMouseLeave={e => {
        resetButton(e.currentTarget);
      }}
      onFocus={e => {
        liftButton(e.currentTarget);
      }}
      onBlur={e => {
        resetButton(e.currentTarget);
      }}
      {...rest}>
      {children}{arrow && <span style={{fontFamily:"var(--font-mono)", fontWeight: 400}}>→</span>}
    </Comp>
  );
}

function Avatar({ initials, color = "yellow", size = 36 }) {
  return (
    <div style={{
      width: size, height: size,
      background: color === "yellow" ? "var(--color-yellow)" : "var(--color-ink)",
      color: color === "yellow" ? "var(--color-ink)" : "var(--color-yellow)",
      fontFamily: "var(--font-display)", fontSize: size * 0.4,
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, letterSpacing:0,
      border: "1px solid var(--color-ink)",
    }}>{initials}</div>
  );
}

function PhotoBlock({ label = "FOTO", ratio = "4 / 3", style }) {
  return (
    <div style={{
      aspectRatio: ratio, background: "var(--color-paper-warm)",
      border: "2px solid var(--color-ink)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
      textTransform: "uppercase", color: "var(--color-mute)",
      backgroundImage: "repeating-linear-gradient(135deg, transparent 0 11px, rgba(14,14,14,.04) 11px 12px)",
      ...style,
    }}>[{label}]</div>
  );
}

function BracketHeadline({ children, size = 96, color = "var(--color-ink)" }) {
  // children: string with [bracketed words] highlighted
  const parts = String(children).split(/(\[[^\]]+\])/g);
  return (
    <h1 style={{
      fontFamily: "var(--font-display)",
      fontSize: size, lineHeight: 0.9, letterSpacing:0,
      textTransform: "uppercase", margin: 0, color,
    }}>
      {parts.map((p, i) => p.startsWith("[") && p.endsWith("]") ? (
        <em key={i} style={{
          fontStyle: "normal",
          background: color === "var(--color-ink)" ? "var(--color-ink)" : "var(--color-yellow)",
          color:      color === "var(--color-ink)" ? "var(--color-yellow)" : "var(--color-ink)",
          padding: "0 0.08em",
        }}>{p}</em>
      ) : <React.Fragment key={i}>{p}</React.Fragment>)}
    </h1>
  );
}

function SkipLink({ href = "#conteudo-principal", children = "Pular para o conteúdo" }) {
  return <a className="skip-link" href={href}>{children}</a>;
}

/* ---------- ProgressBar / XPMeter ----------
   Variants: linear-thin (4px) | linear-thick (8px) | stepped (12 segments) | ring
   Tones:    yellow-on-dark    | ink-on-paper
   Use for: module progress, lesson progress, streak/XP meters, certificate progress.
   Replaces inline progress bars previously hard-coded in Sidebar / LessonSidebar.
*/
function ProgressBar({
  value = 0,
  max = 100,
  variant = "linear-thin",
  label,
  showPercent = false,
  tone = "yellow-on-dark",
  segments = 12,
  ringSize = 64,
  style,
  ariaLabel,
}) {
  // Clamp + safety
  const safeMax = Math.max(1, Number(max) || 1);
  const safeVal = Math.max(0, Math.min(safeMax, Number(value) || 0));
  const pct = Math.round((safeVal / safeMax) * 100);

  // Tone palette
  const palette = tone === "ink-on-paper"
    ? { track: "var(--color-rule-cool)", fill: "var(--color-ink)", text: "var(--color-ink)", mute: "var(--color-mute)" }
    : { track: "rgba(255,255,240,.15)",  fill: "var(--color-yellow)", text: "var(--color-paper)", mute: "var(--color-mute-soft)" };

  // ---- Linear variants ----
  if (variant === "linear-thin" || variant === "linear-thick") {
    const h = variant === "linear-thick" ? 8 : 4;
    return (
      <div style={{ ...style }}
           role="progressbar"
           aria-valuenow={safeVal}
           aria-valuemin={0}
           aria-valuemax={safeMax}
           aria-label={ariaLabel || label || "Progresso"}>
        {label && (
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
            textTransform: "uppercase", color: palette.text, marginBottom: 6,
          }}>
            <span>{label}</span>
            {showPercent && <span style={{ color: palette.mute }}>{pct}%</span>}
          </div>
        )}
        <div style={{ height: h, background: palette.track, position: "relative" }}>
          <div style={{
            width: pct + "%", height: "100%", background: palette.fill,
            transition: "width 200ms linear",
          }}/>
        </div>
      </div>
    );
  }

  // ---- Stepped variant (12 segments — for modules/units) ----
  if (variant === "stepped") {
    const n = Math.max(1, Math.floor(segments));
    const filled = Math.round((safeVal / safeMax) * n);
    return (
      <div style={{ ...style }}
           role="progressbar"
           aria-valuenow={safeVal}
           aria-valuemin={0}
           aria-valuemax={safeMax}
           aria-label={ariaLabel || label || "Progresso por segmentos"}>
        {label && (
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
            textTransform: "uppercase", color: palette.text, marginBottom: 8,
          }}>
            <span>{label}</span>
            {showPercent && <span style={{ color: palette.mute }}>{filled}/{n}</span>}
          </div>
        )}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 3 }}>
          {Array.from({ length: n }, (_, i) => (
            <span key={i} aria-hidden="true" style={{
              height: 12,
              background: i < filled ? palette.fill : palette.track,
              border: tone === "ink-on-paper" ? "1px solid var(--color-ink)" : "1px solid rgba(255,255,240,.18)",
              transition: "background 100ms linear",
            }}/>
          ))}
        </div>
      </div>
    );
  }

  // ---- Ring variant (for streaks / chama) ----
  if (variant === "ring") {
    const size = ringSize;
    const stroke = 6;
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const offset = c - (pct / 100) * c;
    return (
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 12, ...style,
      }}
           role="progressbar"
           aria-valuenow={safeVal}
           aria-valuemin={0}
           aria-valuemax={safeMax}
           aria-label={ariaLabel || label || "Progresso circular"}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ flexShrink: 0 }}>
          <circle cx={size/2} cy={size/2} r={r}
                  fill="none" stroke={palette.track} strokeWidth={stroke}/>
          <circle cx={size/2} cy={size/2} r={r}
                  fill="none" stroke={palette.fill} strokeWidth={stroke}
                  strokeDasharray={c} strokeDashoffset={offset}
                  strokeLinecap="butt"
                  transform={`rotate(-90 ${size/2} ${size/2})`}
                  style={{ transition: "stroke-dashoffset 200ms linear" }}/>
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                fontFamily="var(--font-display)" fontSize={size * 0.28}
                fill={palette.text} letterSpacing="0">
            {pct}
          </text>
        </svg>
        {label && (
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
            textTransform: "uppercase", color: palette.text, lineHeight: 1.3,
          }}>
            {label}
            {showPercent && <div style={{ color: palette.mute }}>{safeVal}/{safeMax}</div>}
          </div>
        )}
      </div>
    );
  }

  return null;
}

/* ---------- StatCard / KPIBlock ----------
   Composition: bracket eyebrow → giant numeral → label → optional delta.
   Variants: default (paper) | inverse (ink) | accent (yellow).
*/
function StatCard({
  eyebrow,
  value,
  label,
  delta,
  deltaDir = "up", // up | down | flat
  variant = "default",
  style,
}) {
  const palette = {
    default: { bg: "var(--color-paper)", fg: "var(--color-ink)", mute: "var(--color-mute)" },
    inverse: { bg: "var(--color-ink)",   fg: "var(--color-paper)", mute: "var(--color-mute-soft)" },
    accent:  { bg: "var(--color-yellow)", fg: "var(--color-ink)", mute: "var(--color-mute)" },
  }[variant];

  const deltaTone = deltaDir === "down"
    ? "var(--color-signal-red)"
    : deltaDir === "up"
      ? (variant === "inverse" ? "var(--color-yellow)" : "var(--color-signal-green)")
      : palette.mute;

  const deltaGlyph = deltaDir === "down" ? "↓" : deltaDir === "up" ? "↑" : "→";

  return (
    <div style={{
      background: palette.bg,
      color: palette.fg,
      border: "2px solid var(--color-ink)",
      padding: "20px 22px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minHeight: 168,
      transition: "all 100ms linear",
      ...style,
    }}>
      {eyebrow && (
        <div style={{
          fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 11,
          letterSpacing: 0, textTransform: "uppercase", color: palette.mute,
          lineHeight: 1,
        }}>[{eyebrow}]</div>
      )}
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(48px, 6vw, 84px)",
        lineHeight: 0.9,
        letterSpacing: 0,
        textTransform: "uppercase",
        marginTop: 4,
      }}>{value}</div>
      {label && (
        <div style={{
          fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14,
          lineHeight: 1.3, color: palette.fg,
          marginTop: "auto",
        }}>{label}</div>
      )}
      {delta && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 11,
          letterSpacing: 0, textTransform: "uppercase", color: deltaTone,
          marginTop: 2,
        }}>
          <span aria-hidden="true">{deltaGlyph}</span>
          <span>{delta}</span>
        </div>
      )}
    </div>
  );
}

/* ---------- Modal / Dialog ----------
   Accessible: focus trap, ESC to close, scroll lock, return focus.
   Skin: solid paper-warm backdrop (no blur), 2px ink border, 12/12 shadow.
   Variants: default | wide | confirm (with primary/ghost buttons).
*/
function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
  variant = "default",   // default | wide | confirm
  primaryLabel = "Confirmar",
  ghostLabel = "Cancelar",
  onPrimary,
  onGhost,
  destructive = false,
}) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;

    // Scroll lock
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus first focusable inside panel
    const t = setTimeout(() => {
      const focusables = panelRef.current && panelRef.current.querySelectorAll(
        'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'
      );
      if (focusables && focusables.length) focusables[0].focus();
      else if (panelRef.current) panelRef.current.focus();
    }, 0);

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose && onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = Array.from(panelRef.current.querySelectorAll(
          'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'
        )).filter(el => el.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last  = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  const widths = {
    default: 520,
    wide:    760,
    confirm: 440,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lkd-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose && onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "var(--color-paper-warm)",  // brutal: solid, never blur
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}>
      <div
        ref={panelRef}
        tabIndex={-1}
        style={{
          background: "var(--color-paper)",
          color: "var(--color-ink)",
          border: "2px solid var(--color-ink)",
          boxShadow: "12px 12px 0 var(--color-ink)",
          maxWidth: widths[variant] || widths.default,
          width: "100%",
          maxHeight: "calc(100vh - 48px)",
          overflow: "auto",
          padding: 0,
          outline: "none",
        }}>
        {/* Header */}
        <div style={{
          padding: "20px 24px 16px",
          borderBottom: "2px solid var(--color-ink)",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: 16,
        }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {eyebrow && (
              <div style={{
                fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: 11,
                letterSpacing: 0, textTransform: "uppercase",
                color: "var(--color-mute)", marginBottom: 6,
              }}>[{eyebrow}]</div>
            )}
            {title && (
              <h2 id="lkd-modal-title" style={{
                fontFamily: "var(--font-display)",
                fontSize: 28, lineHeight: 0.95, letterSpacing: 0,
                textTransform: "uppercase", margin: 0,
              }}>{title}</h2>
            )}
          </div>
          <button
            type="button"
            aria-label="Fechar"
            onClick={onClose}
            style={{
              width: 36, height: 36,
              border: "2px solid var(--color-ink)",
              background: "var(--color-paper)",
              color: "var(--color-ink)",
              fontFamily: "var(--font-display)", fontSize: 16,
              cursor: "pointer", flexShrink: 0,
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              transition: "all 100ms linear",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-ink)";
              e.currentTarget.style.color = "var(--color-yellow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-paper)";
              e.currentTarget.style.color = "var(--color-ink)";
            }}>×</button>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55 }}>
          {children}
        </div>

        {/* Footer (confirm only) */}
        {variant === "confirm" && (
          <div style={{
            padding: "16px 24px 20px",
            borderTop: "1px solid var(--color-rule-cool)",
            display: "flex", justifyContent: "flex-end", gap: 12, flexWrap: "wrap",
          }}>
            <Button variant="ghost" onClick={onGhost || onClose}>{ghostLabel}</Button>
            <Button
              variant={destructive ? "destructive" : "primary"}
              onClick={onPrimary}
              arrow={!destructive}>
              {primaryLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Tabs editorial ----------
   Accessible: aria-selected, ArrowLeft/ArrowRight keyboard nav, focus-visible bracket.
   Variants: default (bracket line under active) | pill-brutalist (full pill block).
*/
function Tabs({ items, defaultIndex = 0, variant = "default", onChange, style }) {
  const [idx, setIdx] = useState(defaultIndex);
  const tabRefs = useRef([]);

  const select = (i) => {
    setIdx(i);
    onChange && onChange(i, items[i]);
  };

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % items.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + items.length) % items.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End")  next = items.length - 1;
    if (next != null) {
      e.preventDefault();
      select(next);
      const el = tabRefs.current[next];
      if (el) el.focus();
    }
  };

  const isPill = variant === "pill-brutalist";

  return (
    <div style={style}>
      <div
        role="tablist"
        aria-label="Abas"
        style={{
          display: "flex",
          gap: isPill ? 8 : 0,
          borderBottom: isPill ? "none" : "1px solid var(--color-rule-cool)",
          flexWrap: "wrap",
        }}>
        {items.map((it, i) => {
          const active = i === idx;
          const id = `lkd-tab-${i}`;
          const panelId = `lkd-tabpanel-${i}`;
          if (isPill) {
            return (
              <button
                key={id}
                ref={(el) => (tabRefs.current[i] = el)}
                id={id}
                role="tab"
                type="button"
                aria-selected={active}
                aria-controls={panelId}
                tabIndex={active ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                style={{
                  fontFamily: "var(--font-sans)", fontWeight: 700,
                  fontSize: 13, letterSpacing: 0, textTransform: "uppercase",
                  padding: "10px 16px",
                  border: "2px solid var(--color-ink)",
                  background: active ? "var(--color-ink)" : "var(--color-paper)",
                  color: active ? "var(--color-yellow)" : "var(--color-ink)",
                  cursor: "pointer",
                  display: "inline-flex", alignItems: "center", gap: 8,
                  transition: "all 100ms linear",
                  boxShadow: active ? "4px 4px 0 var(--color-ink)" : "none",
                  transform: active ? "translate(-1px, -1px)" : "none",
                }}>
                {it.label}
                {it.count != null && (
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    padding: "1px 6px",
                    background: active ? "var(--color-yellow)" : "var(--color-ink)",
                    color: active ? "var(--color-ink)" : "var(--color-paper)",
                    letterSpacing: 0,
                  }}>{it.count}</span>
                )}
              </button>
            );
          }
          return (
            <button
              key={id}
              ref={(el) => (tabRefs.current[i] = el)}
              id={id}
              role="tab"
              type="button"
              aria-selected={active}
              aria-controls={panelId}
              tabIndex={active ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              style={{
                fontFamily: "var(--font-sans)", fontWeight: active ? 700 : 500,
                fontSize: 14, letterSpacing: 0, textTransform: "uppercase",
                padding: "12px 18px 14px",
                background: "transparent",
                color: active ? "var(--color-ink)" : "var(--color-mute)",
                border: "none",
                borderBottom: active ? "3px solid var(--color-ink)" : "3px solid transparent",
                marginBottom: -1,
                cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 8,
                position: "relative",
                transition: "color 100ms linear, border-color 100ms linear",
              }}>
              {/* bracket marker on active */}
              {active && (
                <>
                  <span aria-hidden="true" style={{
                    fontFamily: "var(--font-mono)", color: "var(--color-ink)",
                  }}>[</span>
                  <span>{it.label}</span>
                  <span aria-hidden="true" style={{
                    fontFamily: "var(--font-mono)", color: "var(--color-ink)",
                  }}>]</span>
                </>
              )}
              {!active && <span>{it.label}</span>}
              {it.count != null && (
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: active ? "var(--color-ink)" : "var(--color-mute-soft)",
                  marginLeft: 2,
                }}>· {it.count}</span>
              )}
            </button>
          );
        })}
      </div>

      <div style={{ paddingTop: 20 }}>
        {items.map((it, i) => (
          <div
            key={`lkd-tabpanel-${i}`}
            id={`lkd-tabpanel-${i}`}
            role="tabpanel"
            aria-labelledby={`lkd-tab-${i}`}
            hidden={i !== idx}>
            {i === idx && it.content}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- DataTable / Roster ----------
   Brutalist roster for course platforms: students, modules, leaderboard.
   columns:    [{ key, label, sortable, align, width, sticky, render(row, i), headerRender }]
   rows:       array of objects keyed by column.key
   density:    "comfortable" (52px) | "compact" (40px)
   tone:       "paper" | "warm"
   selectable: boolean — adds checkbox column
   sortKey/sortDir + onSort(key, dir) — controlled sort
   onRowClick(row, i) — optional row activation
   empty       — custom empty state (defaults to bracket message)
*/
function DataTable({
  columns = [],
  rows = [],
  density = "comfortable",
  tone = "paper",
  selectable = false,
  selected = [],
  onSelectChange,
  sortKey,
  sortDir, // "asc" | "desc" | null
  onSort,
  rowKey = "id",
  onRowClick,
  empty,
  caption,
  style,
}) {
  const rowH = density === "compact" ? 40 : 52;
  const bg = tone === "warm" ? "var(--color-paper-warm)" : "var(--color-paper)";
  const ruleSoft = tone === "warm" ? "var(--color-rule)" : "var(--color-rule-cool)";

  const ids = rows.map((r, i) => (r && r[rowKey] != null ? r[rowKey] : i));
  const allSelected = selectable && ids.length > 0 && ids.every(id => selected.indexOf(id) !== -1);
  const someSelected = selectable && !allSelected && ids.some(id => selected.indexOf(id) !== -1);

  const toggleAll = () => {
    if (!onSelectChange) return;
    onSelectChange(allSelected ? [] : ids.slice());
  };
  const toggleOne = (id) => {
    if (!onSelectChange) return;
    const idx = selected.indexOf(id);
    if (idx === -1) onSelectChange(selected.concat([id]));
    else onSelectChange(selected.filter(s => s !== id));
  };

  const handleSort = (col) => {
    if (!col.sortable || !onSort) return;
    if (sortKey !== col.key) return onSort(col.key, "asc");
    if (sortDir === "asc")   return onSort(col.key, "desc");
    if (sortDir === "desc")  return onSort(null, null);
    return onSort(col.key, "asc");
  };

  const caret = (col) => {
    if (!col.sortable) return null;
    const active = sortKey === col.key;
    const glyph = active ? (sortDir === "desc" ? "▼" : "▲") : "▾";
    return (
      <span aria-hidden="true" style={{
        fontFamily: "var(--font-mono)", fontSize: 10,
        marginLeft: 6, opacity: active ? 1 : 0.35,
      }}>{glyph}</span>
    );
  };

  return (
    <div style={{
      border: "2px solid var(--color-ink)",
      background: bg,
      overflow: "hidden",
      position: "relative",
      ...style,
    }}>
      {caption && (
        <div style={{
          padding: "12px 16px",
          borderBottom: "2px solid var(--color-ink)",
          background: "var(--color-ink)", color: "var(--color-paper)",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
          textTransform: "uppercase",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
        }}>
          <span>[{caption}]</span>
          <span style={{ color: "var(--color-mute-soft)" }}>
            {rows.length} {rows.length === 1 ? "registro" : "registros"}
          </span>
        </div>
      )}

      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%", borderCollapse: "collapse", tableLayout: "auto",
          fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-ink)",
        }}>
          <thead>
            <tr style={{
              background: "var(--color-ink)", color: "var(--color-paper)",
              position: "sticky", top: 0, zIndex: 2,
            }}>
              {selectable && (
                <th scope="col" style={{
                  width: 44, padding: "0 12px", textAlign: "center",
                  borderRight: "1px solid var(--color-ink-rule)",
                  height: rowH,
                }}>
                  <input type="checkbox"
                         aria-label="Selecionar todas"
                         checked={allSelected}
                         ref={el => { if (el) el.indeterminate = someSelected; }}
                         onChange={toggleAll}
                         style={{ accentColor: "var(--color-yellow)", cursor: "pointer" }}/>
                </th>
              )}
              {columns.map((col, i) => {
                const align = col.align || "left";
                const isSorted = sortKey === col.key;
                return (
                  <th key={col.key || i} scope="col"
                      aria-sort={isSorted ? (sortDir === "desc" ? "descending" : "ascending") : "none"}
                      onClick={() => handleSort(col)}
                      style={{
                        padding: "0 14px",
                        textAlign: align, verticalAlign: "middle",
                        fontFamily: "var(--font-mono)", fontWeight: 500,
                        fontSize: 11, letterSpacing: 0, textTransform: "uppercase",
                        color: "var(--color-paper)",
                        cursor: col.sortable ? "pointer" : "default",
                        userSelect: "none",
                        borderRight: i < columns.length - 1 ? "1px solid var(--color-ink-rule)" : "none",
                        height: rowH,
                        width: col.width,
                        whiteSpace: "nowrap",
                        position: col.sticky ? "sticky" : "static",
                        left: col.sticky ? (selectable ? 44 : 0) : "auto",
                        background: col.sticky ? "var(--color-ink)" : "transparent",
                        zIndex: col.sticky ? 3 : "auto",
                      }}>
                    {col.headerRender ? col.headerRender(col) : (
                      <span style={{ display: "inline-flex", alignItems: "center" }}>
                        [{col.label}]{caret(col)}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} style={{
                  padding: "48px 24px", textAlign: "center",
                  fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 0,
                  textTransform: "uppercase", color: "var(--color-mute)",
                  borderBottom: "none",
                }}>
                  {empty || "[SEM REGISTROS]"}
                </td>
              </tr>
            )}
            {rows.map((row, i) => {
              const id = row && row[rowKey] != null ? row[rowKey] : i;
              const isSelected = selected.indexOf(id) !== -1;
              const isLast = i === rows.length - 1;
              return (
                <tr key={id}
                    onClick={onRowClick ? () => onRowClick(row, i) : undefined}
                    style={{
                      background: isSelected
                        ? "var(--color-yellow)"
                        : (i % 2 === 1 && tone === "paper" ? "var(--color-paper-warm)" : "transparent"),
                      cursor: onRowClick ? "pointer" : "default",
                      transition: "background 100ms linear",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected && onRowClick) e.currentTarget.style.background = "var(--color-paper-deep)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.background = (i % 2 === 1 && tone === "paper")
                          ? "var(--color-paper-warm)"
                          : "transparent";
                      }
                    }}>
                  {selectable && (
                    <td style={{
                      padding: "0 12px", textAlign: "center",
                      borderRight: "1px solid " + ruleSoft,
                      borderBottom: isLast ? "none" : "1px solid " + ruleSoft,
                      height: rowH,
                    }}
                        onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox"
                             aria-label={`Selecionar linha ${i + 1}`}
                             checked={isSelected}
                             onChange={() => toggleOne(id)}
                             style={{ accentColor: "var(--color-yellow)", cursor: "pointer" }}/>
                    </td>
                  )}
                  {columns.map((col, j) => {
                    const align = col.align || "left";
                    const raw = row ? row[col.key] : null;
                    const cell = col.render ? col.render(row, i) : (raw == null ? "" : raw);
                    return (
                      <td key={col.key || j} style={{
                        padding: "8px 14px", textAlign: align, verticalAlign: "middle",
                        borderRight: j < columns.length - 1 ? "1px solid " + ruleSoft : "none",
                        borderBottom: isLast ? "none" : "1px solid " + ruleSoft,
                        height: rowH,
                        position: col.sticky ? "sticky" : "static",
                        left: col.sticky ? (selectable ? 44 : 0) : "auto",
                        background: col.sticky ? (isSelected ? "var(--color-yellow)" : bg) : "transparent",
                        zIndex: col.sticky ? 1 : "auto",
                        whiteSpace: col.nowrap ? "nowrap" : "normal",
                      }}>
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- DataTableNameCell ----------
   Convenience cell: avatar + primary + secondary (mute). Used inside DataTable rows.
*/
function DataTableNameCell({ avatar, name, meta, initials }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
      {avatar ? (
        <img src={avatar} alt="" style={{
          width: 32, height: 32, objectFit: "cover",
          border: "2px solid var(--color-ink)", flexShrink: 0,
        }}/>
      ) : (
        <div style={{
          width: 32, height: 32, flexShrink: 0,
          background: "var(--color-yellow)", color: "var(--color-ink)",
          border: "2px solid var(--color-ink)",
          fontFamily: "var(--font-display)", fontSize: 12,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          textTransform: "uppercase", letterSpacing: 0,
        }}>{initials || (name ? name.slice(0, 2) : "??")}</div>
      )}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <span style={{
          fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14,
          color: "var(--color-ink)", lineHeight: 1.2,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>{name}</span>
        {meta && (
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
            color: "var(--color-mute)", marginTop: 2,
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>{meta}</span>
        )}
      </div>
    </div>
  );
}

/* ---------- Toast / Notification stack ----------
   Two pieces:
     <ToastProvider>            — mount once near root; renders the stack
     window.LkdToast.push(...)  — global imperative API; or window.toast(...)
   Variants: default | success | warning | error | info
   API:
     toast.push({ title, body, variant, action, duration, id })
     toast.dismiss(id)
     toast.clear()
*/
var __lkd_toast_state = { items: [], listeners: [], nextId: 1 };

function __lkd_toast_emit() {
  __lkd_toast_state.listeners.forEach(fn => { try { fn(__lkd_toast_state.items); } catch (e) {} });
}
function __lkd_toast_push(t) {
  const id = (t && t.id != null) ? t.id : __lkd_toast_state.nextId++;
  const item = Object.assign({
    title: "", body: "", variant: "default", duration: 5000, action: null,
  }, t || {}, { id });
  __lkd_toast_state.items = __lkd_toast_state.items.concat([item]);
  __lkd_toast_emit();
  if (item.duration > 0) {
    setTimeout(() => __lkd_toast_dismiss(id), item.duration);
  }
  return id;
}
function __lkd_toast_dismiss(id) {
  __lkd_toast_state.items = __lkd_toast_state.items.filter(x => x.id !== id);
  __lkd_toast_emit();
}
function __lkd_toast_clear() {
  __lkd_toast_state.items = [];
  __lkd_toast_emit();
}

function ToastProvider({ position = "bottom-right", max = 5 }) {
  const [items, setItems] = useState(__lkd_toast_state.items);
  useEffect(() => {
    const fn = (next) => setItems(next.slice(-max));
    __lkd_toast_state.listeners.push(fn);
    return () => {
      __lkd_toast_state.listeners = __lkd_toast_state.listeners.filter(x => x !== fn);
    };
  }, [max]);

  const pos = {
    "top-left":     { top: 24, left: 24 },
    "top-right":    { top: 24, right: 24 },
    "bottom-left":  { bottom: 24, left: 24 },
    "bottom-right": { bottom: 24, right: 24 },
  }[position] || { bottom: 24, right: 24 };

  if (items.length === 0) return null;

  return (
    <div role="region" aria-label="Notificações"
         style={{
           position: "fixed", zIndex: 200, display: "flex", flexDirection: "column",
           gap: 12, maxWidth: "min(420px, calc(100vw - 32px))", pointerEvents: "none",
           ...pos,
         }}>
      {items.map(t => <ToastItem key={t.id} {...t}/>)}
    </div>
  );
}

function ToastItem({ id, title, body, variant = "default", action }) {
  const palette = {
    default: { bg: "var(--color-paper)", border: "var(--color-ink)", fg: "var(--color-ink)", bar: "var(--color-ink)", glyph: "[•]" },
    info:    { bg: "var(--color-paper)", border: "var(--color-ink)", fg: "var(--color-ink)", bar: "var(--color-yellow)", glyph: "[i]" },
    success: { bg: "var(--color-paper)", border: "var(--color-signal-green)", fg: "var(--color-ink)", bar: "var(--color-signal-green)", glyph: "[✓]" },
    warning: { bg: "var(--color-yellow)", border: "var(--color-ink)", fg: "var(--color-ink)", bar: "var(--color-ink)", glyph: "[!]" },
    error:   { bg: "var(--color-paper)", border: "var(--color-signal-red)", fg: "var(--color-signal-red)", bar: "var(--color-signal-red)", glyph: "[×]" },
  }[variant] || palette.default;
  const p = palette;

  return (
    <div role={variant === "error" || variant === "warning" ? "alert" : "status"}
         aria-live={variant === "error" || variant === "warning" ? "assertive" : "polite"}
         style={{
           display: "grid", gridTemplateColumns: "8px 1fr auto",
           background: p.bg, color: p.fg,
           border: "2px solid " + p.border,
           boxShadow: "8px 8px 0 var(--color-ink)",
           pointerEvents: "auto",
           fontFamily: "var(--font-sans)",
         }}>
      <div style={{ background: p.bar }} aria-hidden="true"/>
      <div style={{ padding: "12px 14px", minWidth: 0 }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
          textTransform: "uppercase", color: p.fg, opacity: 0.7, marginBottom: 4,
        }}>
          <span style={{ marginRight: 6 }}>{p.glyph}</span>
          {variant.toUpperCase()}
        </div>
        {title && (
          <div style={{
            fontFamily: "var(--font-display)", fontSize: 16, lineHeight: 1.1,
            letterSpacing: 0, textTransform: "uppercase", marginBottom: body ? 4 : 0,
          }}>{title}</div>
        )}
        {body && (
          <div style={{ fontSize: 13, lineHeight: 1.45, color: p.fg }}>{body}</div>
        )}
        {action && (
          <div style={{ marginTop: 8 }}>
            <button type="button"
                    onClick={() => { try { action.onClick && action.onClick(); } catch (e) {} __lkd_toast_dismiss(id); }}
                    style={{
                      fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12,
                      letterSpacing: 0, textTransform: "uppercase",
                      padding: "6px 12px", background: "transparent",
                      border: "2px solid " + p.fg, color: p.fg, cursor: "pointer",
                      transition: "all 100ms linear",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = p.fg; e.currentTarget.style.color = p.bg; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = p.fg; }}>
              {action.label || "AÇÃO"} →
            </button>
          </div>
        )}
      </div>
      <button type="button"
              aria-label="Fechar notificação"
              onClick={() => __lkd_toast_dismiss(id)}
              style={{
                width: 36, alignSelf: "stretch",
                border: "none", borderLeft: "2px solid " + p.border,
                background: "transparent", color: p.fg,
                fontFamily: "var(--font-display)", fontSize: 14, cursor: "pointer",
                transition: "all 100ms linear",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = p.fg; e.currentTarget.style.color = p.bg; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = p.fg; }}>
        ×
      </button>
    </div>
  );
}

/* Imperative API attached to window separately below */

/* ---------- CommandPalette (Ctrl+K) ----------
   Brutalist Cmd+K with bracket markers, keyboard nav, sectioned items.
   items: [{ id, label, hint, section, icon, keywords, onSelect }]
   Use it controlled (open/onOpenChange) or rely on the built-in shortcut.
*/
function CommandPalette({
  items = [],
  open: openProp,
  onOpenChange,
  placeholder = "Buscar aula, módulo, herói, comando...",
  shortcut = "k",     // listen for ctrl/cmd + shortcut
  empty = "[NADA ENCONTRADO]",
  title = "CMD / CTRL + K",
}) {
  const isControlled = openProp !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const open = isControlled ? openProp : internalOpen;
  const setOpen = (v) => {
    if (!isControlled) setInternalOpen(v);
    if (onOpenChange) onOpenChange(v);
  };

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Global shortcut
  useEffect(() => {
    const onKey = (e) => {
      const k = (shortcut || "k").toLowerCase();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === k) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, shortcut]);

  // Open lifecycle: focus, scroll lock, reset query
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setQuery("");
    setActive(0);
    const t = setTimeout(() => { inputRef.current && inputRef.current.focus(); }, 0);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus();
      }
    };
  }, [open]);

  // Filter
  const q = (query || "").trim().toLowerCase();
  const filtered = q
    ? items.filter(it => {
        const hay = [it.label, it.hint, it.section, ...(it.keywords || [])]
          .filter(Boolean).join(" ").toLowerCase();
        return hay.indexOf(q) !== -1;
      })
    : items;

  // Group by section preserving order
  const sections = [];
  const sectionIdx = {};
  filtered.forEach(it => {
    const s = it.section || "RESULTADOS";
    if (sectionIdx[s] == null) {
      sectionIdx[s] = sections.length;
      sections.push({ name: s, items: [] });
    }
    sections[sectionIdx[s]].items.push(it);
  });

  const flat = filtered;
  const clampedActive = flat.length > 0 ? Math.max(0, Math.min(active, flat.length - 1)) : 0;

  useEffect(() => { setActive(0); }, [query]);

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(a => Math.min((flat.length || 1) - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(a => Math.max(0, a - 1));
    } else if (e.key === "Home") {
      e.preventDefault(); setActive(0);
    } else if (e.key === "End") {
      e.preventDefault(); setActive(Math.max(0, flat.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = flat[clampedActive];
      if (pick) {
        try { pick.onSelect && pick.onSelect(pick); } catch (err) {}
        setOpen(false);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  if (!open) return null;

  let flatIdx = -1;

  return (
    <div role="dialog" aria-modal="true" aria-label="Paleta de comandos"
         onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
         style={{
           position: "fixed", inset: 0, zIndex: 180,
           background: "var(--color-paper-warm)",
           display: "flex", alignItems: "flex-start", justifyContent: "center",
           padding: "10vh 24px",
         }}>
      <div style={{
        width: "min(640px, 100%)",
        background: "var(--color-paper)", color: "var(--color-ink)",
        border: "2px solid var(--color-ink)",
        boxShadow: "12px 12px 0 var(--color-ink)",
        display: "flex", flexDirection: "column",
        maxHeight: "80vh",
      }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 16px", borderBottom: "2px solid var(--color-ink)",
          background: "var(--color-ink)", color: "var(--color-paper)",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
          textTransform: "uppercase",
        }}>
          <span>[{title}]</span>
          <span style={{ color: "var(--color-mute-soft)" }}>ESC PARA FECHAR</span>
        </div>

        {/* Search input */}
        <div style={{ display: "flex", alignItems: "center", borderBottom: "2px solid var(--color-ink)" }}>
          <span aria-hidden="true" style={{
            padding: "0 14px", fontFamily: "var(--font-display)", fontSize: 18,
            color: "var(--color-ink)",
          }}>›</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder={placeholder}
            aria-label="Buscar"
            aria-controls="lkd-cmdk-listbox"
            aria-activedescendant={flat[clampedActive] ? `lkd-cmdk-opt-${flat[clampedActive].id}` : undefined}
            style={{
              flex: 1, height: 52, border: "none", outline: "none",
              background: "transparent", color: "var(--color-ink)",
              fontFamily: "var(--font-sans)", fontSize: 18,
              padding: "0 14px 0 0", letterSpacing: 0,
            }}
          />
          {query && (
            <button type="button" aria-label="Limpar busca" onClick={() => setQuery("")}
                    style={{
                      margin: "0 10px", width: 28, height: 28,
                      border: "2px solid var(--color-ink)", background: "var(--color-paper)",
                      color: "var(--color-ink)", cursor: "pointer",
                      fontFamily: "var(--font-display)", fontSize: 12,
                    }}>×</button>
          )}
        </div>

        {/* List */}
        <div id="lkd-cmdk-listbox" role="listbox" ref={listRef}
             style={{ overflowY: "auto", maxHeight: "min(60vh, 480px)" }}>
          {flat.length === 0 && (
            <div style={{
              padding: "40px 18px", textAlign: "center",
              fontFamily: "var(--font-mono)", fontSize: 12,
              letterSpacing: 0, textTransform: "uppercase",
              color: "var(--color-mute)",
            }}>{empty}</div>
          )}
          {sections.map((sec, si) => (
            <div key={sec.name + si}>
              <div style={{
                padding: "10px 18px 6px",
                fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 0,
                textTransform: "uppercase", color: "var(--color-mute)",
                borderTop: si === 0 ? "none" : "1px solid var(--color-rule-cool)",
              }}>[{sec.name}]</div>
              {sec.items.map(it => {
                flatIdx++;
                const isActive = flatIdx === clampedActive;
                return (
                  <div
                    key={it.id}
                    id={`lkd-cmdk-opt-${it.id}`}
                    role="option"
                    aria-selected={isActive}
                    onMouseEnter={() => setActive(flatIdx)}
                    onClick={() => {
                      try { it.onSelect && it.onSelect(it); } catch (err) {}
                      setOpen(false);
                    }}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "10px 18px",
                      background: isActive ? "var(--color-yellow)" : "transparent",
                      color: "var(--color-ink)",
                      borderLeft: isActive ? "4px solid var(--color-ink)" : "4px solid transparent",
                      cursor: "pointer", transition: "background 80ms linear",
                    }}>
                    <span aria-hidden="true" style={{
                      width: 24, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--color-ink)",
                    }}>{it.icon || "›"}</span>
                    <span style={{
                      flex: 1, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>{it.label}</span>
                    {it.hint && (
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
                        color: isActive ? "var(--color-ink)" : "var(--color-mute)",
                        whiteSpace: "nowrap",
                      }}>{it.hint}</span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: "8px 16px", borderTop: "2px solid var(--color-ink)",
          background: "var(--color-paper-warm)",
          fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 0,
          textTransform: "uppercase", color: "var(--color-mute)",
          display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap",
        }}>
          <span>↑↓ navegar · ⏎ abrir · ESC fechar</span>
          <span>{flat.length} {flat.length === 1 ? "item" : "itens"}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Stepper / Wizard ----------
   Variants: horizontal | vertical
   States per step: idle | active | done | error
   steps: [{ label, hint, status, content }]
   current: index of active step (controlled)
   onStepClick(i) optional — allows jumping to done/idle steps
*/
function Stepper({
  steps = [],
  current = 0,
  variant = "horizontal",
  onStepClick,
  showContent = true,
  style,
}) {
  if (!steps.length) return null;
  const isV = variant === "vertical";

  // Derive status if not explicit
  const resolved = steps.map((s, i) => {
    if (s.status) return s.status;
    if (i < current) return "done";
    if (i === current) return "active";
    return "idle";
  });

  const palettes = {
    idle:   { bg: "var(--color-paper)", fg: "var(--color-mute)", border: "var(--color-rule-cool)", num: "var(--color-mute)" },
    active: { bg: "var(--color-yellow)", fg: "var(--color-ink)", border: "var(--color-ink)", num: "var(--color-ink)" },
    done:   { bg: "var(--color-ink)", fg: "var(--color-yellow)", border: "var(--color-ink)", num: "var(--color-yellow)" },
    error:  { bg: "var(--color-signal-red)", fg: "var(--color-paper)", border: "var(--color-signal-red)", num: "var(--color-paper)" },
  };

  const StepIndicator = ({ i, status }) => {
    const p = palettes[status] || palettes.idle;
    const clickable = !!onStepClick && (status === "done" || status === "idle" || status === "active");
    const glyph = status === "done" ? "✓" : status === "error" ? "!" : String(i + 1).padStart(2, "0");
    return (
      <button
        type="button"
        disabled={!clickable}
        onClick={clickable ? () => onStepClick(i) : undefined}
        aria-current={status === "active" ? "step" : undefined}
        style={{
          width: 40, height: 40, flexShrink: 0,
          background: p.bg, color: p.num,
          border: `2px solid ${p.border}`,
          fontFamily: "var(--font-display)", fontSize: 14, letterSpacing: 0,
          textTransform: "uppercase",
          cursor: clickable ? "pointer" : "default",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          transition: "all 100ms linear",
        }}>
        {glyph}
      </button>
    );
  };

  if (isV) {
    return (
      <div style={style} aria-label="Etapas (Stepper)">
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((s, i) => {
            const status = resolved[i];
            const p = palettes[status] || palettes.idle;
            const isLast = i === steps.length - 1;
            return (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 16, position: "relative" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <StepIndicator i={i} status={status}/>
                  {!isLast && (
                    <div style={{
                      width: 2, flex: 1, minHeight: 28,
                      background: (status === "done") ? "var(--color-ink)" : "var(--color-rule-cool)",
                    }}/>
                  )}
                </div>
                <div style={{ paddingBottom: isLast ? 0 : 20 }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: 0,
                    textTransform: "uppercase", color: "var(--color-mute)", marginBottom: 4,
                  }}>[ETAPA {String(i + 1).padStart(2, "0")} · {status.toUpperCase()}]</div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: 20, lineHeight: 1.1,
                    letterSpacing: 0, textTransform: "uppercase", color: "var(--color-ink)",
                  }}>{s.label}</div>
                  {s.hint && (
                    <div style={{
                      fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.4,
                      color: "var(--color-mute)", marginTop: 4,
                    }}>{s.hint}</div>
                  )}
                  {showContent && status === "active" && s.content && (
                    <div style={{
                      marginTop: 12, padding: 16,
                      border: "2px solid var(--color-ink)",
                      background: "var(--color-paper-warm)",
                    }}>{s.content}</div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  // Horizontal
  return (
    <div style={style} aria-label="Etapas (Stepper)">
      <ol style={{
        listStyle: "none", margin: 0, padding: 0,
        display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
        gap: 0,
      }}>
        {steps.map((s, i) => {
          const status = resolved[i];
          const nextStatus = resolved[i + 1];
          const isLast = i === steps.length - 1;
          return (
            <li key={i} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <StepIndicator i={i} status={status}/>
                {!isLast && (
                  <div style={{
                    flex: 1, height: 2, marginLeft: 0,
                    background: (status === "done" || nextStatus === "done" || nextStatus === "active")
                      ? "var(--color-ink)"
                      : "var(--color-rule-cool)",
                  }}/>
                )}
              </div>
              <div style={{ paddingTop: 12, paddingRight: isLast ? 0 : 12 }}>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 0,
                  textTransform: "uppercase", color: "var(--color-mute)", marginBottom: 2,
                }}>[ETAPA {String(i + 1).padStart(2, "0")}]</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 14, lineHeight: 1.15,
                  letterSpacing: 0, textTransform: "uppercase",
                  color: status === "idle" ? "var(--color-mute)" : "var(--color-ink)",
                }}>{s.label}</div>
                {s.hint && (
                  <div style={{
                    fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.4,
                    color: "var(--color-mute)", marginTop: 4,
                  }}>{s.hint}</div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      {showContent && steps[current] && steps[current].content && (
        <div style={{
          marginTop: 20, padding: 20,
          border: "2px solid var(--color-ink)",
          background: "var(--color-paper-warm)",
        }}>{steps[current].content}</div>
      )}
    </div>
  );
}

/* ---------- Marquee ---------- */

function Marquee({ items, dark = false }) {
  const track = [items, items];
  return (
    <div className={`lkd-marquee${dark ? " lkd-marquee--dark" : ""}`}>
      <div className="lkd-marquee__track" aria-hidden="true">
        {track.map((group, groupIndex) => (
          <div className="lkd-marquee__group" key={groupIndex}>
            {group.map((s, i) => (
              <span className="lkd-marquee__item" key={`${groupIndex}-${i}`}>
                <span className="lkd-marquee__text">{s}</span>
                <span className="lkd-marquee__dot">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        .lkd-marquee {
          --marquee-bg: var(--color-yellow);
          --marquee-fg: var(--color-ink);
          background: var(--marquee-bg);
          color: var(--marquee-fg);
          border-top: 2px solid var(--color-ink);
          border-bottom: 2px solid var(--color-ink);
          overflow: hidden;
          width: 100%;
          contain: paint;
        }

        .lkd-marquee--dark {
          --marquee-bg: var(--color-ink);
          --marquee-fg: var(--color-yellow);
        }

        .lkd-marquee__track {
          width: max-content;
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: lkd-marquee 36s linear infinite;
          will-change: transform;
        }

        .lkd-marquee__group {
          display: inline-flex;
          align-items: center;
          flex: 0 0 auto;
        }

        .lkd-marquee__item {
          min-height: 86px;
          display: inline-flex;
          align-items: center;
          gap: 30px;
          padding: 16px 30px 17px 0;
          font-family: var(--font-display);
          font-size: 48px;
          line-height: 1;
          letter-spacing: 0;
          text-transform: uppercase;
          color: currentColor;
          white-space: nowrap;
          word-break: normal;
          overflow-wrap: normal;
        }

        .lkd-marquee__text {
          display: inline-block;
          transform: translateY(.04em);
        }

        .lkd-marquee__dot {
          font-family: var(--font-mono);
          font-size: 18px;
          line-height: 1;
          transform: translateY(-.03em);
        }

        @media (max-width: 900px) {
          .lkd-marquee__item {
            min-height: 74px;
            gap: 24px;
            padding: 14px 24px 15px 0;
            font-size: 40px;
          }
        }

        @media (max-width: 520px) {
          .lkd-marquee__item {
            min-height: 64px;
            gap: 18px;
            padding: 12px 18px 13px 0;
            font-size: 32px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lkd-marquee__track {
            animation: none;
            transform: translateX(0);
          }
        }

        @keyframes lkd-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}

/* ---------- Nav (marketing) ---------- */

const MARKETING_NAV_CSS = `
  .lkd-nav-shell,
  .lkd-nav-shell * {
    box-sizing: border-box;
  }

  .lkd-nav-shell a,
  .lkd-nav-shell a:hover,
  .lkd-nav-shell a:focus-visible {
    text-decoration: none !important;
  }

  .lkd-offer-bar {
    background: var(--color-ink);
    color: var(--color-yellow);
    padding: 9px 32px;
    font-family: var(--font-mono);
    font-size: 12px;
    letter-spacing:0;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .lkd-nav {
    width: 100%;
    min-height: 72px;
    background: var(--color-paper);
    color: var(--color-ink);
    border-bottom: 2px solid var(--color-ink);
    display: flex !important;
    align-items: center;
    gap: clamp(16px, 2vw, 32px);
    padding: 0 32px;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .lkd-nav--dark {
    background: var(--color-ink);
    color: var(--color-yellow);
    border-bottom-color: var(--color-yellow);
  }

  .lkd-nav__brand {
    display: inline-flex !important;
    align-items: center !important;
    flex: 0 0 auto;
    min-height: 40px !important;
    color: inherit;
  }

  .lkd-nav__lockup {
    display: block;
    width: 190px;
    height: auto;
  }

  .lkd-nav--compact .lkd-nav__lockup {
    width: 180px;
  }

  .lkd-nav__mark {
    display: none;
    width: 38px;
    height: 38px;
  }

  .lkd-nav__links {
    min-width: 0;
    display: flex !important;
    align-items: center;
    gap: clamp(14px, 2vw, 26px);
    margin-left: clamp(0px, 1.4vw, 24px);
    flex: 1 1 auto;
    width: auto !important;
    overflow: visible !important;
  }

  .lkd-nav__link,
  .lkd-nav__summary,
  .lkd-nav__mobile-summary {
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing:0;
    color: currentColor;
    line-height: 1;
    white-space: nowrap !important;
    word-break: normal !important;
    overflow-wrap: normal !important;
  }

  .lkd-nav__link {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    padding: 4px 0 6px;
    border-bottom: 2px solid transparent;
    transition: color 100ms linear, border-color 100ms linear;
  }

  .lkd-nav__link:hover,
  .lkd-nav__link:focus-visible,
  .lkd-nav__summary:hover,
  .lkd-nav__summary:focus-visible {
    color: var(--color-mute);
    outline: 0;
  }

  .lkd-nav--dark .lkd-nav__link:hover,
  .lkd-nav--dark .lkd-nav__link:focus-visible,
  .lkd-nav--dark .lkd-nav__summary:hover,
  .lkd-nav--dark .lkd-nav__summary:focus-visible {
    color: var(--color-paper);
  }

  .lkd-nav__link.is-active,
  .lkd-nav__group.is-active > .lkd-nav__summary {
    border-bottom-color: currentColor;
  }

  .lkd-nav__group {
    position: relative;
    flex: 0 0 auto;
  }

  .lkd-nav__summary {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px;
    padding: 4px 0 6px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    list-style: none;
  }

  .lkd-nav__summary::-webkit-details-marker,
  .lkd-nav__mobile-summary::-webkit-details-marker {
    display: none;
  }

  .lkd-nav__chevron {
    font-family: var(--font-mono);
    font-size: 12px;
    line-height: 1;
  }

  .lkd-nav__submenu {
    position: absolute;
    top: calc(100% + 10px);
    left: -12px;
    min-width: 224px;
    display: none;
    gap: 0;
    padding: 8px;
    background: var(--color-paper);
    color: var(--color-ink);
    border: 2px solid var(--color-ink);
    box-shadow: 8px 8px 0 var(--color-ink);
    z-index: 80;
  }

  .lkd-nav--dark .lkd-nav__submenu {
    background: var(--color-ink);
    color: var(--color-yellow);
    border-color: var(--color-yellow);
    box-shadow: 8px 8px 0 var(--color-yellow);
  }

  .lkd-nav__group[open] .lkd-nav__submenu,
  .lkd-nav__group:hover .lkd-nav__submenu,
  .lkd-nav__group:focus-within .lkd-nav__submenu {
    display: grid;
  }

  .lkd-nav__submenu-link {
    display: flex !important;
    align-items: center !important;
    min-height: 40px !important;
    padding: 0 12px;
    color: currentColor;
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 700;
    letter-spacing:0;
    text-transform: uppercase;
    white-space: nowrap !important;
    border: 1px solid transparent;
  }

  .lkd-nav__submenu-link:hover,
  .lkd-nav__submenu-link:focus-visible,
  .lkd-nav__submenu-link.is-active {
    color: var(--color-ink);
    background: var(--color-yellow);
    border-color: currentColor;
    outline: 0;
  }

  .lkd-nav__actions {
    margin-left: auto !important;
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    flex: 0 0 auto;
    width: auto !important;
  }

  .lkd-nav__action {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center;
    gap: 10px;
    padding: 9px 14px;
    border: 2px solid transparent;
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 800;
    letter-spacing:0;
    line-height: 1;
    text-transform: uppercase;
    color: currentColor;
    white-space: nowrap !important;
    word-break: normal !important;
    overflow-wrap: normal !important;
    transition: color 100ms linear, background 100ms linear, transform 100ms linear, box-shadow 100ms linear;
  }

  .lkd-nav__action--login:hover,
  .lkd-nav__action--login:focus-visible {
    color: var(--color-mute);
    outline: 0;
  }

  .lkd-nav--dark .lkd-nav__action--login:hover,
  .lkd-nav--dark .lkd-nav__action--login:focus-visible {
    color: var(--color-paper);
  }

  .lkd-nav__action--primary {
    background: var(--color-yellow);
    color: var(--color-ink);
    border-color: var(--color-ink);
  }

  .lkd-nav--dark .lkd-nav__action--primary {
    border-color: var(--color-yellow);
  }

  .lkd-nav__action--primary:hover,
  .lkd-nav__action--primary:focus-visible {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--color-ink);
    background: var(--color-ink);
    color: var(--color-yellow);
    outline: 0;
  }

  .lkd-nav--dark .lkd-nav__action--primary:hover,
  .lkd-nav--dark .lkd-nav__action--primary:focus-visible {
    box-shadow: 5px 5px 0 var(--color-yellow);
    background: var(--color-yellow);
    color: var(--color-ink);
  }

  .lkd-nav__mobile {
    display: none;
    margin-left: auto;
    color: currentColor;
  }

  .lkd-nav__mobile-summary {
    min-height: 40px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center;
    gap: 10px;
    padding: 0 12px;
    border: 2px solid currentColor;
    cursor: pointer;
    list-style: none;
  }

  .lkd-nav__mobile-panel {
    position: absolute;
    left: 16px;
    right: 16px;
    top: calc(100% + 10px);
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    padding: 8px;
    background: var(--color-paper);
    color: var(--color-ink);
    border: 2px solid var(--color-ink);
    box-shadow: 8px 8px 0 var(--color-ink);
    z-index: 90;
  }

  .lkd-nav__mobile:not([open]) .lkd-nav__mobile-panel {
    display: none;
  }

  .lkd-nav__mobile[open] .lkd-nav__mobile-panel {
    display: grid;
  }

  .lkd-nav--dark .lkd-nav__mobile-panel {
    background: var(--color-ink);
    color: var(--color-yellow);
    border-color: var(--color-yellow);
    box-shadow: 8px 8px 0 var(--color-yellow);
  }

  .lkd-nav__mobile-link {
    min-height: 44px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between;
    padding: 0 12px;
    color: currentColor;
    font-family: var(--font-sans);
    font-size: 13px;
    font-weight: 800;
    letter-spacing:0;
    text-transform: uppercase;
    white-space: nowrap !important;
  }

  .lkd-nav__mobile-link:hover,
  .lkd-nav__mobile-link:focus-visible,
  .lkd-nav__mobile-link.is-active {
    background: var(--color-yellow);
    color: var(--color-ink);
    outline: 0;
  }

  @media (max-width: 1180px) {
    .lkd-nav {
      min-height: 68px;
      padding-left: 24px;
      padding-right: 24px;
      gap: 20px;
    }

    .lkd-nav__lockup {
      display: none !important;
    }

    .lkd-nav__mark {
      display: block !important;
    }

    .lkd-nav__links {
      margin-left: 0;
    }
  }

  @media (max-width: 980px) {
    .lkd-nav__action--login {
      display: none !important;
    }
  }

  @media (max-width: 900px) {
    .lkd-offer-bar {
      padding: 8px 16px;
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }

    .lkd-nav {
      min-height: 64px !important;
      display: grid !important;
      grid-template-columns: auto minmax(0, 1fr);
      align-items: center !important;
      gap: 10px 14px !important;
      padding: 10px 16px !important;
      overflow: visible !important;
    }

    .lkd-nav > .lkd-nav__links {
      display: none !important;
      width: auto !important;
    }

    .lkd-nav > .lkd-nav__mobile {
      display: block !important;
      justify-self: end;
      width: auto !important;
      max-width: 100% !important;
    }

    .lkd-nav > .lkd-nav__actions {
      grid-column: 1 / -1;
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      width: 100% !important;
      max-width: 100% !important;
      margin-left: 0 !important;
      gap: 8px !important;
      overflow: visible !important;
    }

    .lkd-nav__action {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 11px;
    }

    .lkd-nav__action--login {
      display: inline-flex !important;
    }
  }

  @media (max-width: 420px) {
    .lkd-nav > .lkd-nav__actions {
      grid-template-columns: 1fr;
    }
  }
`;

function MarketingNavStyles() {
  return <style>{MARKETING_NAV_CSS}</style>;
}

function marketingNavModel(basePath = "", links) {
  if (Array.isArray(links) && links.length) {
    const normalized = links.filter(l => l.label !== "Início");
    return {
      primary: normalized.slice(0, 3),
      secondary: normalized.slice(3),
      mobile: normalized,
    };
  }

  const comunidade = { label: "Comunidade", href: `${basePath}curso.html` };
  const cacada = { label: "Caçada", href: `${basePath}rpg/cacada-mediocridade.html` };
  const secondary = [
    { label: "Cultura",   href: `${basePath}cultura-lendaria.html` },
    { label: "Fundador",  href: `${basePath}fundador.html` },
    { label: "Manifesto", href: `${basePath}manifesto/index.html` },
    { label: "Sistema",   href: `${basePath}styleguide-retro.html` },
  ];

  return {
    primary: [comunidade, cacada],
    secondary,
    mobile: [comunidade, cacada, ...secondary],
  };
}

function navIsActive(active, label) {
  return active === label || (active === "Curso" && label === "Comunidade");
}

function MarketingLogo({ basePath = "", dark = false } = {}) {
  const tone = dark ? "white" : "black";
  return (
    <a className="lkd-nav__brand" href={`${basePath}index.html`} aria-label="Ir para o início da Academia Lendár[IA]">
      <img
        className="lkd-nav__lockup"
        src={`${basePath}assets/logo/lockup-${tone}.svg`}
        width="190"
        height="22"
        alt=""
        aria-hidden="true"
      />
      <img
        className="lkd-nav__mark"
        src={`${basePath}assets/logo/mark-${tone}.svg`}
        width="38"
        height="38"
        alt=""
        aria-hidden="true"
      />
    </a>
  );
}

function MarketingNavLinks({ active, model }) {
  const lead = model.primary.slice(0, 1);
  const tail = model.primary.slice(1);
  const exploreActive = model.secondary.some(l => navIsActive(active, l.label));
  return (
    <div className="lkd-nav__links">
      {lead.map(l => (
        <a
          key={l.label}
          href={l.href}
          className={`lkd-nav__link${navIsActive(active, l.label) ? " is-active" : ""}`}
        >
          {l.label}
        </a>
      ))}
      {model.secondary.length > 0 && (
        <details className={`lkd-nav__group${exploreActive ? " is-active" : ""}`}>
          <summary className="lkd-nav__summary">
            Explorar <span className="lkd-nav__chevron">↓</span>
          </summary>
          <div className="lkd-nav__submenu">
            {model.secondary.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`lkd-nav__submenu-link${navIsActive(active, l.label) ? " is-active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </details>
      )}
      {tail.map(l => (
        <a
          key={l.label}
          href={l.href}
          className={`lkd-nav__link${navIsActive(active, l.label) ? " is-active" : ""}`}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function MarketingMobileMenu({ active, model }) {
  return (
    <details className="lkd-nav__mobile">
      <summary className="lkd-nav__mobile-summary">
        Menu <span className="lkd-nav__chevron">☰</span>
      </summary>
      <div className="lkd-nav__mobile-panel">
        {model.mobile.map(l => (
          <a
            key={l.label}
            href={l.href}
            className={`lkd-nav__mobile-link${navIsActive(active, l.label) ? " is-active" : ""}`}
          >
            {l.label} <span>→</span>
          </a>
        ))}
      </div>
    </details>
  );
}

function MarketingNavActions({ basePath = "" } = {}) {
  return (
    <div className="lkd-nav__actions">
      <a className="lkd-nav__action lkd-nav__action--login" href={`${basePath}courses/platform.html`}>
        Entrar <span>→</span>
      </a>
      <a className="lkd-nav__action lkd-nav__action--primary" href={`${basePath}curso.html#oferta`}>
        Garantir vaga <span>→</span>
      </a>
    </div>
  );
}

function Nav({ active = "Início", showCountdown = true, basePath = "" } = {}) {
  const model = marketingNavModel(basePath);
  const [t, setT] = useState({ h: 23, m: 47, s: 12 });
  useEffect(() => {
    const id = setInterval(() => {
      setT(p => {
        let s = p.s - 1, m = p.m, h = p.h;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 23; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = n => String(n).padStart(2, "0");
  return (
    <div className="lkd-nav-shell">
      <MarketingNavStyles />
      {showCountdown && (
        <div className="lkd-offer-bar">
          <span>[TURMA 04 ABERTA] · ÚLTIMAS 48H · 30% OFF NO PLANO ANUAL</span>
          <span style={{ display: "flex", gap: 6 }}>
            <b>{pad(t.h)}</b>:<b>{pad(t.m)}</b>:<b>{pad(t.s)}</b>
          </span>
        </div>
      )}
      <nav className="lkd-nav lkd-nav--light" aria-label="Navegação principal">
        <MarketingLogo basePath={basePath} />
        <MarketingNavLinks active={active} model={model} />
        <MarketingMobileMenu active={active} model={model} />
        <MarketingNavActions basePath={basePath} />
      </nav>
    </div>
  );
}

/* ---------- TopNav — slim editorial nav (consolidates duplicates across
              cultura, fundador, manifesto, styleguide, sub-pages) ---------- */

function TopNav({
  active = "Início",
  links,
  basePath = "",            // prefix for relative hrefs (e.g. "" or "../")
  showCta = true,
  variant = "light",        // light | dark
} = {}) {
  const dark = variant === "dark";
  const model = marketingNavModel(basePath, links);
  return (
    <div className="lkd-nav-shell">
      <MarketingNavStyles />
      <nav className={`lkd-nav lkd-nav--compact ${dark ? "lkd-nav--dark" : "lkd-nav--light"}`} aria-label="Navegação principal">
        <MarketingLogo basePath={basePath} dark={dark} />
        <MarketingNavLinks active={active} model={model} />
        <MarketingMobileMenu active={active} model={model} />
        {showCta && <MarketingNavActions basePath={basePath} />}
      </nav>
    </div>
  );
}

/* ---------- Colofon — book-style sign-off for editorial pages
              (manifesto, fundador, cultura). Replaces full Footer. ---------- */

function Colofon({
  edition = "VOLUME I · OUT 2025",
  signer = "ALAN NICOLAS",
  subtitle = "CONSTRUINDO O INFINITO, HOJE",
  basePath = "",
} = {}) {
  return (
    <footer style={{
      background: "var(--color-paper-warm)",
      color: "var(--color-ink)",
      borderTop: "2px solid var(--color-ink)",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 32px 40px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "auto 1fr auto",
          gap: 32, alignItems: "end",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing:0, textTransform: "uppercase",
              color: "var(--color-mute)",
            }}>[COLOFON · {edition}]</div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 0.9,
              letterSpacing:0, textTransform: "uppercase",
              marginTop: 12,
            }}>
              Academia<br/>Lendár[IA].
            </div>
          </div>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.6,
            color: "var(--color-ink)", maxWidth: 52 + "ch", margin: 0,
            justifySelf: "center",
          }}>
            Impresso digitalmente em Archivo Black + Archivo + JetBrains&nbsp;Mono.
            Composto numa grade de 8&nbsp;px, encadernado com bordas duras de 2&nbsp;px e
            sombras 12/12. Feito no Brasil, em português, para quem constrói.
          </p>
          <div style={{ textAlign: "right" }}>
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 80, lineHeight: 0.85,
              letterSpacing:0, color: "var(--color-ink)",
            }} className="lkd-inf">∞</span>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing:0, textTransform: "uppercase",
              color: "var(--color-mute)", marginTop: 4,
            }}>{subtitle}</div>
          </div>
        </div>
        <div style={{
          marginTop: 40, paddingTop: 16,
          borderTop: "1px solid var(--color-rule)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
          textTransform: "uppercase", color: "var(--color-mute)",
          flexWrap: "wrap", gap: 16,
        }}>
          <span>© 2025 · Assinado por {signer} · CNPJ 00.000.000/0001-00</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href={`${basePath}index.html`} style={{ color: "var(--color-ink)" }}>Início</a>
            <a href={`${basePath}curso.html`} style={{ color: "var(--color-ink)" }}>Comunidade</a>
            <a href={`${basePath}cultura-lendaria.html`} style={{ color: "var(--color-ink)" }}>Cultura</a>
            <a href={`${basePath}rpg/cacada-mediocridade.html`} style={{ color: "var(--color-ink)" }}>Caçada</a>
            <a href={`${basePath}fundador.html`} style={{ color: "var(--color-ink)" }}>Fundador</a>
            <a href={`${basePath}manifesto/index.html`} style={{ color: "var(--color-ink)" }}>Manifesto</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Footer — editorial sign-off, minimal on purpose ---------- */
/* The brand is loud everywhere else. Here we shut up and close. */

function Footer({ basePath = "" } = {}) {
  const links = [
    { l: "Início",     href: `${basePath}index.html` },
    { l: "Comunidade", href: `${basePath}curso.html` },
    { l: "Cultura",    href: `${basePath}cultura-lendaria.html` },
    { l: "Caçada",     href: `${basePath}rpg/cacada-mediocridade.html` },
    { l: "Fundador",   href: `${basePath}fundador.html` },
    { l: "Manifesto",  href: `${basePath}manifesto/index.html` },
    { l: "Sistema",    href: `${basePath}styleguide-retro.html` },
  ];
  const social = [
    { l: "Instagram" },
    { l: "YouTube" },
    { l: "LinkedIn" },
  ];
  return (
    <footer style={{
      background: "var(--color-ink)", color: "var(--color-paper)",
      borderTop: "2px solid var(--color-ink)",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "56px 32px 28px" }}>
        {/* One row: identity ← → essential nav. That's it. */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto",
          gap: 48, alignItems: "start",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
            <img
              src={`${basePath}assets/logo/lockup-white.svg`}
              width="240"
              height="28"
              alt="Academia Lendár[IA]"
              style={{ display: "block" }}
            />
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing:0, textTransform: "uppercase", color: "var(--color-mute-soft)",
              }}>Construindo o <span className="lkd-inf" style={{ color: "var(--color-yellow)" }}>∞</span>, hoje.</div>
          </div>
          <nav aria-label="Navegação do rodapé" style={{
            display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap",
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 13,
            textTransform: "uppercase", letterSpacing:0,
          }}>
            {links.map(it => (
              <a key={it.l} href={it.href} className="lkd-tr" style={{ color: "var(--color-paper)" }}
                 onMouseEnter={(e)=>{ e.currentTarget.style.color = "var(--color-yellow)"; }}
                 onMouseLeave={(e)=>{ e.currentTarget.style.color = "var(--color-paper)"; }}>
                {it.l}
              </a>
            ))}
          </nav>
        </div>

        {/* Hairline rule */}
        <div style={{
          marginTop: 32, paddingTop: 16,
          borderTop: "1px solid rgba(246,195,36,.25)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
          textTransform: "uppercase", color: "var(--color-mute-soft)",
        }}>
          <span>© 2025 Academia Lendár[IA] · CNPJ 00.000.000/0001-00 · Feito no Brasil</span>
          <span style={{ display: "flex", gap: 20 }}>
            {social.map(s => (
              s.href ? (
                <a key={s.l} href={s.href} className="lkd-tr" style={{ color: "var(--color-yellow)" }}>{s.l}</a>
              ) : (
                <span key={s.l} aria-disabled="true" style={{ color: "var(--color-yellow)", opacity: .65 }}>{s.l}</span>
              )
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Marketing page: Module card ---------- */

function ModuleCard({ num, title, hours, lessons, projects, status = "default", featured = false }) {
  const [hover, setHover] = useState(false);
  const locked = status === "locked";
  const bg = featured ? "var(--color-ink)" : (locked ? "var(--color-paper-warm)" : "var(--color-paper)");
  const fg = featured ? "var(--color-yellow)" : "var(--color-ink)";
  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: bg, color: fg,
        border: "2px solid var(--color-ink)", padding: 22,
        display: "flex", flexDirection: "column", gap: 12,
        transition: "all 120ms linear",
        transform: hover && !locked ? "translate(-2px, -2px)" : "none",
        boxShadow: hover && !locked
          ? (featured ? "6px 6px 0 var(--color-yellow)" : "6px 6px 0 var(--color-ink)")
          : "none",
        minHeight: 220, opacity: locked ? .65 : 1, cursor: locked ? "default" : "pointer",
      }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
        textTransform: "uppercase",
      }}>
        <span>[MÓDULO {String(num).padStart(2, "0")}]</span>
        <span style={{ fontWeight: 500 }}>{hours}</span>
      </div>
      <h3 style={{
        fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 0.95,
        letterSpacing:0, textTransform: "uppercase", margin: 0,
      }}>{title}</h3>
      <div style={{
        marginTop: "auto", display: "flex", justifyContent: "space-between",
        alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing:0, textTransform: "uppercase",
      }}>
        <span>{locked ? "EM BREVE" : `${lessons} AULAS · ${projects} PROJ.`}</span>
        <span style={{ fontSize: 18 }}>{locked ? "✕" : "→"}</span>
      </div>
    </div>
  );
}

/* ---------- GiantQuote — doodle « overlay for testimonial blocks ---------- */

function GiantQuote({ size = 140, color = "var(--color-yellow)", style, mark = "\u00AB" }) {
  // Layered, decorative: pulled out from a corner of its parent.
  return (
    <span aria-hidden="true" style={{
      fontFamily: "var(--font-display)",
      fontSize: size, lineHeight: 0.7, letterSpacing:0,
      color, display: "inline-block", pointerEvents: "none", userSelect: "none",
      ...style,
    }}>{mark}</span>
  );
}

/* ---------- Testimonial ---------- */

function Testimonial({ quote, name, role, initials, dark = true }) {
  return (
    <div style={{
      background: dark ? "var(--color-ink)" : "var(--color-paper)",
      color: dark ? "var(--color-yellow)" : "var(--color-ink)",
      padding: 28, display: "flex", flexDirection: "column", gap: 18,
      border: dark ? "none" : "2px solid var(--color-ink)",
      minHeight: 240, position: "relative", overflow: "hidden",
    }}>
      <GiantQuote
        size={120}
        color="var(--color-yellow)"
        style={{ position: "absolute", top: -8, left: 10, opacity: dark ? 1 : .9 }}
      />
      <blockquote style={{
        margin: "44px 0 0", fontFamily: "var(--font-display)", fontSize: 24,
        lineHeight: 1.1, letterSpacing:0, textTransform: "none",
        color: dark ? "var(--color-yellow)" : "var(--color-ink)", position: "relative",
      }}>{quote}</blockquote>
      <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar initials={initials} color={dark ? "yellow" : "yellow"}/>
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14 }}>{name}</div>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
            textTransform: "uppercase", color: dark ? "var(--color-paper)" : "var(--color-mute)",
            marginTop: 2,
          }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Pricing Card ---------- */

function PricingCard({ plan, price, oldPrice, installments, features, cta, featured = false }) {
  return (
    <div style={{
      background: featured ? "var(--color-yellow)" : "var(--color-paper)",
      border: "2px solid var(--color-ink)", padding: 32,
      display: "flex", flexDirection: "column", gap: 20,
      boxShadow: featured ? "12px 12px 0 var(--color-ink)" : "none",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing:0,
        textTransform: "uppercase",
      }}>[PLANO · {plan.toUpperCase()}{featured ? " · RECOMENDADO" : ""}]</div>
      <div style={{
        fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 0.9,
        letterSpacing:0, textTransform: "uppercase",
      }}>{plan === "Lendário" ? <>Curso<br/>+ comunidade.</> : <>Acesso<br/>ao curso.</>}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <span style={{
          fontFamily: "var(--font-display)", fontSize: 72, lineHeight: 0.85,
          letterSpacing:0,
        }}>R$&nbsp;{price}</span>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing:0,
          textTransform: "uppercase",
        }}>{installments}</span>
        {oldPrice && <span style={{
          fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing:0,
          textDecoration: "line-through", color: "var(--color-mute)",
        }}>R$ {oldPrice}</span>}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {features.map(f => (
          <li key={f} style={{
            display: "flex", gap: 12, alignItems: "flex-start",
            fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.4,
          }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-ink)",
              flexShrink: 0,
            }}>+</span>
            {f}
          </li>
        ))}
      </ul>
      <Button
        variant={featured ? "dark" : "secondary"}
        size="lg" arrow
        style={{ marginTop: "auto", justifyContent: "center", width: "100%" }}
      >{cta}</Button>
    </div>
  );
}

/* ---------- FAQ ---------- */

function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ borderTop: "2px solid var(--color-ink)" }}>
      {items.map((it, i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--color-rule-cool)" }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{
            width: "100%", textAlign: "left", padding: "20px 0",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            background: "transparent", border: "none", cursor: "pointer",
            fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18,
            color: "var(--color-ink)",
          }}>
            <span>{it.q}</span>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 20,
              transform: open === i ? "rotate(45deg)" : "none",
              transition: "transform 100ms linear",
            }}>+</span>
          </button>
          {open === i && (
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.55,
              color: "var(--color-mute)", maxWidth: 70 + "ch", paddingBottom: 20, margin: 0,
            }}>{it.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- Platform: Sidebar (v2) ---------- */

const SidebarIcon = ({ name }) => {
  const paths = {
    home:     <><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></>,
    trail:    <><path d="M4 4h6v6H4z"/><path d="M14 14h6v6h-6z"/><path d="M10 7h4v0"/><path d="M17 10v4"/><path d="M7 14h4M14 17v-4"/></>,
    project:  <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
    book:     <><path d="M3 5a2 2 0 0 1 2-2h4a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H5a2 2 0 0 1-2-2z"/><path d="M13 7a4 4 0 0 1 4-4h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-5a3 3 0 0 0-3 3z"/></>,
    materials:<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></>,
    exercise: <><path d="M9 11l3 3 8-8"/><rect x="3" y="3" width="18" height="18"/></>,
    discord:  <><circle cx="12" cy="12" r="9"/><circle cx="9" cy="11" r="1.5"/><circle cx="15" cy="11" r="1.5"/><path d="M8 16c2 1 6 1 8 0"/></>,
    calendar: <><path d="M8 2v4M16 2v4"/><rect x="3" y="4" width="18" height="18"/><path d="M3 10h18"/></>,
    cert:     <><path d="M21.4 10.9 12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z"/><path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></>,
    user:     <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  }[name];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter">
      {paths}
    </svg>
  );
};

function SidebarItem({ icon, label, count, active, href = "platform.html" }) {
  const [hover, setHover] = useState(false);
  const bg = active ? "var(--color-yellow)" : (hover ? "rgba(246,195,36,.08)" : "transparent");
  const fg = active ? "var(--color-ink)" : "var(--color-paper)";
  return (
    <a href={href}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: "grid", gridTemplateColumns: "8px 18px 1fr auto",
         gap: 12, alignItems: "center", padding: "9px 14px 9px 6px",
         background: bg, color: fg, position: "relative",
         transition: "background 100ms linear",
         fontFamily: "var(--font-sans)", fontWeight: active ? 700 : 500, fontSize: 14,
       }}>
      <span style={{
        width: 3, height: active ? 18 : 0, background: "var(--color-ink)",
        transition: "height 100ms linear",
      }}/>
      <SidebarIcon name={icon}/>
      <span>{label}</span>
      {count != null && (
        <span style={{
          fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
          textTransform: "uppercase",
          background: active ? "var(--color-ink)" : "transparent",
          color: active ? "var(--color-yellow)" : "var(--color-paper)",
          border: active ? "none" : "1px solid rgba(255,255,240,.25)",
          padding: "2px 6px", lineHeight: 1,
        }}>{count}</span>
      )}
    </a>
  );
}

function SidebarSection({ label, children }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{
        padding: "0 14px 6px 17px",
        fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
        textTransform: "uppercase", color: "var(--color-mute-soft)",
      }}>[{label}]</div>
      <div>{children}</div>
    </div>
  );
}

function Sidebar({ active = "Início" }) {
  return (
    <aside style={{
      width: 268, background: "var(--color-ink)", color: "var(--color-paper)",
      display: "flex", flexDirection: "column",
      height: "100vh", position: "sticky", top: 0, flexShrink: 0,
      borderRight: "2px solid var(--color-ink)",
    }}>
      {/* Brand block */}
      <a href="index.html" style={{
        display: "block", padding: "18px 18px 16px",
        borderBottom: "1px solid rgba(255,255,240,.12)",
      }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
          textTransform: "uppercase", color: "var(--color-yellow)", marginBottom: 6,
        }}>[FORJA · TURMA 04]</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="../assets/logo/lockup-white.svg"
            width="170"
            height="20"
            alt="Academia Lendár[IA]"
            style={{ display: "block" }}
          />
        </div>
      </a>

      {/* Quick action */}
      <div style={{ padding: "16px 14px 8px" }}>
        <a href="lesson.html" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "11px 14px", background: "var(--color-yellow)", color: "var(--color-ink)",
          fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13,
          letterSpacing:0, textTransform: "uppercase",
          border: "2px solid var(--color-yellow)",
        }}>
          <span>Retomar trilha</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>→</span>
        </a>
      </div>

      {/* Trilha mini card */}
      <div style={{
        margin: "8px 14px 4px", padding: "12px 14px",
        background: "rgba(246,195,36,.08)",
        border: "1px solid rgba(246,195,36,.2)",
      }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
          textTransform: "uppercase", color: "var(--color-yellow)", marginBottom: 4,
        }}>[MÓDULO 03 · AGORA]</div>
        <div style={{
          fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13,
          color: "var(--color-paper)", lineHeight: 1.3, marginBottom: 10,
        }}>Avaliação automática de prompts.</div>
        <ProgressBar value={32} max={100} variant="linear-thin" tone="yellow-on-dark"
                     ariaLabel="Progresso do módulo atual"/>
        <div style={{
          marginTop: 6, display: "flex", justifyContent: "space-between",
          fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
          textTransform: "uppercase", color: "var(--color-mute-soft)",
        }}>
          <span>32%</span><span>26 MIN RESTANTES</span>
        </div>
      </div>

      {/* Nav */}
      <nav aria-label="Navegação da plataforma" style={{ flex: 1, overflowY: "auto", paddingBottom: 16 }}>
        <SidebarSection label="JORNADA">
          <SidebarItem icon="home"    label="Início"    active={active === "Início"} />
          <SidebarItem icon="trail"   label="Trilha"    active={active === "Trilha"} count="03/12" />
          <SidebarItem icon="project" label="Projetos"  active={active === "Projetos"} count="4" />
        </SidebarSection>
        <SidebarSection label="OFICINA">
          <SidebarItem icon="book"      label="Aulas"      active={active === "Curso"} href="lesson.html" />
          <SidebarItem icon="materials" label="Materiais"  active={active === "Materiais"} />
          <SidebarItem icon="exercise"  label="Exercícios" active={active === "Exercícios"} count="2" />
        </SidebarSection>
        <SidebarSection label="COMUNIDADE">
          <SidebarItem icon="discord"  label="Discord"   active={active === "Discord"} count="●" />
          <SidebarItem icon="calendar" label="Encontros" active={active === "Encontros"} count="3" />
          <SidebarItem icon="cert"     label="Certificado" active={active === "Certificado"} />
        </SidebarSection>
      </nav>

      {/* User block */}
      <div style={{
        padding: "14px 14px 16px",
        borderTop: "1px solid rgba(255,255,240,.12)",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <div style={{
          width: 38, height: 38, background: "var(--color-yellow)",
          color: "var(--color-ink)", display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 16,
          letterSpacing:0, flexShrink: 0,
        }}>VL</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13,
            color: "var(--color-paper)", lineHeight: 1.1, marginBottom: 3,
          }}>Você Lendário</div>
          <div style={{
            display: "flex", gap: 6,
            fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
            textTransform: "uppercase",
          }}>
            <span style={{ color: "var(--color-yellow)" }}>NV.03</span>
            <span style={{ color: "var(--color-mute-soft)" }}>·</span>
            <span style={{ color: "var(--color-paper)" }}>APRENDIZ</span>
          </div>
        </div>
        <button aria-label="Conta" style={{
          width: 28, height: 28, border: "1px solid rgba(255,255,240,.25)",
          background: "transparent", color: "var(--color-paper)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
      </div>

      {/* Manifesto sign-off */}
      <div style={{
        padding: "10px 16px", borderTop: "1px solid rgba(255,255,240,.12)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
        textTransform: "uppercase", color: "var(--color-mute-soft)",
      }}>
        <span>CONSTRUINDO O ∞</span>
        <a href="../manifesto/index.html" style={{ color: "var(--color-yellow)" }}>MANIFESTO →</a>
      </div>
    </aside>
  );
}

/* ---------- LessonSidebar — used by lesson.html ---------- */

function LessonSidebar({ activeLessonNum = "3.03" }) {
  const module = { num: "03", title: "Prompt engineering em produção", durationDone: "1H 31MIN", durationTotal: "4H 12MIN", pct: 32 };
  const lessons = [
    { num: "3.01", title: "O que é um prompt, de verdade.",              dur: "22 MIN", state: "done"  },
    { num: "3.02", title: "Padrões: few-shot, chain-of-thought, role.",  dur: "31 MIN", state: "done"  },
    { num: "3.03", title: "Avaliação automática de prompts.",            dur: "38 MIN", state: "now"   },
    { num: "3.04", title: "Custos, latência e o trade-off do modelo.",   dur: "27 MIN", state: "upcoming" },
    { num: "3.05", title: "Projeto: pipeline com avaliação.",            dur: "1H 12MIN", state: "locked" },
  ];
  const icon = (state) => state === "done" ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
  ) : state === "now" ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
  ) : state === "locked" ? (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/></svg>
  );
  return (
    <aside style={{
      width: 320, background: "var(--color-ink)", color: "var(--color-paper)",
      display: "flex", flexDirection: "column",
      height: "100vh", position: "sticky", top: 0, flexShrink: 0,
      borderRight: "2px solid var(--color-ink)",
    }}>
      {/* Brand row + back link */}
      <div style={{
        padding: "14px 18px", borderBottom: "1px solid rgba(255,255,240,.12)",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <a href="platform.html" aria-label="Voltar" style={{
          width: 32, height: 32, border: "1px solid rgba(255,255,240,.25)",
          color: "var(--color-paper)", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
        </a>
        <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            src="../assets/logo/lockup-white.svg"
            width="150"
            height="17"
            alt="Academia Lendár[IA]"
            style={{ display: "block" }}
          />
        </a>
      </div>

      {/* Module head */}
      <div style={{
        padding: "20px 18px 16px",
        borderBottom: "1px solid rgba(255,255,240,.12)",
      }}>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
          textTransform: "uppercase", color: "var(--color-yellow)", marginBottom: 8,
        }}>[MÓDULO {module.num} · TURMA 04]</div>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1,
          letterSpacing:0, textTransform: "uppercase",
          color: "var(--color-paper)", margin: 0, marginBottom: 14,
        }}>{module.title}.</h2>
        <ProgressBar value={module.pct} max={100} variant="linear-thin" tone="yellow-on-dark"
                     ariaLabel="Progresso do módulo"/>
        <div style={{
          marginTop: 8, display: "flex", justifyContent: "space-between",
          fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
          textTransform: "uppercase",
        }}>
          <span style={{color:"var(--color-paper)"}}>{module.pct}% · 2 / 5 AULAS</span>
          <span style={{color:"var(--color-mute-soft)"}}>{module.durationDone} / {module.durationTotal}</span>
        </div>
      </div>

      {/* Lesson list */}
      <nav aria-label="Aulas do módulo" style={{ flex: 1, overflowY: "auto", padding: "12px 0" }}>
        <div style={{
          padding: "0 18px 8px",
          fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
          textTransform: "uppercase", color: "var(--color-mute-soft)",
        }}>[AULAS]</div>
        {lessons.map((l) => {
          const active = l.num === activeLessonNum;
          const muted = l.state === "locked";
          const LessonItem = muted ? "div" : "a";
          return (
            <LessonItem key={l.num}
               {...(muted ? { "aria-disabled": true } : { href: "lesson.html" })}
               style={{
                 display: "grid", gridTemplateColumns: "4px 44px 14px 1fr auto",
                 gap: 10, alignItems: "center", padding: "11px 14px 11px 0",
                 background: active ? "var(--color-yellow)" : "transparent",
                 color: active ? "var(--color-ink)" : (muted ? "var(--color-mute-soft)" : "var(--color-paper)"),
                 cursor: muted ? "default" : "pointer",
                 borderBottom: "1px solid rgba(255,255,240,.06)",
               }}>
              <span style={{
                width: 3, height: active ? 28 : 0, background: "var(--color-ink)",
              }}/>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
                color: active ? "var(--color-ink)" : "var(--color-mute-soft)",
                textAlign: "center",
              }}>{l.num}</span>
              <span style={{
                color: active ? "var(--color-ink)"
                  : (l.state === "done" || l.state === "now") ? "var(--color-yellow)"
                  : muted ? "var(--color-mute-soft)" : "var(--color-paper)",
                display: "flex",
              }}>{icon(l.state)}</span>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontWeight: active ? 700 : 500,
                fontSize: 13, lineHeight: 1.3,
                textDecoration: l.state === "done" && !active ? "line-through" : "none",
                color: l.state === "done" && !active ? "var(--color-mute-soft)" : "inherit",
              }}>{l.title}</span>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
                textTransform: "uppercase",
                color: active ? "var(--color-ink)" : "var(--color-mute-soft)",
              }}>{l.dur}</span>
            </LessonItem>
          );
        })}
        <div style={{ padding: "16px 18px 8px" }}>
          <a href="platform.html" style={{
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
            textTransform: "uppercase", color: "var(--color-yellow)",
          }}>← VER TODOS OS MÓDULOS</a>
        </div>
      </nav>

      {/* User block (compact) */}
      <div style={{
        padding: "12px 14px", borderTop: "1px solid rgba(255,255,240,.12)",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{
          width: 32, height: 32, background: "var(--color-yellow)",
          color: "var(--color-ink)", display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14,
          letterSpacing:0, flexShrink: 0,
        }}>VL</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12,
            color: "var(--color-paper)", lineHeight: 1.1, marginBottom: 2,
          }}>Você Lendário</div>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize:11, letterSpacing:0,
            textTransform: "uppercase", color: "var(--color-mute-soft)",
          }}>NV.03 · CHAMA: 12 DIAS</div>
        </div>
      </div>
    </aside>
  );
}

/* ---------- LessonRow ---------- */
function LessonRow({ num, title, duration, state = "upcoming" }) {
  // states: done | now | upcoming | locked
  const bg = state === "now" ? "var(--color-yellow)" : "transparent";
  const muted = state === "locked";
  const Comp = muted ? "div" : "a";
  return (
    <Comp {...(muted ? { "aria-disabled": true } : { href: "lesson.html" })} style={{
      display: "grid", gridTemplateColumns: "56px 1fr auto auto",
      gap: 18, alignItems: "center",
      padding: "14px 12px", background: bg,
      borderBottom: "1px solid var(--color-rule-cool)",
      color: muted ? "var(--color-mute-soft)" : "var(--color-ink)",
      cursor: muted ? "default" : "pointer",
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--color-mute)" }}>{num}</span>
      <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {state === "done" && (<><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></>)}
          {state === "now"  && (<polygon points="6 3 20 12 6 21 6 3"/>)}
          {state === "upcoming" && (<circle cx="12" cy="12" r="10"/>)}
          {state === "locked" && (<><rect x="3" y="11" width="18" height="11"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>)}
        </svg>
        <span style={{
          fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15,
          textDecoration: state === "done" ? "line-through" : "none",
          color: state === "done" ? "var(--color-mute)" : "inherit",
        }}>{title}</span>
      </span>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
        textTransform: "uppercase", color: "var(--color-mute)",
      }}>{duration}</span>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
        textTransform: "uppercase",
      }}>
        {state === "now"      ? <Tag variant="dark" style={{padding:"4px 8px"}}>AGORA</Tag>
         : state === "done"   ? "↺ rever"
         : state === "locked" ? "[BLOQUEADO]" : "iniciar →"}
      </span>
    </Comp>
  );
}

/* ---------- VideoPlaceholder ---------- */

function VideoPlaceholder() {
  return (
    <div style={{
      aspectRatio: "16/9", background: "var(--color-ink)",
      position: "relative", border: "2px solid var(--color-ink)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "var(--color-yellow)",
    }}>
      <button style={{
        width: 96, height: 96, background: "var(--color-yellow)",
        border: "none", display: "flex", alignItems: "center",
        justifyContent: "center", cursor: "pointer", color: "var(--color-ink)",
      }} aria-label="Reproduzir">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="6 3 20 12 6 21 6 3"/>
        </svg>
      </button>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, padding: "12px 18px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "linear-gradient(transparent, rgba(14,14,14,.9))",
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing:0,
        textTransform: "uppercase",
      }}>
        <span>[AULA 3.03] · AVALIAÇÃO AUTOMÁTICA DE PROMPTS EM PRODUÇÃO</span>
        <span>38:14 / 38:14</span>
      </div>
    </div>
  );
}

/* ---------- Container ---------- */

function Container({ children, style }) {
  return (
    <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px", ...style }}>
      {children}
    </div>
  );
}

/* ---------- Export ---------- */

// Toast imperative API
var LkdToast = {
  push:    __lkd_toast_push,
  dismiss: __lkd_toast_dismiss,
  clear:   __lkd_toast_clear,
  // helpers
  success: (t) => __lkd_toast_push(Object.assign({}, t, { variant: "success" })),
  error:   (t) => __lkd_toast_push(Object.assign({}, t, { variant: "error" })),
  warning: (t) => __lkd_toast_push(Object.assign({}, t, { variant: "warning" })),
  info:    (t) => __lkd_toast_push(Object.assign({}, t, { variant: "info" })),
};

Object.assign(window, {
  Tag, Button, Avatar, PhotoBlock, BracketHeadline, GiantQuote, SkipLink,
  ProgressBar, StatCard, Modal, Tabs,
  DataTable, DataTableNameCell,
  ToastProvider, LkdToast,
  CommandPalette,
  Stepper,
  Marquee, Nav, TopNav, Footer, Colofon,
  ModuleCard, Testimonial, PricingCard, Faq,
  Sidebar, LessonSidebar, LessonRow, VideoPlaceholder, Container,
});
