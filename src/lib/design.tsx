"use client";
/* ── Shared inline-style constants used across all page files ─── */

export const C = {
  // === BACKGROUNDS ===
  sidebar:       "#06090f",       // deepest navy-black for sidebar
  pageBg:        "#0a0f1e",       // main page background — deep navy
  sectionDark:   "#0d1424",       // slightly lighter dark section bg
  sectionMid:    "#111827",       // card/mid-dark bg
  cardBg:        "#0f172a",       // dark navy cards (replaces parchment cards)
  footerBg:      "#060b14",       // near-black footer

  // === GOLD — keep but reduce usage to accents only ===
  gold:          "#c9a84c",       // ornamental gold — borders, headings only
  goldDk:        "#8b6914",       // dim gold — dividers
  goldMuted:     "#a08030",       // very muted gold

  // === BLUE CYBER PALETTE (from logo) ===
  cyberBlue:     "#0ea5e9",       // electric sky blue — primary accent
  cyberBlueDk:   "#0369a1",       // darker blue for gradients
  cyberGlow:     "#38bdf8",       // bright glow blue for text-shadow
  cyberDim:      "#075985",       // very dim blue for subtle borders
  neonCyan:      "#22d3ee",       // cyan pop — CTAs, highlights

  // === TEXT ===
  headingText:   "#f0f6ff",       // near-white warm blue-white for headings
  bodyText:      "#94a3b8",       // steel blue-grey for body text
  mutedText:     "#475569",       // dim text for metadata
  lightText:     "#e2e8f0",       // light text on dark cards

  // === LEGACY (keep for ornaments only) ===
  parchment:     "#e8d9b0",       // ONLY used for sidebar scroll quote
  parchmentLt:   "#f0e6c8",       // ONLY used for sidebar scroll quote
  waxSeal:       "#8b1a1a",
} as const;

// Circuit board grid texture — subtle, dark navy surface
export const CIRCUIT_TEX = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20M40 60H30M40 60v20M40 80H30M90 30h20M90 30v30M90 60H70M70 60v30M70 90H50' stroke='%230ea5e9' stroke-width='0.4' fill='none' opacity='0.12'/%3E%3Ccircle cx='30' cy='60' r='2' fill='%230ea5e9' opacity='0.15'/%3E%3Ccircle cx='60' cy='40' r='2' fill='%230ea5e9' opacity='0.15'/%3E%3Ccircle cx='90' cy='60' r='2' fill='%230ea5e9' opacity='0.15'/%3E%3Ccircle cx='70' cy='90' r='2' fill='%230ea5e9' opacity='0.15'/%3E%3C/svg%3E")`;

// Keep LEATHER_TEX only for sidebar (unchanged)
export const LEATHER_TEX = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23t)' opacity='0.07'/%3E%3C/svg%3E")`;

// Hex grid overlay for hero sections
export const HEX_TEX = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92'%3E%3Cpolygon points='40,2 78,22 78,62 40,82 2,62 2,22' fill='none' stroke='%230ea5e9' stroke-width='0.3' opacity='0.08'/%3E%3C/svg%3E")`;


/* ── Re-usable component helpers ────────────────────────────── */

/** — SECTION HEADING — with extending rules */
export function SectionHeading({ text, variant = "gold" }: { text: string; variant?: "gold" | "cyber" }) {
  const color = variant === "cyber" ? "#0ea5e9" : "#c9a84c";
  const dimColor = variant === "cyber" ? "#0369a1" : "#8b6914";
  const glowColor = variant === "cyber" ? "rgba(14,165,233,0.6)" : "transparent";
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginBottom:32, width:"100%" }}>
      <div style={{ display:"flex", alignItems:"center", gap:16, width:"100%" }}>
        <div style={{ flex:1, height:1, background:`linear-gradient(to right, transparent, ${dimColor})` }}/>
        <span style={{
          fontFamily:"'Cinzel',serif", fontSize:"clamp(13px, 4vw, 16px)", fontWeight:700,
          letterSpacing:"3px", color, textTransform:"uppercase", textAlign:"center",
          textShadow: variant === "cyber" ? `0 0 20px ${glowColor}` : "none",
        }}><span style={{ color: variant==="cyber" ? "rgba(14,165,233,0.5)" : "rgba(201,168,76,0.4)", marginRight:8, fontFamily:"monospace", fontSize:"0.85em" }}>{'>_ '}</span>— {text} —</span>
        <div style={{ flex:1, height:1, background:`linear-gradient(to left, transparent, ${dimColor})` }}/>
      </div>
      <div style={{
        width:8, height:8, backgroundColor: color,
        transform:"rotate(45deg)", marginTop:10,
        boxShadow: variant === "cyber" ? `0 0 8px ${glowColor}` : "none",
      }}/>
    </div>
  );
}

/** Dark navy hero banner with blue glow & gold border */
export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{
      width:"100%", height:220, position:"relative", overflow:"hidden",
      backgroundColor:"#060b14",
      backgroundImage:`
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20M40 60H30M40 60v20M40 80H30' stroke='%230ea5e9' stroke-width='0.4' fill='none' opacity='0.1'/%3E%3Ccircle cx='30' cy='60' r='2' fill='%230ea5e9' opacity='0.12'/%3E%3Ccircle cx='60' cy='40' r='2' fill='%230ea5e9' opacity='0.12'/%3E%3C/svg%3E")`,
      border:`2px solid #8b6914`,
      display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
      marginBottom:48,
    }}>
      {/* Gold heritage inner border */}
      <div style={{ position:"absolute", inset:7, border:`1px solid rgba(139,105,20,0.4)`, pointerEvents:"none" }}>
        {/* 4 corner dots */}
        {([{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}] as any[]).map((pos,i)=>(
          <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:`1.5px solid #8b6914`, backgroundColor:"#060b14", ...pos }}/>
        ))}
        {/* Corner L-brackets — gold */}
        {[
          {top:6,left:6,bt:"borderTop",bl:"borderLeft"},
          {top:6,right:6,bt:"borderTop",bl:"borderRight"},
          {bottom:6,left:6,bt:"borderBottom",bl:"borderLeft"},
          {bottom:6,right:6,bt:"borderBottom",bl:"borderRight"},
        ].map((c,i)=>{
          const {bt,bl,...pos}=c;
          return <div key={i} style={{ position:"absolute", width:18, height:18, [bt]:`1.5px solid #c9a84c`, [bl]:`1.5px solid #c9a84c`, ...pos }}/>;
        })}
      </div>
      {/* Blue glow horizontal line above title */}
      <div style={{ width:120, height:1, background:"linear-gradient(to right, transparent, #0ea5e9, transparent)", marginBottom:14, position:"relative", zIndex:1 }}/>
      <h1 style={{
        fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:"clamp(32px, 8vw, 52px)",
        color:"#f0f6ff", letterSpacing:"4px", textTransform:"uppercase", textAlign:"center",
        textShadow:"0 0 30px rgba(14,165,233,0.4), 0 0 60px rgba(14,165,233,0.1)",
        padding:"0 16px", position:"relative", zIndex:1, lineHeight:1.1,
      }}>{title}</h1>
      <div style={{ width:120, height:1, background:"linear-gradient(to right, transparent, #0ea5e9, transparent)", margin:"14px 0 10px", position:"relative", zIndex:1 }}/>
      <p style={{
        fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:"clamp(14px, 4vw, 18px)",
        color:"#94a3b8", position:"relative", zIndex:1, textAlign:"center", padding:"0 20px",
      }}>{subtitle}</p>
    </div>
  );
}

/** Cyber highlight card */
export function HighlightCard({ icon, title, desc, delay="0s" }: { icon: React.ReactNode; title: string; desc: string; delay?: string }) {
  return (
    <div className="fade-in-up" style={{
      flex:"1 1 0", minWidth:150,
      backgroundColor:"#0f172a",
      border:`1px solid rgba(14,165,233,0.2)`,
      padding:"26px 14px 38px",
      textAlign:"center", position:"relative",
      transition:"all 0.2s ease", cursor:"default",
      animation: `floatUp 0.5s ease-out ${delay} forwards`,
      opacity: 0,
    }}
    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.cssText+="box-shadow:0 0 24px rgba(14,165,233,0.2);transform:translateY(-2px);border-color:rgba(14,165,233,0.5)"}}
    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.borderColor="rgba(14,165,233,0.2)"}}
    >
      {/* Gold inner frame — heritage ornament */}
      <div style={{ position:"absolute", inset:6, border:"1px solid rgba(201,168,76,0.1)", pointerEvents:"none" }}/>
      {/* Blue corner micro-brackets */}
      {["tl","tr","bl","br"].map(c=>(
        <div key={c} style={{
          position:"absolute",
          top:c.startsWith("t")?5:"auto", bottom:c.startsWith("b")?5:"auto",
          left:c.endsWith("l")?5:"auto", right:c.endsWith("r")?5:"auto",
          width:10, height:10,
          borderTop:c.startsWith("t")?"1px solid rgba(14,165,233,0.4)":"none",
          borderBottom:c.startsWith("b")?"1px solid rgba(14,165,233,0.4)":"none",
          borderLeft:c.endsWith("l")?"1px solid rgba(14,165,233,0.4)":"none",
          borderRight:c.endsWith("r")?"1px solid rgba(14,165,233,0.4)":"none",
        }}/>
      ))}
      <div style={{ color:"#0ea5e9", display:"flex", justifyContent:"center", marginBottom:12 }}>{icon}</div>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:12, fontWeight:700, letterSpacing:"2px", color:"#0ea5e9", textTransform:"uppercase", marginBottom:8 }}>{title}</div>
      <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color:"#94a3b8", lineHeight:1.6 }}>{desc}</p>
      {/* Gold lock ornament bottom */}
      <div style={{ position:"absolute", bottom:10, left:"50%", transform:"translateX(-50%)" }}>
        <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5">
          <rect x="5" y="11" width="14" height="11" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>
        </svg>
      </div>
    </div>
  );
}

/** Button with gold and cyber variants */
export function GoldBtn({
  children, outline=false, href, onClick, type="button", variant="gold"
}: {
  children: React.ReactNode;
  outline?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "gold" | "cyber";
}) {
  const isCyber = variant === "cyber";
  const borderColor = isCyber ? "#0ea5e9" : "#c9a84c";
  const textColor = isCyber ? "#0ea5e9" : "#c9a84c";
  const bgColor = isCyber ? "rgba(14,165,233,0.08)" : "rgba(42,26,6,0.9)";
  const hoverBg = isCyber ? "rgba(14,165,233,0.18)" : "rgba(201,168,76,0.12)";
  const hoverGlow = isCyber ? "0 0 20px rgba(14,165,233,0.4)" : "0 0 16px rgba(201,168,76,0.3)";
  const hoverBorderColor = isCyber ? "#c9a84c" : "#0ea5e9"; // swap on hover

  const style: React.CSSProperties = {
    fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700,
    letterSpacing:"2px", textTransform:"uppercase", padding:"12px 28px",
    border:`1.5px solid ${borderColor}`, color:textColor,
    backgroundColor: outline ? "transparent" : bgColor,
    cursor:"pointer", transition:"all 0.2s ease", borderRadius:0,
    textDecoration:"none", display:"inline-block",
  };
  const hoverIn  = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = hoverBg;
    e.currentTarget.style.boxShadow = hoverGlow;
    e.currentTarget.style.borderColor = hoverBorderColor;
  };
  const hoverOut = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.backgroundColor = outline ? "transparent" : bgColor;
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.borderColor = borderColor;
  };
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
         style={style} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</a>
    );
  }
  return (
    <button type={type} style={style} onClick={onClick} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>{children}</button>
  );
}
