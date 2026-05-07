import sumitra from "@/assets/trustees/sumitra-mahajan.jpg";
import logo from "@/assets/heritage/trust-logo.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function PatronMessage() {
  return (
    <section id="patron" className="relative py-28 md:py-40 bg-secondary-bg/40 border-y border-gold/10 overflow-hidden">
      {/* Parchment grain */}
      <div className="absolute inset-0 opacity-20 heritage-grain pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionLabel hi="अध्यक्षा का संदेश" en="Patron's Message" />

        {/* Letterhead card */}
        <Reveal>
          <div className="ornament-frame bg-background/70 overflow-hidden">
            {/* Letter top bar */}
            <div className="flex items-center justify-between border-b border-gold/25 px-8 py-5 bg-deep-brown/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 ornament-frame overflow-hidden shrink-0">
                  <img src={logo} alt="Trust Logo"
                       className="w-full h-full object-cover" style={{ filter: "sepia(0.1)" }} />
                </div>
                <div>
                  <p className="font-hindi text-gold-light text-sm leading-tight">
                    देवी अहिल्याबाई होलकर स्मारक प्रतिष्ठान, इन्दौर
                  </p>
                  <p className="font-body text-[0.6rem] tracking-royal uppercase text-warm-gray">
                    Devi Ahilyabai Holkar Smarak Pratishthan, Indore
                  </p>
                </div>
              </div>
              <p className="font-body text-[0.65rem] text-warm-gray tracking-wider hidden sm:block">
                रा.प्र.क्र. 004/बी-113/2022-23
              </p>
            </div>

            {/* Two-column layout: portrait left, letter right */}
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Portrait column */}
              <div className="lg:col-span-4 border-r border-gold/15 p-8 flex flex-col items-center text-center gap-6">
                <div className="ornament-frame w-48 overflow-hidden bg-deep-brown/40">
                  <img src={sumitra} alt="Smt. Sumitra Mahajan"
                       className="w-full h-auto object-cover"
                       style={{ filter: "sepia(0.15) contrast(1.05)" }} />
                </div>
                <div>
                  <p className="font-hindi text-gold-light text-xl mb-1">सुमित्रा महाजन</p>
                  <p className="font-display italic text-stone text-base mb-3">Smt. Sumitra Mahajan</p>
                  <div className="gold-divider mb-3" />
                  <p className="font-body text-[0.65rem] tracking-royal uppercase text-gold mb-1">Adhyaksh · President</p>
                  <p className="font-body text-warm-gray text-xs leading-relaxed">
                    Padma Bhushan<br />
                    Former Speaker, Lok Sabha<br />
                    (8 consecutive terms, Indore)
                  </p>
                </div>

                {/* Trust sidebar info */}
                <div className="w-full border-t border-gold/15 pt-4 space-y-2 text-left">
                  {[
                    { label: "न्यासीगण", val: "Trustees (Board)" },
                    { label: "शंकर लालवानी", val: "MP, Indore" },
                    { label: "पुष्यमित्र भार्गव", val: "Mayor, Indore" },
                    { label: "विनोद कुमार अग्रवाल", val: "Industrialist" },
                    { label: "पुरुषोत्तमदास पसारी", val: "Kulapati, Vaishnav Vidyapeeth" },
                    { label: "मिलिंद महाजन", val: "Philanthropist" },
                    { label: "सुधीर देड़गे", val: "Ex-Corporator, IMC" },
                    { label: "दीपक सिंह", val: "Div. Commissioner, Indore" },
                    { label: "आशीष सिंह", val: "Collector, Indore" },
                  ].map((r) => (
                    <div key={r.label}>
                      <p className="font-hindi text-stone text-xs">{r.label}</p>
                      <p className="font-body text-warm-gray text-[0.6rem]">{r.val}</p>
                    </div>
                  ))}
                </div>

                <div className="w-full border-t border-gold/15 pt-4">
                  <p className="font-body text-[0.6rem] text-warm-gray leading-relaxed">
                    प्रतिष्ठान को दिया गया दान आयकर की धारा 80-जी के अंतर्गत कर मुक्त है।<br />
                    <span className="text-gold-light">PAN: AAETD4639A</span>
                  </p>
                </div>
              </div>

              {/* Letter body */}
              <div className="lg:col-span-8 p-8 md:p-12 space-y-6">
                <Reveal delay={0.1}>
                  <p className="font-hindi text-stone/70 text-sm italic border-b border-gold/15 pb-4">
                    सम्माननीय, सादर नमस्कार।
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <p className="font-hindi text-stone/85 text-base leading-loose">
                    लोकमाता अहिल्याबाई होलकर का नाम हम सबके लिए पूजनीय है। उनकी प्रतिभा, शासन
                    प्रणाली, न्यायप्रियता और धर्म में अगाध श्रद्धा के कई संस्मरण हम सुनते आए हैं।
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <blockquote className="border-l-2 border-gold pl-6 py-3 bg-deep-brown/20">
                    <p className="font-hindi text-stone text-base leading-loose">
                      "माँ अहिल्या के बारे में यह बात मुझे विशेष रूप से चमत्कृत करती है कि एक महान व्यक्तित्व
                      को 300 वर्ष बाद भी उनकी प्रतिभा, निःस्वार्थ सेवा और परमार्थ के लिए सतत स्मरण किया
                      जाता है। पूरे देश के जनमानस में उनकी भाव-स्मृति बनी रहती है।"
                    </p>
                    <footer className="mt-3 font-body text-[0.65rem] tracking-wider uppercase text-gold">
                      — Yogi Adityanath, Chief Minister, Uttar Pradesh
                      <span className="block text-warm-gray mt-0.5">At the Devi Ahilya Puraskar Samaroh, Indore</span>
                    </footer>
                  </blockquote>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="font-hindi text-stone/85 text-base leading-loose">
                    हम इन्दौरवासी भाग्यशाली हैं कि हमें देवी अहिल्याबाई होलकर जैसी विभूति के बारे में
                    अधिक गहराई से जानने के बहुतेरे अवसर मिलते रहते हैं। इन्दौरवासी आज भी उनकी पुण्याई को
                    याद करते हैं और मानते हैं कि इस शहर के विकास, प्रगति और सफलता में अहिल्याबाई के दिव्य
                    आशीर्वाद की गंध हमेशा समाई रहती है।
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <p className="font-hindi text-stone/85 text-base leading-loose">
                    संचार क्रान्ति ने नई पीढ़ी की सोच और समझ को एक अलग मार्ग दिया है। वर्तमान समय की
                    पाठ्य पुस्तकें भी समग्र गौरवशाली अतीत से परिचित नहीं करवा पाती हैं। ऐसे में सम्पूर्ण
                    देश के धर्मस्थलों पर अपने पावन कर्म से इतिहास रचने वाली माँ अहिल्या की यादों को
                    सुरक्षित, संरक्षित रखने एवं भावी पीढ़ी को उनकी ही भाषा (दृश्य-श्रव्य) में अवगत
                    करवाने के प्रयोजन से देवी अहिल्याबाई होलकर स्मारक के भव्य निर्माण का संकल्प लिया गया है।
                  </p>
                </Reveal>

                <Reveal delay={0.35}>
                  <p className="font-hindi text-stone/85 text-base leading-loose">
                    विशाल और दुर्लभ जानकारियों से समृद्ध इस स्मारक के लिए मध्य-प्रदेश सरकार ने भूखण्ड
                    प्रदान कर दिया है। इसके निर्माण को मूर्त रूप देने के लिए वित्तीय प्रबंधन आवश्यक है।
                    मेरी भावना है कि इसके लिए इन्दौर के जन-जन और माँ अहिल्या बाई के देश-विदेश में बसे
                    सभी अनुयाइयों का सहयोग मिलना चाहिए।
                  </p>
                </Reveal>

                <Reveal delay={0.4}>
                  <p className="font-hindi text-stone/85 text-base leading-loose">
                    ईश्वर ने हमेशा पवित्र जन-संकल्पों को सिद्धि दी है। मुझे पूर्ण विश्वास है कि आप अहिल्या
                    स्मारक के स्वप्न की पूर्णाहुति के लिए भी साथ खड़े रहेंगे।
                  </p>
                </Reveal>

                {/* Signature */}
                <Reveal delay={0.45}>
                  <div className="border-t border-gold/20 pt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                      <p className="font-hindi text-stone/60 text-xs mb-3">
                        पुण्यश्लोक माँ अहिल्याबाई के श्रीचरणों में नमन सहित
                      </p>
                      <p className="font-display italic text-gold-light text-2xl">Sumitra Mahajan</p>
                      <p className="font-body text-[0.65rem] tracking-royal uppercase text-warm-gray mt-1">
                        Adhyaksh · Devi Ahilyabai Holkar Smarak Pratishthan
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-body text-[0.65rem] text-warm-gray">
                        अहिल्या स्मृति सदन<br />
                        21 प्रिंस यशवंत रोड, इंदौर 452001
                      </p>
                      <p className="font-body text-[0.65rem] text-gold-light">
                        +91 98260 21421 · +91 94250 65111
                      </p>
                      <p className="font-body text-[0.6rem] text-warm-gray">
                        ahilyabaiholkarsmaraktrust@gmail.com
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
