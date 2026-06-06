import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Property Sale",
    desc: "List and sell your property at the best market price with our expert negotiation and wide buyer network.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    title: "Property Purchase",
    desc: "Find your perfect villa, resort, or home with our curated listings and personalized advisory.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Construction",
    desc: "End-to-end construction services — from blueprint to delivery, with superior quality and on-time completion.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Interior Design",
    desc: "Transform your space with luxury interiors — modern, classic or contemporary, tailored to your vision.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Villas & Resorts",
    desc: "Exclusive premium villas and resort properties in prime locations — for living, investment or leisure.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Investment Advisory",
    desc: "Data-driven property investment strategies to maximize your returns and build long-term wealth.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#f9eb04]" />
            <span
              className="text-[#f9eb04] text-xs font-black uppercase tracking-[0.3em]"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              What We Offer
            </span>
            <span className="h-px w-10 bg-[#f9eb04]" />
          </div>
          <h2
            className="text-black font-black leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
            }}
          >
            Our{" "}
            <span className="text-[#f9eb04] italic">Premium Services</span>
          </h2>
          <p
            className="text-black/50 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
          >
            From finding your dream property to designing its interiors — we are your one-stop real estate destination.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group bg-white border border-black/6 hover:border-[#f9eb04] overflow-hidden hover:shadow-2xl hover:shadow-[#f9eb04]/20 transition-all duration-400 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Icon chip */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-[#f9eb04] text-[#f9eb04] w-11 h-11 flex items-center justify-center">
                  {s.icon}
                </div>
                {/* Top gold line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#f9eb04] scalex-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </div>

              {/* Body */}
              <div className="p-6">
                <h3
                  className="text-black font-black mb-3 group-hover:text-[#f9eb04] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-black/50 leading-relaxed text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
                >
                  {s.desc}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#f9eb04] text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-black hover:bg-[#f9eb04] text-white hover:text-black font-black text-xs uppercase tracking-widest px-8 py-4 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ fontFamily: "'Raleway', sans-serif", clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            Get a Free Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}