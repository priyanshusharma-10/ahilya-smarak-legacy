import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const zones = [
  { n: "01", hi: "डिजिटल वंशावली भित्ति", en: "Digital Genealogy Wall", cat: "Heritage" },
  { n: "02", hi: "जीवन यात्रा तारामंडल", en: "Life Journey Planetarium", cat: "Spirituality" },
  { n: "03", hi: "एनिमेटेड जीवंत वीथिका", en: "Animated Living Gallery", cat: "Art" },
  { n: "04", hi: "जनजातीय कला संग्रहालय", en: "Tribal Art Museum", cat: "Culture" },
  { n: "05", hi: "एआर/वीआर पोर्टल", en: "AR / VR Portals", cat: "Education" },
  { n: "06", hi: "इंटरैक्टिव डिस्प्ले एवं लाइव शो", en: "Interactive Live Shows", cat: "Education" },
  { n: "07", hi: "ध्वनि-दृश्य परिवेश", en: "Soundscapes & Portraits", cat: "Art" },
  { n: "08", hi: "राज-शासन कक्ष", en: "Royal Governance Chamber", cat: "Governance" },
  { n: "09", hi: "विरासत गलियारे", en: "Heritage Corridors", cat: "Heritage" },
  { n: "10", hi: "प्रोजेक्शन मैपिंग मण्डप", en: "Projection Mapping Pavilion", cat: "Art" },
  { n: "11", hi: "पवित्र भारत पुनरुद्धार मानचित्र", en: "Sacred India Restoration Map", cat: "Spirituality" },
  { n: "12", hi: "नारी नेतृत्व कक्ष", en: "Women Leadership Hall", cat: "Women Leadership" },
];

const catColors: Record<string, string> = {
  Heritage: "var(--gold)",
  Spirituality: "var(--gold-light)",
  Art: "var(--warm-gray)",
  Culture: "var(--gold)",
  Education: "var(--gold-light)",
  Governance: "var(--gold)",
  "Women Leadership": "var(--gold-light)",
};

export function Zones() {
  return (
    <section id="zones" className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="32 अनुभव क्षेत्र" en="The 32 Experience Zones" />
        <Reveal>
          <p className="text-center max-w-2xl mx-auto font-body text-warm-gray text-base leading-loose mb-16">
            Twelve curated experiences anchor the Smarak — each a chapter in an unfolding story of dharma, governance and grace. A glimpse of the full thirty-two.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((z, i) => (
            <Reveal key={z.n} delay={(i % 3) * 0.1}>
              <div className="group relative h-full p-7 bg-background/60 border border-gold/15 hover:border-gold/50 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                     style={{ background: "var(--gradient-radial-gold)" }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-3xl text-gold/60">{z.n}</span>
                    <span className="font-body text-[0.6rem] tracking-royal uppercase px-2 py-1 border"
                          style={{ color: catColors[z.cat], borderColor: `color-mix(in oklab, ${catColors[z.cat]} 35%, transparent)` }}>
                      {z.cat}
                    </span>
                  </div>
                  <p className="font-hindi text-stone text-xl mb-2 leading-snug">{z.hi}</p>
                  <p className="font-display italic text-warm-gray text-base">{z.en}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center mt-12 font-body text-warm-gray text-sm tracking-wider">
            + 20 more curated immersive zones
          </p>
        </Reveal>
      </div>
    </section>
  );
}
