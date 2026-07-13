"use client";
import { C, LEATHER_TEX, PageHero, GoldBtn } from "@/lib/design";

function InputField({ label, type="text", textarea=false }: { label:string; type?:string; textarea?:boolean }) {
  return (
    <div style={{ marginBottom:20 }}>
      <label style={{ display:"block", fontFamily:"'Cinzel',serif", fontSize:11, color:C.gold, letterSpacing:"2px", marginBottom:6 }}>{label}</label>
      {textarea ? (
        <textarea rows={4} style={{
          width:"100%", backgroundColor:"rgba(201,168,76,0.05)",
          border:`1px solid ${C.goldDk}`, color:C.parchmentLt,
          padding:"10px 14px", fontFamily:"'EB Garamond',serif", fontSize:15,
          outline:"none", resize:"vertical", borderRadius:0
        }}
        onFocus={e=>{e.target.style.borderColor=C.gold; e.target.style.boxShadow="0 0 8px rgba(201,168,76,0.2)"}}
        onBlur={e=>{e.target.style.borderColor=C.goldDk; e.target.style.boxShadow="none"}}
        />
      ) : (
        <input type={type} style={{
          width:"100%", backgroundColor:"rgba(201,168,76,0.05)",
          border:`1px solid ${C.goldDk}`, color:C.parchmentLt,
          padding:"10px 14px", fontFamily:"'EB Garamond',serif", fontSize:15,
          outline:"none", borderRadius:0
        }}
        onFocus={e=>{e.target.style.borderColor=C.gold; e.target.style.boxShadow="0 0 8px rgba(201,168,76,0.2)"}}
        onBlur={e=>{e.target.style.borderColor=C.goldDk; e.target.style.boxShadow="none"}}
        />
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero title="CONTACT" subtitle="Reach Out. Connect. Collaborate." />

      <section style={{ width:"100%", padding:"0 24px", display:"flex", gap:40, flexWrap:"wrap", marginBottom:52 }}>
        
        {/* Left - Contact Form */}
        <div style={{ flex:6, minWidth:280, backgroundColor:C.cardBg, backgroundImage:LEATHER_TEX, border:`1px solid ${C.gold}`, padding:"32px" }}>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:18, color:C.gold, letterSpacing:"2px", marginBottom:12 }}>SEND A MESSAGE</h2>
          <div style={{ height:1, background:`linear-gradient(to right, ${C.goldDk}, transparent)`, marginBottom:24 }}/>
          
          <form onSubmit={e=>e.preventDefault()}>
            <InputField label="FULL NAME" />
            <InputField label="EMAIL ADDRESS" type="email" />
            <InputField label="SUBJECT" />
            <InputField label="MESSAGE" textarea />
            
            <button style={{
              width:"100%", fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700,
              letterSpacing:"2px", textTransform:"uppercase", padding:"14px",
              border:`1.5px solid ${C.gold}`, color:C.gold, backgroundColor:"rgba(42,26,6,0.9)",
              cursor:"pointer", transition:"all 0.2s ease", marginTop:10
            }}
            onMouseEnter={e=>{e.currentTarget.style.backgroundColor="rgba(201,168,76,0.12)";e.currentTarget.style.boxShadow="0 0 16px rgba(201,168,76,0.3)"}}
            onMouseLeave={e=>{e.currentTarget.style.backgroundColor="rgba(42,26,6,0.9)";e.currentTarget.style.boxShadow="none"}}
            >
              DISPATCH MESSAGE →
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div style={{ flex:4, minWidth:260 }}>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:18, color:C.gold, letterSpacing:"2px", marginBottom:12 }}>REACH US</h2>
          <div style={{ height:1, background:`linear-gradient(to right, ${C.goldDk}, transparent)`, marginBottom:24 }}/>
          
          <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:20, borderBottom:`1px solid ${C.goldDk}`, paddingBottom:20 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" style={{ flexShrink:0, marginTop:2 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div style={{ fontFamily:"'EB Garamond',serif", fontSize:15, color:C.bodyText }}>Socs.club@rishihood.edu.in</div>
          </div>
          
          <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:20, borderBottom:`1px solid ${C.goldDk}`, paddingBottom:20 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" style={{ flexShrink:0, marginTop:2 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div style={{ fontFamily:"'EB Garamond',serif", fontSize:15, color:C.bodyText }}>Technology Block Auditorium,<br/>Sonipat, Haryana, Delhi NCR, India</div>
          </div>
          
          <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:32, borderBottom:`1px solid ${C.goldDk}`, paddingBottom:20 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="1.5" style={{ flexShrink:0, marginTop:2 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div style={{ fontFamily:"'EB Garamond',serif", fontSize:15, color:C.bodyText }}>‭+91 88152 88895‬<br /> +91 8999099822 <br /> +91 7319956809</div>
          </div>
          
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:14, color:C.goldDk, letterSpacing:"2px", marginBottom:16 }}>FOLLOW THE LEGACY</h2>
          <div style={{ display:"flex", gap:10 }}>
            {[
              { label: "GITHUB", href: "https://github.com/Society-of-Cyber-Security" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/company/society-of-cyber-security/" },
              { label: "INSTAGRAM", href: "https://www.instagram.com/socs_ru/" }
            ].map(s=>(
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                flex:1, padding:"10px 0", backgroundColor:C.cardBg, border:`1px solid ${C.gold}`,
                fontFamily:"'Cinzel',serif", fontSize:12, color:C.gold, cursor:"pointer",
                transition:"all 0.2s ease", textDecoration:"none", textAlign:"center", display:"block"
              }}
              onMouseEnter={e=>e.currentTarget.style.backgroundColor="rgba(201,168,76,0.1)"}
              onMouseLeave={e=>e.currentTarget.style.backgroundColor=C.cardBg}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
