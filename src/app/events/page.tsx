"use client";
import { useState } from "react";
import { PageHero } from "@/lib/design";
import eventsData from "../../../data/events.json";

function EventCard({ tag, iconPath, title, description, day, venue, registrationLink }: { tag:string; iconPath:string; title:string; description:string; day:string; venue:string; registrationLink:string }) {
  return (
    <div style={{
      backgroundColor:"#0f172a",
      border:`1px solid rgba(14,165,233,0.25)`, padding:"24px 20px", position:"relative",
      display:"flex", flexDirection:"column",
      transition:"all 0.2s ease", cursor:"default"
    }}
    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.cssText+="box-shadow:0 0 24px rgba(14,165,233,0.2);transform:translateY(-3px);border-color:rgba(14,165,233,0.6)"}}
    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.borderColor="rgba(14,165,233,0.25)"}}
    >
      {/* Gold inner frame ornament */}
      <div style={{ position:"absolute", inset:5, border:"1px solid rgba(201,168,76,0.15)", pointerEvents:"none" }}/>
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
      <div style={{ alignSelf:"flex-start", backgroundColor:"rgba(14,165,233,0.15)", color:"#0ea5e9", border:"1px solid rgba(14,165,233,0.4)", fontFamily:"'Cinzel',serif", fontSize:9, fontWeight:700, padding:"3px 10px", letterSpacing:"2px", marginBottom:20 }}>
        {tag}
      </div>
      <div style={{ alignSelf:"center", marginBottom:16 }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeLinecap="round">
          <path d={iconPath}/>
        </svg>
      </div>
      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:16, color:"#f0f6ff", textAlign:"center" }}>{title}</div>
      <div style={{ height:1, background:`linear-gradient(to right, transparent, #c9a84c, transparent)`, margin:"14px 0" }}/>
      <p style={{ fontFamily:"'EB Garamond',serif", fontSize:14, color:"#94a3b8", lineHeight:1.6, flex:1 }}>{description}</p>
      
      <div style={{ marginTop:20, fontFamily:"'Cinzel',serif", fontSize:11, color:"#475569", lineHeight:1.8 }}>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> {day}</div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> {venue}</div>
      </div>
      
      <a href={registrationLink} style={{
        marginTop:20, width:"100%", padding:"10px",
        backgroundColor:"rgba(14,165,233,0.06)", border:`1.5px solid rgba(14,165,233,0.35)`, color:"#0ea5e9",
        fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", cursor:"pointer",
        transition:"all 0.2s ease", textDecoration:"none", textAlign:"center", display:"block"
      }}
      onMouseEnter={e=>e.currentTarget.style.backgroundColor="rgba(14,165,233,0.18)"}
      onMouseLeave={e=>e.currentTarget.style.backgroundColor="rgba(14,165,233,0.06)"}
      >
        REGISTER →
      </a>
    </div>
  );
}

export default function EventsPage() {
  const [filter, setFilter] = useState("ALL");
  const filters = eventsData.filterOptions;

  const filteredEvents = filter === "ALL" ? eventsData.events : eventsData.events.filter(e => e.cat === filter);

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
              border:`1px solid #8b6914`, cursor:"pointer", transition:"all 0.2s ease"
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
