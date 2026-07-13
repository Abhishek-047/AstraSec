"use client";
import { useState } from "react";
import Link from "next/link";

const GOLD = "#c9a84c";
const GOLD_DIM = "#8b6914";
const SIDEBAR_BG = "#1a1008";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Schedule", href: "/schedule" },
  { name: "Gallery", href: "/gallery" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <nav style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 20px", height:64,
        backgroundColor: SIDEBAR_BG,
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23t)' opacity='0.07'/%3E%3C/svg%3E")`,
        borderBottom:`1.5px solid ${GOLD_DIM}`,
        position:"sticky", top:0, zIndex:50,
      }}
      className="mobile-bar"
      >
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4">
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            <rect x="9" y="12" width="6" height="5" rx="0.5" fill="none" stroke={GOLD} strokeWidth="1.2"/>
            <path d="M10 12V10A2 2 0 0 1 14 10V12"/>
          </svg>
          <div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700, letterSpacing:"3px", color:GOLD, lineHeight:1.2 }}>
              AstraSec
            </div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:7, letterSpacing:"1.5px", color:"#7a5e2a", lineHeight:1.4 }}>
              SOCS
            </div>
          </div>
        </Link>
        <button onClick={() => setOpen(!open)} style={{ background:"none", border:"none", cursor:"pointer", padding:8 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
            {open
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </nav>

      {/* Drawer */}
      {open && (
        <div style={{ position:"fixed", inset:0, zIndex:49, display:"flex" }}>
          <div style={{
            width:"78%", maxWidth:300, height:"100%",
            backgroundColor: SIDEBAR_BG,
            borderRight:`1.5px solid ${GOLD_DIM}`,
            padding:"24px 20px",
            overflowY:"auto",
          }}>
            <ul style={{ listStyle:"none", marginTop:12 }}>
              {navLinks.map(link => (
                <li key={link.name} style={{ borderBottom:`1px solid rgba(139,105,20,0.25)` }}>
                  <Link href={link.href} onClick={() => setOpen(false)} style={{
                    display:"block", padding:"14px 4px",
                    fontFamily:"'Cinzel',serif", fontSize:12, letterSpacing:"3px",
                    color: GOLD, textDecoration:"none", textTransform:"uppercase",
                  }}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex:1, backgroundColor:"rgba(0,0,0,0.7)" }} onClick={() => setOpen(false)}/>
        </div>
      )}

      <style>{`
        .mobile-bar { display: flex !important; }
        @media (min-width: 1024px) { .mobile-bar { display: none !important; } }
      `}</style>
    </>
  );
}
