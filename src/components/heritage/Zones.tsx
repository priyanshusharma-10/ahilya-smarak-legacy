import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const zones = [
  // Wing A — History & Biography
  { n: "01", hi: "डिजिटल वंशावली भित्ति", en: "Digital Genealogy Wall", cat: "Heritage" },
  { n: "02", hi: "जीवन यात्रा तारामंडल", en: "Life Journey Planetarium", cat: "Heritage" },
  { n: "03", hi: "एनिमेटेड जीवंत वीथिका", en: "Animated Living Gallery", cat: "Art" },
  { n: "04", hi: "राज-शासन कक्ष", en: "Royal Governance Chamber", cat: "Governance" },
  { n: "05", hi: "काशी पुनर्निर्माण मण्डप", en: "Kashi Reconstruction Pavilion", cat: "Spirituality" },
  { n: "06", hi: "पवित्र भारत पुनरुद्धार मानचित्र", en: "Sacred India Restoration Map", cat: "Spirituality" },
  { n: "07", hi: "होलकर राज-कोष प्रदर्शनी", en: "Holkar Royal Treasury Display", cat: "Heritage" },
  { n: "08", hi: "युद्ध और शौर्य दीर्घा", en: "War & Valour Gallery", cat: "Heritage" },
  // Wing B — Culture & Craft
  { n: "09", hi: "जनजातीय कला संग्रहालय", en: "Tribal Art Museum", cat: "Culture" },
  { n: "10", hi: "शिल्प एवं हस्तकला केन्द्र", en: "Crafts & Handloom Centre", cat: "Culture" },
  { n: "11", hi: "मालवा की रसोई एवं संस्कृति", en: "Malwa Cuisine & Culture", cat: "Culture" },
  { n: "12", hi: "इन्दौर की विरासत दीर्घा", en: "Heritage of Indore City Gallery", cat: "Heritage" },
  // Wing C — Digital & Immersive
  { n: "13", hi: "एआर/वीआर पोर्टल", en: "AR / VR Heritage Portals", cat: "Digital" },
  { n: "14", hi: "इंटरैक्टिव डिस्प्ले एवं लाइव शो", en: "Interactive Live Shows", cat: "Digital" },
  { n: "15", hi: "ध्वनि-दृश्य परिवेश", en: "Soundscapes & Portrait Walls", cat: "Digital" },
  { n: "16", hi: "प्रोजेक्शन मैपिंग मण्डप", en: "3D Projection Mapping Pavilion", cat: "Digital" },
  { n: "17", hi: "होलोग्राफिक दर्शन", en: "Holographic Storytelling", cat: "Digital" },
  { n: "18", hi: "एआई संचालित कथा-वाचन", en: "AI-Narrated Audio Story Experience", cat: "Digital" },
  // Wing D — Women & Leadership
  { n: "19", hi: "नारी नेतृत्व कक्ष", en: "Women Leadership Hall", cat: "Women Leadership" },
  { n: "20", hi: "प्रथम महिला सेना दीर्घा", en: "India's First Women's Battalion Gallery", cat: "Women Leadership" },
  { n: "21", hi: "समकालीन नारी शक्ति प्रेरणा", en: "Contemporary Women Achievers Inspire Wall", cat: "Women Leadership" },
  // Wing E — Education & Research
  { n: "22", hi: "विद्वान शोध केन्द्र", en: "Scholar Research & Archive Centre", cat: "Education" },
  { n: "23", hi: "डिजिटल ज्ञान-कोश", en: "Digital Knowledge Repository", cat: "Education" },
  { n: "24", hi: "बाल अनुभव एवं खोज केन्द्र", en: "Children's Discovery Centre", cat: "Education" },
  { n: "25", hi: "लघु-चलचित्र एवं वृत्तचित्र मण्डप", en: "Short Film & Documentary Pavilion", cat: "Education" },
  // Wing F — Open Heritage Complex
  { n: "26", hi: "माहेश्वर घाट पुनर्सृजन", en: "Maheshwar Sacred Ghat Recreation", cat: "Spirituality" },
  { n: "27", hi: "ध्यान एवं योग वाटिका", en: "Meditation & Yoga Heritage Garden", cat: "Spirituality" },
  { n: "28", hi: "ओपन-एयर रंगमंच", en: "Open Air Amphitheatre", cat: "Culture" },
  { n: "29", hi: "पर्यावरण विरासत उद्यान", en: "Eco-Heritage Gardens & Walkways", cat: "Culture" },
  { n: "30", hi: "राष्ट्रीय एकता भित्ति-चित्र", en: "National Integration Mural Wall", cat: "Heritage" },
  // Landmark Zones
  { n: "31", hi: "अहिल्या पुरस्कार एवं स्मृति दीर्घा", en: "Ahilya Award & Memorial Gallery", cat: "Heritage" },
  { n: "32", hi: "स्मृति प्रकाश स्तम्भ", en: "Smriti Light Tower (Memorial Stambh)", cat: "Heritage" },
];

const catColors: Record<string, string> = {
  Heritage: "var(--gold)",
  Spirituality: "var(--gold-light)",
  Art: "var(--warm-gray)",
  Culture: "var(--gold)",
  Digital: "var(--gold-light)",
  Education: "var(--gold-light)",
  Governance: "var(--gold)",
  "Women Leadership": "var(--gold-light)",
};

// Deduplicate for label display
const wings = [
  { label: "A", name: "History & Biography", range: "01–08" },
  { label: "B", name: "Culture & Craft", range: "09–12" },
  { label: "C", name: "Digital & Immersive", range: "13–18" },
  { label: "D", name: "Women & Leadership", range: "19–21" },
  { label: "E", name: "Education & Research", range: "22–25" },
  { label: "F", name: "Heritage Complex", range: "26–32" },
];

export function Zones() {
  return (
    <section id="zones" className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="32 अनुभव क्षेत्र" en="The 32 Experience Zones" />
        <Reveal>
          <p className="text-center max-w-2xl mx-auto font-body text-warm-gray text-base leading-loose mb-10">
            Six themed wings, each a distinct chapter in an immersive narrative of dharma, governance and grace.
            Together they form a 32-zone living institution — India's most comprehensive heritage memorial.
          </p>
        </Reveal>

        {/* Wing index */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
            {wings.map((w) => (
              <div key={w.label} className="border border-gold/20 p-3 text-center bg-background/40">
                <p className="font-display gradient-gold-text text-xl mb-1">Wing {w.label}</p>
                <p className="font-body text-stone/80 text-xs mb-0.5">{w.name}</p>
                <p className="font-body text-[0.6rem] tracking-wider text-warm-gray uppercase">Zones {w.range}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {zones.map((z, i) => (
            <Reveal key={z.n} delay={(i % 4) * 0.06}>
              <div className="group relative h-full p-6 bg-background/60 border border-gold/15 hover:border-gold/50 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                     style={{ background: "var(--gradient-radial-gold)" }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-display text-2xl text-gold/50">{z.n}</span>
                    <span className="font-body text-[0.55rem] tracking-royal uppercase px-2 py-1 border"
                          style={{ color: catColors[z.cat], borderColor: `color-mix(in oklab, ${catColors[z.cat]} 35%, transparent)` }}>
                      {z.cat}
                    </span>
                  </div>
                  <p className="font-hindi text-stone text-base mb-1 leading-snug">{z.hi}</p>
                  <p className="font-display italic text-warm-gray text-sm">{z.en}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

