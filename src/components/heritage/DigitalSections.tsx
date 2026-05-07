import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const features = [
  { hi: "एआर/वीआर अनुभव", en: "AR / VR Heritage Experience" },
  { hi: "ऑडियो कथा वाचन", en: "Audio Storytelling" },
  { hi: "इंटरैक्टिव टच भित्ति", en: "Interactive Touch Walls" },
  { hi: "होलोग्राफिक दर्शन", en: "Holographic Storytelling" },
  { hi: "गति-प्रतिक्रियाशील डिस्प्ले", en: "Motion-Reactive Displays" },
  { hi: "एआई संचालित नेरेशन", en: "AI Narration" },
];

export function DigitalShowcase() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="डिजिटल अनुभव" en="The Digital Experience" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.en} delay={(i % 3) * 0.08}>
              <div className="ornament-frame p-8 bg-gradient-to-br from-deep-brown/40 to-background h-full">
                <div className="w-10 h-10 mb-5 border border-gold/50 rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gold/70" />
                </div>
                <p className="font-hindi text-stone text-lg mb-1">{f.hi}</p>
                <p className="font-display italic text-warm-gray">{f.en}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudioStory() {
  return (
    <section className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10 overflow-hidden">
      <div className="absolute inset-0 opacity-30 heritage-grain pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionLabel hi="ध्वनि-कथा यात्रा" en="Audio Story Experience" />
        <Reveal>
          <div className="ornament-frame p-10 md:p-16 bg-background/70 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-gold flex items-center justify-center"
                 style={{ boxShadow: "var(--shadow-gold-glow)" }}>
              <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z"/></svg>
            </div>
            <p className="font-hindi text-2xl md:text-3xl text-stone mb-3">अध्याय एक : माहेश्वर का प्रभात</p>
            <p className="font-display italic text-warm-gray text-lg mb-10">Chapter One — Dawn at Maheshwar</p>
            {/* Waveform */}
            <div className="flex items-end justify-center gap-1 h-16 mb-8">
              {Array.from({ length: 60 }).map((_, i) => (
                <span key={i} className="w-1 bg-gold/70 rounded-full"
                      style={{ height: `${20 + Math.abs(Math.sin(i * 0.4)) * 80}%`,
                               opacity: 0.4 + Math.abs(Math.sin(i * 0.4)) * 0.6 }} />
              ))}
            </div>
            <div className="flex items-center justify-center gap-6">
              <button className="text-warm-gray hover:text-gold transition-colors">‹‹</button>
              <button className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-background hover:shadow-[var(--shadow-gold-glow)] transition-all">
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>
              <button className="text-warm-gray hover:text-gold transition-colors">››</button>
            </div>
            <p className="mt-8 font-body text-[0.7rem] tracking-royal uppercase text-warm-gray">Museum-Grade Hindi Narration · 12 Chapters</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
