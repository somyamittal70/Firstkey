import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Smooth scroll helper ── */
  const handleNav = (label, href) => {
    setActive(label);
    setMenuOpen(false);
    // small delay so mobile menu closes before scroll
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black shadow-2xl shadow-black/50 py-2" : "bg-black py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <button
          onClick={() => handleNav("Home", "#home")}
          className="flex items-center gap-2 flex-shrink-0 focus:outline-none"
          aria-label="Go to top"
        >
          <img
            src="/logo.png"
            alt="First Key Homes"
            className="h-10 sm:h-11 w-auto object-contain"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-[#f9eb04] font-black tracking-wide text-sm sm:text-base"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              FIRST KEY
            </span>
            <span
              className="text-white/50 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-semibold"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              HOMES
            </span>
          </div>
        </button>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.35 }}
              onClick={() => handleNav(link.label, link.href)}
              className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors duration-200 focus:outline-none ${
                active === link.label
                  ? "text-[#f9eb04]"
                  : "text-white/60 hover:text-[#f9eb04]"
              }`}
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {link.label}
              {active === link.label && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#f9eb04] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* ── Desktop CTA + Hamburger ── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Desktop CTA */}
          <button
            onClick={() => handleNav("Contact", "#contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-[#f9eb04] hover:bg-[#f9eb04] text-black font-black text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f9eb04]/30 focus:outline-none"
            style={{
              fontFamily: "'Raleway', sans-serif",
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            }}
          >
            Get in Touch
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[#f9eb04] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-[#f9eb04] rounded-full transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4 opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#f9eb04] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden border-t border-[#f9eb04]/15 bg-black/98 backdrop-blur-md"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.22 }}
                  onClick={() => handleNav(link.label, link.href)}
                  className={`text-left px-3 py-3.5 text-sm font-bold uppercase tracking-widest border-b border-white/5 last:border-b-0 transition-colors duration-150 focus:outline-none flex items-center gap-3 ${
                    active === link.label
                      ? "text-[#f9eb04]"
                      : "text-white/60 hover:text-[#f9eb04]"
                  }`}
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {active === link.label && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f9eb04] flex-shrink-0" />
                  )}
                  {link.label}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <button
                onClick={() => handleNav("Contact", "#contact")}
                className="mt-3 mb-1 text-center bg-[#f9eb04] hover:bg-[#f9eb04] text-black font-black text-xs uppercase tracking-widest px-5 py-3.5 transition-colors duration-200 focus:outline-none"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}