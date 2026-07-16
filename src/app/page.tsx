"use client";
import Link from "next/link";
import { C, LEATHER_TEX, SectionHeading, HighlightCard, GoldBtn } from "@/lib/design";
import CountdownTimer from "@/components/CountdownTimer";

/* ── Inline SVG Icons ──────────────────────────────────────── */
function Icon({ d, size = 46 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

/* ── Timeline node ─────────────────────────────────────────── */
function TNode({ time, title, speaker, highlight=false }: { time:string; title:string; speaker?:string; highlight?:boolean }) {
  const color = highlight ? "#0ea5e9" : "#c9a84c";
  const bg = highlight ? "rgba(14,165,233,0.06)" : "rgba(201,168,76,0.04)";
  
  return (
    <div style={{
      display: "flex", gap: 16, marginBottom: 24, position: "relative",
      padding: "16px 20px", backgroundColor: bg, border: `1px solid ${color}30`,
      transition: "all 0.3s ease",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = highlight ? "rgba(14,165,233,0.12)" : "rgba(201,168,76,0.08)";
      e.currentTarget.style.borderColor = `${color}80`;
      e.currentTarget.style.transform = "translateX(4px)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = bg;
      e.currentTarget.style.borderColor = `${color}30`;
      e.currentTarget.style.transform = "translateX(0)";
    }}
    >
      {/* Corner bracket tl */}
      <div style={{ position:"absolute", top:0, left:0, width:6, height:6, borderTop:`1px solid ${color}`, borderLeft:`1px solid ${color}` }} />
      {/* Corner bracket br */}
      <div style={{ position:"absolute", bottom:0, right:0, width:6, height:6, borderBottom:`1px solid ${color}`, borderRight:`1px solid ${color}` }} />
      
      {/* Time column */}
      <div style={{ minWidth: 80, flexShrink: 0, borderRight: `1px dashed ${color}40`, paddingRight: 16 }}>
        <div style={{ fontFamily: "monospace", fontSize: 13, color: color, fontWeight: 700 }}>{time}</div>
      </div>
      
      {/* Content column */}
      <div>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: 15, fontWeight: 700, color: "#f0f6ff", letterSpacing: "1px", marginBottom: 4 }}>
          {title}
        </div>
        {speaker && (
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 14, color: "#94a3b8", fontStyle: "italic" }}>
            <span style={{ color, opacity: 0.7, marginRight: 6 }}>&gt;</span>
            {speaker}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section style={{
        width: "100%", minHeight: 520, position: "relative", overflow: "hidden",
        backgroundColor: "#1c1209",
        backgroundImage: LEATHER_TEX,
        backgroundBlendMode: "multiply",
        border: `2px solid ${C.goldDk}`,
        display: "flex",
        marginBottom: 52,
      }}>
        {/* Decorative thin gold border inset */}


        {/* Top-right circuit board faint overlay */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: "55%", height: "60%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20M40 60H30M40 60v20M40 80H30M90 30h20M90 30v30M90 60H70' stroke='%23c9a84c' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='30' cy='60' r='2.5' fill='%23c9a84c' opacity='0.6'/%3E%3Ccircle cx='60' cy='40' r='2.5' fill='%23c9a84c' opacity='0.6'/%3E%3C/svg%3E")`,
          opacity: 0.05, pointerEvents: "none",
        }} />

        {/* Castle illustration (right side) */}
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0, width: "50%",
          backgroundImage: `url("https://images.unsplash.com/photo-1599661046289-e31897846e41?w=700&q=60&auto=format&fit=crop")`,
          backgroundSize: "cover", backgroundPosition: "center top",
          filter: "sepia(1) contrast(1.3) brightness(0.35)",
          opacity: 0.8,
          maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%)",
        }} />

        {/* Shield watermark top-right */}
        <div style={{ position: "absolute", top: 16, right: 24, opacity: 0.06, pointerEvents: "none" }}>
          <svg width="190" height="190" viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="0.5">
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z" />
            <rect x="9" y="12" width="6" height="5" rx="0.5" />
            <path d="M10 12V10A2 2 0 0 1 14 10V12" />
          </svg>
        </div>

        {/* Left content */}
        <div style={{ padding: "48px clamp(36px, 8vw, 80px)", position: "relative", zIndex: 2, maxWidth: 600, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Status badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16,
            backgroundColor: "rgba(14,165,233,0.08)",
            border: "1px solid rgba(14,165,233,0.3)",
            padding: "5px 14px",
            alignSelf: "flex-start",
          }}>
            <span className="status-dot" />
            <span style={{
              fontFamily: "'Cinzel',serif", fontSize: 9, letterSpacing: "3px",
              color: "#0ea5e9", textTransform: "uppercase",
            }}>AstraSec 2026 — Registration Open</span>
          </div>
          <h1 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 900,
            fontSize: "clamp(32px, 12vw, 72px)", lineHeight: 1.0,
            color: "transparent", letterSpacing: "3px", textTransform: "uppercase",
            background: "linear-gradient(135deg, #f0f6ff 0%, #c9a84c 40%, #0ea5e9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            margin: 0, marginBottom: 18,
          }}>
            LEGACY<br />SECURED
          </h1>
          {/* Terminal-style sub-label */}
          <div style={{
            fontFamily: "monospace", fontSize: 12, color: "rgba(14,165,233,0.6)",
            marginBottom: 8, letterSpacing: "1px",
          }}>
            <span style={{ color: "#c9a84c" }}>&gt;</span> Initializing ASTRAsec_2026.exe<span className="blink" />
          </div>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(10px, 3vw, 12px)", letterSpacing: "2px", color: C.gold, marginBottom: 6, textTransform: "uppercase" }}>
            HONORING THE PAST. SECURING THE FUTURE.
          </p>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: "clamp(9px, 2.5vw, 10px)", letterSpacing: "2px", color: C.goldMuted, marginBottom: 18, textTransform: "uppercase" }}>
            A TECH FEST BY ASTRASEC — SOCS
          </p>
          <p style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic", fontSize: 16, color: C.parchmentLt, lineHeight: 1.8, maxWidth: 380, marginBottom: 28 }}>
            Explore. Learn. Compete.<br />Join us for an unforgettable journey into cybersecurity and technology.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <GoldBtn href="/contact" variant="cyber">REGISTER NOW</GoldBtn>
            <GoldBtn href="/events" variant="gold" outline>EXPLORE EVENTS</GoldBtn>
          </div>
        </div>
        <div className="scan-overlay" />
      </section>

      <CountdownTimer />

      {/* ══════════════════════════════════
          ABOUT SECTION
      ══════════════════════════════════ */}
      <section id="about" className="px-6 py-10 md:px-8 md:py-12" style={{ width: "100%", backgroundColor: "#0d1424", marginBottom: 0, borderTop: `1px solid rgba(14,165,233,0.15)` }}>
        <SectionHeading text="About The Event" variant="gold" />
        <div style={{ display: "flex", gap: 36, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Cyber illustration */}
          <div style={{ flex: "0 0 200px", display: "flex", justifyContent: "center", position: "relative" }}>
            <svg width="200" height="230" viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg">

              {/* ── Outer corner brackets ── */}
              <line x1="10" y1="10" x2="36" y2="10" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
              <line x1="10" y1="10" x2="10" y2="36" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
              <line x1="190" y1="10" x2="164" y2="10" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
              <line x1="190" y1="10" x2="190" y2="36" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
              <line x1="10" y1="220" x2="36" y2="220" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
              <line x1="10" y1="220" x2="10" y2="194" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
              <line x1="190" y1="220" x2="164" y2="220" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>
              <line x1="190" y1="220" x2="190" y2="194" stroke="#c9a84c" strokeWidth="1.2" opacity="0.5"/>

              {/* ── Circuit traces — horizontal ── */}
              <line x1="10" y1="55" x2="50" y2="55" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25"/>
              <line x1="50" y1="55" x2="50" y2="80" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25"/>
              <line x1="190" y1="70" x2="150" y2="70" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25"/>
              <line x1="150" y1="70" x2="150" y2="95" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25"/>
              <line x1="10" y1="165" x2="45" y2="165" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25"/>
              <line x1="190" y1="150" x2="155" y2="150" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25"/>
              <line x1="155" y1="150" x2="155" y2="130" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.25"/>

              {/* ── Circuit nodes ── */}
              <circle cx="50" cy="80" r="2.5" fill="none" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.4"/>
              <circle cx="50" cy="80" r="1" fill="#0ea5e9" opacity="0.5"/>
              <circle cx="150" cy="95" r="2.5" fill="none" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.4"/>
              <circle cx="150" cy="95" r="1" fill="#0ea5e9" opacity="0.5"/>
              <circle cx="45" cy="165" r="2.5" fill="none" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.4"/>
              <circle cx="45" cy="165" r="1" fill="#0ea5e9" opacity="0.5"/>
              <circle cx="155" cy="130" r="2.5" fill="none" stroke="#0ea5e9" strokeWidth="0.7" opacity="0.4"/>
              <circle cx="155" cy="130" r="1" fill="#0ea5e9" opacity="0.5"/>

              {/* ── Binary data streams — left ── */}
              <text x="14" y="90" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.18">01</text>
              <text x="14" y="102" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.12">10</text>
              <text x="14" y="114" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.18">01</text>
              <text x="14" y="126" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.10">11</text>
              <text x="14" y="138" fontFamily="monospace" fontSize="7" fill="#0ea5e9" opacity="0.15">00</text>

              {/* ── Binary data streams — right ── */}
              <text x="172" y="90" fontFamily="monospace" fontSize="7" fill="#c9a84c" opacity="0.15">10</text>
              <text x="172" y="102" fontFamily="monospace" fontSize="7" fill="#c9a84c" opacity="0.20">01</text>
              <text x="172" y="114" fontFamily="monospace" fontSize="7" fill="#c9a84c" opacity="0.12">11</text>
              <text x="172" y="126" fontFamily="monospace" fontSize="7" fill="#c9a84c" opacity="0.18">00</text>
              <text x="172" y="138" fontFamily="monospace" fontSize="7" fill="#c9a84c" opacity="0.14">10</text>

              {/* ── Main shield body ── */}
              <path d="M100 28 L148 48 L148 95 C148 128,126 148,100 162 C74 148,52 128,52 95 L52 48 Z"
                fill="#060b14" stroke="#0ea5e9" strokeWidth="1.4" opacity="0.9"/>
              {/* Shield inner glow */}
              <path d="M100 38 L140 55 L140 95 C140 122,121 140,100 152 C79 140,60 122,60 95 L60 55 Z"
                fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.3"/>
              {/* Shield gold accent */}
              <path d="M100 28 L148 48 L148 95 C148 128,126 148,100 162 C74 148,52 128,52 95 L52 48 Z"
                fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.35" strokeDasharray="4 8"/>

              {/* ── Lock body ── */}
              <rect x="86" y="98" width="28" height="22" rx="2" fill="none" stroke="#0ea5e9" strokeWidth="1.5"/>
              <rect x="86" y="98" width="28" height="22" rx="2" fill="#0ea5e9" opacity="0.06"/>
              {/* Lock shackle */}
              <path d="M91 98V92A9 9 0 0 1 109 92V98" fill="none" stroke="#0ea5e9" strokeWidth="1.5"/>
              {/* Lock keyhole */}
              <circle cx="100" cy="107" r="4" fill="none" stroke="#c9a84c" strokeWidth="1.2"/>
              <circle cx="100" cy="107" r="1.5" fill="#c9a84c" opacity="0.6"/>
              <line x1="100" y1="111" x2="100" y2="116" stroke="#c9a84c" strokeWidth="1.2"/>

              {/* ── Shield top chip detail ── */}
              <rect x="88" y="56" width="24" height="16" rx="1" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
              <line x1="91" y1="56" x2="91" y2="53" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="95" y1="56" x2="95" y2="53" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="99" y1="56" x2="99" y2="53" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="103" y1="56" x2="103" y2="53" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="107" y1="56" x2="107" y2="53" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="91" y1="72" x2="91" y2="75" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="95" y1="72" x2="95" y2="75" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="99" y1="72" x2="99" y2="75" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="103" y1="72" x2="103" y2="75" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <line x1="107" y1="72" x2="107" y2="75" stroke="#c9a84c" strokeWidth="0.6" opacity="0.4"/>
              <text x="93" y="67" fontFamily="monospace" fontSize="6" fill="#c9a84c" opacity="0.6">CPU</text>

              {/* ── Terminal block at bottom ── */}
              <rect x="30" y="178" width="140" height="42" rx="2" fill="#060b14" stroke="#0ea5e9" strokeWidth="0.8" opacity="0.7"/>
              {/* Terminal header bar */}
              <rect x="30" y="178" width="140" height="10" rx="2" fill="#0ea5e9" opacity="0.08"/>
              <circle cx="40" cy="183" r="2" fill="#ef4444" opacity="0.5"/>
              <circle cx="48" cy="183" r="2" fill="#f59e0b" opacity="0.5"/>
              <circle cx="56" cy="183" r="2" fill="#22c55e" opacity="0.5"/>
              {/* Terminal text lines */}
              <text x="37" y="198" fontFamily="monospace" fontSize="6.5" fill="#0ea5e9" opacity="0.5">
                &gt; auth.verify() ✓
              </text>
              <text x="37" y="208" fontFamily="monospace" fontSize="6.5" fill="#c9a84c" opacity="0.4">
                &gt; shield.active
              </text>
              <text x="37" y="218" fontFamily="monospace" fontSize="6.5" fill="#0ea5e9" opacity="0.35">
                &gt; _<tspan opacity="0.8">█</tspan>
              </text>

              {/* ── Orbit ring around shield ── */}
              <ellipse cx="100" cy="95" rx="62" ry="18" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.12" strokeDasharray="3 5" transform="rotate(-15 100 95)"/>
              <ellipse cx="100" cy="95" rx="70" ry="22" stroke="#c9a84c" strokeWidth="0.4" opacity="0.10" strokeDasharray="2 8" transform="rotate(20 100 95)"/>
            </svg>
          </div>

          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ fontFamily: "'EB Garamond',serif", fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 32 }}>
              ASTRAsec 2026 is a two-day cybersecurity conference—cum—festival scheduled for 31
              October–1 November (tentative) at the Rishihood University campus. Designed as a
              hybrid of a technical conference and a cultural-tech fest, the event aims to foster
              cybersecurity awareness, skill development, and community building in India.
              <br /><br />
              The event will bring together students, cybersecurity enthusiasts, industry professionals, and
              policymakers, creating a platform for knowledge exchange, competition, and collaboration.
              With an expected participation of 300+ attendees, AstraSec will serve as a flagship initiative of
              SOCS to position Rishihood University as a hub for cybersecurity innovation and engagement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" style={{ borderTop: `1px solid ${C.gold}`, paddingTop: 28 }}>
              {[
                { d: "M12 3L20 6V11C20 16,16 19,12 21C8 19,4 16,4 11V6Z M8 13l2 2 5-5", label: "LEARN", cap: "Gain knowledge from experts" },
                { d: "M17 20C17 17,14.5 15,12 15C9.5 15,7 17,7 20 M4 20C4 18,6 16,7 15.5 M20 20C20 18,18 16,17 15.5 M12 12A4 4 0 1 1 12 4A4 4 0 0 1 12 12", label: "NETWORK", cap: "Connect with like-minded people" },
                { d: "M12 2L15 9L22 9L16.5 14L18.5 21L12 17L5.5 21L7.5 14L2 9L9 9Z", label: "COMPETE", cap: "Solve challenges and win rewards" },
                { d: "M9 18h6M12 2v2M12 18v2M12 6a6 6 0 0 1 0 12 6 6 0 0 1 0-12z", label: "INNOVATE", cap: "Build solutions for tomorrow" },
              ].map(f => (
                <div key={f.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 4px" }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.3" strokeLinecap="round" style={{ marginBottom: 8 }}>
                    <path d={f.d} />
                  </svg>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: 11, fontWeight: 700, color: "#c9a84c", letterSpacing: "1px", marginBottom: 6 }}>{f.label}</div>
                  <p style={{ fontFamily: "'EB Garamond',serif", fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>{f.cap}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* ══════════════════════════════════
          EVENT HIGHLIGHTS
      ══════════════════════════════════ */}
      <section id="highlights" className="px-6 py-12 md:px-8 md:py-16" style={{ width: "100%", backgroundColor: "#111827", borderTop: `1px solid rgba(201,168,76,0.15)`, padding: "30px 24px" }}>
        <SectionHeading text="Event Highlights" variant="cyber" />
        <div style={{ display: "flex", gap: 24, flexWrap: "nowrap", overflowX: "auto", paddingBottom: 24, paddingTop: 12, scrollbarWidth: "thin" }}>
          {[
            { d: "M3 3h8v8H3z M13 3h8v8h-8z M3 13h8v8H3z M17 17h.01", title: "CTF CHALLENGE", desc: "Test your hacking skills in our Capture The Flag competition." },
            { d: "M16 18l6-6-6-6 M8 6l-6 6 6 6", title: "WORKSHOPS", desc: "Hands-on sessions on tools, techniques and technologies." },
            { d: "M12 2A4 4 0 0 1 16 6V12A4 4 0 0 1 8 12V6A4 4 0 0 1 12 2Z M8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12 M12 16V22 M8 22H16", title: "TECH TALKS", desc: "Insightful talks by industry experts on latest trends." },
            { d: "M12 9A4 4 0 1 1 12 17A4 4 0 1 1 12 9Z M12 5V9 M5 12H9 M15 12H19 M7 7L9 9 M15 9L17 7 M7 17L9 15 M15 15L17 17", title: "BUG BOUNTY", desc: "Find vulnerabilities and earn exciting rewards." },
            { d: "M14.5 9.5L19 5 M5 19l4.5-4.5 M5 5l14 14 M9.5 9.5L5 5 M19 19l-4.5-4.5", title: "CYBER ARENA", desc: "Compete, collaborate & conquer in the ultimate cyber arena." },
          ].map((c, i) => (
            <HighlightCard key={c.title} icon={<Icon d={c.d} size={52} />} title={c.title} desc={c.desc} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          EVENT SCHEDULE
      ══════════════════════════════════ */}
      <section id="schedule" style={{ width: "100%", padding: "48px 24px", backgroundColor: "#0d1424", borderTop: `1px solid rgba(14,165,233,0.15)` }}>
        <SectionHeading text="Event Schedule" variant="cyber" />
        <div style={{ border: `1px solid rgba(14,165,233,0.3)`, padding: "40px 24px", position: "relative", backgroundColor: "#060b14", maxWidth: 800, margin: "0 auto" }}>
          {/* Corner brackets */}
          {["tl", "tr", "bl", "br"].map(c => (
            <div key={c} style={{
              position: "absolute",
              top: c.startsWith("t") ? 6 : "auto",
              bottom: c.startsWith("b") ? 6 : "auto",
              left: c.endsWith("l") ? 6 : "auto",
              right: c.endsWith("r") ? 6 : "auto",
              width: 10, height: 10,
              borderTop: c.startsWith("t") ? `1px solid rgba(14,165,233,0.6)` : "none",
              borderBottom: c.startsWith("b") ? `1px solid rgba(14,165,233,0.6)` : "none",
              borderLeft: c.endsWith("l") ? `1px solid rgba(14,165,233,0.6)` : "none",
              borderRight: c.endsWith("r") ? `1px solid rgba(14,165,233,0.6)` : "none",
            }} />
          ))}
          <div style={{ position: "relative" }}>
            <div className="flex flex-col gap-2">
              {[
                { time: "09:00 AM", title: "INAUGURATION & KEYNOTE", speaker: "Dr. A. Sharma, Chief Guest" },
                { time: "11:00 AM", title: "WORKSHOPS & CTF QUALIFIERS", highlight: true },
                { time: "02:00 PM", title: "TECH TALKS", speaker: "Industry Experts Panel" },
                { time: "04:30 PM", title: "CYBER ARENA & NETWORKING" },
                { time: "06:00 PM", title: "CLOSING CEREMONY & PRIZE DISTRIBUTION", highlight: true },
              ].map((n, i) => <TNode key={i} {...n} />)}
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* ══════════════════════════════════
          CTA BANNER
      ══════════════════════════════════ */}
      <section style={{
        width: "100%", backgroundColor: "#060b14",
        borderTop: `1px solid #8b6914`,
        textAlign: "center", position: "relative", overflow: "hidden",
        padding: "64px 24px",
      }}>
        {/* Inset frame */}
        <div style={{
          position: "absolute", inset: 8,
          border: "1px solid rgba(201,168,76,0.3)",
          pointerEvents: "none",
          display: "flex", justifyContent: "center"
        }}>
          {/* Legend-style text overlapping top border */}
          <div style={{
            position: "absolute", top: -9,
            backgroundColor: "#060b14",
            padding: "0 16px",
            fontFamily: "'Cinzel',serif", fontSize: "clamp(9px, 2.5vw, 12px)", letterSpacing: "clamp(2px, 1vw, 4px)", color: "#c9a84c", textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}>
            SOCIETY OF CYBERSECURITY CLUB
          </div>

          {/* 4 corner L-brackets */}
          <div style={{ position: "absolute", top: 6, left: 6, width: 20, height: 20, borderTop: "1.5px solid #c9a84c", borderLeft: "1.5px solid #c9a84c" }} />
          <div style={{ position: "absolute", top: 6, right: 6, width: 20, height: 20, borderTop: "1.5px solid #c9a84c", borderRight: "1.5px solid #c9a84c" }} />
          <div style={{ position: "absolute", bottom: 6, left: 6, width: 20, height: 20, borderBottom: "1.5px solid #c9a84c", borderLeft: "1.5px solid #c9a84c" }} />
          <div style={{ position: "absolute", bottom: 6, right: 6, width: 20, height: 20, borderBottom: "1.5px solid #c9a84c", borderRight: "1.5px solid #c9a84c" }} />
          {/* 4 corner dot ornaments */}
          {[{ top: -4, left: -4 }, { top: -4, right: -4 }, { bottom: -4, left: -4 }, { bottom: -4, right: -4 }].map((p, i) => (
            <div key={i} style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", border: "1px solid #8b6914", backgroundColor: "#060b14", ...p }} />
          ))}
        </div>
        {/* Decorative shield left */}
        <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", opacity: 0.1, pointerEvents: "none" }}>
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="0.6">
            <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z" />
            <rect x="9" y="12" width="6" height="5" rx="0.5" />
            <path d="M10 12V10A2 2 0 0 1 14 10V12" />
          </svg>
        </div>
        {/* Decorative circuit right */}
        <div style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", opacity: 0.1, pointerEvents: "none" }}>
          <svg width="90" height="90" viewBox="0 0 120 120" fill="none" stroke="#c9a84c" strokeWidth="0.8">
            <path d="M10 60h20M30 60V40M30 40h30M60 40v40M60 80h20M40 60H30" />
            <circle cx="30" cy="60" r="3" fill="#c9a84c" />
            <circle cx="60" cy="40" r="3" fill="#c9a84c" />
          </svg>
        </div>
        <div style={{ position: "relative", zIndex: 1, paddingTop: 16 }}>
          <h2 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 900, fontSize: "clamp(22px,3vw,36px)",
            letterSpacing: "2px", color: "#f0f6ff", textTransform: "uppercase",
            textShadow: `0 0 40px rgba(14,165,233,0.3)`, marginBottom: 28,
          }}>
            BE A PART OF THE LEGACY.
          </h2>
          <GoldBtn href="/contact" variant="cyber">REGISTER NOW</GoldBtn>
        </div>
      </section>
    </>
  );
}
