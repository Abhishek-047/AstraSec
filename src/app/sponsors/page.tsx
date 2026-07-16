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

      {/* ── Sponsorship Tier Cards ── */}
      <section style={{
        width: "100%", padding: "64px 24px 0",
        backgroundColor: "#0a0f1e",
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>

          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{
              fontFamily: "monospace", fontSize: 10,
              color: "rgba(14,165,233,0.4)", letterSpacing: "1px", marginBottom: 10,
            }}>
              <span style={{ color: "#c9a84c" }}>&gt;</span> sponsors.packages.render()
            </div>
            <h2 style={{
              fontFamily: "'Cinzel',serif", fontWeight: 900,
              fontSize: "clamp(20px, 4vw, 32px)", color: "#f0f6ff",
              letterSpacing: "2px", textTransform: "uppercase", marginBottom: 6,
            }}>
              SPONSORSHIP <span style={{ color: "#0ea5e9" }}>PACKAGES</span>
            </h2>
            <p style={{
              fontFamily: "'EB Garamond',serif", fontSize: 15,
              color: "#475569", fontStyle: "italic",
            }}>
              ASTRAsec 2026 — Choose your tier
            </p>
          </div>

          {/* Tier cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20, marginBottom: 48,
          }}>
            {[
              {
                tier: "PLATINUM",
                price: "₹1,00,000",
                color: "#e2e8f0",
                dimColor: "rgba(226,232,240,0.15)",
                glowColor: "rgba(226,232,240,0.08)",
                icon: "M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z M9 12l2 2 4-4",
                tag: "PREMIER",
                benefits: [
                  "Logo on Event Website",
                  "Logo on Booklet",
                  "Social Media Mentions",
                  "Venue Branding",
                  "Sponsor Recognition",
                  "Exhibition Booth — Premium",
                  "Branding on Certificates",
                  "Branding on Posters",
                  "Competition Rights",
                  "Workshop Rights",
                  "Premium Stage Branding",
                  "Title Partner Recognition",
                ],
              },
              {
                tier: "GOLD",
                price: "₹75,000",
                color: "#f59e0b",
                dimColor: "rgba(245,158,11,0.15)",
                glowColor: "rgba(245,158,11,0.08)",
                icon: "M12 2L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9Z",
                tag: "ADVANCED",
                benefits: [
                  "Logo on Event Website",
                  "Logo on Booklet",
                  "Social Media Mentions",
                  "Venue Branding",
                  "Sponsor Recognition",
                  "Exhibition Booth — Standard",
                  "Branding on Certificates",
                  "Branding on Posters",
                  "Competition Rights",
                  "Workshop Rights",
                ],
              },
              {
                tier: "SILVER",
                price: "₹50,000",
                color: "#94a3b8",
                dimColor: "rgba(148,163,184,0.15)",
                glowColor: "rgba(148,163,184,0.08)",
                icon: "M12 2A4 4 0 1 1 12 10A4 4 0 0 1 12 2M8 10V13L4 22H20L16 13V10",
                tag: "STANDARD",
                benefits: [
                  "Logo on Event Website",
                  "Logo on Booklet",
                  "Social Media Mentions",
                  "Venue Branding",
                  "Sponsor Recognition",
                  "Exhibition Booth — Basic",
                  "Branding on Posters",
                ],
              },
              {
                tier: "BRONZE",
                price: "₹25,000",
                color: "#c9a84c",
                dimColor: "rgba(201,168,76,0.15)",
                glowColor: "rgba(201,168,76,0.08)",
                icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                tag: "ENTRY",
                benefits: [
                  "Logo on Event Website",
                  "Logo on Booklet",
                  "Social Media Mentions",
                  "Venue Branding",
                ],
              },
            ].map((pkg, pkgIdx) => (
              <div
                key={pkg.tier}
                style={{
                  backgroundColor: "#0f172a",
                  border: `1px solid ${pkg.color}30`,
                  position: "relative",
                  display: "flex", flexDirection: "column",
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: `floatUp 0.5s ease-out ${pkgIdx * 0.1}s forwards`,
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${pkg.color}70`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${pkg.glowColor}`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${pkg.color}30`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Corner L-brackets */}
                {(["tl","tr","bl","br"] as const).map(c => (
                  <div key={c} style={{
                    position: "absolute",
                    top: c.startsWith("t") ? 5 : "auto",
                    bottom: c.startsWith("b") ? 5 : "auto",
                    left: c.endsWith("l") ? 5 : "auto",
                    right: c.endsWith("r") ? 5 : "auto",
                    width: 10, height: 10,
                    borderTop:    c.startsWith("t") ? `1px solid ${pkg.color}60` : "none",
                    borderBottom: c.startsWith("b") ? `1px solid ${pkg.color}60` : "none",
                    borderLeft:   c.endsWith("l")   ? `1px solid ${pkg.color}60` : "none",
                    borderRight:  c.endsWith("r")   ? `1px solid ${pkg.color}60` : "none",
                  }} />
                ))}

                {/* Top color bar */}
                <div style={{
                  height: 3,
                  background: `linear-gradient(to right, transparent, ${pkg.color}, transparent)`,
                  opacity: 0.6,
                }} />

                {/* Card header */}
                <div style={{
                  padding: "24px 20px 16px", textAlign: "center",
                  borderBottom: `1px solid ${pkg.color}20`,
                }}>
                  {/* Tier tag */}
                  <div style={{
                    display: "inline-block",
                    backgroundColor: `${pkg.color}15`,
                    border: `1px solid ${pkg.color}40`,
                    fontFamily: "monospace", fontSize: 8,
                    color: pkg.color, padding: "2px 10px",
                    letterSpacing: "2px", marginBottom: 14,
                  }}>{pkg.tag}</div>

                  {/* Icon */}
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    backgroundColor: "#060b14",
                    border: `2px solid ${pkg.color}50`,
                    boxShadow: `0 0 0 4px #0f172a, 0 0 0 5px ${pkg.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                    position: "relative",
                  }}>
                    {/* Spinning orbit ring */}
                    <div style={{
                      position: "absolute", inset: -7, borderRadius: "50%",
                      border: `1px dashed ${pkg.color}25`,
                      animation: "spin 14s linear infinite",
                    }} />
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                      stroke={pkg.color} strokeWidth="1.4" strokeLinecap="round">
                      <path d={pkg.icon} />
                    </svg>
                  </div>

                  {/* Tier name */}
                  <div style={{
                    fontFamily: "'Cinzel',serif", fontWeight: 900,
                    fontSize: 18, color: pkg.color,
                    letterSpacing: "2px", marginBottom: 4,
                  }}>{pkg.tier}</div>

                  {/* Price */}
                  <div style={{
                    fontFamily: "monospace", fontSize: 14,
                    color: `${pkg.color}80`, letterSpacing: "1px",
                  }}>{pkg.price}</div>
                </div>

                {/* Benefits list */}
                <div style={{ padding: "20px", flex: 1 }}>
                  {pkg.benefits.map((b, bi) => (
                    <div key={bi} style={{
                      display: "flex", alignItems: "flex-start", gap: 10,
                      marginBottom: 10,
                      paddingBottom: 10,
                      borderBottom: bi < pkg.benefits.length - 1
                        ? `1px solid ${pkg.color}10`
                        : "none",
                    }}>
                      {/* Check mark */}
                      <div style={{
                        flexShrink: 0, marginTop: 2,
                        width: 16, height: 16, borderRadius: "50%",
                        backgroundColor: `${pkg.color}15`,
                        border: `1px solid ${pkg.color}40`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none"
                          stroke={pkg.color} strokeWidth="2.5" strokeLinecap="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: "'EB Garamond',serif", fontSize: 13,
                        color: "#94a3b8", lineHeight: 1.4,
                      }}>{b}</span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <div style={{ padding: "0 20px 24px" }}>
                  <a href="/contact" style={{
                    display: "block", width: "100%", textAlign: "center",
                    padding: "10px 0",
                    fontFamily: "'Cinzel',serif", fontSize: 10,
                    letterSpacing: "2px", textTransform: "uppercase",
                    color: pkg.color, textDecoration: "none",
                    border: `1px solid ${pkg.color}40`,
                    backgroundColor: `${pkg.color}08`,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${pkg.color}18`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${pkg.color}20`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${pkg.color}08`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  >
                    CHOOSE {pkg.tier} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Customized tier note */}
          <div style={{
            textAlign: "center", marginBottom: 48,
            padding: "16px 24px",
            border: "1px solid rgba(14,165,233,0.15)",
            backgroundColor: "rgba(14,165,233,0.03)",
          }}>
            <span style={{
              fontFamily: "'EB Garamond',serif", fontSize: 15,
              color: "#475569", fontStyle: "italic",
            }}>
              Looking for a customized tier?{" "}
              <a href="/contact" style={{ color: "#0ea5e9", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.textDecoration = "underline"; }}
                onMouseLeave={e => { e.currentTarget.style.textDecoration = "none"; }}
              >
                Contact us directly
              </a>
              {" "}to discuss tailored packages.
            </span>
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
