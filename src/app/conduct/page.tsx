"use client";
import { C, PARCH_TEX, LEATHER_TEX, PageHero, SectionHeading } from "@/lib/design";

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
      <section style={{ width:"100%", backgroundColor:C.parchmentLt, backgroundImage:PARCH_TEX, padding:"44px 32px", borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="The Pledge" />
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:18, color:C.bodyText, lineHeight:1.9, marginBottom:16 }}>
            AstraSec is a community built on trust, curiosity, and the responsible pursuit of knowledge.
            Every participant, speaker, and organizer is expected to uphold the following standards
            throughout the duration of the event.
          </p>
          <div style={{ height:1, background:`linear-gradient(to right, transparent, ${C.goldDk}, transparent)`, margin:"24px 0" }}/>
          <p style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", color:C.goldDk }}>
            ESTABLISHED BY SOCS — SOCIETY OF CYBERSECURITY CLUB
          </p>
        </div>
      </section>

      {/* Rules grid */}
      <section style={{ width:"100%", backgroundColor:C.parchment, backgroundImage:PARCH_TEX, padding:"44px 32px", borderTop:`1px solid ${C.goldDk}` }}>
        <SectionHeading text="Articles of Conduct" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:24 }}>
          {rules.map(r => (
            <div key={r.num} style={{
              backgroundColor:C.cardBg,
              border:`1px solid ${C.goldDk}`,
              padding:"28px 24px",
              position:"relative",
            }}>
              {/* Corner brackets */}
              {["tl","tr","bl","br"].map(c => (
                <div key={c} style={{
                  position:"absolute",
                  top:   c.startsWith("t") ? 6 : "auto",
                  bottom:c.startsWith("b") ? 6 : "auto",
                  left:  c.endsWith("l")   ? 6 : "auto",
                  right: c.endsWith("r")   ? 6 : "auto",
                  width:10, height:10,
                  borderTop:    c.startsWith("t") ? `1px solid ${C.goldDk}` : "none",
                  borderBottom: c.startsWith("b") ? `1px solid ${C.goldDk}` : "none",
                  borderLeft:   c.endsWith("l")   ? `1px solid ${C.goldDk}` : "none",
                  borderRight:  c.endsWith("r")   ? `1px solid ${C.goldDk}` : "none",
                }}/>
              ))}

              {/* Roman numeral badge */}
              <div style={{
                position:"absolute", top:-14, left:20,
                backgroundColor:C.gold, color:"#1a1008",
                fontFamily:"'Cinzel',serif", fontSize:10, fontWeight:700,
                padding:"2px 12px", letterSpacing:"2px"
              }}>
                ARTICLE {r.num}
              </div>

              <h3 style={{
                fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:13,
                color:C.gold, letterSpacing:"1.5px", marginBottom:14, marginTop:8
              }}>
                {r.title}
              </h3>
              <div style={{ height:1, background:`linear-gradient(to right, ${C.goldDk}, transparent)`, marginBottom:14 }}/>
              <p style={{ fontFamily:"'EB Garamond',serif", fontSize:14.5, color:C.lightText, lineHeight:1.7, opacity:0.85 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing declaration */}
      <section style={{
        width:"100%", backgroundColor:"#2a1a06", backgroundImage:LEATHER_TEX,
        borderTop:`1px solid ${C.goldDk}`, padding:"44px 32px", textAlign:"center", position:"relative", overflow:"hidden"
      }}>
        <div style={{ position:"absolute", inset:8, border:"1px solid rgba(139,105,20,0.45)", pointerEvents:"none" }}>
          {[{top:6,left:6,width:20,height:20,borderTop:"1.5px solid #c9a84c",borderLeft:"1.5px solid #c9a84c"},
            {top:6,right:6,width:20,height:20,borderTop:"1.5px solid #c9a84c",borderRight:"1.5px solid #c9a84c"},
            {bottom:6,left:6,width:20,height:20,borderBottom:"1.5px solid #c9a84c",borderLeft:"1.5px solid #c9a84c"},
            {bottom:6,right:6,width:20,height:20,borderBottom:"1.5px solid #c9a84c",borderRight:"1.5px solid #c9a84c"},
          ].map((s,i)=><div key={i} style={{ position:"absolute", ...s }}/>)}
        </div>
        <div style={{ position:"relative", zIndex:1 }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1" style={{ marginBottom:16, opacity:0.7 }}>
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:22, color:C.gold, letterSpacing:"2px", marginBottom:16 }}>
            I PLEDGE TO UPHOLD THIS CODE
          </h2>
          <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:16, color:C.lightText, opacity:0.75, maxWidth:500, margin:"0 auto" }}>
            By participating in Legacy Secured, I agree to abide by all articles of this Code of Conduct and understand the consequences of violation.
          </p>
        </div>
      </section>
    </>
  );
}
