import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80",
    tag: "Luxury Villas",
    heading: "Your Dream",
    accent: "Awaits You",
    sub: "Exclusive villas, resorts & premium properties curated just for you.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1800&q=80",
    tag: "Premium Resorts",
    heading: "Invest in",
    accent: "Luxury Living",
    sub: "World-class resort properties with exceptional returns and lifestyle.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80",
    tag: "Interior Design",
    heading: "Crafted with",
    accent: "Perfection",
    sub: "From construction to interiors — we transform spaces into masterpieces.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1800&q=80",
    tag: "Smart Investment",
    heading: "Build Wealth",
    accent: "Through Property",
    sub: "Trusted by hundreds of families — sale, purchase & advisory services.",
  },
];

const INTERVAL = 5500;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 500);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-black" style={{ height: "100svh", minHeight: "600px" }}>

      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.40)" }}
          />
          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}

      {/* Gold decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f9eb04] via-[#f9eb04] to-[#f9eb04] z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 w-full pt-20 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-5"
              >
                <span className="w-8 h-0.5 bg-[#f9eb04]" />
                <span
                  className="text-[#f9eb04] text-xs font-black uppercase tracking-[0.3em]"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {slides[current].tag}
                </span>
                <span className="w-8 h-0.5 bg-[#f9eb04]" />
              </motion.div>

              {/* Heading */}
              <h1
                className="text-white font-black leading-[1.05] mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.4rem, 6vw, 5rem)",
                }}
              >
                {slides[current].heading}
                <br />
                <span className="text-[#f9eb04] italic">{slides[current].accent}</span>
              </h1>

              {/* Sub */}
              <p
                className="text-white/65 mb-7 max-w-lg leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                }}
              >
                {slides[current].sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#f9eb04] hover:bg-[#f9eb04] text-black font-black text-xs uppercase tracking-widest px-7 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#f9eb04]"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  Book a Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 bg-transparent border border-white/30 hover:border-[#f9eb04] text-white hover:text-[#f9eb04] font-bold text-xs uppercase tracking-widest px-7 py-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  View Properties
                </a>
              </div>

              {/* Stats row — inline with content, properly aligned */}
              <div className="flex gap-8 sm:gap-12 pt-2 border-t border-white/10">
                {[
                  { val: "500+", label: "Properties" },
                  { val: "12+", label: "Years Experience" },
                  { val: "98%", label: "Client Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span
                      className="text-[#f9eb04] font-black leading-none"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                    >
                      {s.val}
                    </span>
                    <span
                      className="text-white/40 text-xs uppercase tracking-widest mt-1"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 sm:left-6 bottom-1/2 translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 border border-white/20 hover:border-[#f9eb04] bg-black/30 hover:bg-[#f9eb04] text-white/60 hover:text-[#f9eb04] flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 sm:right-6 bottom-1/2 translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 border border-white/20 hover:border-[#f9eb04] bg-black/30 hover:bg-[#f9eb04] text-white/60 hover:text-[#f9eb04] flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 border-none cursor-pointer ${
              i === current
                ? "w-7 h-2 bg-[#f9eb04]"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div key={current} className="absolute bottom-0 left-0 h-0.5 z-20 bg-gradient-to-r from-[#f9eb04] to-[#f9eb04] animate-[progress_5.5s_linear_forwards]" style={{ animation: `heroProgress ${INTERVAL}ms linear forwards` }}>
        <style>{`@keyframes heroProgress { from { width: 0% } to { width: 100% } }`}</style>
      </div>
    </section>
  );
}