import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { hi: "करोड़", en: "Project Investment", value: 150, prefix: "₹", suffix: "" },
  { hi: "एकड़ भूखंड", en: "Heritage Acreage", value: 3.5, suffix: "", decimals: 1 },
  { hi: "अनुभव क्षेत्र", en: "Experience Zones", value: 32 },
  { hi: "वार्षिक दर्शक", en: "Annual Visitors", value: 50, suffix: " L+" },
  { hi: "वर्षों की विरासत", en: "Years of Legacy", value: 300, suffix: "+" },
  { hi: "विकास चरण", en: "Development Phases", value: 3 },
];

export function StatStrip() {
  return (
    <section className="relative py-24 md:py-32 border-y border-gold/15 bg-secondary-bg/50">
      <div className="absolute inset-0 opacity-30 heritage-grain" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
          {stats.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.08} className="text-center">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-light gradient-gold-text mb-3">
                {s.prefix ?? ""}<Counter to={s.value} decimals={s.decimals ?? 0} />{s.suffix ?? ""}
              </div>
              <div className="font-hindi text-stone/90 text-sm md:text-base mb-1">{s.hi}</div>
              <div className="font-body text-[0.65rem] tracking-royal uppercase text-warm-gray">{s.en}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
