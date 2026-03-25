"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Reviews",     href: "#testimonials" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(107,106,30,0.1)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div className="ss-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>

        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{ position: "relative", width: "115px", height: "115px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
            <Image src="/images/ssgoldlogoupscale.jpg" alt="SS Gold & Diamonds" fill style={{ objectFit: "contain" }} />
          </div>

        </a>

        {/* Desktop nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden-mobile">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#555",
              textDecoration: "none",
              position: "relative",
              paddingBottom: "4px",
              transition: "color 0.25s",
            }}
            onMouseEnter={e => e.target.style.color = "#6B6A1E"}
            onMouseLeave={e => e.target.style.color = "#555"}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hidden-mobile">
          <a href="tel:+919876543210" style={{
            fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6A1E",
            textDecoration: "none", display: "flex", alignItems: "center", gap: "6px",
          }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#6B6A1E" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="ss-btn-primary" style={{ padding: "10px 22px", fontSize: "10px" }}>
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}
          className="show-mobile">
          <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            style={{ display: "block", width: "22px", height: "1.5px", background: "#6B6A1E" }} />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{ display: "block", width: "22px", height: "1.5px", background: "#6B6A1E" }} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            style={{ display: "block", width: "22px", height: "1.5px", background: "#6B6A1E" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
            style={{ background: "#fff", borderTop: "1px solid #F0EDE3", overflow: "hidden" }}>
            <div className="ss-container" style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {links.map((l, i) => (
                <motion.a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600,
                    letterSpacing: "0.14em", textTransform: "uppercase", color: "#555",
                    textDecoration: "none", padding: "12px 0",
                    borderBottom: "1px solid #F0EDE3", display: "block" }}>
                  {l.label}
                </motion.a>
              ))}
              <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                <a href="tel:+919876543210" className="ss-btn-outline" style={{ flex: 1, fontSize: "10px", padding: "12px 0" }}>Call</a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="ss-btn-primary" style={{ flex: 1, fontSize: "10px", padding: "12px 0" }}>WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none  !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }
      `}</style>
    </motion.nav>
  );
}
