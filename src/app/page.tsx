import Link from "next/link";
import { C, PARCH_TEX, LEATHER_TEX, SectionHeading, HighlightCard, GoldBtn } from "@/lib/design";

/* ── Inline SVG Icons ──────────────────────────────────────── */
function Icon({ d, size=46 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={C.gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d}/>
    </svg>
  );
}

/* ── Timeline node ─────────────────────────────────────────── */
function TNode({ day, date, desc, iconD }: { day:string; date:string; desc:string; iconD:string }) {
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", position:"relative", zIndex:1 }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700, letterSpacing:"2px", color:C.goldDk }}>{day}</div>
      {date && <div style={{ fontFamily:"'Cinzel',serif", fontSize:10, color:C.goldMuted, marginBottom:10 }}>{date}</div>}
      {!date && <div style={{ marginBottom:10 }}/>}
      <div style={{
        width:44, height:44, borderRadius:"50%",
        backgroundColor:"#1c1409",
        border:"2px solid #c9a84c",
        boxShadow:"0 0 0 5px #f0e6c8, 0 0 0 6px #8b6914",
        display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12, position:"relative", zIndex:2,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" strokeLinecap="round">
          <path d={iconD}/>
        </svg>
      </div>
      <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color:C.bodyText, lineHeight:1.5, maxWidth:120 }}>{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{
        width:"100%", minHeight:520, position:"relative", overflow:"hidden",
        backgroundColor:"#1c1209",
        backgroundImage:LEATHER_TEX,
        backgroundBlendMode:"multiply",
        border:`2px solid ${C.goldDk}`,
        display:"flex",
        marginBottom:52,
      }}>
        {/* Outer ornate frame */}
        <div style={{ position:"absolute", inset:7, border:`1px solid rgba(139,105,20,0.5)`, pointerEvents:"none" }}>
          {([{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}] as any[]).map((pos,i)=>(
            <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:`1.5px solid ${C.goldDk}`, backgroundColor:"#1c1209", ...pos }}/>
          ))}
          {/* 40px filigree corners */}
          {[
            {top:6,left:6,  bt:"borderTop",  bl:"borderLeft"},
            {top:6,right:6, bt:"borderTop",  bl:"borderRight"},
            {bottom:6,left:6,  bt:"borderBottom", bl:"borderLeft"},
            {bottom:6,right:6, bt:"borderBottom", bl:"borderRight"},
          ].map((c,i) => {
            const {bt,bl,...pos}=c;
            return <div key={i} style={{ position:"absolute", width:36, height:36, [bt]:`2px solid ${C.gold}`, [bl]:`2px solid ${C.gold}`, ...pos }}/>;
          })}
        </div>

        {/* Top-right circuit board faint overlay */}
        <div style={{
          position:"absolute", top:0, right:0, width:"55%", height:"60%",
          backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20M40 60H30M40 60v20M40 80H30M90 30h20M90 30v30M90 60H70' stroke='%23c9a84c' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='30' cy='60' r='2.5' fill='%23c9a84c' opacity='0.6'/%3E%3Ccircle cx='60' cy='40' r='2.5' fill='%23c9a84c' opacity='0.6'/%3E%3C/svg%3E")`,
          opacity:0.05, pointerEvents:"none",
        }}/>

        {/* Castle illustration (right side) */}
        <div style={{
          position:"absolute", top:0, right:0, bottom:0, width:"50%",
          backgroundImage:`url("https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700&q=60&auto=format&fit=crop")`,
          backgroundSize:"cover", backgroundPosition:"center top",
          filter:"sepia(1) contrast(1.3) brightness(0.35)",
          opacity: 0.8,
          maskImage:"linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
          WebkitMaskImage:"linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
        }}/>

        {/* Shield watermark top-right */}
        <div style={{ position:"absolute", top:16, right:24, opacity:0.06, pointerEvents:"none" }}>
          <svg width="190" height="190" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="0.5">
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            <rect x="9" y="12" width="6" height="5" rx="0.5"/>
            <path d="M10 12V10A2 2 0 0 1 14 10V12"/>
          </svg>
        </div>

        {/* Left content */}
        <div style={{ position:"relative", zIndex:2, padding:"52px 40px 48px 44px", maxWidth:520, display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <h1 style={{
            fontFamily:"'Cinzel',serif", fontWeight:900,
            fontSize:"clamp(52px, 6vw, 72px)", lineHeight:1.0,
            color:"#c9a84c", letterSpacing:"4px", textTransform:"uppercase",
            textShadow:"0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2), 0 2px 4px rgba(0,0,0,0.9)",
            margin:0, marginBottom:18,
          }}>
            LEGACY<br/>SECURED
          </h1>
          <p style={{ fontFamily:"'Cinzel',serif", fontSize:12, letterSpacing:"3px", color:C.gold, marginBottom:6, textTransform:"uppercase" }}>
            HONORING THE PAST. SECURING THE FUTURE.
          </p>
          <p style={{ fontFamily:"'Cinzel',serif", fontSize:10, letterSpacing:"3px", color:C.goldMuted, marginBottom:18, textTransform:"uppercase" }}>
            A TECH FEST BY CODEX SECURITAS
          </p>
          <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:16, color:C.parchmentLt, lineHeight:1.8, maxWidth:380, marginBottom:28 }}>
            Explore. Learn. Compete.<br/>Join us for an unforgettable journey into cybersecurity and technology.
          </p>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <GoldBtn>REGISTER NOW</GoldBtn>
            <Link href="/events" style={{ textDecoration:"none" }}>
              <GoldBtn outline>EXPLORE EVENTS</GoldBtn>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════ */}
      <section id="about" style={{ width:"100%", backgroundColor:C.parchmentLt, backgroundImage:PARCH_TEX, padding:"44px 32px", marginBottom:0, borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="About The Event" />
        <div style={{ display:"flex", gap:36, alignItems:"flex-start", flexWrap:"wrap" }}>
          {/* Sketch illustration */}
          <div style={{ flex:"0 0 200px", display:"flex", justifyContent:"center" }}>
            <svg width="190" height="210" viewBox="0 0 190 210" fill="none">
              {/* Book stack — 5 books with varying widths/colors */}
              <rect x="15" y="152" width="155" height="18" rx="2" fill="#8b6914" opacity="0.6" stroke="#c9a84c" strokeWidth="0.8"/>
              <rect x="25" y="136" width="140" height="18" rx="2" fill="#6b4c18" opacity="0.7" stroke="#c9a84c" strokeWidth="0.8"/>
              <rect x="10" y="120" width="160" height="18" rx="2" fill="#5c3d10" opacity="0.7" stroke="#c9a84c" strokeWidth="0.8"/>
              <rect x="30" y="104" width="130" height="18" rx="2" fill="#c9a84c" opacity="0.45" stroke="#c9a84c" strokeWidth="0.8"/>
              <rect x="20" y="88" width="145" height="18" rx="2" fill="#8b6914" opacity="0.5" stroke="#c9a84c" strokeWidth="0.8"/>
              {/* Book spines — vertical lines */}
              <line x1="15" y1="152" x2="15" y2="170" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5"/>
              <line x1="25" y1="136" x2="25" y2="154" stroke="#c9a84c" strokeWidth="0.5" opacity="0.5"/>
              {/* Quill pen */}
              <path d="M130 30 C160 10,175 30,160 70 C148 95,134 110,122 122 L116 104 C130 90,145 68,136 50 Z" fill="#8b6914" opacity="0.4" stroke="#c9a84c" strokeWidth="0.7"/>
              <line x1="122" y1="122" x2="108" y2="155" stroke="#8b6914" strokeWidth="1.2" opacity="0.5"/>
              {/* Ink bottle */}
              <rect x="42" y="158" width="24" height="34" rx="2" fill="#3d2b0e" opacity="0.65" stroke="#c9a84c" strokeWidth="0.8"/>
              <rect x="47" y="152" x2="14" height="10" rx="1" fill="#c9a84c" opacity="0.4"/>
              <ellipse cx="54" cy="158" rx="8" ry="4" fill="#c9a84c" opacity="0.3"/>
              {/* Padlock */}
              <rect x="128" y="148" width="22" height="17" rx="1.5" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
              <path d="M131 148V144A6 6 0 0 1 147 144V148" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
              <circle cx="139" cy="157" r="3" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
              <line x1="139" y1="157" x2="139" y2="161" stroke="#c9a84c" strokeWidth="1.2"/>
            </svg>
          </div>

          <div style={{ flex:1, minWidth:240 }}>
            <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:C.bodyText, lineHeight:1.8, marginBottom:32 }}>
              Codex Securitas presents its annual tech fest focused on cybersecurity and emerging technologies. A platform to learn, collaborate, and compete in an ever-evolving digital world.
            </p>
            <div style={{ borderTop:`1px solid ${C.gold}`, paddingTop:28, display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
              {[
                { d:"M12 3L20 6V11C20 16,16 19,12 21C8 19,4 16,4 11V6Z M8 13l2 2 5-5", label:"LEARN",    cap:"Gain knowledge from experts" },
                { d:"M17 20C17 17,14.5 15,12 15C9.5 15,7 17,7 20 M4 20C4 18,6 16,7 15.5 M20 20C20 18,18 16,17 15.5 M12 12A4 4 0 1 1 12 4A4 4 0 0 1 12 12", label:"NETWORK",  cap:"Connect with like-minded people" },
                { d:"M12 2L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9Z",       label:"COMPETE",  cap:"Solve challenges and win rewards" },
                { d:"M9 18h6M12 2v2M12 18v2M12 6a6 6 0 0 1 0 12 6 6 0 0 1 0-12z", label:"INNOVATE", cap:"Build solutions for tomorrow" },
              ].map(f=>(
                <div key={f.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", padding:"0 4px" }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8b6914" strokeWidth="1.3" strokeLinecap="round" style={{ marginBottom:8 }}>
                    <path d={f.d}/>
                  </svg>
                  <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700, color:"#8b6914", letterSpacing:"1px", marginBottom:6 }}>{f.label}</div>
                  <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color:"#3d2b0e", lineHeight:1.5 }}>{f.cap}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          EVENT HIGHLIGHTS
      ══════════════════════════════════ */}
      <section id="highlights" style={{ width:"100%", backgroundColor:C.parchment, backgroundImage:PARCH_TEX, padding:"44px 24px", borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="Event Highlights" />
        <div style={{ display:"flex", gap:12, flexWrap:"nowrap", overflowX:"auto" }}>
          {[
            { d:"M3 3h8v8H3z M13 3h8v8h-8z M3 13h8v8H3z M17 17h.01", title:"CTF CHALLENGE",  desc:"Test your hacking skills in our Capture The Flag competition." },
            { d:"M16 18l6-6-6-6 M8 6l-6 6 6 6", title:"WORKSHOPS",      desc:"Hands-on sessions on tools, techniques and technologies." },
            { d:"M12 2A4 4 0 0 1 16 6V12A4 4 0 0 1 8 12V6A4 4 0 0 1 12 2Z M8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12 M12 16V22 M8 22H16", title:"TECH TALKS",      desc:"Insightful talks by industry experts on latest trends." },
            { d:"M12 9A4 4 0 1 1 12 17A4 4 0 1 1 12 9Z M12 5V9 M5 12H9 M15 12H19 M7 7L9 9 M15 9L17 7 M7 17L9 15 M15 15L17 17",       title:"BUG BOUNTY",      desc:"Find vulnerabilities and earn exciting rewards." },
            { d:"M14.5 9.5L19 5 M5 19l4.5-4.5 M5 5l14 14 M9.5 9.5L5 5 M19 19l-4.5-4.5",                       title:"CYBER ARENA",     desc:"Compete, collaborate & conquer in the ultimate cyber arena." },
          ].map(c=>(
            <HighlightCard key={c.title} icon={<Icon d={c.d} size={52}/>} title={c.title} desc={c.desc}/>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          EVENT SCHEDULE
      ══════════════════════════════════ */}
      <section id="schedule" style={{ width:"100%", backgroundColor:C.parchmentLt, backgroundImage:PARCH_TEX, padding:"44px 24px", borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="Event Schedule" />
        <div style={{ border:`1px solid ${C.gold}`, padding:"32px 24px", position:"relative" }}>
          <div style={{ position:"relative" }}>
            {/* Connecting line */}
            <div style={{ position:"absolute", top:52, left:"12.5%", right:"12.5%", height:2, backgroundColor:C.gold, zIndex:0 }}/>
            <div style={{ display:"flex", gap:8 }}>
              {[
                { day:"DAY 1", date:"25 JULY", desc:"Inauguration & Keynote Session",   iconD:"M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z" },
                { day:"DAY 2", date:"26 JULY", desc:"Workshops & CTF Qualifiers",        iconD:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3" },
                { day:"DAY 3", date:"27 JULY", desc:"Finals, Talks & Closing Ceremony",  iconD:"M12 2L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9Z" },
                { day:"ALL DAYS", date:"",     desc:"Exhibitions & Cyber Arena",          iconD:"M17 20C17 17,14.5 15,12 15C9.5 15,7 17,7 20 M4 20C4 18,6 16,7 15.5 M12 12A4 4 0 1 1 12 4" },
              ].map(n=><TNode key={n.day} {...n}/>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CTA BANNER
      ══════════════════════════════════ */}
      <section style={{
        width:"100%", backgroundColor:"#2a1a06", backgroundImage:LEATHER_TEX,
        borderTop:`1px solid ${C.goldDk}`,
        padding:"44px 32px", textAlign:"center", position:"relative", overflow:"hidden",
      }}>
        {/* Inset frame */}
        <div style={{
          position: "absolute", inset: 8,
          border: "1px solid rgba(139,105,20,0.45)",
          pointerEvents: "none"
        }}>
          {/* 4 corner L-brackets */}
          <div style={{ position:"absolute", top:6, left:6, width:20, height:20, borderTop:"1.5px solid #c9a84c", borderLeft:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", top:6, right:6, width:20, height:20, borderTop:"1.5px solid #c9a84c", borderRight:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", bottom:6, left:6, width:20, height:20, borderBottom:"1.5px solid #c9a84c", borderLeft:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", bottom:6, right:6, width:20, height:20, borderBottom:"1.5px solid #c9a84c", borderRight:"1.5px solid #c9a84c" }}/>
          {/* 4 corner dot ornaments */}
          {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((p,i) => (
            <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:"1px solid #8b6914", backgroundColor:"#2a1a06", ...p }}/>
          ))}
        </div>
        {/* Decorative shield left */}
        <div style={{ position:"absolute", left:20, top:"50%", transform:"translateY(-50%)", opacity:0.12, pointerEvents:"none" }}>
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="0.6">
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            <rect x="9" y="12" width="6" height="5" rx="0.5"/>
            <path d="M10 12V10A2 2 0 0 1 14 10V12"/>
          </svg>
        </div>
        {/* Decorative circuit right */}
        <div style={{ position:"absolute", right:20, top:"50%", transform:"translateY(-50%)", opacity:0.12, pointerEvents:"none" }}>
          <svg width="90" height="90" viewBox="0 0 120 120" fill="none" stroke={C.gold} strokeWidth="0.8">
            <path d="M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20M40 60H30"/>
            <circle cx="30" cy="60" r="3" fill={C.gold}/>
            <circle cx="60" cy="40" r="3" fill={C.gold}/>
          </svg>
        </div>
        <div style={{ position:"relative", zIndex:1 }}>
          <p style={{ fontFamily:"'Cinzel',serif", fontSize:12, letterSpacing:"4px", color:C.gold, marginBottom:12, textTransform:"uppercase" }}>
            THREE DAYS. ENDLESS KNOWLEDGE. ONE LEGACY.
          </p>
          <h2 style={{
            fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:"clamp(22px,3vw,36px)",
            letterSpacing:"2px", color:C.gold, textTransform:"uppercase",
            textShadow:`0 0 20px rgba(201,168,76,0.25)`, marginBottom:28,
          }}>
            BE A PART OF THE LEGACY.
          </h2>
          <GoldBtn>REGISTER NOW</GoldBtn>
        </div>
      </section>
    </>
  );
}
