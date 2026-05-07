import { useState, useEffect, useCallback } from "react";
import logo from "@/assets/heritage/trust-logo.jpg";

const navLinks = [
  { href: "#home",      hiLabel: "मुखपृष्ठ",     en: "Home" },
  { href: "#bio",       hiLabel: "परिचय",         en: "About" },
  { href: "#timeline",  hiLabel: "जीवन यात्रा",   en: "Timeline" },
  { href: "#vision",    hiLabel: "दृष्टि",         en: "Vision" },
  { href: "#zones",     hiLabel: "अनुभव क्षेत्र", en: "Zones" },
  { href: "#national",  hiLabel: "राष्ट्रीय महत्व", en: "National" },
  { href: "#patron",    hiLabel: "संदेश",          en: "Message" },
  { href: "#trust",     hiLabel: "न्यास",          en: "Trust" },
  { href: "#donate",    hiLabel: "दान करें",       en: "Donate" },
  { href: "#contact",   hiLabel: "सम्पर्क",        en: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    const sections = navLinks.map((l) => l.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActive(`#${sections[i]}`);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-700
          ${scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-gold/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo + Name */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Go to top"
          >
            <div className="ornament-frame w-10 h-10 overflow-hidden shrink-0">
              <img
                src={logo}
                alt="Devi Ahilyabai Holkar Smarak Pratishthan"
                className="w-full h-full object-cover"
                style={{ filter: "sepia(0.15) contrast(1.05)" }}
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-hindi text-gold-light text-[0.75rem] leading-tight">
                देवी अहिल्याबाई होलकर स्मारक
              </span>
              <span className="font-body text-[0.58rem] tracking-royal uppercase text-warm-gray">
                Indore · Madhya Pradesh
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    relative px-3 py-2 font-body text-[0.7rem] tracking-royal uppercase
                    transition-colors duration-300 focus:outline-none
                    ${active === link.href
                      ? "text-gold-light"
                      : "text-stone/60 hover:text-stone"}
                  `}
                >
                  <span className="font-hindi text-[0.72rem] not-uppercase tracking-normal mr-1 opacity-70">
                    {link.hiLabel}
                  </span>
                  {active === link.href && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-linear-to-r from-transparent via-gold to-transparent" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA button (desktop) */}
          <a
            href="#donate"
            onClick={(e) => { e.preventDefault(); handleNavClick("#donate"); }}
            className="hidden lg:inline-flex btn-royal text-[0.65rem] py-2.5 px-5"
          >
            Contribute Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500
            bg-background/98 backdrop-blur-md border-b border-gold/15
            ${menuOpen ? "max-h-128 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    w-full text-left py-3 border-b border-gold/10 flex items-center justify-between
                    font-body text-[0.78rem] tracking-royal uppercase transition-colors duration-200
                    ${active === link.href ? "text-gold-light" : "text-stone/70"}
                  `}
                >
                  <span>{link.en}</span>
                  <span className="font-hindi text-[0.8rem] not-uppercase tracking-normal text-warm-gray">
                    {link.hiLabel}
                  </span>
                </button>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#donate"
                onClick={(e) => { e.preventDefault(); handleNavClick("#donate"); }}
                className="btn-royal w-full text-center text-[0.7rem]"
              >
                Contribute Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Spacer so content starts below navbar on initial load */}
      <div id="home" className="h-0" />
    </>
  );
}
