"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { title: "Gold Jewelry",       image: "/images/gold.png",    desc: "Timeless classics in BIS hallmarked pure gold",       tag: "Heritage"  },
  { title: "Diamond Jewelry",    image: "/images/diamond.png", desc: "Internationally certified diamonds, always brilliant", tag: "Premium"   },
  { title: "Bridal Collections", image: "/images/bridal.png",  desc: "Make your most precious day unforgettable",            tag: "Exclusive" },
  { title: "Daily Wear",         image: "/images/daily.png",   desc: "Elegant pieces designed for everyday grace",           tag: "Everyday"  },
];

export default function Collections() {
  return (
    <section id="collections" className="ss-section" style={{ background: "#fff" }}>
      <div className="ss-container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="ss-eyebrow" style={{ marginBottom: "16px", display: "flex" }}>Our Collections</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0f0f0d", lineHeight: 1.1 }}>
              Discover <span className="ss-shimmer" style={{ fontWeight: 500 }}>Timeless Beauty</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "#999", maxWidth: "220px", lineHeight: 1.7, textAlign: "right" }}>
            Each piece crafted to celebrate life's most precious moments.
          </motion.p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px" }}>
          {items.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "3/4", background: "#F0EDE3", cursor: "pointer" }}
              className="col-card">
              <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                sizes="(max-width: 640px) 100vw, 25vw" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)", opacity: 0.72, transition: "opacity 0.4s" }} />
              <div style={{ position: "absolute", top: "14px", left: "14px" }}>
                <span style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "50px", padding: "4px 12px", fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>
                  {item.tag}
                </span>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.04em", color: "#fff", marginBottom: "6px" }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "12px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#contact" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B6A1E", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
            Inquire About Custom Orders
            <span style={{ display: "inline-block", width: "24px", height: "1px", background: "#6B6A1E" }} />
          </a>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){ #collections .ss-container > div:nth-child(2) { grid-template-columns: repeat(2,1fr) !important; } } @media(max-width:480px){ #collections .ss-container > div:nth-child(2) { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
