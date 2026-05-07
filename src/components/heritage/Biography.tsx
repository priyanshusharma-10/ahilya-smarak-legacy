import portrait from "@/assets/heritage/ahilyabai-portrait.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const themes = [
  { hi: "धर्मनिष्ठा", en: "Dharma & Faith", body: "Restorer of sacred sites from Kashi to Rameshwaram, Somnath to Dwarka." },
  { hi: "न्यायप्रियता", en: "Justice", body: "Personally heard petitions; her courts became models of impartiality across Malwa." },
  { hi: "नारी नेतृत्व", en: "Women Leadership", body: "Trained the first all-women battalions; appointed women as administrators of land grants." },
  { hi: "लोक कल्याण", en: "Public Welfare", body: "Built ghats, dharamshalas, wells and roads from Maheshwar across the subcontinent." },
];

export function Biography() {
  return (
    <section id="bio" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="लोकमाता का परिचय" en="Who Was Ahilyabai" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative ornament-frame p-2 bg-deep-brown/40">
              <div className="relative overflow-hidden">
                <img
                  src={portrait}
                  alt="Portrait of Devi Ahilyabai Holkar"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                  style={{ filter: "sepia(0.25) contrast(1.05) brightness(0.95)" }}
                />
                <div className="absolute inset-0 pointer-events-none"
                     style={{ background: "radial-gradient(ellipse at center, transparent 50%, var(--background) 110%)" }} />
              </div>
              <div className="text-center mt-6 mb-2">
                <p className="font-hindi text-gold-light text-lg">पुण्यश्लोक देवी अहिल्याबाई</p>
                <p className="font-display italic text-warm-gray text-sm">1725 — 1795</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="lg:col-span-7 space-y-10">
            <Reveal delay={0.15}>
              <p className="font-display italic text-stone/85 text-2xl md:text-3xl leading-snug text-balance">
                "An extraordinary woman ruler — one of the most exemplary administrators in all of Indian history."
              </p>
              <p className="mt-4 font-body text-warm-gray text-sm tracking-wider">— Jawaharlal Nehru</p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="font-body text-stone/80 leading-loose text-base md:text-lg">
                For nearly thirty years, the Malwa kingdom flourished under the queen who ruled not from a throne but from a humble seat of dharma. She wove together faith and statecraft, art and administration, mercy and resolve — leaving behind not monuments of marble alone, but a philosophy of governance that India still reaches for.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {themes.map((t, i) => (
                <Reveal key={t.en} delay={0.4 + i * 0.08}>
                  <div className="border-l border-gold/40 pl-5 py-2">
                    <p className="font-hindi text-gold-light text-lg mb-1">{t.hi}</p>
                    <p className="font-display text-stone text-sm tracking-wide uppercase mb-2">{t.en}</p>
                    <p className="font-body text-warm-gray text-sm leading-relaxed">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
