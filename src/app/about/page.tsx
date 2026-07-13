import { C, PARCH_TEX, LEATHER_TEX, SectionHeading, PageHero, GoldBtn } from "@/lib/design";

function StatBox({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ flex:1, textAlign:"center", padding:"0 16px", borderRight:`1px solid ${C.goldDk}` }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:48, color:C.gold, lineHeight:1 }}>{num}</div>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"3px", color:C.goldMuted, marginTop:8 }}>{label}</div>
    </div>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <div style={{ backgroundColor:C.cardBg, backgroundImage:LEATHER_TEX, border:`1px solid ${C.gold}`, padding:"20px 16px", textAlign:"center", position:"relative" }}>
      {/* Corner brackets */}
      {["tl","tr","bl","br"].map(c=>(
        <div key={c} style={{ position:"absolute",
          top:c.startsWith("t")?5:"auto", bottom:c.startsWith("b")?5:"auto",
          left:c.endsWith("l")?5:"auto", right:c.endsWith("r")?5:"auto",
          width:8, height:8,
          borderTop:c.startsWith("t")?`1px solid ${C.goldDk}`:"none",
          borderBottom:c.startsWith("b")?`1px solid ${C.goldDk}`:"none",
          borderLeft:c.endsWith("l")?`1px solid ${C.goldDk}`:"none",
          borderRight:c.endsWith("r")?`1px solid ${C.goldDk}`:"none",
        }}/>
      ))}
      {/* Avatar */}
      <div style={{ width:80, height:80, borderRadius:"50%", border:`2px solid ${C.gold}`, margin:"0 auto 12px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#2a1a06" }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11A4 4 0 1 0 12 3a4 4 0 0 0 0 8z"/>
        </svg>
      </div>
      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:13, color:C.gold, letterSpacing:"1px", marginBottom:4 }}>{name}</div>
      <div style={{ height:1, background:C.goldDk, margin:"8px 0" }}/>
      <div style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:13, color:C.goldMuted }}>{role}</div>
      <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:10 }}>
        {["LI","TW","IG"].map(s=>(
          <div key={s} style={{ width:20, height:20, borderRadius:"50%", border:`1px solid ${C.goldDk}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:7, color:C.goldMuted }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="ABOUT US" subtitle="Honoring the past. Securing the future." />

      {/* Our Story */}
      <section style={{ width:"100%", display:"flex", gap:40, marginBottom:52, flexWrap:"wrap" }}>
        {/* Illustration */}
        <div style={{ flex:"0 0 220px" }}>
          <svg width="220" height="260" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Scholar figure */}
            <circle cx="110" cy="50" r="24" fill="none" stroke={C.goldDk} strokeWidth="1"/>
            <path d="M70 130 C70 100,90 85,110 85 C130 85,150 100,150 130" fill="none" stroke={C.goldDk} strokeWidth="1"/>
            <line x1="110" y1="109" x2="110" y2="145" stroke={C.goldDk} strokeWidth="0.8"/>
            <line x1="110" y1="120" x2="88" y2="138" stroke={C.goldDk} strokeWidth="0.8"/>
            <line x1="110" y1="120" x2="132" y2="138" stroke={C.goldDk} strokeWidth="0.8"/>
            {/* Books */}
            <rect x="30" y="180" width="160" height="16" rx="1" fill={C.goldDk} opacity="0.5" stroke={C.goldDk} strokeWidth="0.7"/>
            <rect x="40" y="165" width="140" height="16" rx="1" fill="#6b4c18" opacity="0.55" stroke={C.goldDk} strokeWidth="0.7"/>
            <rect x="25" y="150" width="150" height="16" rx="1" fill="#5c3d10" opacity="0.6" stroke={C.goldDk} strokeWidth="0.7"/>
            {/* Circuit overlay faint */}
            <path d="M10 145 h15 M25 145 V130 M25 130 h20 M45 130 v20" stroke={C.gold} strokeWidth="0.4" opacity="0.3"/>
            <circle cx="25" cy="145" r="2" fill={C.gold} opacity="0.3"/>
            <circle cx="45" cy="130" r="2" fill={C.gold} opacity="0.3"/>
          </svg>
        </div>

        {/* Text */}
        <div style={{ flex:1, minWidth:260 }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"4px", color:C.gold, marginBottom:10, textTransform:"uppercase" }}>OUR STORY</div>
          <div style={{ width:40, height:2, backgroundColor:C.gold, marginBottom:16 }}/>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:26, color:C.gold, fontWeight:700, marginBottom:20, lineHeight:1.3 }}>
            Founded in the Spirit of Cyber Excellence
          </h2>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:C.bodyText, lineHeight:1.85, marginBottom:16 }}>
            AstraSec (SOCS) was born from a shared conviction — that the history of codes, ciphers, and secret knowledge is as ancient as civilization itself. We carry that legacy forward into the digital age.
          </p>
          <div style={{ borderLeft:`3px solid ${C.gold}`, paddingLeft:16, marginBottom:16 }}>
            <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:16, color:C.bodyText, lineHeight:1.85 }}>
              "From the Vigenère cipher to AES-256, every lock in history has had a keeper. We train the next generation of keepers."
            </p>
          </div>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:C.bodyText, lineHeight:1.85 }}>
            Our annual tech fest — Legacy Secured — brings together the brightest minds from across the country to learn, compete, and build the future of cybersecurity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ width:"100%", marginBottom:52 }}>
        <SectionHeading text="Mission & Vision" />
        <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
          {[
            { icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title:"OUR MISSION", body:"To cultivate a community of cyber-aware individuals who blend ancient wisdom of cryptography with modern security practices — preserving knowledge, protecting systems." },
            { icon:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6z", title:"OUR VISION",  body:"A future where cybersecurity is not just a profession but a heritage — passed down, refined, and honored by every generation of digital guardians that follows us." },
          ].map(card=>(
            <div key={card.title} style={{
              flex:1, minWidth:260,
              backgroundColor:C.cardBg, backgroundImage:LEATHER_TEX,
              border:`1.5px solid ${C.gold}`, padding:"32px 28px", position:"relative",
            }}>
              {["tl","tr","bl","br"].map(c=>(
                <div key={c} style={{ position:"absolute",
                  top:c.startsWith("t")?5:"auto", bottom:c.startsWith("b")?5:"auto",
                  left:c.endsWith("l")?5:"auto", right:c.endsWith("r")?5:"auto",
                  width:10, height:10,
                  borderTop:c.startsWith("t")?`1px solid ${C.goldDk}`:"none",
                  borderBottom:c.startsWith("b")?`1px solid ${C.goldDk}`:"none",
                  borderLeft:c.endsWith("l")?`1px solid ${C.goldDk}`:"none",
                  borderRight:c.endsWith("r")?`1px solid ${C.goldDk}`:"none",
                }}/>
              ))}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.2" strokeLinecap="round" style={{ marginBottom:16 }}>
                <path d={card.icon}/>
              </svg>
              <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:15, color:C.gold, letterSpacing:"2px", marginBottom:14 }}>{card.title}</div>
              <p style={{ fontFamily:"'EB Garamond',serif", fontSize:15, color:C.gold, opacity:0.8, lineHeight:1.75 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ width:"100%", backgroundColor:C.footerBg, backgroundImage:LEATHER_TEX, borderTop:`1px solid ${C.gold}`, borderBottom:`1px solid ${C.gold}`, padding:"32px 0", marginBottom:52 }}>
        <div style={{ display:"flex", maxWidth:900, margin:"0 auto" }}>
          {[["500+","MEMBERS"],["25+","EVENTS"],["10+","WORKSHOPS"],["3","YEARS"]].map(([n,l],i)=>(
            <StatBox key={l} num={n} label={l}/>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ width:"100%", marginBottom:52 }}>
        <SectionHeading text="Our Team" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))", gap:20 }}>
          {[
            { name:"Arjun Sharma",   role:"Club President" },
            { name:"Priya Gupta",    role:"Vice President" },
            { name:"Ravi Joshi",     role:"Technical Lead" },
            { name:"Neha Singh",     role:"Events Director" },
            { name:"Kabir Mehta",    role:"CTF Lead" },
            { name:"Aisha Khan",     role:"Design Head" },
          ].map(m=><TeamCard key={m.name} {...m}/>)}
        </div>
      </section>

      {/* CTA */}
      <section style={{ width:"100%", backgroundColor:C.footerBg, backgroundImage:LEATHER_TEX, border:`1.5px solid ${C.goldDk}`, padding:"40px", textAlign:"center", position:"relative" }}>
        <div style={{ position:"absolute", inset:7, border:`1px solid rgba(139,105,20,0.4)`, pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:28, color:C.gold, letterSpacing:"2px", textTransform:"uppercase", marginBottom:20 }}>
            JOIN THE LEGACY. BECOME A MEMBER.
          </h2>
          <GoldBtn>JOIN NOW</GoldBtn>
        </div>
      </section>
    </>
  );
}
