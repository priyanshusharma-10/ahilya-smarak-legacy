export function GoldArch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--gold)" stopOpacity="0" />
          <stop offset="0.5" stopColor="var(--gold-light)" />
          <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 119 L0 80 Q0 0 300 0 Q600 0 600 80 L600 119"
            stroke="url(#ag)" strokeWidth="1" fill="none" />
      <path d="M40 119 L40 90 Q40 30 300 30 Q560 30 560 90 L560 119"
            stroke="url(#ag)" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
      <circle cx="300" cy="14" r="3" fill="var(--gold-light)" />
      <circle cx="300" cy="14" r="8" stroke="var(--gold)" strokeOpacity="0.4" fill="none" />
    </svg>
  );
}
