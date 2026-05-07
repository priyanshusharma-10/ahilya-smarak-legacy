import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const events = [
  { year: "1725", hi: "जन्म, चौंडी ग्राम", en: "Born in Chondi village, Ahmednagar" },
  { year: "1733", hi: "होलकर परिवार में विवाह", en: "Marriage into the Holkar dynasty" },
  { year: "1754", hi: "खांडेराव होलकर का देहांत", en: "Loss of husband Khanderao at Kumbher" },
  { year: "1767", hi: "मालवा की शासिका", en: "Ascends to rule Malwa from Maheshwar" },
  { year: "1780", hi: "काशी विश्वनाथ पुनर्निर्माण", en: "Reconstruction of Kashi Vishwanath Temple" },
  { year: "1785", hi: "देशव्यापी मन्दिर एवं घाट", en: "Temples and ghats from Somnath to Rameshwaram" },
  { year: "1795", hi: "महानिर्वाण, माहेश्वर", en: "Mahaparinirvana at Maheshwar" },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="जीवन यात्रा : 1725 — 1795" en="An Immersive Timeline" />

        {/* Desktop: horizontal */}
        <div className="hidden md:block relative">
          <div className="absolute top-[58px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-7 gap-4">
            {events.map((e, i) => (
              <Reveal key={e.year} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center group cursor-default">
                  <div className="font-display text-3xl gradient-gold-text mb-3">{e.year}</div>
                  <div className="relative mb-5">
                    <div className="w-3 h-3 rotate-45 bg-gold transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_20px_var(--gold)]" />
                  </div>
                  <p className="font-hindi text-stone text-sm leading-tight mb-2 px-2">{e.hi}</p>
                  <p className="font-body text-warm-gray text-[0.7rem] leading-relaxed px-2">{e.en}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          {events.map((e, i) => (
            <Reveal key={e.year} delay={i * 0.08}>
              <div className="relative pb-10">
                <div className="absolute -left-[1.42rem] top-2 w-3 h-3 rotate-45 bg-gold" />
                <div className="font-display text-2xl gradient-gold-text mb-1">{e.year}</div>
                <p className="font-hindi text-stone text-base mb-1">{e.hi}</p>
                <p className="font-body text-warm-gray text-sm">{e.en}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
