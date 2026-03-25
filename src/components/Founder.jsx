"use client";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section id="founder-section" className="ss-section" style={{ background: "#fff", overflow: "hidden" }}>
      <div className="ss-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>

          {/* Portrait */}
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
            style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ width: "300px", height: "370px", borderRadius: "16px", overflow: "hidden", background: "#F0EDE3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "90px", height: "90px", borderRadius: "50%", background: "#fff", border: "3px solid #E8E4D4", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                  <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="#6B6A1E" strokeWidth={0.8} opacity={0.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                  </svg>
                </div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb" }}>Founder Photo</p>
                {/* Bottom name strip */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)", padding: "20px 20px 18px" }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "13px", color: "#fff" }}>SS Gold &amp; Diamonds</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Founder &amp; CEO</p>
                </div>
              </div>
              {/* Offset border */}
              <div style={{ position: "absolute", bottom: "-16px", right: "-16px", width: "300px", height: "370px", borderRadius: "16px", border: "1px solid rgba(107,106,30,0.18)", zIndex: -1 }} />
              {/* 37 badge */}
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 220 }}
                style={{ position: "absolute", top: "-14px", right: "-14px", width: "68px", height: "68px", background: "#6B6A1E", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px -4px rgba(107,106,30,0.4)" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "24px", color: "#fff", lineHeight: 1 }}>37</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginTop: "2px" }}>Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22,1,0.36,1] }}>
            <span className="ss-eyebrow" style={{ marginBottom: "20px", display: "flex", justifyContent: "flex-start" }}>From the Founder</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#0f0f0d", lineHeight: 1.15, marginBottom: "6px" }}>
              A Message of
              <br /><span className="ss-shimmer" style={{ fontWeight: 500 }}>Trust &amp; Legacy</span>
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#aaa", marginBottom: "28px" }}>
              Founder &amp; CEO, SS Gold &amp; Diamonds
            </p>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "80px", color: "rgba(107,106,30,0.1)", lineHeight: 1, marginBottom: "-20px" }}>"</div>
            <blockquote style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "15px", lineHeight: 1.9, color: "#666", borderLeft: "2px solid rgba(107,106,30,0.2)", paddingLeft: "20px", marginBottom: "28px" }}>
              For 37 years, our sole mission has been to bring joy and elegance into every home. Each piece of jewelry we create carries the weight of our reputation — built on honesty, quality, and a deep respect for the trust our customers place in us. As we look to the future, our commitment remains the same: to craft jewelry that becomes a cherished part of your family's story.
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <span className="ss-rule" />
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "13px", color: "#0f0f0d" }}>SS Gold &amp; Diamonds Family</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#aaa", marginTop: "2px" }}>Parappanangadi · Mannurvalavu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width: 900px) {
          /* Stack portrait above content, no extra whitespace */
          #founder-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          #founder-section > div > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          /* Center the portrait */
          #founder-section > div > div > div:first-child {
            justify-content: center !important;
          }
          /* Constrain portrait card so no overflow whitespace */
          #founder-section > div > div > div:first-child > div {
            width: 260px !important;
          }
          #founder-section > div > div > div:first-child > div > div:first-child {
            width: 260px !important;
            height: 320px !important;
          }
          /* Fix the offset border size too */
          #founder-section > div > div > div:first-child > div > div:nth-child(2) {
            width: 260px !important;
            height: 320px !important;
          }
          /* Center the text content */
          #founder-section > div > div > div:last-child {
            text-align: center !important;
          }
          #founder-section > div > div > div:last-child .ss-eyebrow {
            justify-content: center !important;
          }
          #founder-section > div > div > div:last-child blockquote {
            text-align: left !important;
          }
          #founder-section > div > div > div:last-child > div:last-child {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
