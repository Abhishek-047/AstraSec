"use client";
import { useState } from "react";
import { PageHero, SectionHeading } from "@/lib/design";

import faqData from "../../../data/faq.json";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border:`1px solid ${open ? "#0ea5e9" : "rgba(14,165,233,0.2)"}`,
      borderLeft: open ? "2px solid #0ea5e9" : "1px solid rgba(14,165,233,0.2)",
      boxShadow: open ? "inset 3px 0 12px rgba(14,165,233,0.05)" : "none",
      marginBottom:12,
      backgroundColor: open ? "rgba(14,165,233,0.04)" : "transparent",
      transition:"border-color 0.2s ease, background-color 0.2s ease",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width:"100%", background:"none", border:"none", cursor:"pointer",
          padding:"18px 20px", display:"flex", justifyContent:"space-between", alignItems:"center",
          textAlign:"left",
        }}
      >
        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <span style={{ fontFamily:"monospace", color:"rgba(14,165,233,0.4)", marginRight:8, fontSize:"0.9em" }}>
            {String(index + 1).padStart(2, "0")} &gt;_
          </span>
          <span style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:12, color: open ? "#0ea5e9" : "#94a3b8", letterSpacing:"1px", transition:"color 0.2s" }}>
            {q}
          </span>
        </div>
        <span style={{ color: open ? "#0ea5e9" : "#c9a84c", fontSize:20, flexShrink:0, marginLeft:12, fontWeight:300, lineHeight:1, transition:"transform 0.2s ease", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>
          +
        </span>
      </button>
      {open && (
        <div style={{ padding:"0 20px 18px 44px", borderTop:`1px solid rgba(14,165,233,0.15)` }}>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:15, color:"#94a3b8", lineHeight:1.75, marginTop:14 }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <PageHero title="FAQ" subtitle="Questions Answered. Mysteries Solved." />

      <section className="px-6 py-10 md:px-8 md:py-12" style={{ width:"100%", backgroundColor:"#0d1424", borderTop:`1px solid rgba(14,165,233,0.15)` }}>
        <SectionHeading text="Frequently Asked Questions" variant="gold" />
        <div style={{ maxWidth:780, margin:"0 auto" }}>
          {faqData.faqs.map((f, i) => (
            <FAQItem key={i} q={f.question} a={f.answer} index={i} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{
        width:"100%", backgroundColor:"#060b14",
        borderTop:`1px solid #8b6914`,
        textAlign:"center", position:"relative", overflow:"hidden",
        padding:"64px 24px",
      }}>
        {/* Inset frame with legend */}
        <div style={{
          position:"absolute", inset:8,
          border:"1px solid rgba(201,168,76,0.3)",
          pointerEvents:"none",
          display:"flex", justifyContent:"center",
        }}>
          {/* Legend text overlapping top border */}
          <div style={{
            position:"absolute", top:-9,
            backgroundColor:"#060b14",
            padding:"0 16px",
            fontFamily:"'Cinzel',serif", fontSize:"clamp(9px, 2.5vw, 12px)",
            letterSpacing:"clamp(2px, 1vw, 4px)", color:"#c9a84c", textTransform:"uppercase",
            whiteSpace:"nowrap",
          }}>
            STILL HAVE QUESTIONS?
          </div>
          {/* 4 corner L-brackets */}
          <div style={{ position:"absolute", top:6, left:6, width:20, height:20, borderTop:"1.5px solid #c9a84c", borderLeft:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", top:6, right:6, width:20, height:20, borderTop:"1.5px solid #c9a84c", borderRight:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", bottom:6, left:6, width:20, height:20, borderBottom:"1.5px solid #c9a84c", borderLeft:"1.5px solid #c9a84c" }}/>
          <div style={{ position:"absolute", bottom:6, right:6, width:20, height:20, borderBottom:"1.5px solid #c9a84c", borderRight:"1.5px solid #c9a84c" }}/>
          {/* 4 corner dot ornaments */}
          {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((p,i) => (
            <div key={i} style={{ position:"absolute", width:8, height:8, borderRadius:"50%", border:"1px solid #8b6914", backgroundColor:"#060b14", ...p as React.CSSProperties }}/>
          ))}
        </div>
        {/* Content */}
        <div style={{ position:"relative", zIndex:1 }}>
          <p style={{ fontFamily:"'EB Garamond',serif", fontStyle:"italic", fontSize:16, color:"#94a3b8", maxWidth:400, margin:"0 auto 24px" }}>
            Our team is happy to help. Reach out and we will get back to you within 24 hours.
          </p>
          <a href="/contact" style={{
            display:"inline-block", fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700,
            letterSpacing:"2px", textTransform:"uppercase", padding:"12px 28px",
            border:`1.5px solid #8b6914`, color:"#c9a84c", backgroundColor:"rgba(139,105,20,0.08)",
            textDecoration:"none", transition:"all 0.2s ease",
          }}
          onMouseEnter={e=>{e.currentTarget.style.backgroundColor="rgba(139,105,20,0.18)";e.currentTarget.style.boxShadow="0 0 20px rgba(139,105,20,0.3)"}}
          onMouseLeave={e=>{e.currentTarget.style.backgroundColor="rgba(139,105,20,0.08)";e.currentTarget.style.boxShadow="none"}}
          >
            CONTACT US →
          </a>
        </div>
      </section>
    </>
  );
}
