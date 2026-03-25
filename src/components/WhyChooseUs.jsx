"use client";
import { motion } from "framer-motion";

const features = [
  { n: "37+", unit: "Years",    title: "Experience",         desc: "Nearly four decades of mastering the craft of fine jewelry.",            icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { n: "BIS", unit: "Certified",title: "Trusted Quality",    desc: "BIS hallmarked gold and certified precious stones — guaranteed purity.", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg> },
  { n: "IGI", unit: "Certified",title: "Certified Diamonds", desc: "Every diamond comes with international certification for authenticity.", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg> },
  { n: "Pan", unit: "India",    title: "Nationwide Delivery",desc: "Secure insured delivery across all of India. Your jewelry, safely delivered.", icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.079-.481 1.125-1.102A22.496 22.496 0 0016.5 11.988" /></svg> },
];

export default function WhyChooseUs() {
  return (
    <section id="why-section" className="ss-section" style={{ background: "#FAF9F5", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(5rem,14vw,11rem)", color: "rgba(0,0,0,0.04)", letterSpacing: "-0.02em" }}>TRUST</span>
      </div>
      <div className="ss-container" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="ss-eyebrow" style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>Why Us</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0f0f0d" }}>
            Why Choose <span className="ss-shimmer" style={{ fontWeight: 500 }}>SS Gold</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {features.map((f, i) => (
            <motion.div key={f.title} className="ss-card"
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "18px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "36px", color: "rgba(107,106,30,0.18)", lineHeight: 1 }}>{f.n}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(107,106,30,0.25)" }}>{f.unit}</span>
              </div>
              <div className="ss-icon-box" style={{ marginBottom: "16px" }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0f0f0d", marginBottom: "8px" }}>{f.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: 1.7, color: "#777" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width: 768px) {
          #why-section .ss-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          #why-section .ss-container > div:first-child {
            text-align: center !important;
            margin-bottom: 32px !important;
          }
          #why-section .ss-container > div:first-child .ss-eyebrow {
            justify-content: center !important;
          }
          #why-section .ss-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
          #why-section .ss-container > div:last-child > div {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
