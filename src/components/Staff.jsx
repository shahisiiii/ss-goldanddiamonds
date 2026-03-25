"use client";
import { motion } from "framer-motion";

const staff = [
  { name: "Ahmed Khan",   role: "Head Jeweler",       init: "A" },
  { name: "Priya Nair",   role: "Design Specialist",  init: "P" },
  { name: "Rajesh Kumar", role: "Quality Assurance",  init: "R" },
  { name: "Fathima S.",   role: "Customer Relations", init: "F" },
];

export default function Staff() {
  return (
    <section id="staff-section" className="ss-section" style={{ background: "#FAF9F5" }}>
      <div className="ss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="ss-eyebrow" style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>Our Team</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0f0f0d" }}>
            The People Behind <span className="ss-shimmer" style={{ fontWeight: 500 }}>the Brilliance</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {staff.map((p, i) => (
            <motion.div key={p.name} className="ss-card"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.09 }}
              style={{ overflow: "hidden", textAlign: "center" }}>
              <div style={{ aspectRatio: "4/5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f4f3e8", position: "relative" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#fff", border: "2px solid #F0EDE3", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px -2px rgba(0,0,0,0.06)" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "24px", color: "rgba(107,106,30,0.5)" }}>{p.init}</span>
                </div>
              </div>
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.04em", color: "#0f0f0d" }}>{p.name}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#6B6A1E", marginTop: "4px" }}>{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width: 640px) {
          /* Ensure equal left/right margins via container (already handled by ss-container) */
          #staff-section .ss-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          #staff-section .ss-container > div:first-child {
            text-align: center !important;
          }
          #staff-section .ss-container > div:first-child .ss-eyebrow {
            justify-content: center !important;
          }
          #staff-section .ss-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
