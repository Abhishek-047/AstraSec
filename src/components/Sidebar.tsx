"use client";
import Link from "next/link";

/* ── SVG Icons ──────────────────────────────────────────────────────────── */
const ShieldLockSVG = () => (
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="29" cy="29" rx="27" ry="27" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
    <path d="M8 29 C6 22,10 14,18 12 C14 16,12 22,14 29" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M50 29 C52 22,48 14,40 12 C44 16,46 22,44 29" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M5 32 C4 26,7 20,12 18" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <path d="M53 32 C54 26,51 20,46 18" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <path d="M29 10 L42 15 L42 27 C42 34 36 40 29 43 C22 40 16 34 16 27 L16 15 Z"
      fill="none" stroke="#c9a84c" strokeWidth="1.4"/>
    <rect x="24" y="26" width="10" height="8" rx="1" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
    <path d="M25 26 V23 A4 4 0 0 1 33 23 V26" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
    <circle cx="29" cy="30" r="1.5" fill="#c9a84c"/>
  </svg>
);

const WreathSVG = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3"/>
    <path d="M12 45 C10 35,16 22,26 18" stroke="#c9a84c" strokeWidth="1" fill="none"/>
    <path d="M14 52 C10 42,14 28,22 22" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M18 60 C12 50,14 36,20 28" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="10" cy="42" rx="3" ry="5" transform="rotate(-20 10 42)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="12" cy="55" rx="3" ry="5" transform="rotate(-10 12 55)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="18" cy="65" rx="3" ry="5" transform="rotate(5 18 65)" fill="#c9a84c" opacity="0.4"/>
    <path d="M78 45 C80 35,74 22,64 18" stroke="#c9a84c" strokeWidth="1" fill="none"/>
    <path d="M76 52 C80 42,76 28,68 22" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M72 60 C78 50,76 36,70 28" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="80" cy="42" rx="3" ry="5" transform="rotate(20 80 42)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="78" cy="55" rx="3" ry="5" transform="rotate(10 78 55)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="72" cy="65" rx="3" ry="5" transform="rotate(-5 72 65)" fill="#c9a84c" opacity="0.4"/>
    <path d="M38 78 C42 82,48 82,52 78" stroke="#c9a84c" strokeWidth="1" fill="none"/>
  </svg>
);

const navItems = [
  { icon: "M12 3 L20 6 V11 C20 16,16 19,12 21 C8 19,4 16,4 11 V6 Z M8 13l2 2 5-5", label: "THE EVENT",        href: "/about" },
  { icon: "M3 5 h18 M3 10 h18 M3 15 h12 M17 13 v8 M17 17 h4",                       label: "SCHEDULE",         href: "/schedule" },
  { icon: "M12 21 C12 21,4 16,4 9 A8 8 0 0 1 20 9 C20 16,12 21,12 21 Z",            label: "EVENTS",           href: "/events" },
  { icon: "M12 2 A4 4 0 1 1 12 10 A4 4 0 0 1 12 2 M4 22 C4 17,8 14,12 14 C16 14,20 17,20 22", label: "SPEAKERS", href: "/about" },
  { icon: "M12 2 C8 2,5 5,5 9 A7 7 0 0 0 12 16 A7 7 0 0 0 19 9 C19 5,16 2,12 2 M7 20 C7 17,12 15,12 15 C12 15,17 17,17 20", label: "VENUE", href: "/contact" },
  { icon: "M17 20 C17 17,14.5 15,12 15 C9.5 15,7 17,7 20 M12 12 A4 4 0 1 1 12 4 A4 4 0 0 1 12 12 M4 20 C4 18,6 16,7 15.5 M20 20 C20 18,18 16,17 15.5", label: "SPONSORS", href: "/sponsors" },
  { icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 12l2 2 4-4", label: "CODE OF CONDUCT", href: "/conduct" },
  { icon: "M12 16 v1 M12 8 v5 M12 4 A8 8 0 1 1 12 20 A8 8 0 0 1 12 4",                 label: "FAQ",              href: "/faq" },
  { icon: "M2 6 h20 v14 H2 Z M2 6 L12 13 L22 6",                                     label: "CONTACT",          href: "/contact" },
];

const GOLD = "#c9a84c";
const GOLD_DIM = "#8b6914";
const SIDEBAR_BG = "#1a1008";

// Social links
const socialLinks = [
  {
    href: "https://github.com/Society-of-Cyber-Security",
    label: "GitHub",
    // GitHub icon
    path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
  },
  {
    href: "https://www.linkedin.com/company/society-of-cyber-security/",
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    href: "https://www.instagram.com/socs_ru/",
    label: "Instagram",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5 A.5.5 0 1 1 17 6 A.5.5 0 0 1 17.5 6.5z M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
  },
];
export default function Sidebar() {
  return (
    <aside
      id="sidebar-desktop"
      style={{
        width: 260, height: "100vh",
        backgroundColor: SIDEBAR_BG,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23t)' opacity='0.04'/%3E%3C/svg%3E")`,
        position: "fixed", left: 0, top: 0, zIndex: 50,
        borderRight: `1.5px solid ${GOLD_DIM}`,
        overflowY: "auto", overflowX: "hidden",
      }}
    >
      {/* Outer ornate border inset */}
      <div style={{ position: "absolute", inset: 5, border: "1px solid rgba(201,168,76,0.3)", pointerEvents: "none", zIndex: 10 }}>
        {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((pos,i)=>(
          <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:"1px solid #8b6914", backgroundColor: "#1a1008", ...pos }}/>
        ))}
      </div>

      <div style={{ padding: "28px 16px 20px", display:"flex", flexDirection:"column", alignItems:"center", flex:1, position:"relative", zIndex:1 }}>

        {/* Logo */}
        <Link href="/" style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom: 16, textDecoration:"none" }}>
          <div style={{ position:"relative", width:100, height:100, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute" }}><WreathSVG /></div>
            <ShieldLockSVG />
          </div>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700,
            fontSize: 18, letterSpacing: "3px", color: GOLD,
            textAlign:"center", marginTop: 10, lineHeight: 1.3,
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}>AstraSec</div>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"3px", color: "#8b6914", marginTop:3, textAlign:"center" }}>
            SOCS
          </div>
          <div style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:12, color: "#7a5e2a", opacity:0.85, textAlign:"center", marginTop:4, lineHeight:1.4 }}>
            (Society Of CyberSecurity Club)
          </div>
        </Link>

        {/* Divider */}
        <div style={{ width:"100%", height:1, background:`linear-gradient(to right, transparent, ${GOLD_DIM}, transparent)`, margin:"4px 0 14px" }}/>

        {/* Navigation */}
        <nav style={{ width:"100%", flex:1 }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} style={{
              display:"flex", alignItems:"center", gap:14,
              padding:"12px 16px", textDecoration:"none",
              transition:"all 0.2s ease",
            }}
            className="sidebar-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                <path d={item.icon}/>
              </svg>
              <span style={{
                fontFamily:"'Cinzel',serif", fontSize:12, fontWeight:600,
                letterSpacing:"2px", color: GOLD, opacity: 0.85, textTransform:"uppercase",
              }}>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ width:"100%", height:1, background:`linear-gradient(to right, transparent, ${GOLD_DIM}, transparent)`, margin:"12px 0" }}/>

        {/* Event Details box */}
        <div style={{
          width:"100%", border:`1px solid ${GOLD_DIM}`,
          padding:"20px 16px 16px", position:"relative", marginBottom:18,
        }}>
          <div style={{ position:"absolute", top:4, left:4, width:8, height:8, borderTop:`1px solid ${GOLD_DIM}`, borderLeft:`1px solid ${GOLD_DIM}` }}/>
          <div style={{ position:"absolute", top:4, right:4, width:8, height:8, borderTop:`1px solid ${GOLD_DIM}`, borderRight:`1px solid ${GOLD_DIM}` }}/>
          <div style={{ position:"absolute", bottom:4, left:4, width:8, height:8, borderBottom:`1px solid ${GOLD_DIM}`, borderLeft:`1px solid ${GOLD_DIM}` }}/>
          <div style={{ position:"absolute", bottom:4, right:4, width:8, height:8, borderBottom:`1px solid ${GOLD_DIM}`, borderRight:`1px solid ${GOLD_DIM}` }}/>

          <div style={{
            position:"absolute", top:-10, left:"50%", transform:"translateX(-50%)",
            backgroundColor: SIDEBAR_BG, padding:"0 8px",
            fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", color: GOLD, whiteSpace:"nowrap",
          }}>EVENT DETAILS</div>

          <div style={{ height:1, background:`linear-gradient(to right, transparent, ${GOLD_DIM}, transparent)`, marginBottom:16 }}/>

          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:11, color: GOLD, letterSpacing:"1px" }}>25 - 27 October, 2025</span>
          </div>
          <div style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
            <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.5" style={{ flexShrink:0, marginTop:2 }}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:10, color: GOLD, letterSpacing:"1px", lineHeight:1.6, opacity:0.9 }}>
              TECHNOLOGY BLOCK<br/>AUDITORIUM<br/>JAIPUR, RAJASTHAN
            </span>
          </div>
        </div>

        {/* Follow Us — GitHub, LinkedIn, Instagram */}
        <div style={{ width:"100%", textAlign:"center", marginBottom:20 }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"3px", color: GOLD, marginBottom:12, opacity:0.8 }}>FOLLOW US</div>
          <div style={{ display:"flex", justifyContent:"center", gap:14 }}>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                title={s.label}
                style={{
                  width:34, height:34, borderRadius:"50%",
                  border:`1px solid ${GOLD_DIM}`, display:"flex", alignItems:"center", justifyContent:"center",
                  backgroundColor: "rgba(139,105,20,0.08)", transition:"all 0.2s ease", textDecoration:"none",
                }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.backgroundColor="rgba(201,168,76,0.15)";(e.currentTarget as HTMLElement).style.borderColor=GOLD}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.backgroundColor="rgba(139,105,20,0.08)";(e.currentTarget as HTMLElement).style.borderColor=GOLD_DIM}}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quote Scroll */}
        <div style={{ width:"100%", position:"relative", marginBottom:24 }}>
          {/* Scroll rod top */}
          <div style={{ height:12, background:"linear-gradient(to bottom, #d5bc94, #a88a5d)", borderRadius:6, border:"1.5px solid #a88a5d", marginBottom:-2, boxShadow:"0 3px 5px rgba(0,0,0,0.6)", position:"relative", zIndex:2 }}/>
          {/* Parchment */}
          <div style={{
            backgroundColor:"#e8d9b0",
            backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E")`,
            padding:"16px 16px 20px",
            borderLeft:"2px solid #a88a5d", borderRight:"2px solid #a88a5d",
            boxShadow:"inset 0 0 16px rgba(139,101,51,0.4)",
            position:"relative",
            zIndex: 1
          }}>
            <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:14, lineHeight:1.7, textAlign:"center", color:"#3d2b0e", opacity:0.9 }}>
              &ldquo;The greatest security lies in knowledge, vigilance, and innovation.&rdquo;
            </p>
            {/* Wax seal */}
            <div style={{
              position:"absolute", bottom:-16, right:-8,
              width:38, height:38, borderRadius:"50%",
              background:"radial-gradient(circle at top left, #b03030, #5a1010)",
              border:"2px solid #3a0a0a",
              boxShadow:"3px 5px 8px rgba(0,0,0,0.8)",
              display:"flex", alignItems:"center", justifyContent:"center", zIndex:10,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5">
                <path d="M12 3L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9Z"/>
              </svg>
            </div>
          </div>
          {/* Scroll rod bottom */}
          <div style={{ height:12, background:"linear-gradient(to bottom, #a88a5d, #d5bc94)", borderRadius:6, border:"1.5px solid #a88a5d", marginTop:-2, boxShadow:"0 -2px 5px rgba(0,0,0,0.5)", position:"relative", zIndex:2 }}/>
        </div>
        
        <div style={{ height: 40 }} /> {/* Extra padding at bottom so scroll doesn't cut off */}

        {/* Building illustration */}
        <div style={{ width:"100%", position:"relative", overflow:"hidden", height:100, marginTop:"auto", opacity:0.32 }}>
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&auto=format&fit=crop&q=60"
            alt="Historic Architecture"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top",
              filter:"sepia(1) contrast(1.3) brightness(0.6)",
              maskImage:"linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:"linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        {/* Decorative corner pieces */}
        <div style={{ position:"absolute", top:-2, left:-2, width:24, height:24, borderTop:"3px solid rgba(139,101,51,0.5)", borderLeft:"3px solid rgba(139,101,51,0.5)", pointerEvents:"none" }}/>
        <div style={{ position:"absolute", top:-2, right:-2, width:24, height:24, borderTop:"3px solid rgba(139,101,51,0.5)", borderRight:"3px solid rgba(139,101,51,0.5)", pointerEvents:"none" }}/>
        
        <style>{`
          .sidebar-link:hover span { opacity: 1 !important; color: #e8c96a !important; }
          .sidebar-link:hover { background: rgba(201,168,76,0.07); }
          #sidebar-desktop {
            display: none !important;
          }
          @media (min-width: 1024px) {
            #sidebar-desktop {
              display: flex !important;
              flex-direction: column !important;
            }
          }
        `}</style>
      </div>
    </aside>
  );
}
