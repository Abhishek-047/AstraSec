"use client";
import { useState } from "react";
import { C, PARCH_TEX, PageHero } from "@/lib/design";

const SCHEDULE = {
  "DAY 1 — 25 JULY": [
    { time: "09:00 AM", title: "Inauguration Ceremony", loc: "Main Auditorium", spk: "Club President" },
    { time: "10:30 AM", title: "Keynote Address", loc: "Main Auditorium", spk: "Dr. Alistair Vance" },
    { time: "01:00 PM", title: "Lunch Break", loc: "Courtyard", spk: "" },
    { time: "02:00 PM", title: "Workshop: Cloud Security Basics", loc: "Workshop Hall B", spk: "Sarah Jenkins" },
    { time: "05:00 PM", title: "Networking & Mixer", loc: "Atrium", spk: "" },
  ],
  "DAY 2 — 26 JULY": [
    { time: "09:00 AM", title: "CTF Qualifiers Begin", loc: "Cyber Lab 1 & 2", spk: "CTF Core Team" },
    { time: "11:00 AM", title: "Workshop: Malware Analysis", loc: "Workshop Hall A", spk: "David Chen" },
    { time: "01:00 PM", title: "Lunch Break", loc: "Courtyard", spk: "" },
    { time: "02:30 PM", title: "Bug Bounty Live Hunting", loc: "Lab 3", spk: "" },
    { time: "06:00 PM", title: "CTF Qualifiers End", loc: "Cyber Lab 1 & 2", spk: "" },
  ],
  "DAY 3 — 27 JULY": [
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

      <section style={{ width:"100%", padding:"0 24px", marginBottom:52 }}>
        {/* Day Tab Switcher */}
        <div style={{ display:"flex", border:`1px solid ${C.gold}`, backgroundColor:C.cardBg, marginBottom:32, overflowX:"auto" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              flex:1, padding:"16px 24px", fontFamily:"'Cinzel',serif", fontSize:12, letterSpacing:"2px",
              color: activeTab === tab ? "#1a1008" : C.gold,
              backgroundColor: activeTab === tab ? C.gold : "transparent",
              border:"none", borderRight:`1px solid ${C.gold}`,
              cursor:"pointer", transition:"all 0.2s ease", whiteSpace:"nowrap"
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position:"relative", paddingLeft:20 }}>
          {/* Vertical line */}
          <div style={{ position:"absolute", top:0, bottom:0, left:104, width:2, backgroundColor:C.gold }}/>
          
          {SCHEDULE[activeTab as keyof typeof SCHEDULE].map((ev, i) => (
            <div key={i} style={{
              display:"flex", alignItems:"flex-start", marginBottom:0,
              backgroundColor: i % 2 === 0 ? C.parchmentLt : C.parchment,
              borderBottom:`1px solid ${C.goldDk}`, padding:"24px 0",
              position:"relative"
            }}>
              <div style={{ width:84, textAlign:"right", fontFamily:"'Cinzel',serif", fontSize:12, color:C.goldDk, paddingTop:2 }}>
                {ev.time}
              </div>
              <div style={{ width:12, height:12, borderRadius:"50%", backgroundColor:C.gold, margin:"6px 20px 0 20px", position:"relative", zIndex:1 }}/>
              <div style={{ flex:1 }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:15, color:C.goldDk, marginBottom:8 }}>{ev.title}</div>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  <span style={{ backgroundColor:C.cardBg, border:`1px solid ${C.gold}`, color:C.gold, fontFamily:"'Cinzel',serif", fontSize:9, padding:"3px 8px", letterSpacing:"1px" }}>📍 {ev.loc}</span>
                  {ev.spk && <span style={{ backgroundColor:C.cardBg, border:`1px solid ${C.gold}`, color:C.gold, fontFamily:"'Cinzel',serif", fontSize:9, padding:"3px 8px", letterSpacing:"1px" }}>🎤 {ev.spk}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
