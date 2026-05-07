import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const leaders = [
  {
    name: "Shri Narendra Modi",
    hi: "नरेंद्र मोदी",
    role: "Prime Minister of India",
    roleHi: "प्रधानमंत्री, भारत",
    quote:
      "Maa Ahilyabai Holkar's life and legacy is a source of constant inspiration — her devotion to public welfare, dharma and justice is a guiding light for every Indian.",
    quoteHi:
      "माँ अहिल्याबाई होलकर का जीवन और उनकी विरासत निरंतर प्रेरणा का स्रोत है — जनकल्याण, धर्म और न्याय के प्रति उनकी निष्ठा प्रत्येक भारतीय के लिए मार्गदर्शक प्रकाश है।",
    badge: "Central Support",
  },
  {
    name: "Shri Shivraj Singh Chouhan",
    hi: "शिवराज सिंह चौहान",
    role: "Union Cabinet Minister, Govt. of India",
    roleHi: "केंद्रीय कैबिनेट मंत्री, भारत सरकार",
    quote:
      "The Devi Ahilyabai Smarak in Indore will stand as a national symbol of women's leadership, dharmic governance and cultural pride — I extend full support to this noble initiative.",
    quoteHi:
      "इन्दौर में देवी अहिल्याबाई स्मारक नारी नेतृत्व, धार्मिक शासन और सांस्कृतिक गौरव के राष्ट्रीय प्रतीक के रूप में खड़ा होगा — मैं इस पुनीत पहल को पूर्ण समर्थन देता हूं।",
    badge: "Central Ministerial Support",
  },
  {
    name: "Dr. Mohan Yadav",
    hi: "डॉ. मोहन यादव",
    role: "Chief Minister, Madhya Pradesh",
    roleHi: "मुख्यमंत्री, मध्यप्रदेश",
    quote:
      "The Madhya Pradesh Government has allotted land at Rampur Kothi for the Ahilya Smarak. This project will make Indore a global heritage destination and honour our Lokmata for generations.",
    quoteHi:
      "मध्यप्रदेश सरकार ने अहिल्या स्मारक के लिए रामपुर कोठी पर भूखण्ड प्रदान किया है। यह परियोजना इन्दौर को एक वैश्विक विरासत गंतव्य बनाएगी और हमारी लोकमाता को पीढ़ियों के लिए सम्मानित करेगी।",
    badge: "State Government Support",
  },
  {
    name: "Yogi Adityanath",
    hi: "योगी आदित्यनाथ",
    role: "Chief Minister, Uttar Pradesh",
    roleHi: "मुख्यमंत्री, उत्तर प्रदेश",
    quote:
      "It especially amazes me that a great personality is still remembered 300 years later for her talent, selfless service and dedication to dharma. Her memory lives forever in the hearts of all Indians.",
    quoteHi:
      "माँ अहिल्या के बारे में यह बात मुझे विशेष रूप से चमत्कृत करती है कि एक महान व्यक्तित्व को 300 वर्ष बाद भी उनकी प्रतिभा, निःस्वार्थ सेवा और परमार्थ के लिए सतत स्मरण किया जाता है।",
    badge: "Ministerial Endorsement",
  },
];

const whyNational = [
  {
    n: "01",
    hi: "राष्ट्रीय विरासत",
    en: "National Heritage Initiative",
    body: "Ahilyabai Holkar's legacy transcends Madhya Pradesh — she rebuilt 300+ sacred sites across Kashi, Somnath, Dwarka, Rameshwaram. This is India's memory.",
  },
  {
    n: "02",
    hi: "नारी शक्ति का आदर्श",
    en: "Model of Women's Empowerment",
    body: "First woman to command an all-women army battalion, appoint women administrators and rule with absolute equity for 28 years — a UN SDG 5 model from 1767.",
  },
  {
    n: "03",
    hi: "इन्दौर की पहचान",
    en: "Identity of Indore",
    body: "Indore's global reputation as India's cleanest city is rooted in a culture of civic duty Ahilyabai herself instituted. The Smarak consecrates this connection.",
  },
  {
    n: "04",
    hi: "पर्यटन एवं रोजगार",
    en: "Tourism & Employment Generation",
    body: "Projected 50 lakh+ annual footfall will drive hotel, transport, craft and hospitality sectors — generating 2,000+ direct and 10,000+ indirect employment opportunities.",
  },
  {
    n: "05",
    hi: "राष्ट्रीय शिक्षा नीति",
    en: "Aligned with NEP 2020",
    body: "The integrated research centre and digital archive align fully with National Education Policy 2020's mandate for heritage-based learning and cultural literacy.",
  },
  {
    n: "06",
    hi: "अन्तर्राष्ट्रीय प्रतिष्ठा",
    en: "India's Global Soft Power",
    body: "The memorial joins Sabarmati Ashram, Red Fort and the Statue of Unity as a government-backed cultural landmark that elevates India's civilisational identity globally.",
  },
];

export function NationalSignificance() {
  return (
    <section id="national" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="राष्ट्रीय महत्व एवं नेतृत्व समर्थन" en="National Significance & Leadership Endorsement" />

        {/* Why National — grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyNational.map((w, i) => (
            <Reveal key={w.n} delay={(i % 3) * 0.08}>
              <div className="group relative h-full p-7 bg-background/60 border border-gold/15 hover:border-gold/45 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                     style={{ background: "var(--gradient-radial-gold)" }} />
                <div className="relative">
                  <p className="font-display text-3xl text-gold/50 mb-5">{w.n}</p>
                  <p className="font-hindi text-stone text-xl mb-1">{w.hi}</p>
                  <p className="font-body text-[0.65rem] tracking-royal uppercase text-gold mb-4">{w.en}</p>
                  <p className="font-body text-warm-gray text-sm leading-relaxed">{w.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Leader quotes */}
        <Reveal>
          <div className="flex items-center gap-4 mb-12 justify-center">
            <span className="h-px flex-1 max-w-32 bg-gold/40" />
            <span className="font-body text-[0.7rem] tracking-royal uppercase text-gold">
              Endorsements from National Leadership
            </span>
            <span className="h-px flex-1 max-w-32 bg-gold/40" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={(i % 2) * 0.1}>
              <div className="ornament-frame bg-secondary-bg/60 p-8 h-full flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-hindi text-stone text-xl mb-1">{l.hi}</p>
                    <p className="font-display text-gold-light text-lg italic">{l.name}</p>
                    <p className="font-body text-[0.65rem] tracking-royal uppercase text-warm-gray mt-1">{l.role}</p>
                  </div>
                  <span className="shrink-0 font-body text-[0.55rem] tracking-wider uppercase border border-gold/30 text-gold px-2 py-1 whitespace-nowrap">
                    {l.badge}
                  </span>
                </div>

                <blockquote className="border-l-2 border-gold/50 pl-5 flex-1">
                  <p className="font-hindi text-stone/80 text-sm leading-loose mb-3">
                    "{l.quoteHi}"
                  </p>
                  <p className="font-display italic text-warm-gray text-sm leading-relaxed">
                    "{l.quote}"
                  </p>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Government land allotment callout */}
        <Reveal>
          <div className="mt-14 ornament-frame bg-deep-brown/40 p-8 md:p-12 text-center">
            <p className="font-body text-[0.7rem] tracking-royal uppercase text-gold mb-4">
              Official Government Action
            </p>
            <p className="font-hindi text-stone text-2xl md:text-3xl leading-snug mb-4">
              मध्यप्रदेश सरकार ने रामपुर कोठी, केसर बाग रोड, इन्दौर में भूखण्ड आवंटित किया है।
            </p>
            <p className="font-display italic text-warm-gray text-lg mb-6">
              The Government of Madhya Pradesh has formally allotted land at Rampur Kothi, Kesar Bagh Road —
              the historic former RTO campus adjacent to Lalbagh Palace — for the construction of the Smarak.
            </p>
            <div className="inline-flex items-center gap-3 border border-gold/40 px-6 py-3">
              <span className="w-2 h-2 bg-gold rotate-45" />
              <span className="font-body text-[0.7rem] tracking-royal uppercase text-gold-light">
                Site Area: 7+ Acres · Kesar Bagh Road · Indore 452001
              </span>
              <span className="w-2 h-2 bg-gold rotate-45" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
