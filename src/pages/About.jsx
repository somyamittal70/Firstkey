import { motion } from "framer-motion";
import { Home, HardHat, Sofa, TreePalm } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const highlights = [
  { icon: Home, label: "Sale & Purchase" },
  { icon: HardHat, label: "Construct" },
  { icon: Sofa, label: "Interior Design" },
  { icon: TreePalm, label: "Villas & Resorts" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT — Images */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative pb-10 sm:pb-8"
          >
            {/* Background accent block */}
            <div className="absolute -top-6 -left-6 w-3/4 h-3/4 bg-[#f9eb04] border border-[#f9eb04] z-0" />

            {/* Main image */}
            <motion.div variants={fadeUp} className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=85"
                alt="Luxury Property"
                className="w-full aspect-[4/3] object-cover shadow-2xl shadow-black/15"
              />
              <div className="absolute inset-3 border border-[#f9eb04] pointer-events-none" />
            </motion.div>

            {/* Floating secondary image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 40 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.65, delay: 0.2 },
                },
              }}
              className="absolute -bottom-2 sm:-bottom-8 right-0 sm:-right-4 w-2/5 z-20 shadow-2xl shadow-black/20"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80"
                alt="Interior Design"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-2 border border-[#f9eb04] pointer-events-none" />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                },
              }}
              className="absolute -top-4 right-0 sm:-right-4 z-30 bg-black text-center px-4 py-4 sm:px-5 sm:py-5 border border-[#f9eb04]"
            >
              <p
                className="text-[#f9eb04] font-black leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                }}
              >
                12+
              </p>
              <p
                className="text-white/60 text-[10px] uppercase tracking-widest mt-1"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Years
                <br />
                Experience
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-10 bg-[#f9eb04]" />
              <span
                className="text-[#f9eb04] text-xs font-black uppercase tracking-[0.3em]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                About First Key Homes
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-black font-black leading-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.7rem, 4vw, 3.2rem)",
              }}
            >
              We Open the Door to{" "}
              <span className="text-[#f9eb04] italic">Your Perfect Home</span>
            </motion.h2>

            {/* Founders */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 bg-black/4 border border-black/8 px-4 py-2 mb-5"
            >
              <svg
                className="w-4 h-4 text-[#f9eb04] shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span
                className="text-black/60 text-[10px] sm:text-xs font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Founded by Balram Sharma &amp; Shradha Gupta
              </span>
            </motion.div>

            {/* Body text */}
            <motion.p
              variants={fadeUp}
              className="text-black/55 leading-relaxed mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
              }}
            >
              At First Key Homes, we believe that finding your dream home is
              more than just a transaction—it's a milestone. With over 5 years
              of dedicated service, we connect discerning clients with
              exceptional properties from the region's most trusted builders.
              Our team combines deep market intelligence with personalized
              service to guide you through every step of your real estate
              journey, ensuring transparency, trust, and total peace of mind.
            </motion.p>
            
            {/* Highlights grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-black/8 px-4 py-3 hover:border-[#f9eb04] hover:bg-[#f9eb04] transition-all duration-200 group cursor-default"
                >
                  <Icon
                    size={18}
                    className="text-[#f9eb04] shrink-0 group-hover:scale-110 transition-transform duration-200"
                  />
                  <span
                    className="text-black/70 text-[11px] sm:text-xs font-bold uppercase tracking-wider group-hover:text-black transition-colors duration-200"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-black hover:bg-[#f9eb04] text-white hover:text-black font-black text-xs uppercase tracking-widest px-6 sm:px-7 py-3 sm:py-4 transition-all duration-250 hover:-translate-y-0.5 group"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  clipPath:
                    "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                }}
              >
                Talk to an Expert
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="https://firstkeyhomes.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-black/20 hover:border-[#f9eb04] text-black/60 hover:text-[#f9eb04] font-bold text-xs uppercase tracking-widest px-6 sm:px-7 py-3 sm:py-4 transition-all duration-200"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Visit Website
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
