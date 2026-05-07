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

/* ─── Ahilyabai Key Achievements Section ───────────────────── */
const achievements = [
  {
    num: "300+",
    hi: "पवित्र स्थल पुनर्निर्माण",
    en: "Sacred Sites Restored",
    body: "Rebuilt temples, ghats and dharamshalas from Kashi to Somnath, Dwarka to Rameshwaram — across the length and breadth of India.",
  },
  {
    num: "28",
    hi: "वर्षों का शासन",
    en: "Years of Exemplary Rule",
    body: "Governed Malwa from Maheshwar 1767–1795 with an administration so just and prosperous that historians called it India's golden era of regional governance.",
  },
  {
    num: "1780",
    hi: "काशी विश्वनाथ पुनर्निर्माण",
    en: "Kashi Vishwanath Rebuilt",
    body: "Financed and oversaw the reconstruction of the Kashi Vishwanath Temple — one of Hinduism's holiest sites — after Aurangzeb's demolition in 1669.",
  },
  {
    num: "1st",
    hi: "महिला सेना बटालियन",
    en: "Women's Army Battalion",
    body: "Organised and trained the first all-women armed battalion in Indian history — a landmark 250 years before the Indian Army formally inducted women in combat roles.",
  },
  {
    num: "∞",
    hi: "धर्म, न्याय, लोक-कल्याण",
    en: "Dharma · Justice · Public Welfare",
    body: "Her governance philosophy of Niti, Niyat and Niyam — policy, intention, discipline — remains a living model studied in political science curricula worldwide.",
  },
  {
    num: "1767",
    hi: "माहेश्वर — राजधानी",
    en: "Maheshwar as Capital",
    body: "Transformed Maheshwar on the banks of the Narmada into a cultural and textile capital — home to the world-famous Maheshwari sarees, patronised by her royal court.",
  },
];

export function AhilyaAchievements() {
  return (
    <section id="achievements" className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="लोकमाता की उपलब्धियाँ" en="A Legacy That Shaped India" />
        <Reveal>
          <p className="text-center max-w-2xl mx-auto font-body text-warm-gray leading-loose mb-16">
            Three centuries before modern governance theory, Ahilyabai Holkar demonstrated what it means to lead with dharma.
            Her achievements are not myths — they are documented history, inscribed in stone across the subcontinent.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <Reveal key={a.en} delay={(i % 3) * 0.08}>
              <div className="group ornament-frame bg-background/50 p-8 h-full hover:bg-background/70 transition-colors duration-700">
                <p className="font-display gradient-gold-text text-4xl md:text-5xl font-light mb-5">{a.num}</p>
                <p className="font-hindi text-stone text-lg mb-1">{a.hi}</p>
                <p className="font-body text-[0.65rem] tracking-royal uppercase text-gold mb-4">{a.en}</p>
                <p className="font-body text-warm-gray text-sm leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full border border-gold flex items-center justify-center transition-all duration-700 group-hover:shadow-(--shadow-gold-glow)">
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
                  <div className="h-0.5 bg-deep-brown overflow-hidden">
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
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110"
                     style={{ filter: "sepia(0.3) brightness(0.85)" }} />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
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
                     className="w-full h-full object-cover transition-transform duration-2000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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

/* ─── Trust Details Section ─────────────────────────────────── */
export function TrustDetails() {
  const objectives = [
    { hi: "स्मारक निर्माण", en: "Construction of a world-class heritage memorial complex at Rampur Kothi, Indore." },
    { hi: "जीवन-गाथा प्रदर्शनी", en: "Curated galleries, murals and life-story exhibits on Ahilyabai's 70-year reign." },
    { hi: "डिजिटल अभिलेखागार", en: "Digital archive preserving 300 years of Holkar dynasty records for future scholars." },
    { hi: "शिक्षा एवं अनुसन्धान", en: "Dedicated research centre, history fellowships and student curriculum integration." },
    { hi: "सांस्कृतिक केन्द्र", en: "Open amphitheatre, cultural programmes and annual Devi Ahilya Puraskar ceremony." },
    { hi: "पर्यटन विकास", en: "Indore heritage circuit connecting Rajwada, Lalbagh Palace, Maheshwar and Omkareshwar." },
  ];

  const registrations = [
    { label: "Trust Registration No.", value: "MP179092022A11288705" },
    { label: "PAN", value: "AAETD4639A" },
    { label: "12A Certificate", value: "Valid AY 2024-25 to 2028-29" },
    { label: "80G Certificate", value: "Valid AY 2024-25 to 2028-29" },
    { label: "CSR Eligibility", value: "Schedule VII, Companies Act 2013" },
    { label: "FCRA Status", value: "Applied" },
  ];

  return (
    <section id="trust-details" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="संस्था परिचय एवं उद्देश्य" en="About the Trust & Its Mission" />

        {/* Mission statement */}
        <Reveal>
          <div className="ornament-frame bg-secondary-bg/40 p-8 md:p-12 mb-16 text-center">
            <p className="font-hindi text-gold-light text-xl md:text-2xl leading-relaxed mb-4">
              देवी अहिल्याबाई होलकर स्मारक प्रतिष्ठान, इन्दौर
            </p>
            <p className="font-display italic text-warm-gray text-lg md:text-xl mb-6">
              Devi Ahilyabai Holkar Smarak Pratishthan, Indore
            </p>
            <p className="font-body text-stone/80 leading-loose max-w-3xl mx-auto">
              A registered public charitable trust founded to create a grand, multi-dimensional national memorial
              in Indore honouring <span className="text-gold-light">Lokmata Devi Ahilyabai Holkar</span> — the
              18th-century philosopher-queen who governed Malwa for 28 years with unmatched dharma, justice and
              compassion. The Madhya Pradesh Government has allotted land at the historic
              <span className="text-gold-light"> Rampur Kothi</span> (former RTO campus) on Kesar Bagh Road,
              Indore for this purpose.
            </p>
          </div>
        </Reveal>

        {/* Government support + context */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <Reveal>
            <div className="ornament-frame bg-secondary-bg/50 p-8 h-full">
              <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-5">Government Support</p>
              <ul className="space-y-4 font-body text-stone/80 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-1 w-1.5 h-1.5 shrink-0 bg-gold rotate-45" />
                  Madhya Pradesh Government has <span className="text-gold-light ml-1">allotted land</span> at
                  Rampur Kothi (7+ acres) for the memorial on Kesar Bagh Road, near Lalbagh Palace.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-1.5 h-1.5 shrink-0 bg-gold rotate-45" />
                  Central Minister Shivraj Singh Chouhan and Chief Minister Dr. Mohan Yadav have extended
                  <span className="text-gold-light ml-1">full cooperation</span> to the Smarak initiative.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-1.5 h-1.5 shrink-0 bg-gold rotate-45" />
                  Prime Minister Narendra Modi's reverence for Lokmata Ahilyabai is
                  <span className="text-gold-light ml-1">well documented</span> — he has personally cited
                  her governance as a model for modern India.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 w-1.5 h-1.5 shrink-0 bg-gold rotate-45" />
                  Indore Municipal Corporation and District Collector are
                  <span className="text-gold-light ml-1">represented on the Trust Board</span>.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="ornament-frame bg-secondary-bg/50 p-8 h-full">
              <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-5">Trust Objectives</p>
              <ul className="space-y-4">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 w-1.5 h-1.5 shrink-0 bg-gold rotate-45" />
                    <div>
                      <span className="font-hindi text-stone text-sm">{obj.hi} — </span>
                      <span className="font-body text-warm-gray text-sm">{obj.en}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Legal & compliance */}
        <Reveal>
          <div className="ornament-frame bg-secondary-bg/40 p-8">
            <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-6 text-center">
              Legal & Compliance Details
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {registrations.map((r) => (
                <div key={r.label} className="border border-gold/15 p-4">
                  <p className="font-body text-[0.65rem] tracking-wider uppercase text-warm-gray mb-1">{r.label}</p>
                  <p className="font-display text-gold-light text-base">{r.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center font-body text-stone/60 text-xs">
              All donations to the Pratishthan are <span className="text-gold-light">exempt from Income Tax under Section 80-G</span>.
              Receipt issued for every contribution.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Contribution & Donation Section ──────────────────────── */
export function Donation() {
  const donationTiers = [
    { hi: "पितृ सम्मान", en: "Pitru Samman", amount: "₹11,000", benefit: "Name inscribed in the Donor Register, digital certificate of gratitude." },
    { hi: "ग्राम सेवक", en: "Gram Sevak", amount: "₹51,000", benefit: "Name on the Heritage Wall, personalised letter from the President." },
    { hi: "राजधानी सम्मान", en: "Rajdhani Samman", amount: "₹1,00,000", benefit: "Plaque in the Memorial Gallery, invitation to inauguration ceremony." },
    { hi: "स्तम्भ प्रायोजक", en: "Stambha Sponsor", amount: "₹5,00,000", benefit: "Named sponsorship of a gallery pillar, prominent on-site acknowledgment." },
    { hi: "विरासत संरक्षक", en: "Heritage Patron", amount: "₹25,00,000+", benefit: "Named wing / hall, permanent display, national & digital visibility." },
  ];

  return (
    <section id="donate" className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="योगदान एवं दान" en="Contribute to the Legacy" />

        <Reveal>
          <p className="text-center max-w-2xl mx-auto font-body text-warm-gray leading-loose mb-14">
            Every contribution — large or small — carries the sacred intention of the donor and helps preserve
            Lokmata Ahilyabai's living legacy for generations to come. All donations are
            <span className="text-gold-light"> tax-exempt under Section 80G</span>.
          </p>
        </Reveal>

        {/* Donation tiers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {donationTiers.map((tier, i) => (
            <Reveal key={tier.en} delay={i * 0.07}>
              <div className="ornament-frame bg-background/40 p-6 h-full flex flex-col gap-3 group hover:border-gold/50 transition-colors duration-700">
                <p className="font-display gradient-gold-text text-2xl font-light">{tier.amount}</p>
                <div>
                  <p className="font-hindi text-stone text-sm">{tier.hi}</p>
                  <p className="font-body text-[0.65rem] tracking-royal uppercase text-gold">{tier.en}</p>
                </div>
                <p className="font-body text-warm-gray text-xs leading-relaxed flex-1">{tier.benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bank details + UPI */}
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="ornament-frame bg-background/50 p-8 h-full">
              <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-6">Bank Transfer Details</p>
              <div className="space-y-4 font-body text-sm">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-b border-gold/15 pb-5">
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">Account Name</p>
                    <p className="text-stone leading-snug">Devi Ahilyabai Holkar Smarak Pratishthan</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">Bank</p>
                    <p className="text-stone">State Bank of India</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">Account Number</p>
                    <p className="font-display text-gold-light text-base tracking-widest">42074772399</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">IFSC Code</p>
                    <p className="font-display text-gold-light text-base tracking-widest">SBIN0030015</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">Branch</p>
                    <p className="text-stone">PY Road, Indore</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">UPI ID</p>
                    <p className="text-stone">ahilyabaiholkarsmarak@sbi</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">PAN</p>
                    <p className="text-stone">AAETD4639A</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-wider uppercase text-warm-gray mb-0.5">80G Ref No.</p>
                    <p className="text-stone">RA.PRA.KRA. 004/B-113/2022-23</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6 h-full">
              {/* Construction phases cost summary */}
              <div className="ornament-frame bg-background/50 p-7">
                <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-4">Project Investment</p>
                <div className="space-y-3">
                  {[
                    { phase: "Phase I", hi: "पुनर्स्थापना", en: "Rampur Kothi Restoration", cost: "₹40 Cr" },
                    { phase: "Phase II", hi: "वीथिका एवं अनुभव", en: "Galleries & Experiences", cost: "₹65 Cr" },
                    { phase: "Phase III", hi: "सांस्कृतिक केंद्र", en: "Cultural Centre & Gardens", cost: "₹45 Cr" },
                  ].map((ph) => (
                    <div key={ph.phase} className="flex items-center justify-between border-b border-gold/10 pb-3">
                      <div>
                        <p className="font-body text-[0.65rem] tracking-wider uppercase text-warm-gray">{ph.phase}</p>
                        <p className="font-hindi text-stone text-sm">{ph.hi}</p>
                        <p className="font-display italic text-warm-gray text-xs">{ph.en}</p>
                      </div>
                      <p className="font-display gradient-gold-text text-xl">{ph.cost}</p>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-1">
                    <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold">Total Estimated</p>
                    <p className="font-display gradient-gold-text text-2xl">₹150 Cr</p>
                  </div>
                </div>
              </div>

              {/* Contact for donations */}
              <div className="ornament-frame bg-background/50 p-7 flex-1">
                <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-4">Send Your Contribution</p>
                <div className="space-y-2 font-body text-stone/80 text-sm">
                  <p>अहिल्या स्मृति सदन,</p>
                  <p>21 प्रिंस यशवंत रोड, इंदौर 452001 (म.प्र.)</p>
                  <p className="text-gold-light mt-3">+91 98260 21421 · +91 94250 65111</p>
                  <p>ahilyabaiholkarsmaraktrust@gmail.com</p>
                </div>
                <a href="#contact" className="btn-ghost-royal mt-6 w-full text-[0.65rem]">
                  Get in Touch
                </a>
              </div>
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
