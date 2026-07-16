"use client";
import { C, LEATHER_TEX, PageHero, GoldBtn } from "@/lib/design";
import sponsorsData from "../../../data/sponsors.json";

function SponsorCard({ tier, name, desc, logoUrl, isLarge=false }: { tier:string; name:string; desc?:string; logoUrl?:string; isLarge?:boolean }) {
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
        marginBottom:20, marginTop:10, overflow:"hidden"
      }}>
        {logoUrl ? (
          <img src={logoUrl} alt={name || tier} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={C.goldDk} strokeWidth="1"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        )}
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
        <div style={{ width:"60%", margin:"0 auto 48px", minWidth:280, display:"flex", justifyContent:"center" }}>
          {sponsorsData.tiers.title.map(s => (
            <SponsorCard key={s.id} isLarge tier="TITLE SPONSOR" name={s.name || "To Be Declared"} desc={s.description || "Soon"} logoUrl={s.logoUrl} />
          ))}
        </div>

        {/* Gold Sponsors */}
        <div style={{ display:"flex", gap:24, flexWrap:"wrap", justifyContent:"center", marginBottom:48 }}>
          {sponsorsData.tiers.gold.map(s => (
            <div key={s.id} style={{ flex:1, minWidth:220, maxWidth:320 }}>
              <SponsorCard tier="GOLD SPONSOR" name={s.name || "To Be Declared"} desc={s.description} logoUrl={s.logoUrl} />
            </div>
          ))}
        </div>

        {/* Silver Sponsors */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))", gap:20 }}>
          {sponsorsData.tiers.silver.map(s => (
            <SponsorCard key={s.id} tier="SILVER SPONSOR" name={s.name || "To Be Declared"} desc={s.description} logoUrl={s.logoUrl} />
          ))}
        </div>
      </section>

      {/* ── Sponsorship Benefits Matrix ── */}
      <section style={{
        width: "100%", padding: "64px 24px 0",
        backgroundColor: "#0a0f1e",
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>

          {/* Section heading */}
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <div style={{
              fontFamily: "monospace", fontSize: 10, color: "rgba(14,165,233,0.4)",
              letterSpacing: "1px", marginBottom: 10,
            }}>
              <span style={{ color: "#c9a84c" }}>&gt;</span> sponsors.benefits.matrix.render()
            </div>
            <h2 style={{
              fontFamily: "'Cinzel',serif", fontWeight: 900,
              fontSize: "clamp(20px, 4vw, 32px)", color: "#f0f6ff",
              letterSpacing: "2px", textTransform: "uppercase", marginBottom: 6,
            }}>
              SPONSORSHIP <span style={{ color: "#0ea5e9" }}>BENEFITS</span> MATRIX
            </h2>
            <p style={{
              fontFamily: "'EB Garamond',serif", fontSize: 15, color: "#475569",
              fontStyle: "italic",
            }}>
              ASTRAsec⁺ 2026
            </p>
          </div>

          {/* Matrix card */}
          <div style={{
            backgroundColor: "#060b14",
            border: "1px solid rgba(14,165,233,0.25)",
            position: "relative", overflow: "hidden",
            marginBottom: 48,
          }}>
            {/* Top gradient bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(to right, transparent, #c9a84c 20%, #0ea5e9 50%, #a855f7 80%, transparent)",
              opacity: 0.6,
            }} />

            {/* Corner brackets — gold */}
            {(["tl","tr","bl","br"] as const).map(c => (
              <div key={c} style={{
                position: "absolute",
                top: c.startsWith("t") ? 5 : "auto", bottom: c.startsWith("b") ? 5 : "auto",
                left: c.endsWith("l") ? 5 : "auto", right: c.endsWith("r") ? 5 : "auto",
                width: 14, height: 14,
                borderTop:    c.startsWith("t") ? "1px solid rgba(201,168,76,0.5)" : "none",
                borderBottom: c.startsWith("b") ? "1px solid rgba(201,168,76,0.5)" : "none",
                borderLeft:   c.endsWith("l")   ? "1px solid rgba(201,168,76,0.5)" : "none",
                borderRight:  c.endsWith("r")   ? "1px solid rgba(201,168,76,0.5)" : "none",
              }} />
            ))}

            {/* Scrollable table wrapper for mobile */}
            <div style={{ overflowX: "auto" }}>
              <table style={{
                width: "100%", borderCollapse: "collapse",
                minWidth: 640,
              }}>
                {/* Header row */}
                <thead>
                  <tr>
                    <th style={{
                      padding: "18px 20px", textAlign: "left",
                      fontFamily: "'Cinzel',serif", fontSize: 11,
                      color: "#475569", letterSpacing: "1px",
                      borderBottom: "1px solid rgba(14,165,233,0.2)",
                      backgroundColor: "#0a0f1e",
                      fontWeight: 400,
                    }}>BENEFITS</th>
                    {[
                      { tier: "PLATINUM", price: "₹1,00,000", color: "#e2e8f0", bg: "rgba(226,232,240,0.06)", border: "rgba(226,232,240,0.3)" },
                      { tier: "GOLD",     price: "₹75,000",   color: "#f59e0b", bg: "rgba(245,158,11,0.06)",  border: "rgba(245,158,11,0.3)" },
                      { tier: "SILVER",   price: "₹50,000",   color: "#94a3b8", bg: "rgba(148,163,184,0.06)", border: "rgba(148,163,184,0.3)" },
                      { tier: "BRONZE",   price: "₹25,000",   color: "#c9a84c", bg: "rgba(201,168,76,0.06)",  border: "rgba(201,168,76,0.3)" },
                    ].map(t => (
                      <th key={t.tier} style={{
                        padding: "18px 16px", textAlign: "center",
                        fontFamily: "'Cinzel',serif", fontSize: 11,
                        color: t.color, letterSpacing: "1px",
                        borderBottom: "1px solid rgba(14,165,233,0.2)",
                        backgroundColor: t.bg,
                        fontWeight: 700,
                        borderLeft: `1px solid ${t.border}`,
                        position: "relative",
                      }}>
                        <div style={{ marginBottom: 2 }}>{t.tier}</div>
                        <div style={{
                          fontFamily: "monospace", fontSize: 10,
                          color: `${t.color}90`, fontWeight: 400,
                        }}>{t.price}</div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {[
                    { benefit: "Logo on Event Website",          pl: true,  go: true,  si: true,  br: true  },
                    { benefit: "Logo on Sponsorship Booklet",    pl: true,  go: true,  si: true,  br: true  },
                    { benefit: "Social Media Mentions",          pl: true,  go: true,  si: true,  br: true  },
                    { benefit: "Venue Branding",                 pl: true,  go: true,  si: true,  br: true  },
                    { benefit: "Sponsor Recognition During Event",pl: true, go: true,  si: true,  br: false },
                    { benefit: "Exhibition / Sponsor Booth",     pl: true,  go: true,  si: true,  br: false },
                    { benefit: "Branding on Certificates",       pl: true,  go: true,  si: false, br: false },
                    { benefit: "Branding on Posters & Standees", pl: true,  go: true,  si: true,  br: false },
                    { benefit: "Competition Sponsorship Rights", pl: true,  go: true,  si: false, br: false },
                    { benefit: "Workshop Sponsorship Rights",    pl: true,  go: true,  si: false, br: false },
                    { benefit: "Premium Stage Branding",         pl: true,  go: false, si: false, br: false },
                    { benefit: "Title Partner Recognition",      pl: true,  go: false, si: false, br: false },
                    { benefit: "Sponsor Stall Size",             pl: "Premium", go: "Standard", si: "Basic", br: "—" },
                  ].map((row, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "transparent" : "rgba(14,165,233,0.02)" }}>
                      <td style={{
                        padding: "13px 20px",
                        fontFamily: "'EB Garamond',serif", fontSize: 14,
                        color: "#94a3b8", lineHeight: 1.4,
                        borderBottom: "1px solid rgba(14,165,233,0.06)",
                      }}>{row.benefit}</td>
                      {(["pl","go","si","br"] as const).map((key, ci) => {
                        const tierColors = ["rgba(226,232,240,0.06)","rgba(245,158,11,0.06)","rgba(148,163,184,0.06)","rgba(201,168,76,0.06)"];
                        const checkColors = ["#e2e8f0","#f59e0b","#94a3b8","#c9a84c"];
                        const val = row[key];
                        return (
                          <td key={ci} style={{
                            padding: "13px 16px", textAlign: "center",
                            borderBottom: "1px solid rgba(14,165,233,0.06)",
                            borderLeft: `1px solid rgba(14,165,233,0.06)`,
                            backgroundColor: tierColors[ci],
                          }}>
                            {val === true ? (
                              <span style={{ color: checkColors[ci], fontSize: 16, fontWeight: 700 }}>✓</span>
                            ) : val === false ? (
                              <span style={{ color: "rgba(255,255,255,0.12)", fontSize: 14 }}>—</span>
                            ) : (
                              <span style={{
                                fontFamily: "'Cinzel',serif", fontSize: 10,
                                color: checkColors[ci], letterSpacing: "1px",
                              }}>{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom note */}
            <div style={{
              padding: "16px 20px", textAlign: "center",
              borderTop: "1px solid rgba(14,165,233,0.1)",
              fontFamily: "'EB Garamond',serif", fontSize: 14,
              color: "#475569", fontStyle: "italic",
            }}>
              Looking for a customized tier?{" "}
              <a href="/contact" style={{ color: "#0ea5e9", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.textDecoration = "underline"; }}
                onMouseLeave={e => { e.currentTarget.style.textDecoration = "none"; }}
              >
                Contact us directly
              </a>{" "}
              to discuss tailored packages.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ width:"100%", backgroundColor:C.footerBg, backgroundImage:LEATHER_TEX, border:`1.5px solid ${C.goldDk}`, padding:"48px 32px", textAlign:"center", position:"relative" }}>
        <div style={{ position:"absolute", inset:7, border:`1px solid rgba(139,105,20,0.4)`, pointerEvents:"none" }}/>
        <div style={{ position:"relative", zIndex:1 }}>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontWeight:900, fontSize:28, color:C.gold, letterSpacing:"2px", textTransform:"uppercase", marginBottom:24 }}>
            {sponsorsData.becomeASponsorCta.heading}
          </h2>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:16, color:C.lightText, opacity:0.8, maxWidth:500, margin:"0 auto 32px" }}>
            {sponsorsData.becomeASponsorCta.body}
          </p>
          <GoldBtn href={sponsorsData.becomeASponsorCta.contactLink}>{sponsorsData.becomeASponsorCta.buttonLabel}</GoldBtn>
        </div>
      </section>
    </>
  );
}
