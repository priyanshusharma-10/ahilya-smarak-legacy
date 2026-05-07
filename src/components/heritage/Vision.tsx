import aerial from "@/assets/renders/aerial-complex.jpg";
import building from "@/assets/renders/heritage-building.jpg";
import gateWater from "@/assets/renders/gate-water.jpg";
import corridor from "@/assets/heritage/corridor.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  { hi: "संग्रहालय", en: "Museum & Galleries" },
  { hi: "अनुसन्धान केन्द्र", en: "Research Centre" },
  { hi: "सांस्कृतिक केन्द्र", en: "Cultural Centre" },
  { hi: "खुला रंगमंच", en: "Open Amphitheatre" },
  { hi: "विरासत उद्यान", en: "Heritage Gardens" },
  { hi: "डिजिटल वीथिकाएं", en: "Digital Galleries" },
];

export function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="स्मारक की दृष्टि" en="The Smarak Vision" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="ornament-frame overflow-hidden">
              <img src={aerial} alt="Aerial render of the Smarak complex" loading="lazy"
                   className="w-full h-[500px] object-cover" />
            </div>
            <p className="font-display italic text-warm-gray text-sm mt-4 text-center">
              Aerial vision — Rampur Kothi heritage complex
            </p>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.15}>
              <p className="font-display italic text-stone/85 text-xl md:text-2xl leading-snug text-balance">
                The historic Rampur Kothi — restored through traditional lime techniques — becomes the soul of a 3.5-acre cultural ecosystem on Kesar Bagh Road, adjacent to Lalbagh Palace.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="font-body text-stone/75 leading-loose">
                Inspired by Ahilyabai Holkar's philosophy of <span className="text-gold-light">नीति · नियत · नियम</span> — Niti, Niyat & Niyam — the Smarak unifies architecture, archive, exhibition and education into a single living institution.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {pillars.map((p, i) => (
                <Reveal key={p.en} delay={0.35 + i * 0.05}>
                  <div className="border border-gold/15 hover:border-gold/40 transition-colors duration-700 p-4 bg-deep-brown/20">
                    <p className="font-hindi text-gold-light text-base mb-1">{p.hi}</p>
                    <p className="font-body text-warm-gray text-xs tracking-wider uppercase">{p.en}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Render gallery */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[building, gateWater, corridor].map((src, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="ornament-frame overflow-hidden group">
                <img src={src} alt={`Architectural render ${i + 1}`} loading="lazy"
                     className="w-full h-72 object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
