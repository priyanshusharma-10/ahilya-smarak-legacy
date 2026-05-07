export function Particles() {
  const dots = Array.from({ length: 22 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute block rounded-full bg-gold-light/40 animate-drift"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${70 + (i * 13) % 30}%`,
            width: `${1 + (i % 3)}px`,
            height: `${1 + (i % 3)}px`,
            animationDelay: `${(i * 0.7) % 14}s`,
            animationDuration: `${10 + (i % 6)}s`,
          }}
        />
      ))}
    </div>
  );
}
