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

  const handleNav = (label, href) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black shadow-2xl shadow-black/40 py-3"
          : "bg-black py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 group"
          onClick={() => handleNav("Home", "#home")}
        >
          <img
            src="/logo.png"
            alt="First Key Homes"
            className="h-12 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-[#f9eb04] font-black text-lg leading-none tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              FIRST KEY
            </p>
            <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-semibold">
              Homes
            </p>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
              onClick={() => handleNav(link.label, link.href)}
              className={`relative px-4 py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${
                active === link.label
                  ? "text-[#f9eb04]"
                  : "text-white/70 hover:text-[#f9eb04]"
              }`}
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {link.label}
              {active === link.label && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-yellow-400 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNav("Contact", "#contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-[#f9eb04] hover:bg-yellow-300 text-black font-bold text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/30"
            style={{ fontFamily: "'Raleway', sans-serif", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            Get in Touch
          </motion.a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-yellow-400 transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <span className={`block h-0.5 bg-yellow-400 transition-all duration-300 ${menuOpen ? "opacity-0 w-4" : "w-4"}`} />
            <span className={`block h-0.5 bg-yellow-400 transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black border-t border-yellow-400/20 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.label, link.href)}
                  className={`text-left px-4 py-3 text-sm font-bold uppercase tracking-widest border-b border-white/5 transition-colors duration-200 ${
                    active === link.label
                      ? "text-yellow-400"
                      : "text-white/70 hover:text-yellow-400"
                  }`}
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={() => handleNav("Contact", "#contact")}
                className="mt-3 text-center bg-yellow-400 text-black font-bold text-xs uppercase tracking-widest px-5 py-3 hover:bg-yellow-300 transition-colors duration-200"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}