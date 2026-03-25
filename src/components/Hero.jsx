"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };

const stats = [
  { n: "37+",  l: "Years"      },
  { n: "10K+", l: "Families"   },
  { n: "2",    l: "Branches"   },
  { n: "BIS",  l: "Hallmarked" },
];
    
export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", background: "#fff", display: "flex", alignItems: "center", paddingTop: "70px", overflow: "hidden" }}>
      <div className="ss-container" style={{ width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", minHeight: "calc(100vh - 70px)", paddingTop: "40px", paddingBottom: "40px" }}>

          {/* ── Left: Text ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            <motion.div variants={up} style={{ marginBottom: "24px" }}>
              <span className="ss-eyebrow">Est. 1988 · Kerala, India</span>
            </motion.div>

            <motion.h1 variants={up} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              lineHeight: 1.05,
              color: "#0f0f0d",
              marginBottom: "20px",
            }}>
              37 Golden Years
              <br />
              <em className="ss-shimmer" style={{ fontStyle: "normal", fontWeight: 500 }}>of Trust &amp;</em>
              <br />
              <span style={{ fontWeight: 300 }}>Craftsmanship</span>
            </motion.h1>

            <motion.p variants={up} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: 1.75,
              color: "#666",
              marginBottom: "10px",
              maxWidth: "480px",
            }}>
              Premium gold &amp; diamond jewelry from Parappanangadi and Mannurvalavu.
              Trusted by thousands of families across India.
            </motion.p>

            <motion.div variants={up} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6B6A1E" }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6B6A1E" }}>
                All India Delivery Available
              </span>
            </motion.div>

            <motion.div variants={up} style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "48px" }}>
              <a href="#collections" className="ss-btn-primary">Explore Collection</a>
              <a href="#contact"     className="ss-btn-outline">Contact Us</a>
            </motion.div>

            <motion.div variants={up} style={{ display: "flex", alignItems: "center", gap: "36px", paddingTop: "28px", borderTop: "1px solid #F0EDE3" }}>
              {stats.map((s) => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "22px", color: "#0f0f0d", lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#aaa", marginTop: "4px" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22,1,0.36,1] }}
            style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "flex-end" }}
          >
            {/* Background circle */}
            <div style={{
              position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
              width: "480px", height: "480px", borderRadius: "50%",
              background: "#f4f3e8", opacity: 0.65,
            }} />
            {/* Rotating dashed ring */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
                width: "520px", height: "520px", borderRadius: "50%",
                border: "1px dashed rgba(107,106,30,0.18)",
              }} />

            {/* Jewelry image */}
            <div style={{
              position: "relative", zIndex: 2,
              width: "400px", height: "460px",
              borderRadius: "16px", overflow: "hidden",
              boxShadow: "0 40px 80px -20px rgba(107,106,30,0.2)",
            }}>
              <Image src="/images/hero.png" alt="Premium jewelry" fill style={{ objectFit: "cover" }} priority quality={95} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.15), transparent)" }} />
            </div>

            {/* Floating — rating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              style={{
                position: "absolute", top: "40px", left: "20px", zIndex: 3,
                background: "#fff", borderRadius: "12px", padding: "12px 16px",
                boxShadow: "0 8px 32px -4px rgba(0,0,0,0.12)", border: "1px solid #F0EDE3",
              }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#aaa", marginBottom: "4px" }}>Google Rating</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="13" height="13" fill="#F59E0B" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, color: "#0f0f0d" }}>4.9</span>
              </div>
            </motion.div>

            {/* Floating — years */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              style={{
                position: "absolute", bottom: "60px", left: "10px", zIndex: 3,
                background: "#6B6A1E", borderRadius: "12px", padding: "12px 18px",
                boxShadow: "0 8px 24px -4px rgba(107,106,30,0.4)",
              }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "2px" }}>Experience</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, color: "#fff", lineHeight: 1 }}>37 Years</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #6B6A1E, transparent)" }} />
      </motion.div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 900px) {
          #home > div > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding-top: 32px !important;
            min-height: auto !important;
          }
          /* Show the image column on mobile */
          #home > div > div > div:last-child {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
          /* Center text content */
          #home > div > div > div:first-child {
            align-items: center !important;
            text-align: center !important;
          }
          #home > div > div > div:first-child .ss-eyebrow {
            justify-content: center !important;
          }
          #home > div > div > div:first-child > div:nth-child(4) {
            justify-content: center !important;
          }
          #home > div > div > div:first-child > div:nth-child(5) {
            justify-content: center !important;
          }
          #home > div > div > div:first-child > div:nth-child(6) {
            justify-content: center !important;
          }
          /* Hero image sizing on mobile */
          #home > div > div > div:last-child > div:nth-child(3) {
            width: 100% !important;
            max-width: 320px !important;
            height: 340px !important;
          }
          /* Hide background circle and ring on mobile */
          #home > div > div > div:last-child > div:nth-child(1),
          #home > div > div > div:last-child > div:nth-child(2) {
            display: none !important;
          }
          /* Hide floating badges on mobile */
          #home > div > div > div:last-child > div:nth-child(4),
          #home > div > div > div:last-child > div:nth-child(5) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
