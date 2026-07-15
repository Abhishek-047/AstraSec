"use client";
import { C, LEATHER_TEX, PageHero, GoldBtn } from "@/lib/design";

function SponsorCard({ tier, name, desc, isLarge=false }: { tier:string; name:string; desc?:string; isLarge?:boolean }) {
  return (
    <div style={{
      backgroundColor:C.cardBg, backgroundImage:LEATHER_TEX,
      border: isLarge ? `2px solid ${C.gold}` : `1px solid ${C.gold}`,
      padding: isLarge ? "40px 32px" : "24px 20px",
      textAlign:"center", position:"relative",
      display:"flex", flexDirection:"column", alignItems:"center"
    }}>
      {/* Badge */}
      <div style={{
        position:"absolute", top:0, left:"50%", transform:"translate(-50%, -50%)",
        backgroundColor:C.gold, color:"#1a1008",
        fontFamily:"'Cinzel',serif", fontSize: isLarge ? 11 : 9, fontWeight:700,
        padding: isLarge ? "4px 16px" : "2px 10px", letterSpacing:"2px"
      }}>
        {tier}
      </div>

      {/* Logo placeholder */}
      <div style={{
        width: isLarge ? 160 : 120, height: isLarge ? 80 : 60,
        border:`1px solid rgba(14,165,233,0.2)`, backgroundColor:"#0f172a",
        display:"flex", alignItems:"center", justifyContent:"center",
        marginBottom:20, marginTop:10
      }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.goldDk} strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
      </div>

      <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize: isLarge ? 20 : 14, color:C.gold }}>{name}</div>
      {desc && <p style={{ fontFamily:"'EB Garamond',serif", fontSize:14, color:C.goldMuted, marginTop:8 }}>{desc}</p>}
    </div>
  );
}

export default function SponsorsPage() {
  return (
    <>
      <PageHero title="SPONSORS" subtitle="The Pillars of Our Legacy." />

      <section style={{ width:"100%", padding:"0 24px", marginBottom:64 }}>
        {/* Title Sponsor */}
        <div style={{ width:"60%", margin:"0 auto 48px", minWidth:280 }}>
          <SponsorCard isLarge tier="TITLE SPONSOR" name="To Be Declared" desc="Soon" />
        </div>

        {/* Gold Sponsors */}
        <div style={{ display:"flex", gap:24, flexWrap:"wrap", marginBottom:48 }}>
          <div style={{ flex:1, minWidth:220 }}><SponsorCard tier="GOLD SPONSOR" name="To Be Declared" /></div>
          <div style={{ flex:1, minWidth:220 }}><SponsorCard tier="GOLD SPONSOR" name="To Be Declared" /></div>
          <div style={{ flex:1, minWidth:220 }}><SponsorCard tier="GOLD SPONSOR" name="To Be Declared" /></div>
        </div>

        {/* Silver Sponsors */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))", gap:20 }}>
          <SponsorCard tier="SILVER SPONSOR" name="To Be Declared" />
          <SponsorCard tier="SILVER SPONSOR" name="To Be Declared" />
          <SponsorCard tier="SILVER SPONSOR" name="To Be Declared" />
          <SponsorCard tier="SILVER SPONSOR" name="To Be Declared" />
        </div>
      </section>

      {/* CTA */}
      <section style={{ width:"100%", backgroundColor:C.footerBg, backgroundImage:LEATHER_TEX, border:`1.5px solid ${C.goldDk}`, padding:"48px 32px", textAlign:"center", position:"relative" }}>
        <div style={{ position:"absolute", inset:7, border:`1px solid rgba(139,105,20,0.4)`, pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:28, color:C.gold, letterSpacing:"2px", textTransform:"uppercase", marginBottom:24 }}>
            PARTNER WITH THE LEGACY
          </h2>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:C.lightText, opacity:0.8, maxWidth:500, margin:"0 auto 32px" }}>
            Align your brand with the next generation of cybersecurity leaders. Explore our sponsorship packages to find the perfect fit for your organization.
          </p>
          <GoldBtn href="/contact">BECOME A SPONSOR</GoldBtn>
        </div>
      </section>
    </>
  );
}
