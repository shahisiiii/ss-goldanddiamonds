"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="ss-section" style={{ background: "#fff" }}>
      <div className="ss-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="ss-eyebrow" style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>Visit Us</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#0f0f0d" }}>
            Our <span className="ss-shimmer" style={{ fontWeight: 500 }}>Locations</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "40px" }}>
          {/* Map */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #F0EDE3", minHeight: "380px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d75.85!3d11.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zParappanangadi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%" style={{ border: 0, display: "block", minHeight: "380px" }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="SS Gold Location" />
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { name: "Parappanangadi", desc: "Main Branch, Malappuram, Kerala", badge: "Main" },
              { name: "Mannurvalavu",   desc: "Branch, Malappuram, Kerala",      badge: "Branch" },
            ].map((loc) => (
              <div key={loc.name} className="ss-card-cream" style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div className="ss-icon-box" style={{ width: "40px", height: "40px" }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "13px", color: "#0f0f0d" }}>{loc.name}</h3>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(107,106,30,0.1)", color: "#6B6A1E", padding: "2px 8px", borderRadius: "50px" }}>{loc.badge}</span>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "#888" }}>{loc.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ background: "#FAF9F5", border: "1px solid #F0EDE3", borderRadius: "12px", padding: "18px 20px" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B6A1E", marginBottom: "10px" }}>Contact</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#555", marginBottom: "4px" }}>📞 +91 98765 43210</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#555", marginBottom: "10px" }}>📞 +91 98765 43211</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#aaa" }}>Mon – Sat: 9:00 AM – 8:00 PM</p>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <a href="tel:+919876543210" className="ss-btn-primary" style={{ flex: 1 }}>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                Call Now
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="ss-btn-outline" style={{ flex: 1 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ #contact .ss-container > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
