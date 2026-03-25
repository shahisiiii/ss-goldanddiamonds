"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const reviews = [
  { name: "Aisha Fathima",   rating: 5, text: "Absolutely stunning bridal collection! SS Gold made my wedding day extra special. The craftsmanship is unmatched and the staff was incredibly helpful.", date: "2 months ago", loc: "Parappanangadi" },
  { name: "Muhammed Rashid", rating: 5, text: "Been a loyal customer for over 15 years. The quality and purity of gold is always guaranteed. Best jewelry shop in Parappanangadi without a doubt.",      date: "1 month ago",  loc: "Kozhikode"      },
  { name: "Lakshmi Priya",   rating: 5, text: "Ordered a diamond pendant for my anniversary. The design was elegant and delivery was right on time. Very impressed with the packaging too!",         date: "3 weeks ago",  loc: "Calicut"        },
  { name: "Suresh Babu",     rating: 4, text: "Great variety of daily wear gold jewelry. Prices are fair and transparent. The Mannurvalavu branch is very well designed and spacious.",              date: "1 month ago",  loc: "Mannurvalavu"   },
  { name: "Noorjahan K.",    rating: 5, text: "None match the quality and trustworthiness of SS Gold. My family has been their customer for 3 generations. Truly a legacy jeweler.",                date: "2 weeks ago",  loc: "Tirur"          },
];

const Stars = ({ count }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="13" height="13" fill={i <= count ? "#F59E0B" : "#e5e7eb"} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ r, style = {} }) => (
  <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "24px", ...style }}>
    <Stars count={r.rating} />
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: 1.75, color: "#aaa", margin: "14px 0 18px", minHeight: "72px" }}>"{r.text}"</p>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(107,106,30,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "18px", color: "#8a8930" }}>{r.name[0]}</span>
      </div>
      <div>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff" }}>{r.name}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#666", marginTop: "1px" }}>{r.loc} · {r.date}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="ss-section" style={{ background: "#0f0f0d", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "25%", left: "30%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(107,106,30,0.07)", filter: "blur(120px)", pointerEvents: "none" }} />

      <div className="ss-container" style={{ position: "relative" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="ss-eyebrow" style={{ color: "#8a8930", marginBottom: "16px", display: "flex", justifyContent: "center" }}>
            <style>{`.ss-eyebrow-dark::before, .ss-eyebrow-dark::after { background: #8a8930; }`}</style>
            Testimonials
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#fff", marginBottom: "12px" }}>
            What Our <span className="ss-shimmer" style={{ fontWeight: 500 }}>Customers Say</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <Stars count={5} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666", marginLeft: "6px" }}>4.9 / 5 · 500+ Reviews</span>
          </div>
        </motion.div>

        {/* Desktop 3+2 grid */}
        <div className="desktop-reviews">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "16px" }}>
            {reviews.slice(0, 3).map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}>
                <ReviewCard r={r} />
              </motion.div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {reviews.slice(3).map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 + 0.2 }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(107,106,30,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "18px", color: "#8a8930" }}>{r.name[0]}</span>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff" }}>{r.name}</p>
                      <Stars count={r.rating} />
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: 1.7, color: "#aaa" }}>"{r.text}"</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#555", marginTop: "6px" }}>{r.loc} · {r.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="mobile-reviews" style={{ display: "none" }}>
          <AnimatePresence mode="wait">
            <motion.div key={cur} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
              <ReviewCard r={reviews[cur]} />
            </motion.div>
          </AnimatePresence>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setCur(i)}
                style={{ height: "4px", borderRadius: "2px", border: "none", cursor: "pointer", transition: "all 0.3s", background: i === cur ? "#6B6A1E" : "rgba(255,255,255,0.15)", width: i === cur ? "24px" : "6px" }} />
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .desktop-reviews{ display:none !important; } .mobile-reviews{ display:block !important; } }`}</style>
    </section>
  );
}
