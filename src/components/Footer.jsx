"use client";
import Image from "next/image";

const links = [
  { label: "Home",         href: "#home" },
  { label: "About Us",     href: "#about" },
  { label: "Collections",  href: "#collections" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/ssgoldanddiamonds", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: "Facebook",  href: "https://facebook.com/ssgoldanddiamonds",  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "YouTube",   href: "https://youtube.com/@ssgoldanddiamonds",  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f0f0d", color: "#fff" }}>
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(107,106,30,0.4), transparent)" }} />
      <div className="ss-container" style={{ paddingTop: "56px", paddingBottom: "32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px", marginBottom: "48px" }}>

          {/* Brand */}
          <div>
            <a href="#home" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "18px" }}>
              <div style={{ position: "relative", width: "34px", height: "34px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/images/logo.jpg" alt="SS Gold" fill style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", color: "#8a8930" }}>SS GOLD</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "8px", letterSpacing: "0.24em", color: "#555", marginTop: "2px" }}>&amp; DIAMONDS</div>
              </div>
            </a>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", lineHeight: 1.75, color: "#666", maxWidth: "220px" }}>
              37 years of excellence in gold and diamond jewelry. Trusted by thousands of families across India.
            </p>
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: "32px", height: "32px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", color: "#666", textDecoration: "none", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#6B6A1E"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#6B6A1E"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#666"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#555", marginBottom: "20px" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "13px", color: "#666", textDecoration: "none", transition: "color 0.25s", display: "block" }}
                    onMouseEnter={e => e.target.style.color = "#fff"}
                    onMouseLeave={e => e.target.style.color = "#666"}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#555", marginBottom: "20px" }}>Get in Touch</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[{ loc: "Parappanangadi", desc: "Main Branch, Malappuram" }, { loc: "Mannurvalavu", desc: "Branch, Malappuram" }].map(b => (
                <div key={b.loc}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8930", marginBottom: "3px" }}>{b.loc}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#555", fontWeight: 300 }}>{b.desc}</p>
                </div>
              ))}
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666" }}>+91 98765 43210</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666", marginTop: "3px" }}>info@ssgoldanddiamonds.com</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "11px", color: "#444" }}>© {new Date().getFullYear()} SS Gold &amp; Diamonds. All rights reserved.</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "11px", color: "#444" }}>Crafted with ♦ in Kerala, India</p>
        </div>
      </div>
      <style>{`@media(max-width:768px){ footer .ss-container > div:first-child { grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  );
}
