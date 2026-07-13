"use client";
import { useState } from "react";
import { PageHero } from "@/lib/design";

function EventCard({ tag, icon, title, desc, meta }: { tag:string; icon:string; title:string; desc:string; meta:string }) {
  return (
    <div style={{
      backgroundColor:"#0f172a",
      border:`1px solid #8b6914`, padding:"24px 20px", position:"relative",
      display:"flex", flexDirection:"column",
      transition:"all 0.2s ease", cursor:"default"
    }}
    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.cssText+="box-shadow:0 0 24px rgba(139,105,20,0.2);transform:translateY(-3px);border-color:#c9a84c"}}
    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.borderColor="#8b6914"}}
    >
      {/* Gold inner frame ornament */}
      <div style={{ position:"absolute", inset:5, border:"1px solid rgba(201,168,76,0.08)", pointerEvents:"none" }}/>
      {["tl","tr","bl","br"].map(c=>(
        <div key={c} style={{ position:"absolute",
          top:c.startsWith("t")?5:"auto", bottom:c.startsWith("b")?5:"auto",
          left:c.endsWith("l")?5:"auto", right:c.endsWith("r")?5:"auto",
          width:10, height:10,
          borderTop:c.startsWith("t")?"1.5px solid #c9a84c":"none",
          borderBottom:c.startsWith("b")?"1.5px solid #c9a84c":"none",
          borderLeft:c.endsWith("l")?"1.5px solid #c9a84c":"none",
          borderRight:c.endsWith("r")?"1.5px solid #c9a84c":"none",
        }}/>
      ))}
      <div style={{ alignSelf:"flex-start", backgroundColor:"#c9a84c", color:"#06090f", fontFamily:"'Cinzel',serif", fontSize:9, fontWeight:700, padding:"3px 10px", letterSpacing:"2px", marginBottom:20 }}>
        {tag}
      </div>
      <div style={{ alignSelf:"center", marginBottom:16 }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round">
          <path d={icon}/>
        </svg>
      </div>
      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:16, color:"#f0f6ff", textAlign:"center" }}>{title}</div>
      <div style={{ height:1, background:`linear-gradient(to right, transparent, #8b6914, transparent)`, margin:"14px 0" }}/>
      <p style={{ fontFamily:"'EB Garamond',serif", fontSize:14, color:"#94a3b8", lineHeight:1.6, flex:1 }}>{desc}</p>
      
      <div style={{ marginTop:20, fontFamily:"'Cinzel',serif", fontSize:11, color:"#475569", lineHeight:1.8 }}>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> {meta.split('|')[0]}</div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {meta.split('|')[1]}</div>
      </div>
      
      <a href="/contact" style={{
        marginTop:20, width:"100%", padding:"10px",
        backgroundColor:"rgba(139,105,20,0.08)", border:`1.5px solid #8b6914`, color:"#c9a84c",
        fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", cursor:"pointer",
        transition:"all 0.2s ease", textDecoration:"none", textAlign:"center", display:"block"
      }}
      onMouseEnter={e=>e.currentTarget.style.backgroundColor="rgba(139,105,20,0.18)"}
      onMouseLeave={e=>e.currentTarget.style.backgroundColor="rgba(139,105,20,0.08)"}
      >
        REGISTER →
      </a>
    </div>
  );
}

const EVENTS = [
  { cat:"CTF", tag:"CTF CHALLENGE", title:"CAPTURE THE FLAG", desc:"The ultimate test of your hacking skills. Find vulnerabilities, exploit them, and capture the flag before time runs out.", meta:"DAY 2 · 26 JUL | CYBER LAB 1", icon:"M3 3h8v8H3z M13 3h8v8h-8z M3 13h8v8H3z M16 16l5-5m0 5l-5-5" },
  { cat:"WORKSHOPS", tag:"WORKSHOP", title:"MALWARE ANALYSIS", desc:"Hands-on session on reverse engineering and analyzing modern malware strains using industry standard tools.", meta:"DAY 1 · 25 JUL | WORKSHOP HALL A", icon:"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3M9 9l2 2 4-4" },
  { cat:"TALKS", tag:"TECH TALK", title:"FUTURE OF CRYPTOGRAPHY", desc:"A deep dive into post-quantum cryptography and how it will shape the future of secure communications.", meta:"DAY 3 · 27 JUL | MAIN AUDITORIUM", icon:"M12 2A4 4 0 1 1 12 10A4 4 0 0 1 12 2M8 10V13L4 22H20L16 13V10" },
  { cat:"BOUNTY", tag:"BUG BOUNTY", title:"WEB EXPLOITATION", desc:"Find and report vulnerabilities in provided web applications. High severity bugs win premium bounties.", meta:"DAY 2 · 26 JUL | LAB 3", icon:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" },
  { cat:"ARENA", tag:"CYBER ARENA", title:"ATTACK & DEFEND", desc:"Form teams to attack opponent infrastructure while defending your own in a simulated enterprise environment.", meta:"DAY 3 · 27 JUL | ARENA 1", icon:"M5 10h14M5 14h14M9 6l-4 8 4 8M15 6l4 8-4 8" },
  { cat:"WORKSHOPS", tag:"WORKSHOP", title:"CLOUD SECURITY", desc:"Learn how to secure AWS and Azure environments against common misconfigurations and attack vectors.", meta:"DAY 1 · 25 JUL | WORKSHOP HALL B", icon:"M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
];

export default function EventsPage() {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "CTF", "WORKSHOPS", "TALKS", "BOUNTY", "ARENA"];

  const filteredEvents = filter === "ALL" ? EVENTS : EVENTS.filter(e => e.cat === filter);

  return (
    <>
      <PageHero title="EVENTS" subtitle="Compete. Learn. Conquer." />

      <section style={{ width:"100%", padding:"0 24px", marginBottom:52 }}>
        {/* Filter bar */}
        <div style={{ backgroundColor:"#0f172a", border:`1px solid #8b6914`, padding:"12px 24px", display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center", marginBottom:32 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", padding:"8px 16px",
              backgroundColor: filter === f ? "#c9a84c" : "transparent",
              color: filter === f ? "#06090f" : "#c9a84c",
              border: filter === f ? `1px solid #c9a84c` : `1px solid #8b6914`, cursor:"pointer", transition:"all 0.2s ease"
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))", gap:24 }}>
          {filteredEvents.map(e => <EventCard key={e.title} {...e} />)}
        </div>
      </section>
    </>
  );
}
