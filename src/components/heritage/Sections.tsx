import sumitra from "@/assets/trustees/sumitra-mahajan.jpg";
import maheshwar from "@/assets/heritage/maheshwar-ghat.jpg";
import rajwada from "@/assets/heritage/rajwada-palace.jpg";
import buckingham from "@/assets/heritage/buckingham-gates.jpg";
import aerial2 from "@/assets/renders/aerial-complex-2.jpg";
import gateTowers from "@/assets/renders/gate-towers-1.jpg";
import gateTowers2 from "@/assets/renders/gate-towers-2.jpg";
import complexGreen from "@/assets/renders/complex-greenery.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function SumitraSpotlight() {
  return (
    <section className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="ornament-frame p-2 bg-deep-brown/40 max-w-md mx-auto">
            <img src={sumitra} alt="Smt. Sumitra Mahajan" loading="lazy"
                 className="w-full h-auto object-cover" style={{ filter: "sepia(0.15) contrast(1.05)" }} />
          </div>
        </Reveal>
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-body text-[0.7rem] tracking-royal uppercase text-gold">Patron · Founder · Visionary</span>
            </div>
            <p className="font-hindi text-stone text-3xl md:text-4xl mb-2">सुमित्रा महाजन</p>
            <p className="font-display text-gold-light text-2xl md:text-3xl italic mb-6">Smt. Sumitra Mahajan</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body text-stone/85 leading-loose">
              Honoured with the <span className="text-gold-light">Padma Bhushan</span>, India's longest-serving woman parliamentarian — elected eight consecutive times from Indore — and the <span className="text-gold-light">former Speaker of the Lok Sabha</span>. The Ahilya Smarak is the realisation of her lifelong devotion to Lokmata Ahilyabai's legacy.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="border-l-2 border-gold pl-6 py-2 my-8">
              <p className="font-display italic text-stone text-xl md:text-2xl leading-snug">
                "अहिल्याबाई की पुण्यआई हर इन्दौरवासी के मन में बसी है। उनकी स्मृति को चिरस्थायी बनाना हम सबका दायित्व है।"
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const sdgs = [
  { n: 4, hi: "गुणवत्तापूर्ण शिक्षा", en: "Quality Education" },
  { n: 5, hi: "लैंगिक समानता", en: "Gender Equality" },
  { n: 8, hi: "शोभन कार्य एवं आर्थिक विकास", en: "Decent Work & Economic Growth" },
  { n: 10, hi: "असमानता में कमी", en: "Reduced Inequalities" },
  { n: 11, hi: "सतत नगर एवं समुदाय", en: "Sustainable Cities" },
  { n: 13, hi: "जलवायु कार्रवाई", en: "Climate Action" },
  { n: 15, hi: "थल पर जीवन", en: "Life on Land" },
  { n: 16, hi: "शान्ति, न्याय एवं सशक्त संस्थाएं", en: "Peace & Strong Institutions" },
  { n: 17, hi: "लक्ष्यों के लिए साझेदारी", en: "Partnerships for Goals" },
];

export function SDG() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="संयुक्त राष्ट्र के सतत विकास लक्ष्य" en="Aligned with United Nations SDGs" />
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-6">
          {sdgs.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="text-center group">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full border border-gold flex items-center justify-center transition-all duration-700 group-hover:shadow-[var(--shadow-gold-glow)]">
                  <span className="font-display text-3xl gradient-gold-text">{s.n}</span>
                  <span className="absolute inset-0 rounded-full border border-gold/20 scale-110" />
                </div>
                <p className="font-hindi text-stone text-xs leading-tight mb-1">{s.hi}</p>
                <p className="font-body text-[0.6rem] uppercase tracking-wider text-warm-gray">{s.en}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CSR() {
  const benefits = [
    "Heritage Conservation",
    "Women-Led Development",
    "Research & Education",
    "Sustainable Tourism",
    "Tribal Welfare",
    "National Integration",
  ];
  return (
    <section id="csr" className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="सीएसआर एवं भागीदारी" en="CSR & Patron Opportunity" />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="ornament-frame p-10 bg-background/60">
              <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-5">Schedule VII Eligible</p>
              <p className="font-display text-stone text-3xl md:text-4xl leading-snug mb-6">
                Falls under <span className="gradient-gold-text">CSR Schedule VII</span> of the Companies Act, 2013.
              </p>
              <p className="font-body text-warm-gray leading-loose mb-8">
                Donations are tax-exempt under Section 80G. The Pratishthan is a registered public trust (PAN: AAETD4639A) with full institutional compliance — 12A & 80G certifications valid AY 2024-25 to 2028-29.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rotate-45" />
                    <span className="font-body text-stone text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal delay={0.15}>
              <div className="border border-gold/25 p-8">
                <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-3">Sponsor Visibility</p>
                <ul className="space-y-3 font-body text-stone/85 text-sm leading-relaxed">
                  <li>· Estimated 50 lakh+ annual visitor footfall</li>
                  <li>· Prominent on-site mention as per agreement</li>
                  <li>· Parallel digital presence — Google, social, web</li>
                  <li>· Permanent inclusion in archival collateral</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#contact" className="btn-royal w-full">Partner with the Smarak</a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Phases() {
  const phases = [
    { p: "Phase I", hi: "पुनर्स्थापना", en: "Restoration of Rampur Kothi", pct: 35, cost: "₹40 Cr" },
    { p: "Phase II", hi: "वीथिका एवं अनुभव", en: "Galleries & Experiences", pct: 0, cost: "₹65 Cr" },
    { p: "Phase III", hi: "सांस्कृतिक केंद्र", en: "Cultural Centre & Gardens", pct: 0, cost: "₹45 Cr" },
  ];
  return (
    <section className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="निर्माण की प्रगति" en="Construction Progress" />
        <Reveal>
          <p className="text-center max-w-xl mx-auto font-body text-warm-gray mb-12">
            Built using <span className="text-gold-light">Traditional Lime Restoration Technique</span> — a centuries-old craft revived to honour the original Rampur Kothi.
          </p>
        </Reveal>
        <div className="space-y-10">
          {phases.map((ph, i) => (
            <Reveal key={ph.p} delay={i * 0.1}>
              <div className="grid md:grid-cols-12 items-center gap-6 border-b border-gold/15 pb-10">
                <div className="md:col-span-3">
                  <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-2">{ph.p}</p>
                  <p className="font-hindi text-stone text-2xl">{ph.hi}</p>
                  <p className="font-display italic text-warm-gray">{ph.en}</p>
                </div>
                <div className="md:col-span-7">
                  <div className="h-[2px] bg-deep-brown overflow-hidden">
                    <div className="h-full transition-all duration-1000"
                         style={{ width: `${ph.pct}%`, background: "var(--gradient-gold)" }} />
                  </div>
                  <p className="mt-2 font-body text-xs text-warm-gray">{ph.pct}% complete</p>
                </div>
                <div className="md:col-span-2 text-right">
                  <p className="font-display gradient-gold-text text-2xl">{ph.cost}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const items = [
    { hi: "पाठ्यक्रम एकीकरण", en: "Curriculum Integration" },
    { hi: "विद्वान अभिलेखागार", en: "Scholar Archives" },
    { hi: "मार्गदर्शित यात्राएं", en: "Guided Tours" },
    { hi: "अनुसन्धान केन्द्र", en: "Research Centre" },
    { hi: "इतिहास फेलोशिप", en: "History Fellowships" },
    { hi: "डिजिटल ज्ञान पुस्तकालय", en: "Digital Knowledge Library" },
  ];
  return (
    <section className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="शिक्षा एवं अनुसन्धान केन्द्र" en="Education & Research Hub" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.en} delay={(i % 3) * 0.08}>
              <div className="border border-gold/20 hover:border-gold/50 p-7 transition-colors duration-700 bg-background/40 h-full">
                <p className="font-display text-3xl gradient-gold-text mb-4">0{i + 1}</p>
                <p className="font-hindi text-stone text-lg mb-1">{it.hi}</p>
                <p className="font-display italic text-warm-gray">{it.en}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Circuit() {
  const sites = [
    { hi: "राजवाडा", en: "Rajwada", img: rajwada },
    { hi: "लालबाग पैलेस", en: "Lalbagh Palace", img: complexGreen },
    { hi: "काँच मन्दिर", en: "Kanch Mandir", img: gateTowers },
    { hi: "सराफा बाजार", en: "Sarafa Bazaar", img: buckingham },
    { hi: "माहेश्वर घाट", en: "Maheshwar Ghat", img: maheshwar },
  ];
  return (
    <section className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="इन्दौर का विरासत परिपथ" en="Heritage Circuit of Indore" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {sites.map((s, i) => (
            <Reveal key={s.en} delay={i * 0.08}>
              <div className="group relative ornament-frame overflow-hidden h-72">
                <img src={s.img} alt={s.en} loading="lazy"
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                     style={{ filter: "sepia(0.3) brightness(0.85)" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-hindi text-gold-light text-lg">{s.hi}</p>
                  <p className="font-display italic text-stone">{s.en}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const imgs = [aerial2, gateTowers, gateTowers2, complexGreen, maheshwar, rajwada];
  return (
    <section className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="मीडिया एवं चित्र वीथिका" en="Media & Gallery" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {imgs.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <div className={`group relative overflow-hidden ornament-frame ${i % 4 === 0 ? "h-96" : "h-64"}`}>
                <img src={img} alt={`Gallery ${i + 1}`} loading="lazy"
                     className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="सम्पर्क एवं भ्रमण" en="Contact & Visit" />
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="ornament-frame p-10 bg-secondary-bg/60 h-full">
              <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-4">Trust Office</p>
              <p className="font-hindi text-stone text-xl mb-1">देवी अहिल्याबाई होलकर स्मारक प्रतिष्ठान</p>
              <p className="font-display text-stone text-lg mb-6">Devi Ahilyabai Holkar Smarak Pratishthan</p>
              <div className="space-y-3 font-body text-stone/80 text-sm leading-relaxed">
                <p>अहिल्या स्मृति सदन, 21 प्रिंस यशवंत रोड,<br/>इंदौर 452001 (म.प्र.)</p>
                <p className="text-gold-light">+91 98260 21421 · +91 94250 65111</p>
                <p>ahilya.smarak@gmail.com</p>
                <p>ahilyasmarak.org</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gold/20">
                <p className="font-body text-[0.7rem] tracking-royal uppercase text-warm-gray mb-1">Estimated Opening</p>
                <p className="font-display text-2xl gradient-gold-text">2028</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="ornament-frame p-10 bg-secondary-bg/60 h-full flex flex-col">
              <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-4">Site Location</p>
              <p className="font-hindi text-stone text-xl mb-1">रामपुर कोठी (पुराना आरटीओ भवन)</p>
              <p className="font-display text-stone text-lg mb-6">Rampur Kothi · Kesar Bagh Road · Near Lalbagh Palace</p>
              <div className="flex-1 border border-gold/30 mb-6 relative overflow-hidden bg-deep-brown/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                    <path d="M 10 50 Q 30 20 50 50 T 90 50" stroke="var(--gold)" strokeWidth="0.3" fill="none" />
                    <path d="M 10 60 Q 40 80 70 60 T 90 70" stroke="var(--gold)" strokeWidth="0.3" fill="none" />
                    <circle cx="50" cy="50" r="2" fill="var(--gold)" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-body text-[0.65rem] tracking-royal uppercase text-warm-gray">Indore · Madhya Pradesh</p>
                </div>
              </div>
              <a href="https://wa.me/919826021421" className="btn-ghost-royal">Join the WhatsApp Channel</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-gold/20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gold-divider mb-16" />
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div>
            <p className="font-hindi text-gold-light text-lg mb-2">देवी अहिल्याबाई होलकर स्मारक</p>
            <p className="font-display italic text-warm-gray">A living legacy. A national heritage.</p>
          </div>
          <div>
            <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-4">Trust</p>
            <p className="font-body text-stone/70 text-sm leading-relaxed">
              Devi Ahilyabai Holkar Smarak Pratishthan<br/>
              PAN: AAETD4639A · 80G Certified<br/>
              Reg: MP179092022A11288705
            </p>
          </div>
          <div>
            <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-4">Connect</p>
            <p className="font-body text-stone/70 text-sm leading-relaxed">
              ahilya.smarak@gmail.com<br/>
              +91 98260 21421
            </p>
          </div>
        </div>
        <div className="gold-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-body text-[0.7rem] tracking-wider text-warm-gray">
          <p>© 2025 Ahilya Smarak Trust, Indore · All rights reserved</p>
          <p className="font-display italic">Architects: Himanshu Dudhwadkar · Shreya Bhargav</p>
        </div>
      </div>
    </footer>
  );
}
