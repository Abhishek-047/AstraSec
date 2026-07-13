import Link from "next/link";

/* ── SVG Icons ──────────────────────────────────────────────────────────── */
const ShieldLockSVG = () => (
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Laurel wreath */}
    <ellipse cx="29" cy="29" rx="27" ry="27" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
    <path d="M8 29 C6 22,10 14,18 12 C14 16,12 22,14 29" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M50 29 C52 22,48 14,40 12 C44 16,46 22,44 29" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M5 32 C4 26,7 20,12 18" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <path d="M53 32 C54 26,51 20,46 18" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    {/* Shield */}
    <path d="M29 10 L42 15 L42 27 C42 34 36 40 29 43 C22 40 16 34 16 27 L16 15 Z"
      fill="none" stroke="#c9a84c" strokeWidth="1.4"/>
    {/* Lock */}
    <rect x="24" y="26" width="10" height="8" rx="1" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
    <path d="M25 26 V23 A4 4 0 0 1 33 23 V26" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
    <circle cx="29" cy="30" r="1.5" fill="#c9a84c"/>
  </svg>
);

const WreathSVG = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="42" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3"/>
    {/* Left wreath branch */}
    <path d="M12 45 C10 35,16 22,26 18" stroke="#c9a84c" strokeWidth="1" fill="none"/>
    <path d="M14 52 C10 42,14 28,22 22" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M18 60 C12 50,14 36,20 28" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="10" cy="42" rx="3" ry="5" transform="rotate(-20 10 42)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="12" cy="55" rx="3" ry="5" transform="rotate(-10 12 55)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="18" cy="65" rx="3" ry="5" transform="rotate(5 18 65)" fill="#c9a84c" opacity="0.4"/>
    {/* Right wreath branch */}
    <path d="M78 45 C80 35,74 22,64 18" stroke="#c9a84c" strokeWidth="1" fill="none"/>
    <path d="M76 52 C80 42,76 28,68 22" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.7"/>
    <path d="M72 60 C78 50,76 36,70 28" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="80" cy="42" rx="3" ry="5" transform="rotate(20 80 42)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="78" cy="55" rx="3" ry="5" transform="rotate(10 78 55)" fill="#c9a84c" opacity="0.4"/>
    <ellipse cx="72" cy="65" rx="3" ry="5" transform="rotate(-5 72 65)" fill="#c9a84c" opacity="0.4"/>
    {/* Bottom bow */}
    <path d="M38 78 C42 82,48 82,52 78" stroke="#c9a84c" strokeWidth="1" fill="none"/>
  </svg>
);

const navItems = [
  { icon: "M12 3 L24 7 L24 17 C24 22 18.5 26 12 28 C5.5 26 0 22 0 17 L0 7 Z M7 16 L10 19 L17 12", label: "THE EVENT",  href: "/about" },
  { icon: "M12 2 L15 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9 9 Z", label: "HIGHLIGHTS", href: "/events" },
  { icon: "M3 5 h18 M3 10 h18 M3 15 h12 M17 13 v8 M17 17 h4", label: "SCHEDULE",  href: "/schedule" },
  { icon: "M12 21 C12 21,4 16,4 9 A8 8 0 0 1 20 9 C20 16,12 21,12 21 Z", label: "EVENTS",     href: "/events" },
  { icon: "M12 2 A4 4 0 1 1 12 10 A4 4 0 0 1 12 2 M4 22 C4 17,8 14,12 14 C16 14,20 17,20 22", label: "SPEAKERS",  href: "/about" },
  { icon: "M12 2 C8 2,5 5,5 9 A7 7 0 0 0 12 16 A7 7 0 0 0 19 9 C19 5,16 2,12 2 M7 20 C7 17,12 15,12 15 C12 15,17 17,17 20", label: "VENUE",      href: "/contact" },
  { icon: "M17 20 C17 17,14.5 15,12 15 C9.5 15,7 17,7 20 M12 12 A4 4 0 1 1 12 4 A4 4 0 0 1 12 12 M4 20 C4 18,6 16,7 15.5 M20 20 C20 18,18 16,17 15.5", label: "SPONSORS",  href: "/sponsors" },
  { icon: "M12 16 v1 M12 8 v5 M12 4 A8 8 0 1 1 12 20 A8 8 0 0 1 12 4", label: "FAQ",        href: "/contact" },
  { icon: "M2 6 h20 v14 H2 Z M2 6 L12 13 L22 6", label: "CONTACT",    href: "/contact" },
];

const GOLD = "#c9a84c";
const GOLD_DIM = "#8b6914";
const SIDEBAR_BG = "#1a1008";

export default function Sidebar() {
  return (
    <aside style={{
      width: 220, minHeight: "100vh",
      backgroundColor: "#1a1008",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23t)' opacity='0.04'/%3E%3C/svg%3E")`,
      position: "fixed", left: 0, top: 0, zIndex: 50,
      display: "flex", flexDirection: "column",
      borderRight: `1.5px solid ${GOLD_DIM}`,
      overflowY: "auto", overflowX: "hidden",
    }}
    className="hidden lg:flex"
    >
      {/* Outer ornate border inset */}
      <div style={{ position: "absolute", inset: 5, border: "1px solid rgba(201,168,76,0.3)", pointerEvents: "none", zIndex: 10 }}>
        {/* Corner dots */}
        {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((pos,i)=>(
          <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:"1px solid #8b6914", backgroundColor: "#1a1008", ...pos }}/>
        ))}
      </div>

      <div style={{ padding: "28px 16px 20px", display:"flex", flexDirection:"column", alignItems:"center", flex:1, position:"relative", zIndex:1 }}>

        {/* Logo */}
        <Link href="/" style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom: 20, textDecoration:"none" }}>
          <div style={{ position:"relative", width:88, height:88, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ position:"absolute" }}><WreathSVG /></div>
            <ShieldLockSVG />
          </div>
          <div style={{
            fontFamily: "'Cinzel', serif", fontWeight: 700,
            fontSize: 14, letterSpacing: "3px", color: GOLD,
            textAlign:"center", marginTop: 6, lineHeight: 1.4,
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
          }}>CODEX<br/>SECURITAS</div>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:9, letterSpacing:"4px", color: "#7a5e2a", marginTop:4 }}>
            CYBERSECURITY CLUB
          </div>
        </Link>

        {/* Divider */}
        <div style={{ width:"100%", height:1, background:`linear-gradient(to right, transparent, ${GOLD_DIM}, transparent)`, margin:"6px 0 18px" }}/>

        {/* Navigation */}
        <nav style={{ width:"100%", flex:1 }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} style={{
              display:"flex", alignItems:"center", gap:10,
              padding:"9px 12px", textDecoration:"none",
              transition:"all 0.2s ease",
              borderRadius: 2,
            }}
            className="sidebar-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                <path d={item.icon}/>
              </svg>
              <span style={{
                fontFamily:"'Cinzel',serif", fontSize:10, fontWeight:600,
                letterSpacing:"2px", color: GOLD, opacity: 0.85, textTransform:"uppercase",
              }}>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ width:"100%", height:1, background:`linear-gradient(to right, transparent, ${GOLD_DIM}, transparent)`, margin:"16px 0" }}/>

        {/* Event Details box */}
        <div style={{
          width:"100%", border:`1px solid ${GOLD_DIM}`,
          padding:"18px 14px 14px", position:"relative", marginBottom:16,
        }}>
          {/* Inner corners */}
          <div style={{ position:"absolute", top:4, left:4, width:8, height:8, borderTop:`1px solid ${GOLD_DIM}`, borderLeft:`1px solid ${GOLD_DIM}` }}/>
          <div style={{ position:"absolute", top:4, right:4, width:8, height:8, borderTop:`1px solid ${GOLD_DIM}`, borderRight:`1px solid ${GOLD_DIM}` }}/>
          <div style={{ position:"absolute", bottom:4, left:4, width:8, height:8, borderBottom:`1px solid ${GOLD_DIM}`, borderLeft:`1px solid ${GOLD_DIM}` }}/>
          <div style={{ position:"absolute", bottom:4, right:4, width:8, height:8, borderBottom:`1px solid ${GOLD_DIM}`, borderRight:`1px solid ${GOLD_DIM}` }}/>

          <div style={{
            position:"absolute", top:-9, left:"50%", transform:"translateX(-50%)",
            backgroundColor: SIDEBAR_BG, padding:"0 6px",
            fontFamily:"'Cinzel',serif", fontSize:9, letterSpacing:"2px", color: GOLD, whiteSpace:"nowrap",
          }}>EVENT DETAILS</div>

          <div style={{ height:1, background:`linear-gradient(to right, transparent, ${GOLD_DIM}, transparent)`, marginBottom:14 }}/>

          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:10, color: GOLD, letterSpacing:"1px" }}>25 - 27 JULY, 2025</span>
          </div>
          <div style={{ display:"flex", alignItems:"flex-start", gap:8 }}>
            <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.5" style={{ flexShrink:0, marginTop:2 }}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:9, color: GOLD, letterSpacing:"1px", lineHeight:1.6, opacity:0.9 }}>
              TECHNOLOGY BLOCK<br/>AUDITORIUM<br/>JAIPUR, RAJASTHAN
            </span>
          </div>
        </div>

        {/* Follow Us */}
        <div style={{ width:"100%", textAlign:"center", marginBottom:20 }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:9, letterSpacing:"3px", color: GOLD, marginBottom:10, opacity:0.8 }}>FOLLOW US</div>
          <div style={{ display:"flex", justifyContent:"center", gap:8 }}>
            {[
              "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
              "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5 A.5.5 0 1 1 17 6 A.5.5 0 0 1 17.5 6.5z",
              "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
              "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
            ].map((path, i) => (
              <a key={i} href="#" style={{
                width:28, height:28, borderRadius:"50%",
                border:`1px solid ${GOLD_DIM}`, display:"flex", alignItems:"center", justifyContent:"center",
                backgroundColor: "transparent", transition:"all 0.2s ease", textDecoration:"none",
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={GOLD_DIM} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={path}/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quote Scroll */}
        <div style={{ width:"100%", position:"relative", marginBottom:24 }}>
          {/* Scroll rod top */}
          <div style={{ height:12, background:"linear-gradient(to bottom, #d5bc94, #a88a5d)", borderRadius:6, border:"1.5px solid #a88a5d", marginBottom:-2, boxShadow:"0 4px 6px rgba(0,0,0,0.6)" }}/>
          {/* Parchment */}
          <div style={{
            backgroundColor:"#e8d9b0",
            backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E")`,
            padding:"14px 14px 18px",
            borderLeft:"2px solid #a88a5d", borderRight:"2px solid #a88a5d",
            boxShadow:"inset 0 0 20px rgba(139,101,51,0.4)",
            position:"relative",
          }}>
            <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:12, lineHeight:1.8, textAlign:"center", color:"#3d2b0e", opacity:0.9 }}>
              "The greatest security lies in knowledge, vigilance, and innovation."
            </p>
            {/* Wax seal */}
            <div style={{
              position:"absolute", bottom:-16, right:-6,
              width:36, height:36, borderRadius:"50%",
              background:"radial-gradient(circle at top left, #b03030, #5a1010)",
              border:"2px solid #3a0a0a",
              boxShadow:"3px 5px 10px rgba(0,0,0,0.8)",
              display:"flex", alignItems:"center", justifyContent:"center", zIndex:10,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                <path d="M12 3L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9Z"/>
              </svg>
            </div>
          </div>
          {/* Scroll rod bottom */}
          <div style={{ height:12, background:"linear-gradient(to bottom, #a88a5d, #d5bc94)", borderRadius:6, border:"1.5px solid #a88a5d", marginTop:-2, boxShadow:"0 -2px 6px rgba(0,0,0,0.5)" }}/>
        </div>

        {/* Building illustration */}
        <div style={{ width:"100%", position:"relative", overflow:"hidden", height:110, marginTop:"auto", opacity:0.35 }}>
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
      </div>

      <style>{`
        .sidebar-link:hover span { opacity: 1 !important; color: #e8c96a !important; }
        .sidebar-link:hover { background: rgba(201,168,76,0.07); }
      `}</style>
    </aside>
  );
}
