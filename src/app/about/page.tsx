"use client";
import { C, LEATHER_TEX, SectionHeading, PageHero, GoldBtn } from "@/lib/design";

function StatBox({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ flex:1, textAlign:"center", padding:"0 16px", minWidth: 120 }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:48, color:"#0ea5e9", lineHeight:1 }}>{num}</div>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"3px", color:"#94a3b8", marginTop:8 }}>{label}</div>
    </div>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  const initials = name.split(" ").map(n => n[0]).join("");
  return (
    <div style={{ padding:"12px 8px", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center" }}>
      {/* Avatar Placeholder */}
      <div style={{ width:100, height:100, borderRadius:"50%", margin:"0 auto 16px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#0f172a", border:"1px solid #0ea5e9" }}>
        <span style={{ fontFamily:"'Cinzel',serif", fontSize:28, color:"#0ea5e9" }}>{initials}</span>
      </div>
      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:13, color:"#f0f6ff", letterSpacing:"1px", marginBottom:4 }}>{name}</div>
      <div style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:13, color:"#94a3b8", marginBottom:10 }}>{role}</div>
      <div style={{ display:"flex", justifyContent:"center", gap:10 }}>
        {[
          { l:"LI", href:"https://www.linkedin.com/company/society-of-cyber-security/" },
          { l:"GH", href:"https://github.com/Society-of-Cyber-Security" },
          { l:"IG", href:"https://www.instagram.com/socs_ru/" },
        ].map(s=>(
          <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" style={{
            width:22, height:22, borderRadius:"50%", border:"1px solid #8b6914",
            display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none",
            transition:"all 0.2s ease",
          }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="#c9a84c"; e.currentTarget.style.backgroundColor="rgba(201,168,76,0.1)";}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="#8b6914"; e.currentTarget.style.backgroundColor="transparent";}}
          >
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:7, color:"#5c4018", letterSpacing:"0.5px" }}>{s.l}</span>
          </a>
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
      <section className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", display:"flex", gap:40, marginBottom:52, flexWrap:"wrap", backgroundColor:"#0d1424" }}>
        {/* Illustration */}
        <div style={{ flex:"0 0 220px" }}>
          <svg width="220" height="260" viewBox="0 0 220 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Scholar figure */}
            <circle cx="110" cy="50" r="24" fill="none" stroke="#0ea5e9" strokeWidth="1"/>
            <path d="M70 130 C70 100,90 85,110 85 C130 85,150 100,150 130" fill="none" stroke="#0ea5e9" strokeWidth="1"/>
            <line x1="110" y1="109" x2="110" y2="145" stroke="#0ea5e9" strokeWidth="0.8"/>
            <line x1="110" y1="120" x2="88" y2="138" stroke="#0ea5e9" strokeWidth="0.8"/>
            <line x1="110" y1="120" x2="132" y2="138" stroke="#0ea5e9" strokeWidth="0.8"/>
            {/* Books */}
            <rect x="30" y="180" width="160" height="16" rx="1" fill="#0369a1" opacity="0.5" stroke="#0ea5e9" strokeWidth="0.7"/>
            <rect x="40" y="165" width="140" height="16" rx="1" fill="#075985" opacity="0.55" stroke="#0ea5e9" strokeWidth="0.7"/>
            <rect x="25" y="150" width="150" height="16" rx="1" fill="#0f172a" opacity="0.6" stroke="#0ea5e9" strokeWidth="0.7"/>
            {/* Circuit overlay faint */}
            <path d="M10 145 h15 M25 145 V130 M25 130 h20 M45 130 v20" stroke="#0ea5e9" strokeWidth="0.4" opacity="0.3"/>
            <circle cx="25" cy="145" r="2" fill="#0ea5e9" opacity="0.3"/>
            <circle cx="45" cy="130" r="2" fill="#0ea5e9" opacity="0.3"/>
          </svg>
        </div>

        {/* Text */}
        <div style={{ flex:1, minWidth:260 }}>
          <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"4px", color:"#0ea5e9", marginBottom:10, textTransform:"uppercase" }}>OUR STORY</div>
          <div style={{ width:40, height:2, backgroundColor:"#0ea5e9", marginBottom:16 }}/>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:26, color:"#f0f6ff", fontWeight:700, marginBottom:20, lineHeight:1.3 }}>
            Founded in the Spirit of Cyber Excellence
          </h2>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:"#94a3b8", lineHeight:1.85, marginBottom:16 }}>
            AstraSec (SOCS) was born from a shared conviction — that the history of codes, ciphers, and secret knowledge is as ancient as civilization itself. We carry that legacy forward into the digital age.
          </p>
          <div style={{ borderLeft:`3px solid #0ea5e9`, paddingLeft:16, marginBottom:16 }}>
            <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:16, color:"#94a3b8", lineHeight:1.85 }}>
              "From the Vigenère cipher to AES-256, every lock in history has had a keeper. We train the next generation of keepers."
            </p>
          </div>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:"#94a3b8", lineHeight:1.85 }}>
            Our annual tech fest — Legacy Secured — brings together the brightest minds from across the country to learn, compete, and build the future of cybersecurity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", marginBottom:52, backgroundColor:"#111827" }}>
        <SectionHeading text="Mission & Vision" variant="cyber" />
        <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
          {[
            { icon:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title:"OUR VISION", body:"To establish ASTRAsec as a premier cybersecurity platform bridging the gap between education, industry, and policy in India's digital security ecosystem." },
            { icon:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6z", title:"OUR MISSION",  body:"A future where cybersecurity is not just a profession but a heritage — passed down, refined, and honored by every generation of digital guardians that follows us." },
          ].map(card=>(
            <div key={card.title} style={{
              flex:1, minWidth:260,
              backgroundColor:"#0f172a",
              border:`1px solid rgba(14,165,233,0.2)`, padding:"32px 28px", position:"relative",
            }}>
              {["tl","tr","bl","br"].map(c=>(
                <div key={c} style={{ position:"absolute",
                  top:c.startsWith("t")?5:"auto", bottom:c.startsWith("b")?5:"auto",
                  left:c.endsWith("l")?5:"auto", right:c.endsWith("r")?5:"auto",
                  width:10, height:10,
                  borderTop:c.startsWith("t")?`1px solid rgba(14,165,233,0.4)`:"none",
                  borderBottom:c.startsWith("b")?`1px solid rgba(14,165,233,0.4)`:"none",
                  borderLeft:c.endsWith("l")?`1px solid rgba(14,165,233,0.4)`:"none",
                  borderRight:c.endsWith("r")?`1px solid rgba(14,165,233,0.4)`:"none",
                }}/>
              ))}
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round" style={{ marginBottom:16 }}>
                <path d={card.icon}/>
              </svg>
              <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:15, color:"#f0f6ff", letterSpacing:"2px", marginBottom:14 }}>{card.title}</div>
              <p style={{ fontFamily:"'EB Garamond',serif", fontSize:15, color:"#94a3b8", opacity:0.8, lineHeight:1.75 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", marginBottom:52, backgroundColor:"#060b14" }}>
        <div style={{ display:"flex", flexWrap:"wrap", gap:16, maxWidth:900, margin:"0 auto", justifyContent:"space-between" }}>
          {[["50+","MEMBERS"],["10+","EVENTS"],["10+","WORKSHOPS"],["2","YEARS"]].map(([n,l],i)=>(
            <StatBox key={l} num={n} label={l}/>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-10 md:px-8 md:py-12 team-section-animate" style={{ width:"100%", marginBottom:80, backgroundColor:"#0d1424" }}>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .team-section-animate {
            animation: fadeInUp 1s ease-out forwards;
          }
        `}</style>
        <SectionHeading text="Our Team" variant="gold" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))", gap:20, maxWidth:1100, margin:"0 auto" }}>
          {[
            { name:"Rudra Pratap Singh Choudhary",   role:"Club President" },
            { name:"Antik Mondal",    role:"Vice President" },
            { name:"Mohammad affan anas",     role:"Technical Lead" },
            { name:"Prabhas",     role:"Events Director" },
            { name:"Utkarsh Singh",    role:"CTF Lead" },
            { name:"Abhishek Panigrahi",     role:"Design Head" },
          ].map(m=><TeamCard key={m.name} {...m}/>)}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        width:"100%", backgroundColor:"#060b14",
        borderTop:`1px solid #8b6914`,
        textAlign:"center", position:"relative", overflow:"hidden",
        padding:"64px 24px",
      }}>
        {/* Inset frame */}
        <div style={{
          position: "absolute", inset: 8,
          border: "1px solid rgba(201,168,76,0.3)",
          pointerEvents: "none",
          display: "flex", justifyContent: "center"
        }}>
          {/* Legend-style text overlapping top border */}
          <div style={{
            position: "absolute", top: -9,
            backgroundColor: "#060b14",
            padding: "0 16px",
            fontFamily: "'Cinzel',serif", fontSize: "clamp(9px, 2.5vw, 12px)", letterSpacing: "clamp(2px, 1vw, 4px)", color: "#c9a84c", textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            SOCIETY OF CYBERSECURITY CLUB
          </div>
          
          {/* 4 corner L-brackets */}
          <div style={{ position:"absolute", top:6, left:6, width:20, height:20, borderTop:"1.5px solid #c9a84c", borderLeft:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", top:6, right:6, width:20, height:20, borderTop:"1.5px solid #c9a84c", borderRight:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", bottom:6, left:6, width:20, height:20, borderBottom:"1.5px solid #c9a84c", borderLeft:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", bottom:6, right:6, width:20, height:20, borderBottom:"1.5px solid #c9a84c", borderRight:"1.5px solid #c9a84c" }}/>
          {/* 4 corner dot ornaments */}
          {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((p,i) => (
            <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:"1px solid #8b6914", backgroundColor:"#060b14", ...p }}/>
          ))}
        </div>
        {/* Decorative shield left */}
        <div style={{ position:"absolute", left:20, top:"50%", transform:"translateY(-50%)", opacity:0.1, pointerEvents:"none" }}>
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="0.6">
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            <rect x="9" y="12" width="6" height="5" rx="0.5"/>
            <path d="M10 12V10A2 2 0 0 1 14 10V12"/>
          </svg>
        </div>
        {/* Decorative circuit right */}
        <div style={{ position:"absolute", right:20, top:"50%", transform:"translateY(-50%)", opacity:0.1, pointerEvents:"none" }}>
          <svg width="90" height="90" viewBox="0 0 120 120" fill="none" stroke="#c9a84c" strokeWidth="0.8">
            <path d="M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20M40 60H30"/>
            <circle cx="30" cy="60" r="3" fill="#c9a84c"/>
            <circle cx="60" cy="40" r="3" fill="#c9a84c"/>
          </svg>
        </div>
        <div style={{ position:"relative", zIndex:1, paddingTop: 16 }}>
          <h2 style={{
            fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:"clamp(22px,3vw,32px)",
            letterSpacing:"2px", color:"#f0f6ff", textTransform:"uppercase",
            textShadow:`0 0 40px rgba(14,165,233,0.3)`, marginBottom:28,
          }}>
            JOIN THE LEGACY. BECOME A MEMBER.
          </h2>
          <GoldBtn href="/contact" variant="cyber">JOIN NOW</GoldBtn>
        </div>
      </section>
    </>
  );
}
