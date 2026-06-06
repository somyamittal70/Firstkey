import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Top yellow line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#f9eb04] via-[#f9eb04] to-[#f9eb04]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <img src="/logo.png" alt="First Key Homes" className="h-16 w-auto object-contain mb-4" />
            <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Your trusted partner in finding the perfect home. Sale, purchase, construction & interior — we do it all.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[f9eb04] hover:bg-[f9eb04] transition-all duration-200 group">
                <svg className="w-4 h-4 text-white/50 group-hover:text-[f9eb04] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[f9eb04] hover:bg-[f9eb04]/10 transition-all duration-200 group">
                <svg className="w-4 h-4 text-white/50 group-hover:text-[f9eb04] tranition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919026611045" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[f9eb04] hover:bg-[f9eb04]/10 transition-all duration-200 group">
                <svg className="w-4 h-4 text-white/50 group-hover:text-[f9eb04] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[f9eb04] hover:bg-[f9eb04]/10 transition-all duration-200 group">
                <svg className="w-4 h-4 text-white/50 group-hover:text-[f9eb04] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-[f9eb04] font-black text-xs uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-[f9eb04] text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:bg-[f9eb04] group-hover:w-6 transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-[f9eb04] font-black text-xs uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {["Property Sale", "Property Purchase", "Construction", "Interior Design", "Villa & Resort", "Investment Advisory"].map((item) => (
                <li key={item}>
                  <span className="text-white/50 text-sm flex items-center gap-2" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[f9eb04]/50 flex-shrink-0" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#f9eb04] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div className="text-white/50 text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  <p>9026611045</p>
                  <p>7500889451</p>
                  <p>7428735699</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#f9eb04] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-white/50 text-sm" style={{ fontFamily: "'Raleway', sans-serif" }}>hello@firstkeyhomes.in</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#f9eb04] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Shop No.16, Second Floor,<br />Opus Mall, Sidharth Vihar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#f9eb04] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                </svg>
                <a href="https://firstkeyhomes.in" className="text-white/50 hover:text-[#f9eb04] text-sm transition-colors duration-200" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  Firstkeyhomes.in
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Raleway', sans-serif" }}>
            © {year} First Key Homes. All rights reserved.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Developed By Debox Technology
          </p>
        </div>
      </div>
    </footer>
  );
}