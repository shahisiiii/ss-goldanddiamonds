"use client";
import { motion } from "framer-motion";

const pillars = [
  {
    n: "01", title: "Trust",
    desc: "Built on decades of honest relationships, transparent pricing, and a commitment to purity you can always count on.",
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  },
  {
    n: "02", title: "Craftsmanship",
    desc: "Every piece is handcrafted with meticulous care — a fusion of traditional Kerala artistry and contemporary design.",
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  },
  {
    n: "03", title: "Legacy",
    desc: "37 years of serving excellence across generations — a name that families across Malappuram have trusted since 1988.",
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" /></svg>,
  },
];

export default function About() {
  return (
    <section id="about" className="ss-section" style={{ background: "#FAF9F5" }}>
      <div className="ss-container">
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "flex-end", marginBottom: "56px" }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="ss-eyebrow" style={{ marginBottom: "18px", display: "flex" }}>Our Story</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1.1, color: "#0f0f0d" }}>
              Crafting Elegance
              <br />
              <span className="ss-shimmer" style={{ fontWeight: 500 }}>Since 1988</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "15px", lineHeight: 1.8, color: "#666" }}>
            SS Gold &amp; Diamonds has been serving excellence for 37 years, bringing the finest gold and diamond jewelry to families across India. From our roots in Parappanangadi and Mannurvalavu, we have grown into a name synonymous with quality, trust, and unmatched craftsmanship.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {pillars.map((p, i) => (
            <motion.div key={p.title} className="ss-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ padding: "32px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "48px", color: "#E8E4D4", lineHeight: 1, marginBottom: "20px" }}>{p.n}</div>
              <div className="ss-icon-box" style={{ marginBottom: "18px" }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0f0f0d", marginBottom: "10px" }}>{p.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: 1.7, color: "#777" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width: 768px) {
          #about .ss-container > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            text-align: center !important;
            margin-bottom: 32px !important;
          }
          #about .ss-container > div:first-child .ss-eyebrow {
            justify-content: center !important;
          }
          #about .ss-container > div:first-child h2,
          #about .ss-container > div:first-child p {
            text-align: center !important;
          }
          /* 3 cards in a horizontal row */
          #about .ss-container > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
          }
          #about .ss-container > div:last-child > div {
            padding: 14px 10px !important;
          }
          /* Hide big numbers 01 02 03 */
          #about .ss-container > div:last-child > div > div:first-child {
            display: none !important;
          }
          #about .ss-container > div:last-child .ss-icon-box {
            width: 34px !important;
            height: 34px !important;
            margin-bottom: 8px !important;
          }
          #about .ss-container > div:last-child h3 {
            font-size: 9px !important;
            margin-bottom: 5px !important;
          }
          #about .ss-container > div:last-child p {
            font-size: 11px !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </section>
  );
}
