"use client";
import { useState } from "react";
import { C, PageHero } from "@/lib/design";

import galleryData from "../../../data/gallery.json";

export default function GalleryPage() {
  const [filter, setFilter] = useState("ALL");
  const filters = galleryData.filterOptions;

  const filteredPhotos = filter === "ALL" 
    ? galleryData.photos 
    : galleryData.photos.filter(p => filter === "HIGHLIGHTS" ? p.highlight : p.year === filter);

  return (
    <>
      <PageHero title="GALLERY" subtitle="Moments. Memories. Legacy." />

      <section style={{ width:"100%", padding:"0 24px", marginBottom:52 }}>
        {/* Filter bar */}
        <div style={{ backgroundColor:C.cardBg, border:`1px solid ${C.gold}`, padding:"12px 24px", display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center", marginBottom:32 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", padding:"8px 16px",
              backgroundColor: filter === f ? C.gold : "transparent",
              color: filter === f ? "#06090f" : C.gold,
              border:`1px solid ${C.gold}`, cursor:"pointer", transition:"all 0.2s ease"
            }}>
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid (simulated with CSS columns) */}
        <div style={{ columnCount:3, columnGap:16, width:"100%" }}>
          {filteredPhotos.map((p,i) => (
            <div key={p.id} style={{
              width:"100%", height: p.placeholderHeight, marginBottom:16, breakInside:"avoid",
              backgroundColor:"#8b6020", border:`2px solid ${C.gold}`,
              position:"relative", overflow:"hidden", cursor:"pointer"
            }}
            onMouseEnter={e=>(e.currentTarget.lastChild as HTMLElement).style.opacity="1"}
            onMouseLeave={e=>(e.currentTarget.lastChild as HTMLElement).style.opacity="0"}
            >
              {/* Image or Placeholder */}
              {p.imageUrl ? (
                <img src={p.imageUrl} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <>
                  <div style={{ position:"absolute", inset:0, opacity:0.3,
                    backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm20 20l20-20M0 40L40 0' stroke='%233d2b0e' stroke-width='1' fill='none'/%3E%3C/svg%3E")`
                  }}/>
                  <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", opacity:0.15 }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a1008" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                  </div>
                </>
              )}

              {/* Hover overlay */}
              <div style={{
                position:"absolute", inset:0, backgroundColor:"rgba(28,20,9,0.85)",
                display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                opacity:0, transition:"opacity 0.2s ease"
              }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:11, letterSpacing:"2px", color:C.goldDk, marginBottom:4 }}>{p.year}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:14, fontWeight:700, color:C.gold, textAlign:"center" }}>{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
