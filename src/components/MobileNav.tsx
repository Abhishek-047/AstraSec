"use client";
import { useState } from "react";
import Link from "next/link";

const GOLD = "#c9a84c";
const GOLD_DIM = "#8b6914";
const SIDEBAR_BG = "#1a1008";

const navLinks = [
  { name: "Home",             href: "/" },
  { name: "About",            href: "/about" },
  { name: "Events",           href: "/events" },
  { name: "Schedule",         href: "/schedule" },
  { name: "Gallery",          href: "/gallery" },
  { name: "Sponsors",         href: "/sponsors" },
  { name: "Code of Conduct",  href: "/conduct" },
  { name: "Contact",          href: "/contact" },
];

const socialLinks = [
  { href: "https://github.com/Society-of-Cyber-Security", label: "GH", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
  { href: "https://www.linkedin.com/company/society-of-cyber-security/", label: "LI", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { href: "https://www.instagram.com/socs_ru/", label: "IG", path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5 A.5.5 0 1 1 17 6 A.5.5 0 0 1 17.5 6.5z M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <nav
        style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"0 20px", height:60,
          backgroundColor: SIDEBAR_BG,
          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23t)' opacity='0.07'/%3E%3C/svg%3E")`,
          borderBottom:`1.5px solid ${GOLD_DIM}`,
          position:"sticky", top:0, zIndex:100,
        }}
        className="mobile-bar"
      >
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4">
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            <rect x="9" y="12" width="6" height="5" rx="0.5" fill="none" stroke={GOLD} strokeWidth="1.2"/>
            <path d="M10 12V10A2 2 0 0 1 14 10V12"/>
          </svg>
          <div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, letterSpacing:"2px", color:GOLD, lineHeight:1.2 }}>
              AstraSec
            </div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:7.5, letterSpacing:"2px", color:"#7a5e2a" }}>
              SOCS
            </div>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background:"none", border:`1px solid ${GOLD_DIM}`, cursor:"pointer", padding:"6px 8px", display:"flex", alignItems:"center", justifyContent:"center" }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </nav>

      {/* Full-screen overlay + drawer */}
      {open && (
        <div style={{ position:"fixed", inset:0, zIndex:99, display:"flex" }}>
          {/* Backdrop */}
          <div
            style={{ position:"absolute", inset:0, backgroundColor:"rgba(0,0,0,0.75)" }}
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <div style={{
            position:"relative", zIndex:100,
            width:"78%", maxWidth:300, height:"100%",
            backgroundColor: SIDEBAR_BG,
            borderRight:`1.5px solid ${GOLD_DIM}`,
            overflowY:"auto",
            display:"flex", flexDirection:"column",
          }}>
            {/* Drawer header */}
            <div style={{ padding:"20px 20px 16px", borderBottom:`1px solid rgba(139,105,20,0.3)`, display:"flex", alignItems:"center", gap:10 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4">
                <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
              </svg>
              <div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700, letterSpacing:"2px", color:GOLD }}>AstraSec</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:7.5, letterSpacing:"2px", color:"#7a5e2a" }}>SOCS — Society Of CyberSecurity Club</div>
              </div>
            </div>

            {/* Nav links */}
            <ul style={{ listStyle:"none", flex:1, padding:"8px 0" }}>
              {navLinks.map(link => (
                <li key={link.name} style={{ borderBottom:`1px solid rgba(139,105,20,0.2)` }}>
                  <Link href={link.href} onClick={() => setOpen(false)} style={{
                    display:"block", padding:"13px 20px",
                    fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px",
                    color: GOLD, textDecoration:"none", textTransform:"uppercase",
                  }}>{link.name}</Link>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div style={{ padding:"16px 20px", borderTop:`1px solid rgba(139,105,20,0.3)`, textAlign:"center" }}>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:8, letterSpacing:"3px", color:GOLD, marginBottom:10, opacity:0.8 }}>FOLLOW US</div>
              <div style={{ display:"flex", justifyContent:"center", gap:12 }}>
                {socialLinks.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ width:32, height:32, borderRadius:"50%", border:`1px solid ${GOLD_DIM}`, display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.path}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mobile-bar { display: flex !important; }
        @media (min-width: 1024px) { .mobile-bar { display: none !important; } }
      `}</style>
    </>
  );
}
