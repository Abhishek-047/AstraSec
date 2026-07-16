"use client";
import { useEffect, useRef } from "react";
import { C, LEATHER_TEX, SectionHeading, PageHero, GoldBtn } from "@/lib/design";
import teamData from "../../../data/team.json";

function StatBox({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ flex:1, textAlign:"center", padding:"0 16px", minWidth: 120 }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:48, color:"#0ea5e9", lineHeight:1 }}>{num}</div>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"3px", color:"#94a3b8", marginTop:8 }}>{label}</div>
    </div>
  );
}

function TeamCard({ name, role, index, socials }: { name:string; role:string; index:number; socials?: { linkedin?: string; github?: string; instagram?: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const initials = name.split(" ").map((n:string) => n[0]).join("").slice(0,2).toUpperCase();

  const specialtyMap: Record<string,{tag:string; color:string}> = {
    "Club President":  { tag:"RED TEAM LEAD",  color:"#ef4444" },
    "Vice President":  { tag:"BLUE TEAM LEAD",  color:"#0ea5e9" },
    "Technical Lead":  { tag:"EXPLOIT DEV",     color:"#a855f7" },
    "Events Director": { tag:"OPS DIRECTOR",    color:"#f59e0b" },
    "CTF Lead":        { tag:"CTF MASTER",      color:"#22c55e" },
    "Design Head":     { tag:"OSINT ANALYST",   color:"#0ea5e9" },
  };
  const spec = specialtyMap[role] || { tag:"ANALYST", color:"#0ea5e9" };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#0f172a",
        border: "1px solid rgba(14,165,233,0.2)",
        padding: "28px 18px 22px",
        textAlign: "center", position: "relative",
        width: 200,
        flexShrink: 0,
        opacity: 1,
        transition: `box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease`,
        cursor: "default",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 0 28px rgba(14,165,233,0.15)";
        el.style.borderColor = "rgba(14,165,233,0.5)";
        el.style.transform = "translateY(-5px)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "rgba(14,165,233,0.2)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Corner L-brackets */}
      {["tl","tr","bl","br"].map(c => (
        <div key={c} style={{
          position:"absolute",
          top:    c.startsWith("t") ? 5 : "auto",
          bottom: c.startsWith("b") ? 5 : "auto",
          left:   c.endsWith("l")   ? 5 : "auto",
          right:  c.endsWith("r")   ? 5 : "auto",
          width: 10, height: 10,
          borderTop:    c.startsWith("t") ? "1px solid rgba(14,165,233,0.4)" : "none",
          borderBottom: c.startsWith("b") ? "1px solid rgba(14,165,233,0.4)" : "none",
          borderLeft:   c.endsWith("l")   ? "1px solid rgba(14,165,233,0.4)" : "none",
          borderRight:  c.endsWith("r")   ? "1px solid rgba(14,165,233,0.4)" : "none",
        }} />
      ))}

      {/* Avatar ring */}
      <div style={{
        width: 80, height: 80, borderRadius: "50%",
        margin: "0 auto 16px",
        backgroundColor: "#060b14",
        border: `2px solid ${spec.color}`,
        boxShadow: `0 0 0 4px #0f172a, 0 0 0 5px ${spec.color}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        {/* Dashed spinning orbit */}
        <div style={{
          position: "absolute", inset: -7, borderRadius: "50%",
          border: "1px dashed rgba(14,165,233,0.2)",
          animation: "spin 14s linear infinite",
        }} />
        <span style={{
          fontFamily: "'Cinzel',serif", fontSize: 22, fontWeight: 700,
          color: spec.color,
        }}>{initials}</span>
      </div>

      {/* Specialty tag */}
      <div style={{
        display: "inline-block",
        backgroundColor: `${spec.color}15`,
        border: `1px solid ${spec.color}50`,
        fontFamily: "'Cinzel',serif", fontSize: 8, letterSpacing: "2px",
        color: spec.color, padding: "3px 10px", marginBottom: 12,
        textTransform: "uppercase",
      }}>{spec.tag}</div>

      {/* Name */}
      <div style={{
        fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: 12,
        color: "#f0f6ff", letterSpacing: "0.5px", lineHeight: 1.4, marginBottom: 4,
      }}>{name}</div>

      {/* Role */}
      <div style={{
        fontFamily: "'EB Garamond',serif", fontStyle: "italic",
        fontSize: 13, color: "#94a3b8", marginBottom: 14,
      }}>{role}</div>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(to right, transparent, ${spec.color}40, transparent)`,
        marginBottom: 14,
      }} />

      {/* Social links */}
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {[
          { l:"LI", href: socials?.linkedin || "https://www.linkedin.com/company/society-of-cyber-security/",  d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
          { l:"GH", href: socials?.github || "https://github.com/Society-of-Cyber-Security",                  d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
          { l:"IG", href: socials?.instagram || "https://www.instagram.com/socs_ru/",                            d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z" },
        ].map(s => (
          <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{
              width: 28, height: 28, borderRadius: "50%",
              border: "1px solid rgba(14,165,233,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              textDecoration: "none", transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor="#0ea5e9"; e.currentTarget.style.backgroundColor="rgba(14,165,233,0.12)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(14,165,233,0.25)"; e.currentTarget.style.backgroundColor="transparent"; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={s.d} />
            </svg>
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
        <div style={{ flex:"0 0 220px", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <svg width="210" height="240" viewBox="0 0 210 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ── Outer hex border ── */}
            <polygon points="105,8 185,52 185,140 105,184 25,140 25,52"
              fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.25"/>
            <polygon points="105,20 173,58 173,134 105,172 37,134 37,58"
              fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.15"/>

            {/* ── Central shield ── */}
            <path d="M105 42 L148 60 L148 105 C148 128,128 145,105 155 C82 145,62 128,62 105 L62 60 Z"
              fill="rgba(14,165,233,0.06)" stroke="#0ea5e9" strokeWidth="1.4"/>
            {/* Padlock body */}
            <rect x="90" y="102" width="30" height="24" rx="2"
              fill="none" stroke="#0ea5e9" strokeWidth="1.4"/>
            {/* Padlock shackle */}
            <path d="M93 102 V95 A12 12 0 0 1 117 95 V102"
              fill="none" stroke="#0ea5e9" strokeWidth="1.4"/>
            {/* Keyhole */}
            <circle cx="105" cy="113" r="4" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
            <line x1="105" y1="117" x2="105" y2="122" stroke="#c9a84c" strokeWidth="1.4"/>

            {/* ── Circuit lines radiating outward ── */}
            {/* Left branch */}
            <path d="M62 95 H44 V75 H28" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.5"/>
            <circle cx="44" cy="95" r="2.5" fill="#0ea5e9" opacity="0.4"/>
            <circle cx="28" cy="75" r="2" fill="#0ea5e9" opacity="0.35"/>
            <rect x="20" y="68" width="8" height="14" rx="1"
              fill="none" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.35"/>

            {/* Right branch */}
            <path d="M148 95 H166 V75 H182" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.5"/>
            <circle cx="166" cy="95" r="2.5" fill="#0ea5e9" opacity="0.4"/>
            <circle cx="182" cy="75" r="2" fill="#0ea5e9" opacity="0.35"/>
            <rect x="182" y="68" width="8" height="14" rx="1"
              fill="none" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.35"/>

            {/* Bottom branch left */}
            <path d="M80 148 V168 H55 V185" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.4"/>
            <circle cx="55" cy="168" r="2.5" fill="#0ea5e9" opacity="0.35"/>
            <circle cx="55" cy="185" r="2" fill="#c9a84c" opacity="0.5"/>

            {/* Bottom branch right */}
            <path d="M130 148 V168 H155 V185" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.4"/>
            <circle cx="155" cy="168" r="2.5" fill="#0ea5e9" opacity="0.35"/>
            <circle cx="155" cy="185" r="2" fill="#c9a84c" opacity="0.5"/>

            {/* Top branch */}
            <path d="M105 42 V22 M88 30 L105 22 L122 30"
              stroke="#0ea5e9" strokeWidth="0.7" opacity="0.4"/>
            <circle cx="105" cy="22" r="2.5" fill="#0ea5e9" opacity="0.4"/>

            {/* ── Binary text nodes ── */}
            <text x="16" y="62" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.3">0x2F</text>
            <text x="176" y="62" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.3">0xA3</text>
            <text x="44" y="194" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.25">01</text>
            <text x="148" y="194" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.25">10</text>

            {/* ── Gold accent dots on shield corners ── */}
            <circle cx="62" cy="60" r="3" fill="#c9a84c" opacity="0.5"/>
            <circle cx="148" cy="60" r="3" fill="#c9a84c" opacity="0.5"/>
            <circle cx="148" cy="105" r="2" fill="#c9a84c" opacity="0.4"/>
            <circle cx="62" cy="105" r="2" fill="#c9a84c" opacity="0.4"/>

            {/* ── Scan line animation across shield (CSS class) ── */}
            <line x1="62" y1="98" x2="148" y2="98"
              stroke="#0ea5e9" strokeWidth="0.5" opacity="0.3"
              strokeDasharray="4 3">
              <animate attributeName="y1" values="60;155;60" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="y2" values="60;155;60" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite"/>
            </line>
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

      {/* ── VISION & AGENDA (like reference image) ── */}
      <section className="px-6 py-10 md:px-8 md:py-16" style={{
        width:"100%", backgroundColor:"#0d1424",
        borderTop:"1px solid rgba(14,165,233,0.15)", marginBottom:0,
      }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          
          {/* Section title */}
          <div style={{ marginBottom:48 }}>
            <h2 style={{
              fontFamily:"'Cinzel',serif", fontWeight:900,
              fontSize:"clamp(24px, 5vw, 42px)", color:"#f0f6ff",
              letterSpacing:"2px", marginBottom:4,
            }}>
              VISION <span style={{ color:"#0ea5e9" }}>AND AGENDA</span>
            </h2>
            <div style={{ height:2, width:60, background:"linear-gradient(to right, #0ea5e9, transparent)", marginTop:12 }}/>
          </div>

          {/* 2-column layout */}
          <div style={{ display:"flex", gap:"clamp(24px, 5vw, 64px)", flexWrap:"wrap", alignItems:"flex-start" }}>

            {/* LEFT — Vision card */}
            <div style={{
              flex:"0 0 clamp(240px, 35%, 340px)",
              backgroundColor:"#0a0f1e",
              border:"1px solid rgba(14,165,233,0.2)",
              padding:"32px 28px", position:"relative",
            }}>
              {/* Corner brackets */}
              {["tl","tr","bl","br"].map(c=>(
                <div key={c} style={{
                  position:"absolute",
                  top:c.startsWith("t")?4:"auto", bottom:c.startsWith("b")?4:"auto",
                  left:c.endsWith("l")?4:"auto", right:c.endsWith("r")?4:"auto",
                  width:12, height:12,
                  borderTop:c.startsWith("t")?"1.5px solid rgba(14,165,233,0.5)":"none",
                  borderBottom:c.startsWith("b")?"1.5px solid rgba(14,165,233,0.5)":"none",
                  borderLeft:c.endsWith("l")?"1.5px solid rgba(14,165,233,0.5)":"none",
                  borderRight:c.endsWith("r")?"1.5px solid rgba(14,165,233,0.5)":"none",
                }}/>
              ))}
              
              <div style={{
                fontFamily:"'Cinzel',serif", fontSize:"clamp(18px, 4vw, 26px)",
                fontWeight:900, color:"#0ea5e9", letterSpacing:"3px", marginBottom:12,
              }}>VISION</div>
              <div style={{ height:2, width:40, backgroundColor:"#0ea5e9", marginBottom:20, opacity:0.7 }}/>
              
              <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:"#94a3b8", lineHeight:1.85 }}>
                To establish ASTRAsec as a premier cybersecurity platform that bridges the gap between{" "}
                <span style={{ color:"#0ea5e9", fontWeight:600 }}>education, industry, and policy</span>{" "}
                in India's digital security ecosystem.
              </p>

              {/* Shield icon */}
              <div style={{ marginTop:28, display:"flex", justifyContent:"center" }}>
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1">
                  <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
                  <rect x="9" y="12" width="6" height="5" rx="0.5"/>
                  <path d="M10 12V10A2 2 0 0 1 14 10V12"/>
                </svg>
              </div>
            </div>

            {/* RIGHT — Core Agenda (numbered list) */}
            <div style={{ flex:1, minWidth:260 }}>
              <div style={{
                fontFamily:"'Cinzel',serif", fontSize:"clamp(14px, 3vw, 20px)",
                fontWeight:700, color:"#0ea5e9", letterSpacing:"3px", marginBottom:28,
                textTransform:"uppercase",
              }}>CORE AGENDA</div>

              {[
                {
                  title:"Promote Cybersecurity Awareness in India",
                  desc:"Encourage students and the broader community to understand the importance of cybersecurity in a digital-first nation.",
                  highlight: null,
                },
                {
                  title:"Enable Skill Development",
                  desc:"Provide hands-on exposure through competitions, workshops, and practical challenges.",
                  highlight: null,
                },
                {
                  title:"Build a Cybersecurity Community",
                  desc:"Facilitate networking between students, professionals, startups, and organizations.",
                  highlight: null,
                },
                {
                  title:"Encourage Early Talent",
                  desc:"Create opportunities for ",
                  highlight:"1st and 2nd year students",
                  descEnd:" to explore cybersecurity through beginner-friendly competitions.",
                },
                {
                  title:"Bridge Policy and Technology",
                  desc:"Introduce discussions around ",
                  highlight:"national security, cyber policy, and governance",
                  descEnd:", potentially through speakers from policy institutions.",
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display:"flex", gap:20, alignItems:"flex-start",
                  paddingBottom:20, marginBottom:20,
                  borderBottom:"1px solid rgba(14,165,233,0.1)",
                }}>
                  {/* Number circle */}
                  <div style={{
                    flexShrink:0,
                    width:40, height:40, borderRadius:"50%",
                    backgroundColor:"#0a0f1e",
                    border:"1.5px solid rgba(14,165,233,0.4)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <span style={{
                      fontFamily:"'Cinzel',serif", fontSize:12, fontWeight:700,
                      color:"#0ea5e9", letterSpacing:"1px",
                    }}>{String(i+1).padStart(2,"0")}</span>
                  </div>
                  {/* Text */}
                  <div>
                    <div style={{
                      fontFamily:"'Cinzel',serif", fontSize:13, fontWeight:700,
                      color:"#f0f6ff", letterSpacing:"0.5px", marginBottom:6,
                    }}>{item.title}</div>
                    <p style={{ fontFamily:"'EB Garamond',serif", fontSize:14, color:"#94a3b8", lineHeight:1.7, margin:0 }}>
                      {item.desc}
                      {item.highlight && <span style={{ color:"#0ea5e9", fontWeight:600 }}>{item.highlight}</span>}
                      {item.descEnd}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      <section style={{ width:"100%", padding:"52px 0 80px", backgroundColor:"#0d1424", overflow:"hidden" }}>
        <SectionHeading text="Our Team" variant="cyber" />
        {/* Cyber sub-label */}
        <div style={{ textAlign:"center", marginBottom:36, marginTop:-20 }}>
          <span style={{ fontFamily:"monospace", fontSize:11, color:"rgba(14,165,233,0.45)" }}>
            // AstraSec — Core Team
          </span>
        </div>

        {/* Orbital horizontal marquee track */}
        <div style={{ position:"relative", overflow:"hidden" }}>
          {/* Left fade */}
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:80, background:"linear-gradient(to right, #0d1424, transparent)", zIndex:2, pointerEvents:"none" }}/>
          {/* Right fade */}
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:80, background:"linear-gradient(to left, #0d1424, transparent)", zIndex:2, pointerEvents:"none" }}/>

          {/* Scrolling track — duplicated for seamless loop */}
          <div className="team-orbit-track" style={{ display:"flex", gap:20, width:"max-content" }}>
            {[
              ...teamData.members.map(m => ({ name: m.name, role: m.role, socials: m.socials })),
              ...teamData.members.map(m => ({ name: m.name, role: m.role, socials: m.socials })),
            ].map((m, i) => <TeamCard key={`${m.name}-${i}`} {...m} index={i % teamData.members.length} />)}
          </div>
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
