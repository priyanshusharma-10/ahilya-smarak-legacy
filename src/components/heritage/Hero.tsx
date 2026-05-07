import heroImg from "@/assets/heritage/hero-monument.jpg";
import { Particles } from "./Particles";
import { GoldArch } from "./GoldArch";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with slow pan */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Devi Ahilyabai Holkar Smarak heritage memorial at dusk"
          className="w-full h-full object-cover animate-slow-pan"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0" style={{ background: "var(--gradient-cinematic)" }} />
        <div className="absolute inset-0 vignette" />
      </div>

      <Particles />

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10 pt-10 md:pt-12 px-6 flex justify-center"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-gold/50" />
          <span className="font-body text-[0.68rem] tracking-royal uppercase text-gold-light/80">
            Indore · Madhya Pradesh · 2025
          </span>
          <span className="h-px w-8 bg-gold/50" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 md:pt-40 pb-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-hindi text-gold-light/90 text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            देवी अहिल्याबाई होलकर स्मारक
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-hindi font-light text-stone text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight mb-8 text-balance"
        >
          जहाँ इतिहास<br />
          <span className="gradient-gold-text font-normal">फिर जीवित होगा</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="font-display italic text-warm-gray text-2xl md:text-3xl lg:text-4xl font-light mb-10"
        >
          Where History Lives Again
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="font-body text-stone/70 max-w-2xl text-base md:text-lg leading-relaxed mb-12 text-balance"
        >
          A living memorial to Lokmata Devi Ahilyabai Holkar — three centuries of dharma, governance and grace, reimagined as an immersive cultural ecosystem in the heart of Indore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#vision" className="btn-royal">Explore the Vision</a>
          <a href="#zones" className="btn-ghost-royal">32 Experience Zones</a>
          <a href="#csr" className="btn-ghost-royal">Become a Patron</a>
        </motion.div>
      </div>

      {/* Bottom arch + scroll hint */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-6">
        <GoldArch className="w-full max-w-3xl h-20 opacity-70" />
        <div className="mt-2 flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="font-body text-[0.6rem] tracking-royal text-gold-light/70 uppercase">Scroll</span>
          <span className="block w-px h-8 bg-gradient-to-b from-gold-light/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}
