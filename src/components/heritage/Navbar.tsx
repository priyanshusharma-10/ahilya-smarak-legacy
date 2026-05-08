import { useState, useEffect, useCallback } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/heritage/trust-logo.jpg";

const navLinks = [
  { to: "/",           hiLabel: "मुखपृष्ठ",      en: "Home" },
  { to: "/about",      hiLabel: "परिचय",          en: "About" },
  { to: "/smarak",     hiLabel: "स्मारक",          en: "Smarak" },
  { to: "/experience", hiLabel: "अनुभव",           en: "Experience" },
  { to: "/national",   hiLabel: "राष्ट्रीय",        en: "National" },
  { to: "/trust",      hiLabel: "न्यास",            en: "Trust" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
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
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Go to home"
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
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`
                    relative px-3 py-2 font-body text-[0.7rem] tracking-royal uppercase
                    transition-colors duration-300 focus:outline-none inline-flex items-center
                    ${isActive ? "text-gold-light" : "text-stone/60 hover:text-stone"}
                  `}
                >
                  <span className="font-hindi text-[0.72rem] not-uppercase tracking-normal mr-1 opacity-70">
                    {link.hiLabel}
                  </span>
                  {link.en}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-linear-to-r from-transparent via-gold to-transparent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button (desktop) */}
        <Link
          to="/trust"
          className="hidden lg:inline-flex btn-royal text-[0.65rem] py-2.5 px-5"
        >
          Contribute Now
        </Link>

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
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`
                    w-full flex py-3 border-b border-gold/10 items-center justify-between
                    font-body text-[0.78rem] tracking-royal uppercase transition-colors duration-200
                    ${isActive ? "text-gold-light" : "text-stone/70"}
                  `}
                >
                  <span>{link.en}</span>
                  <span className="font-hindi text-[0.8rem] not-uppercase tracking-normal text-warm-gray">
                    {link.hiLabel}
                  </span>
                </Link>
              </li>
            );
          })}
          <li className="pt-4">
            <Link
              to="/trust"
              className="btn-royal w-full text-center text-[0.7rem] block"
            >
              Contribute Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
