"use client";
/* ── Shared inline-style constants used across all page files ─── */

export const C = {
  sidebar:      "#1a1008",
  parchment:    "#e8d9b0",
  parchmentLt:  "#f0e6c8",
  parchmentDk:  "#d4c090",
  gold:         "#c9a84c",
  goldDk:       "#8b6914",
  goldMuted:    "#a08030",
  cardBg:       "#1c1409",
  footerBg:     "#2a1a06",
  bodyText:     "#3d2b0e",
  lightText:    "#f5e6c8",
  waxSeal:      "#8b1a1a",
} as const;

/* Parchment texture SVG (data URI) */
export const PARCH_TEX = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`;

export const LEATHER_TEX = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23t)' opacity='0.07'/%3E%3C/svg%3E")`;

/* ── Re-usable component helpers ────────────────────────────── */

/** — SECTION HEADING — with extending gold rules */
export function SectionHeading({ text }: { text: string }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:32, width:"100%" }}>
      <div style={{ display:"flex", alignItems:"center", gap:16, width:"100%" }}>
        <div style={{ flex:1, height:1, background:`linear-gradient(to right, transparent, ${C.goldDk})` }}/>
        <span style={{
          fontFamily:"'Cinzel',serif", fontSize:"clamp(13px, 4vw, 16px)", fontWeight:700,
          letterSpacing:"3px", color:C.goldDk, textTransform:"uppercase", textAlign:"center",
          whiteSpace: "normal", wordWrap: "break-word"
        }}>— {text} —</span>
        <div style={{ flex:1, height:1, background:`linear-gradient(to left, transparent, ${C.goldDk})` }}/>
      </div>
      <div style={{ width:8, height:8, backgroundColor:C.goldDk, transform:"rotate(45deg)", marginTop:10 }}/>
    </div>
  );
}

/** Ornate page hero banner (dark, text-only) */
export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{
      width:"100%", height:200, position:"relative", overflow:"hidden",
      backgroundColor:"#1c1209",
      backgroundImage:LEATHER_TEX,
      border:`2px solid ${C.goldDk}`,
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      marginBottom:48,
    }}>
      {/* Ornate inner border */}
      <div style={{ position:"absolute", inset:7, border:`1px solid rgba(139,105,20,0.5)`, pointerEvents:"none" }}>
        {([{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}] as Record<string,number>[]).map((pos,i)=>(
          <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:`1.5px solid ${C.goldDk}`, backgroundColor:"#1c1209", ...pos }}/>
        ))}
        {/* Corner L-brackets */}
        <div style={{ position:"absolute", top:6, left:6,   width:18, height:18, borderTop:`1.5px solid ${C.gold}`, borderLeft:`1.5px solid ${C.gold}` }}/>
        <div style={{ position:"absolute", top:6, right:6,  width:18, height:18, borderTop:`1.5px solid ${C.gold}`, borderRight:`1.5px solid ${C.gold}` }}/>
        <div style={{ position:"absolute", bottom:6, left:6,  width:18, height:18, borderBottom:`1.5px solid ${C.gold}`, borderLeft:`1.5px solid ${C.gold}` }}/>
        <div style={{ position:"absolute", bottom:6, right:6, width:18, height:18, borderBottom:`1.5px solid ${C.gold}`, borderRight:`1.5px solid ${C.gold}` }}/>
      </div>
      <h1 style={{
        fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:"clamp(32px, 8vw, 52px)",
        color:C.gold, letterSpacing:"3px", textTransform:"uppercase", textAlign:"center",
        textShadow:`0 0 30px rgba(201,168,76,0.3)`, padding:"0 16px",
        position:"relative", zIndex:1, lineHeight:1.1,
      }}>{title}</h1>
      <div style={{ width:120, height:1, background:C.goldDk, margin:"12px 0 10px", position:"relative", zIndex:1 }}/>
      <p style={{
        fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px, 4vw, 18px)",
        color:C.lightText, position:"relative", zIndex:1, opacity:0.85, textAlign:"center",
        padding:"0 20px"
      }}>{subtitle}</p>
    </div>
  );
}

/** Dark leather highlight card */
export function HighlightCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div style={{
      flex:"1 1 0", minWidth:150,
      backgroundColor:C.cardBg,
      backgroundImage:LEATHER_TEX,
      border:`1.5px solid ${C.gold}`,
      padding:"26px 14px 38px",
      textAlign:"center", position:"relative",
      transition:"all 0.2s ease", cursor:"default",
    }}
    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.cssText+="box-shadow:0 0 20px rgba(201,168,76,0.25);transform:translateY(-2px)"}}
    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.transform="none"}}
    >
      <div style={{ position: "absolute", inset: 6, border: "1px solid rgba(201,168,76,0.25)", pointerEvents: "none" }} />
      {/* corner micro-brackets */}
      {["tl","tr","bl","br"].map(c=>(
        <div key={c} style={{
          position:"absolute",
          top:   c.startsWith("t") ? 5 : "auto",
          bottom:c.startsWith("b") ? 5 : "auto",
          left:  c.endsWith("l")   ? 5 : "auto",
          right: c.endsWith("r")   ? 5 : "auto",
          width:10, height:10,
          borderTop:    c.startsWith("t") ? `1px solid ${C.goldDk}` : "none",
          borderBottom: c.startsWith("b") ? `1px solid ${C.goldDk}` : "none",
          borderLeft:   c.endsWith("l")   ? `1px solid ${C.goldDk}` : "none",
          borderRight:  c.endsWith("r")   ? `1px solid ${C.goldDk}` : "none",
        }}/>
      ))}
      <div style={{ color:C.gold, display:"flex", justifyContent:"center", marginBottom:12 }}>{icon}</div>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:12, fontWeight:700, letterSpacing:"2px", color:C.gold, textTransform:"uppercase", marginBottom:8 }}>{title}</div>
      <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color:C.gold, opacity:0.75, lineHeight:1.6 }}>{desc}</p>
      <div style={{ position:"absolute", bottom:10, left:"50%", transform:"translateX(-50%)" }}>
        <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke={C.goldDk} strokeWidth="1.5">
          <rect x="5" y="11" width="14" height="11" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>
        </svg>
      </div>
    </div>
  );
}

/** Gold primary button */
export function GoldBtn({
  children, outline=false, href, onClick, type="button"
}: {
  children: React.ReactNode;
  outline?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) {
  const style: React.CSSProperties = {
    fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700,
    letterSpacing:"2px", textTransform:"uppercase",
    padding:"12px 28px",
    border:`1.5px solid ${C.gold}`,
    color:C.gold,
    backgroundColor: outline ? "transparent" : "rgba(42,26,6,0.9)",
    cursor:"pointer",
    transition:"all 0.2s ease",
    borderRadius:0,
    textDecoration:"none",
    display:"inline-block",
  };
  const hoverIn  = (e: React.MouseEvent<HTMLElement>) => { const el=e.currentTarget; el.style.backgroundColor="rgba(201,168,76,0.12)"; el.style.boxShadow="0 0 16px rgba(201,168,76,0.3)"; };
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => { const el=e.currentTarget; el.style.backgroundColor=outline?"transparent":"rgba(42,26,6,0.9)"; el.style.boxShadow="none"; };
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
        style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</a>
    );
  }
  return (
    <button type={type} style={style} onClick={onClick}
      onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</button>
  );
}
