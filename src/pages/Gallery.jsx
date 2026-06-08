import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ZoomIn, X } from "lucide-react";

const categories = ["All", "Villas", "Resorts", "Interiors", "Construction"];

const gallery = [
  { id: 1, cat: "Villas",       image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80", title: "Ivory Villa",        loc: "Noida Extension",     wide: true  },
  { id: 2, cat: "Resorts",      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&q=80", title: "Azure Resort",       loc: "Greater Noida",       wide: false },
  { id: 3, cat: "Interiors",    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80", title: "Luxe Living Room",   loc: "Indirapuram",         wide: false },
  { id: 4, cat: "Construction", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80", title: "The Summit Project", loc: "Crossings Republik",  wide: false },
  { id: 6, cat: "Interiors",    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80", title: "Golden Suite",       loc: "Sector 62, Noida",    wide: true  },
  { id: 7, cat: "Resorts",      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=700&q=80", title: "Palm Resort Villas", loc: "Haridwar",            wide: false },
  { id: 8, cat: "Construction", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=700&q=80", title: "Heritage Heights",   loc: "Meerut Road",         wide: false },
];

function GalleryCard({ item, onClick, aspectClass }) {
  return (
    <div
      className="group relative overflow-hidden cursor-pointer w-full h-full"
      onClick={() => onClick(item)}
    >
      <div className={`relative overflow-hidden w-full ${aspectClass}`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f9eb04] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-[#f9eb04] text-[10px] font-black uppercase tracking-[0.25em] mb-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
            {item.cat}
          </span>
          <h3 className="text-white font-bold text-base sm:text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {item.title}
          </h3>
          <p className="text-white/60 text-xs mt-1 flex items-center gap-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
            <MapPin size={11} className="text-[#f9eb04]" />
            {item.loc}
          </p>
        </div>

        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 bg-[#f9eb04] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
          <ZoomIn size={15} className="text-black" />
        </div>
      </div>
    </div>
  );
}

// Split filtered items into rows: wide card = full row, 2 normals = one row, 3 normals = one row
function buildRows(items) {
  const rows = [];
  let i = 0;
  while (i < items.length) {
    if (items[i].wide) {
      rows.push({ type: "wide", items: [items[i]] });
      i++;
    } else {
      // collect up to 3 consecutive normals
      const normals = [];
      while (i < items.length && !items[i].wide && normals.length < 3) {
        normals.push(items[i]);
        i++;
      }
      rows.push({ type: "normal", items: normals });
    }
  }
  return rows;
}

export default function GallerySection() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? gallery : gallery.filter((g) => g.cat === active);
  const rows = buildRows(filtered);

  return (
    <section id="gallery" className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 sm:w-10 bg-[#f9eb04]"/>
            <span className="text-[#f9eb04] text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Our Portfolio
            </span>
            <span className="h-px w-8 sm:w-10 bg-[#f9eb04]" />
          </div>
          <h2
            className="text-black font-black leading-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)" }}
          >
            Property <span className="text-[#f9eb04] italic">Gallery</span>
          </h2>
          <p className="text-black/50 max-w-lg mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}>
            Explore our finest properties — villas, resorts, interiors and construction projects.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                active === cat
                  ? "bg-black text-[#f9eb04] border-black"
                  : "bg-transparent text-black/50 border-black/15 hover:border-black/40 hover:text-black"
              }`}
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            {rows.map((row, rowIdx) => {
              if (row.type === "wide") {
                return (
                  <motion.div
                    key={`wide-${row.items[0].id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: rowIdx * 0.06 }}
                    className="w-full"
                  >
                    <GalleryCard item={row.items[0]} onClick={setLightbox} aspectClass="aspect-[16/7] sm:aspect-[21/8]" />
                  </motion.div>
                );
              }

              // Normal row: 1, 2, or 3 cards — equal width columns
              const colClass =
                row.items.length === 1 ? "grid-cols-2" :
                row.items.length === 2 ? "grid-cols-2" :
                "grid-cols-1 sm:grid-cols-3";

              return (
                <motion.div
                  key={`row-${rowIdx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: rowIdx * 0.06 }}
                  className={`grid ${colClass} gap-3 sm:gap-4`}
                >
                  {row.items.map((item) => (
                    <GalleryCard key={item.id} item={item} onClick={setLightbox} aspectClass="aspect-[4/3]" />
                  ))}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.title} className="w-full max-h-[75vh] sm:max-h-[80vh] object-contain" />
              <div className="bg-black/80 border-t border-[#f9eb04]/20 px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                <div>
                  <p className="text-[#f9eb04] text-[10px] font-black uppercase tracking-widest" style={{ fontFamily: "'Raleway', sans-serif" }}>{lightbox.cat}</p>
                  <p className="text-white font-bold text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{lightbox.title}</p>
                </div>
                <p className="text-white/50 text-xs flex items-center gap-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  <MapPin size={11} className="text-[#f9eb04]" />{lightbox.loc}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-9 sm:h-9 bg-[#f9eb04] text-black flex items-center justify-center hover:bg-[#f9eb04] transition-colors"
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}