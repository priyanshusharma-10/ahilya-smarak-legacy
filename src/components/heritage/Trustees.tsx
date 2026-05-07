import sumitra from "@/assets/trustees/sumitra-mahajan.jpg";
import ashok from "@/assets/trustees/ashok-daga.jpg";
import shankar from "@/assets/trustees/shankar-lalwani.jpg";
import pushya from "@/assets/trustees/pushyamitra-bhargav.jpg";
import vinod from "@/assets/trustees/vinod-agrawal.jpg";
import purshottam from "@/assets/trustees/purshottam-pasari.jpg";
import milind from "@/assets/trustees/milind-mahajan.jpg";
import sudhir from "@/assets/trustees/sudhir-dedge.jpg";
import shivam from "@/assets/trustees/shivam-verma.jpg";
import sudam from "@/assets/trustees/sudam-khade.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const trustees = [
  { img: sumitra, name: "Smt. Sumitra Mahajan", hi: "सुमित्रा महाजन", role: "President", sub: "Padma Bhushan · Former Speaker, Lok Sabha", qual: "M.A., LL.B · 40 years", years: "3 yrs" },
  { img: ashok, name: "Shri Ashok Kumar Daga", hi: "अशोक कुमार डागा", role: "Secretary", sub: "Businessman · Philanthropist", qual: "M.Com, LL.B · 25 years", years: "3 yrs" },
  { img: vinod, name: "Shri Vinod Agrawal", hi: "विनोद कुमार अग्रवाल", role: "Member", sub: "Industrialist · Preeminent Philanthropist of M.P.", qual: "Graduate · 45 years", years: "3 yrs" },
  { img: purshottam, name: "Shri Purshottam Pasari", hi: "पुरुषोत्तमदास पसारी", role: "Treasurer", sub: "Chairman, Shri Vaishnav Group", qual: "M.Com, LL.B · 20 years", years: "3 yrs" },
  { img: shankar, name: "Shri Shankar Lalwani", hi: "शंकर लालवानी", role: "Member", sub: "Member of Parliament, Indore", qual: "Engineer · 30 years", years: "3 yrs" },
  { img: pushya, name: "Shri Pushyamitra Bhargav", hi: "पुष्यमित्र भार्गव", role: "Member", sub: "Mayor, Indore · Social Activist", qual: "M.Phil (Law), LL.M · 03 years", years: "3 yrs" },
  { img: milind, name: "Shri Milind Mahajan", hi: "मिलिंद महाजन", role: "Member", sub: "Businessman · Philanthropist", qual: "Engineer · 25 years", years: "3 yrs" },
  { img: sudhir, name: "Shri Sudhir Dedge", hi: "सुधीर देड़गे", role: "Member", sub: "Ex-Corporator, IMC · Philanthropist", qual: "Graduate · 20 years", years: "3 yrs" },
  { img: shivam, name: "Shri Shivam Verma", hi: "शिवम वर्मा", role: "Member", sub: "Collector, Indore", qual: "B.Tech Mechanical · 01 year", years: "1 yr" },
  { img: sudam, name: "Dr. Sudam Khade", hi: "डॉ. सुदाम खड़े", role: "Member", sub: "Indore Divisional Commissioner", qual: "MBBS, M.D. Medicine · 01 year", years: "1 yr" },
];

export function Trustees() {
  return (
    <section id="trust" className="relative py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel hi="अहिल्या स्मारक प्रतिष्ठान" en="The Guardians of a Timeless Vision" />
        <Reveal>
          <p className="text-center max-w-2xl mx-auto font-body text-warm-gray leading-loose mb-16">
            Devi Ahilyabai Holkar Smarak Pratishthan — a registered public trust under sections 12A and 80G of the Income Tax Act, governed by India's most respected institutional voices.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {trustees.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.08}>
              <div className="group ornament-frame bg-secondary-bg/60 p-6 h-full">
                <div className="aspect-[4/5] mb-5 overflow-hidden bg-deep-brown">
                  <img src={t.img} alt={t.name} loading="lazy"
                       className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                       style={{ filter: "sepia(0.15) contrast(1.05)" }} />
                </div>
                <p className="font-hindi text-gold-light text-base mb-1">{t.hi}</p>
                <p className="font-display text-stone text-lg leading-tight mb-2">{t.name}</p>
                <p className="font-body text-[0.65rem] tracking-royal uppercase text-gold mb-3">{t.role}</p>
                <p className="font-body text-warm-gray text-xs leading-relaxed mb-2">{t.sub}</p>
                <div className="pt-3 mt-3 border-t border-gold/15">
                  <p className="font-body text-[0.7rem] text-warm-gray">{t.qual}</p>
                  <p className="font-body text-[0.65rem] tracking-wider uppercase text-gold/70 mt-1">With trust · {t.years}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
