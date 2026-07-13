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
        {/* Decorative thin gold border inset */}
        <div style={{ position:"absolute", inset: 12, border:`1px solid rgba(201,168,76,0.3)`, pointerEvents:"none", zIndex:10 }}>
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
        <div style={{ padding: "48px clamp(36px, 8vw, 80px)", position:"relative", zIndex:2, maxWidth:600, display:"flex", flexDirection:"column", justifyContent:"center" }}>
          <h1 style={{
            fontFamily:"'Cinzel',serif", fontWeight:900,
            fontSize:"clamp(32px, 12vw, 72px)", lineHeight:1.0,
            color:"#c9a84c", letterSpacing:"3px", textTransform:"uppercase",
            textShadow:"0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2), 0 2px 4px rgba(0,0,0,0.9)",
            margin:0, marginBottom:18,
          }}>
            LEGACY<br/>SECURED
          </h1>
          <p style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(10px, 3vw, 12px)", letterSpacing:"2px", color:C.gold, marginBottom:6, textTransform:"uppercase" }}>
            HONORING THE PAST. SECURING THE FUTURE.
          </p>
          <p style={{ fontFamily:"'Cinzel',serif", fontSize:"clamp(9px, 2.5vw, 10px)", letterSpacing:"2px", color:C.goldMuted, marginBottom:18, textTransform:"uppercase" }}>
            A TECH FEST BY ASTRASEC — SOCS
          </p>
          <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:16, color:C.parchmentLt, lineHeight:1.8, maxWidth:380, marginBottom:28 }}>
            Explore. Learn. Compete.<br/>Join us for an unforgettable journey into cybersecurity and technology.
          </p>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <GoldBtn href="/contact">REGISTER NOW</GoldBtn>
            <GoldBtn href="/events" outline>EXPLORE EVENTS</GoldBtn>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", backgroundColor:C.parchmentLt, backgroundImage:PARCH_TEX, marginBottom:0, borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="About The Event" />
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:18, color:C.bodyText, lineHeight:1.9, marginBottom:32 }}>
            AstraSec presents its annual tech fest focused on cybersecurity and emerging technologies. A platform to <em>learn</em>, <em>collaborate</em>, and <em>compete</em> in an ever-evolving digital world.
          </p>
          <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:20, borderTop:`1px solid ${C.goldDk}`, paddingTop:32 }}>
            {[
              { icon:"M12 3L20 6V11C20 16,16 19,12 21C8 19,4 16,4 11V6Z", label:"LEARN",    cap:"Expert-led sessions" },
              { icon:"M17 20C17 17,14.5 15,12 15C9.5 15,7 17,7 20 M12 12A4 4 0 1 1 12 4", label:"NETWORK",  cap:"Connect & collaborate" },
              { icon:"M12 2L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9Z",       label:"COMPETE",  cap:"Win exciting prizes" },
              { icon:"M9 18h6M12 2v2M12 18v2M12 6a6 6 0 0 1 0 12",                          label:"INNOVATE", cap:"Build for tomorrow" },
            ].map(f=>(
              <div key={f.label} style={{ display:"flex", flexDirection:"column", alignItems:"center", minWidth:110 }}>
                <div style={{ width:48, height:48, borderRadius:"50%", border:`1px solid ${C.goldDk}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:10, backgroundColor:"rgba(139,101,51,0.08)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.goldDk} strokeWidth="1.4" strokeLinecap="round"><path d={f.icon}/></svg>
                </div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:10, fontWeight:700, color:C.goldDk, letterSpacing:"1.5px", marginBottom:4 }}>{f.label}</div>
                <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color:C.bodyText, lineHeight:1.5, textAlign:"center", maxWidth:100 }}>{f.cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT HIGHLIGHTS */}
      <section id="highlights" className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", backgroundColor:C.parchment, backgroundImage:PARCH_TEX, borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="Event Highlights" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:16 }}>
          {[
            { d:"M3 3h8v8H3z M13 3h8v8h-8z M3 13h8v8H3z M17 17h.01",     title:"CTF CHALLENGE",  desc:"Test your hacking skills in our Capture The Flag competition." },
            { d:"M16 18l6-6-6-6 M8 6l-6 6 6 6",                             title:"WORKSHOPS",      desc:"Hands-on sessions on tools, techniques and technologies." },
            { d:"M12 2A4 4 0 0 1 16 6V12A4 4 0 0 1 8 12V6A4 4 0 0 1 12 2Z M12 16V22 M8 22H16", title:"TECH TALKS", desc:"Insightful talks by industry experts on latest trends." },
            { d:"M12 9A4 4 0 1 1 12 17A4 4 0 1 1 12 9Z M12 5V9 M5 12H9 M15 12H19", title:"BUG BOUNTY", desc:"Find vulnerabilities and earn exciting rewards." },
            { d:"M14.5 9.5L19 5 M5 19l4.5-4.5 M5 5l14 14",                 title:"CYBER ARENA",    desc:"Compete, collaborate & conquer in the ultimate cyber arena." },
          ].map(c=>(
            <div key={c.title} style={{
              backgroundColor:C.cardBg, backgroundImage:LEATHER_TEX,
              border:`1px solid ${C.goldDk}`, padding:"24px 20px",
              position:"relative", textAlign:"center",
            }}>
              <div style={{ width:44, height:44, borderRadius:"50%", border:`1px solid ${C.gold}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", backgroundColor:"rgba(201,168,76,0.08)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.4" strokeLinecap="round"><path d={c.d}/></svg>
              </div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700, letterSpacing:"1.5px", color:C.gold, marginBottom:10 }}>{c.title}</div>
              <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color:C.lightText, opacity:0.8, lineHeight:1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          EVENT SCHEDULE
      ══════════════════════════════════ */}
      <section id="schedule" className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", backgroundColor:C.parchmentLt, backgroundImage:PARCH_TEX, borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="Event Schedule" />
        <div style={{ border:`1px solid ${C.gold}`, padding:"32px 24px", position:"relative" }}>
          <div style={{ position:"relative" }}>
            {/* Connecting line */}
            <div className="hidden md:block" style={{ position:"absolute", top:52, left:"12.5%", right:"12.5%", height:2, backgroundColor:C.gold, zIndex:0 }}/>
            <div className="flex flex-col md:flex-row gap-8">
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
      <section className="px-6 py-10 md:px-8 md:py-12" style={{
        width:"100%", backgroundColor:"#2a1a06", backgroundImage:LEATHER_TEX,
        borderTop:`1px solid ${C.goldDk}`,
        textAlign:"center", position:"relative", overflow:"hidden",
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
          <GoldBtn href="/contact">REGISTER NOW</GoldBtn>
        </div>
      </section>
    </>
  );
}
