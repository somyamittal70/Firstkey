import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone Numbers",
    lines: ["9026611045", "7500889451", "7428735699"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email Address",
    lines: ["hello@firstkeyhomes.in"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Office Address",
    lines: ["Shop No.16, Second Floor", "Opus Mall, Sidharth Vihar"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    label: "Website",
    lines: ["Firstkeyhomes.in"],
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#f9eb04]" />
            <span
              className="text-[#f9eb04] text-xs font-black uppercase tracking-[0.3em]"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Get In Touch
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
            Let's Find Your{" "}
            <span className="text-[#f9eb04] italic">Dream Property</span>
          </h2>
          <p
            className="text-black/50 max-w-lg mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}
          >
            Fill in your details and our expert team will reach out within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16 items-start">

          {/* LEFT — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info Cards */}
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-gray-50 border border-black/6 px-5 py-5 hover:border-[#f9eb04]/40 hover:bg-[#f9eb04]/2 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-black group-hover:bg-[#f9eb04] text-[#f9eb04] group-hover:text-black flex items-center justify-center flex-shrink-0 transition-all duration-200">
                  {info.icon}
                </div>
                <div>
                  <p
                    className="text-black/40 text-xs font-black uppercase tracking-widest mb-1"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {info.label}
                  </p>
                  {info.lines.map((line) => (
                    <p
                      key={line}
                      className="text-black font-semibold text-sm"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919026611045"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bc59] text-white font-black text-xs uppercase tracking-widest px-6 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-400/30 mt-2"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-gray-50 border border-black/6 p-7 sm:p-10"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center gap-4"
              >
                <div className="w-14 h-14 bg-[#f9eb04] flex items-center justify-center">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-black font-black text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Message Sent!
                </h3>
                <p className="text-black/50 text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Our team will reach out to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-black/50 text-xs font-black uppercase tracking-widest mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-white border border-black/12 px-4 py-3 text-black text-sm placeholder-black/30 focus:border-[#f9eb04] focus:outline-none transition-colors duration-200"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-black/50 text-xs font-black uppercase tracking-widest mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full bg-white border border-black/12 px-4 py-3 text-black text-sm placeholder-black/30 focus:border-[#f9eb04] focus:outline-none transition-colors duration-200"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black/50 text-xs font-black uppercase tracking-widest mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white border border-black/12 px-4 py-3 text-black text-sm placeholder-black/30 focus:border-[#f9eb04] focus:outline-none transition-colors duration-200"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-black/50 text-xs font-black uppercase tracking-widest mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/12 px-4 py-3 text-black text-sm focus:border-[#f9eb04] focus:outline-none transition-colors duration-200"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <option value="">Select a Service</option>
                    <option>Property Sale</option>
                    <option>Property Purchase</option>
                    <option>Construction</option>
                    <option>Interior Design</option>
                    <option>Villas & Resorts</option>
                    <option>Investment Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black/50 text-xs font-black uppercase tracking-widest mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full bg-white border border-black/12 px-4 py-3 text-black text-sm placeholder-black/30 focus:border-[#f9eb04] focus:outline-none transition-colors duration-200 resize-none"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-[#f9eb04] text-white hover:text-black font-black text-xs uppercase tracking-widest py-4 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-2 group"
                  style={{ fontFamily: "'Raleway', sans-serif", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
                >
                  Send Enquiry
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}