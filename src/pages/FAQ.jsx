import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does First Key Homes offer?",
    a: "First Key Homes offers a complete range of real estate services including property sale & purchase, end-to-end construction, luxury interior design, villa & resort properties, and investment advisory — all under one roof.",
  },
  {
    q: "Where is your office located?",
    a: "We are located at Shop No.16, Second Floor, Opus Mall, Sidharth Vihar. You can also reach us via phone or email for a virtual consultation.",
  },
  {
    q: "Do you deal in resorts and luxury villas?",
    a: "Yes! We specialize in premium villas and resort properties across prime locations in NCR, Haridwar, and other key markets. Our team helps you find the perfect property for living, leisure or investment.",
  },
  {
    q: "How do I get started with buying a property?",
    a: "Simply contact us via phone, email, or fill our contact form. Our expert advisors will schedule a free consultation, understand your requirements, budget and preferences, and present the best matching properties.",
  },
  {
    q: "Can First Key Homes help with home interiors?",
    a: "Absolutely! Our interior design team creates stunning, functional spaces — from modern minimalist to classic luxury. We handle everything from design planning to final execution.",
  },
  {
    q: "Do you offer property investment advisory?",
    a: "Yes, we provide data-driven investment advisory to help you choose properties with the highest ROI potential. Whether you're a first-time investor or a seasoned buyer, our team will guide you strategically.",
  },
  {
    q: "What areas do you serve?",
    a: "We primarily serve NCR (Noida, Greater Noida, Ghaziabad, Delhi), but also deal in properties in Haridwar, Meerut, and other growing real estate markets across North India.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-gray-50 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20 items-start">

          {/* LEFT — Header + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#f9eb04]" />
              <span
                className="text-[#f9eb04] text-xs font-black uppercase tracking-[0.3em]"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                FAQ
              </span>
            </div>

            <h2
              className="text-black font-black leading-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
              }}
            >
              Frequently Asked{" "}
              <span className="text-[#f9eb04] italic block">Questions</span>
            </h2>

            <p
              className="text-black/50 leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}
            >
              Can't find the answer you're looking for? Reach out to our team — we're always happy to help.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { val: "500+", label: "Happy Clients" },
                { val: "12+", label: "Years Experience" },
                { val: "98%", label: "Satisfaction" },
                { val: "3", label: "Contact Numbers" },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-black/8 px-4 py-4 text-center">
                  <p className="text-[#f9eb04] font-black text-2xl leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {s.val}
                  </p>
                  <p className="text-black/40 text-xs uppercase tracking-wider mt-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black hover:bg-[#f9eb04] text-white hover:text-black font-black text-xs uppercase tracking-widest px-7 py-4 transition-all duration-250 hover:-translate-y-0.5"
              style={{ fontFamily: "'Raleway', sans-serif", clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
            >
              Ask a Question
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>

          {/* RIGHT — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-col gap-3"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`border transition-all duration-200 ${
                  open === i
                    ? "border-[#f9eb04]/50 bg-white shadow-lg shadow-[#f9eb04]/5"
                    : "border-black/8 bg-white hover:border-black/20"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                >
                  <span
                    className={`font-bold text-sm leading-snug transition-colors duration-200 ${open === i ? "text-black" : "text-black/70 group-hover:text-black"}`}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <span className="text-[#f9eb04] mr-2 font-black">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                      open === i ? "bg-[#f9eb04] text-black rotate-45" : "bg-black/6 text-black/50 group-hover:bg-black/10"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 border-t border-[#f9eb04]/20">
                        <p
                          className="text-black/55 leading-relaxed pt-4"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}