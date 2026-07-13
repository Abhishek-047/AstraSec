"use client";
import { PageHero, SectionHeading, LEATHER_TEX } from "@/lib/design";

const rules = [
  {
    num: "I",
    title: "RESPECT & INTEGRITY",
    desc: "All participants must treat fellow attendees, speakers, organizers, and volunteers with respect. Harassment, discrimination, or intimidation of any form will not be tolerated.",
  },
  {
    num: "II",
    title: "ETHICAL HACKING ONLY",
    desc: "All hacking, exploitation, and security research activities must be confined strictly to authorized lab environments and competition scopes. Unauthorized access to any system is strictly prohibited.",
  },
  {
    num: "III",
    title: "NO MALICIOUS ACTIVITY",
    desc: "Participants shall not engage in any malicious activity, including but not limited to: DoS attacks, network disruption, data theft, or deploying malware on event infrastructure.",
  },
  {
    num: "IV",
    title: "CONFIDENTIALITY",
    desc: "Any sensitive information, flags, or exploits discovered during competitions must not be shared outside of the competition context. Respect the confidentiality of other teams' work.",
  },
  {
    num: "V",
    title: "FAIR PLAY",
    desc: "All competition submissions must be original work. Plagiarism, cheating, or collusion between competing teams is forbidden and will result in immediate disqualification.",
  },
  {
    num: "VI",
    title: "RESPONSIBLE DISCLOSURE",
    desc: "Any genuine vulnerabilities discovered in event infrastructure must be immediately and privately reported to the organizing team. Public disclosure is strictly prohibited.",
  },
  {
    num: "VII",
    title: "PHYSICAL & DIGITAL PROPERTY",
    desc: "Participants are responsible for the safety of their own equipment and must not tamper with, damage, or misuse any event property — physical or digital.",
  },
  {
    num: "VIII",
    title: "CONSEQUENCES",
    desc: "Violations of this code may result in immediate removal from the event, disqualification from competitions, and reporting to appropriate academic or legal authorities.",
  },
];

export default function ConductPage() {
  return (
    <>
      <PageHero title="CODE OF CONDUCT" subtitle="With Great Power Comes Great Responsibility." />

      {/* Preamble */}
      <section style={{ width:"100%", backgroundColor:"#0d1424", padding:"44px 32px", borderTop:`1px solid rgba(14,165,233,0.15)` }}>
        <SectionHeading text="The Pledge" variant="gold" />
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:18, color:"#94a3b8", lineHeight:1.9, marginBottom:16 }}>
            AstraSec is a community built on trust, curiosity, and the responsible pursuit of knowledge.
            Every participant, speaker, and organizer is expected to uphold the following standards
            throughout the duration of the event.
          </p>
          <div style={{ height:1, background:`linear-gradient(to right, transparent, #0369a1, transparent)`, margin:"24px 0" }}/>
          <p style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", color:"#94a3b8" }}>
            ESTABLISHED BY SOCS — SOCIETY OF CYBERSECURITY CLUB
          </p>
        </div>
      </section>

      {/* Rules grid */}
      <section style={{ width:"100%", backgroundColor:"#111827", padding:"44px 32px", borderTop:`1px solid #8b6914` }}>
        <SectionHeading text="Articles of Conduct" variant="gold" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:24 }}>
          {rules.map(r => (
            <div key={r.num} style={{
              backgroundColor:"#0f172a",
              border:`1px solid #8b6914`,
              padding:"28px 24px",
              position:"relative",
            }}>
              {/* Gold inner frame */}
              <div style={{ position:"absolute", inset:5, border:"1px solid rgba(201,168,76,0.08)", pointerEvents:"none" }}/>
              {/* Corner brackets */}
              {["tl","tr","bl","br"].map(c => (
                <div key={c} style={{
                  position:"absolute",
                  top:   c.startsWith("t") ? 6 : "auto",
                  bottom:c.startsWith("b") ? 6 : "auto",
                  left:  c.endsWith("l")   ? 6 : "auto",
                  right: c.endsWith("r")   ? 6 : "auto",
                  width:10, height:10,
                  borderTop:    c.startsWith("t") ? `1.5px solid #c9a84c` : "none",
                  borderBottom: c.startsWith("b") ? `1.5px solid #c9a84c` : "none",
                  borderLeft:   c.endsWith("l")   ? `1.5px solid #c9a84c` : "none",
                  borderRight:  c.endsWith("r")   ? `1.5px solid #c9a84c` : "none",
                }}/>
              ))}
              
              {/* Article badge */}
              <div style={{
                position:"absolute", top:-14, left:20,
                backgroundColor:"#c9a84c", color:"#06090f",
                fontFamily:"'Cinzel',serif", fontSize:10, fontWeight:700,
                padding:"2px 12px", letterSpacing:"2px"
              }}>
                ARTICLE {r.num}
              </div>

              <h3 style={{
                fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:13,
                color:"#f0f6ff", letterSpacing:"1.5px", marginBottom:14, marginTop:8
              }}>
                {r.title}
              </h3>
              <div style={{ height:1, background:`linear-gradient(to right, #8b6914, transparent)`, marginBottom:14 }}/>
              <p style={{ fontFamily:"'EB Garamond',serif", fontSize:14.5, color:"#94a3b8", lineHeight:1.7 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing declaration */}
      <section style={{
        width:"100%", backgroundColor:"#060b14", backgroundImage:LEATHER_TEX,
        borderTop:`1px solid #8b6914`, padding:"44px 32px", textAlign:"center", position:"relative", overflow:"hidden"
      }}>
        <div style={{ position:"absolute", inset:8, border:"1px solid rgba(139,105,20,0.3)", pointerEvents:"none" }}>
          {[{top:6,left:6},{top:6,right:6},{bottom:6,left:6},{bottom:6,right:6}].map((pos,i) => (
            <div key={i} style={{ position:"absolute", width:20, height:20,
              borderTop: i < 2 ? "1.5px solid #c9a84c" : undefined,
              borderBottom: i >= 2 ? "1.5px solid #c9a84c" : undefined,
              borderLeft: i % 2 === 0 ? "1.5px solid #c9a84c" : undefined,
              borderRight: i % 2 === 1 ? "1.5px solid #c9a84c" : undefined,
              ...pos
            }}/>
          ))}
        </div>
        <div style={{ position:"relative", zIndex:1 }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1" style={{ marginBottom:16, opacity:0.7 }}>
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:22, color:"#f0f6ff", letterSpacing:"2px", marginBottom:16, textShadow:"0 0 30px rgba(201,168,76,0.3)" }}>
            I PLEDGE TO UPHOLD THIS CODE
          </h2>
          <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:16, color:"#94a3b8", maxWidth:500, margin:"0 auto 28px" }}>
            By participating in Legacy Secured, I agree to abide by all articles of this Code of Conduct and understand the consequences of violation.
          </p>
          <a href="/contact" style={{
            display:"inline-block", fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700,
            letterSpacing:"2px", textTransform:"uppercase", padding:"12px 32px",
            border:"1.5px solid #8b6914", color:"#c9a84c", backgroundColor:"rgba(139,105,20,0.08)",
            textDecoration:"none", cursor:"pointer"
          }}>
            REGISTER NOW →
          </a>
        </div>
      </section>
    </>
  );
}
