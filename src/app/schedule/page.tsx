"use client";
import { useState } from "react";
import { PageHero } from "@/lib/design";

const SCHEDULE = {
  "DAY 1 — 25 October": [
    { time: "09:00 AM", title: "Inauguration Ceremony", loc: "Main Auditorium", spk: "Club President" },
    { time: "10:30 AM", title: "Keynote Address", loc: "Main Auditorium", spk: "Dr. Alistair Vance" },
    { time: "01:00 PM", title: "Lunch Break", loc: "Courtyard", spk: "" },
    { time: "02:00 PM", title: "Workshop: Cloud Security Basics", loc: "Workshop Hall B", spk: "Sarah Jenkins" },
    { time: "05:00 PM", title: "Networking & Mixer", loc: "Atrium", spk: "" },
  ],
  "DAY 2 — 26 October": [
    { time: "09:00 AM", title: "CTF Qualifiers Begin", loc: "Cyber Lab 1 & 2", spk: "CTF Core Team" },
    { time: "11:00 AM", title: "Workshop: Malware Analysis", loc: "Workshop Hall A", spk: "David Chen" },
    { time: "01:00 PM", title: "Lunch Break", loc: "Courtyard", spk: "" },
    { time: "02:30 PM", title: "Bug Bounty Live Hunting", loc: "Lab 3", spk: "" },
    { time: "06:00 PM", title: "CTF Qualifiers End", loc: "Cyber Lab 1 & 2", spk: "" },
  ],
  "DAY 3 — 27 October": [
    { time: "09:30 AM", title: "CTF Finals", loc: "Cyber Lab 1", spk: "CTF Core Team" },
    { time: "10:00 AM", title: "Tech Talk: Future of Cryptography", loc: "Main Auditorium", spk: "Elena Rostova" },
    { time: "01:00 PM", title: "Lunch Break", loc: "Courtyard", spk: "" },
    { time: "02:00 PM", title: "Cyber Arena: Attack & Defend", loc: "Arena 1", spk: "" },
    { time: "05:00 PM", title: "Closing Ceremony & Prize Dist.", loc: "Main Auditorium", spk: "Club President" },
  ],
};

export default function SchedulePage() {
  const tabs = Object.keys(SCHEDULE);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <PageHero title="SCHEDULE" subtitle="Three Days. Endless Knowledge." />

      <section style={{ width:"100%", padding:"48px 24px", marginBottom:52 }}>
        {/* Day Tab Switcher */}
        <div style={{ display:"flex", border:`1px solid rgba(14,165,233,0.3)`, backgroundColor:"#0f172a", marginBottom:32, overflowX:"auto" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              flex:1, padding:"16px 24px", fontFamily:"'Cinzel',serif", fontSize:12, letterSpacing:"2px",
              color: activeTab === tab ? "#06090f" : "#94a3b8",
              backgroundColor: activeTab === tab ? "#0ea5e9" : "transparent",
              border:"none", borderRight:`1px solid rgba(14,165,233,0.2)`,
              cursor:"pointer", transition:"all 0.2s ease", whiteSpace:"nowrap"
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position:"relative", padding:"32px 0", backgroundColor:"#060b14", border:"1px solid #8b6914", overflow:"hidden" }}>
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

          {SCHEDULE[activeTab as keyof typeof SCHEDULE].map((ev, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "110px 28px 1fr",
              alignItems: "flex-start",
              borderBottom: "1px solid rgba(14,165,233,0.08)",
              position: "relative",
              transition: "background-color 0.2s ease",
              backgroundColor: i % 2 === 0 ? "transparent" : "rgba(14,165,233,0.02)",
              cursor: "default",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "rgba(14,165,233,0.06)";
              const ind = el.querySelector(".row-indicator") as HTMLElement | null;
              if (ind) ind.style.opacity = "1";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = i % 2 === 0 ? "transparent" : "rgba(14,165,233,0.02)";
              const ind = el.querySelector(".row-indicator") as HTMLElement | null;
              if (ind) ind.style.opacity = "0";
            }}
            >
              {/* Glowing left bar — appears on hover */}
              <div className="row-indicator" style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                background: "linear-gradient(to bottom, transparent, #0ea5e9, transparent)",
                opacity: 0, transition: "opacity 0.25s ease",
                boxShadow: "2px 0 12px rgba(14,165,233,0.4)",
              }} />
              {/* Time column */}
              <div style={{ textAlign:"right", fontFamily:"monospace", color:"#0ea5e9", fontSize:12, letterSpacing:"1px", padding:"18px 12px 18px 20px", lineHeight:1 }}>
                {ev.time}
              </div>
              {/* Dot + vertical line column */}
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", position:"relative" }}>
                {/* Vertical line segment */}
                <div style={{ position:"absolute", top:0, bottom:0, left:"50%", transform:"translateX(-50%)", width:2, backgroundColor:"rgba(14,165,233,0.25)" }}/>
                {/* Dot */}
                <div style={{ width:12, height:12, borderRadius:"50%", backgroundColor:"#0ea5e9", marginTop:18, position:"relative", zIndex:1, boxShadow:"0 0 8px rgba(14,165,233,0.7)", flexShrink:0 }}/>
              </div>
              {/* Content column */}
              <div style={{ padding:"14px 24px 14px 12px" }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:14, color:"#f0f6ff", marginBottom:8, lineHeight:1.3 }}>{ev.title}</div>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <span style={{ backgroundColor:"#0f172a", border:`1px solid rgba(14,165,233,0.3)`, color:"#94a3b8", fontFamily:"'Cinzel',serif", fontSize:9, padding:"3px 8px", letterSpacing:"1px" }}>📍 {ev.loc}</span>
                  {ev.spk && <span style={{ backgroundColor:"#0f172a", border:`1px solid rgba(201,168,76,0.2)`, color:"#c9a84c", fontFamily:"'Cinzel',serif", fontSize:9, padding:"3px 8px", letterSpacing:"1px" }}>🎤 {ev.spk}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
