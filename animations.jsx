// animations.jsx
// Minimal timeline runtime for the Lendár[IA] bumper pages.

const StageTimeContext = React.createContext(0);
const SpriteTimeContext = React.createContext({ localTime: 0, duration: 0 });

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function useTime() {
  return React.useContext(StageTimeContext);
}

function useSprite() {
  return React.useContext(SpriteTimeContext);
}

function Stage({
  width = 1920,
  height = 1080,
  duration = 32,
  background = '#191919',
  persistKey,
  autoplay = true,
  children,
}) {
  const safeDuration = Math.max(0.1, duration);
  const [time, setTime] = React.useState(() => {
    if (!persistKey) return 0;
    const stored = Number(window.localStorage.getItem(persistKey));
    return Number.isFinite(stored) ? clamp(stored, 0, safeDuration) : 0;
  });
  const [isPlaying, setIsPlaying] = React.useState(autoplay);
  const [viewport, setViewport] = React.useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  const startRef = React.useRef(0);
  const offsetRef = React.useRef(time);

  React.useEffect(() => {
    const onResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  React.useEffect(() => {
    if (!isPlaying) {
      offsetRef.current = time;
      return undefined;
    }

    startRef.current = performance.now() - offsetRef.current * 1000;
    let frame = 0;

    const tick = (now) => {
      const next = ((now - startRef.current) / 1000) % safeDuration;
      setTime(next);
      if (persistKey) window.localStorage.setItem(persistKey, String(next));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying, persistKey, safeDuration]);

  const scale = Math.min(viewport.width / width, viewport.height / height);
  const chrome = {
    position: 'fixed',
    inset: 0,
    overflow: 'hidden',
    background,
    touchAction: 'manipulation',
  };
  const frameStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width,
    height,
    transform: `translate(-50%, -50%) scale(${scale})`,
    transformOrigin: 'center',
    background,
    overflow: 'hidden',
  };

  return (
    <StageTimeContext.Provider value={time}>
      <SpriteTimeContext.Provider value={{ localTime: time, duration: safeDuration }}>
        <div style={chrome} onClick={() => setIsPlaying((value) => !value)}>
          <div style={frameStyle}>
            {children}
          </div>
        </div>
      </SpriteTimeContext.Provider>
    </StageTimeContext.Provider>
  );
}

function Sprite({ start = 0, end = Infinity, children }) {
  const time = useTime();
  if (time < start || time >= end) return null;

  const duration = Math.max(0, end - start);
  const value = React.useMemo(() => ({
    localTime: time - start,
    duration,
  }), [time, start, duration]);

  return (
    <SpriteTimeContext.Provider value={value}>
      {children}
    </SpriteTimeContext.Provider>
  );
}

Object.assign(window, {
  StageTimeContext,
  SpriteTimeContext,
  clamp,
  useTime,
  useSprite,
  Stage,
  Sprite,
});
