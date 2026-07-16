"use client";
import { PageHero, GoldBtn } from "@/lib/design";

function InputField({ label, type="text", textarea=false }: { label:string; type?:string; textarea?:boolean }) {
  const inputStyle: React.CSSProperties = {
    width:"100%", backgroundColor:"rgba(139,105,20,0.04)",
    border:`1px solid rgba(14,165,233,0.2)`, color:"#f0f6ff",
    padding:"10px 14px", fontFamily:"'EB Garamond',serif", fontSize:15,
    outline:"none", resize:"vertical" as const, borderRadius:0,
  };
  return (
    <div style={{ marginBottom:20 }}>
      <label style={{ display:"block", fontFamily:"'Cinzel',serif", fontSize:11, color:"#c9a84c", letterSpacing:"2px", marginBottom:6 }}>
        <span style={{ color:"rgba(14,165,233,0.5)", fontFamily:"monospace", marginRight:6 }}>&gt;_</span>{label}
      </label>
      {textarea ? (
        <textarea rows={4} style={inputStyle}
          onFocus={e => {
            e.currentTarget.style.borderColor = "#0ea5e9";
            e.currentTarget.style.boxShadow = "0 0 0 1px rgba(14,165,233,0.3), inset 0 0 12px rgba(14,165,233,0.04)";
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = "rgba(14,165,233,0.2)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      ) : (
        <input type={type} style={inputStyle}
          onFocus={e => {
            e.currentTarget.style.borderColor = "#0ea5e9";
            e.currentTarget.style.boxShadow = "0 0 0 1px rgba(14,165,233,0.3), inset 0 0 12px rgba(14,165,233,0.04)";
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = "rgba(14,165,233,0.2)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero title="CONTACT" subtitle="Reach Out. Connect. Collaborate." />

      <section style={{ width:"100%", padding:"0 24px", display:"flex", gap:40, flexWrap:"wrap", marginBottom:52, backgroundColor:"#0d1424", paddingTop:48, paddingBottom:52 }}>
        
        {/* Left - Contact Form */}
        <div style={{ flex:6, minWidth:280, backgroundColor:"#0f172a", border:`1px solid #8b6914`, padding:"32px", position:"relative" }}>
          {/* Gold inner frame */}
          <div style={{ position:"absolute", inset:5, border:"1px solid rgba(139,105,20,0.15)", pointerEvents:"none" }}/>
          <h2 style={{ fontFamily:"'Cinzel',serif", fontSize:18, color:"#f0f6ff", letterSpacing:"2px", marginBottom:12 }}>SEND A MESSAGE</h2>
          <div style={{ height:1, background:`linear-gradient(to right, #8b6914, transparent)`, marginBottom:24 }}/>
          
          <form onSubmit={e=>e.preventDefault()}>
            <InputField label="FULL NAME" />
            <InputField label="EMAIL ADDRESS" type="email" />
            <InputField label="SUBJECT" />
            <InputField label="MESSAGE" textarea />
            
            <button style={{
              width:"100%", fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700,
              letterSpacing:"2px", textTransform:"uppercase", padding:"14px",
              border:`1.5px solid #8b6914`, color:"#c9a84c", backgroundColor:"rgba(139,105,20,0.08)",
              cursor:"pointer", transition:"all 0.2s ease", marginTop:10
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.08)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(14,165,233,0.3)";
              e.currentTarget.style.borderColor = "#0ea5e9";
              e.currentTarget.style.color = "#0ea5e9";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "rgba(139,105,20,0.08)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#8b6914";
              e.currentTarget.style.color = "#c9a84c";
            }}
            >
              DISPATCH MESSAGE →
            </button>
          </form>
        </div>

        {/* ── Right — Cyber Contact Info Panel ── */}
        <div style={{ flex: 4, minWidth: 260, display: "flex", flexDirection: "column", gap: 0 }}>

          {/* Panel header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{
              fontFamily: "monospace", fontSize: 11, color: "rgba(14,165,233,0.45)",
              letterSpacing: "1px", marginBottom: 8,
            }}>
              <span style={{ color: "#c9a84c" }}>&gt;</span> sys.contact.load() — establishing secure channel...
            </div>
            <h2 style={{
              fontFamily: "'Cinzel',serif", fontSize: 18, color: "#f0f6ff",
              letterSpacing: "2px", marginBottom: 10,
            }}>REACH US</h2>
            <div style={{ height: 1, background: "linear-gradient(to right, #0ea5e9, rgba(14,165,233,0.1), transparent)" }} />
          </div>

          {/* ── Contact info cards ── */}
          {[
            {
              id: "EMAIL",
              protocol: "SMTP",
              status: "SECURE",
              statusColor: "#22c55e",
              icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
              value: "socs.club@rishihood.edu.in",
              href: "mailto:socs.club@rishihood.edu.in",
              mono: true,
            },
            {
              id: "LOCATION",
              protocol: "GEO",
              status: "VERIFIED",
              statusColor: "#0ea5e9",
              icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
              value: "B Block Main Auditorium\nSonipat, Haryana, Delhi NCR",
              href: null,
              mono: false,
            },
          ].map(item => (
            <div key={item.id} style={{
              backgroundColor: "#0f172a",
              border: "1px solid rgba(14,165,233,0.18)",
              padding: "16px 18px",
              marginBottom: 12,
              position: "relative",
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,0.45)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(14,165,233,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,233,0.18)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
            >
              {/* Corner micro-brackets */}
              {(["tl","tr","bl","br"] as const).map(c => (
                <div key={c} style={{
                  position: "absolute",
                  top: c.startsWith("t") ? 3 : "auto", bottom: c.startsWith("b") ? 3 : "auto",
                  left: c.endsWith("l") ? 3 : "auto", right: c.endsWith("r") ? 3 : "auto",
                  width: 7, height: 7,
                  borderTop:    c.startsWith("t") ? "1px solid rgba(14,165,233,0.35)" : "none",
                  borderBottom: c.startsWith("b") ? "1px solid rgba(14,165,233,0.35)" : "none",
                  borderLeft:   c.endsWith("l")   ? "1px solid rgba(14,165,233,0.35)" : "none",
                  borderRight:  c.endsWith("r")   ? "1px solid rgba(14,165,233,0.35)" : "none",
                }} />
              ))}

              {/* Top bar: ID + protocol + status */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: 10,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontFamily: "monospace", fontSize: 9, color: "rgba(14,165,233,0.5)",
                    letterSpacing: "1px",
                  }}>[{item.protocol}]</span>
                  <span style={{
                    fontFamily: "'Cinzel',serif", fontSize: 9, color: "#c9a84c",
                    letterSpacing: "2px",
                  }}>{item.id}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    backgroundColor: item.statusColor,
                    boxShadow: `0 0 6px ${item.statusColor}`,
                    display: "inline-block",
                  }} />
                  <span style={{
                    fontFamily: "monospace", fontSize: 8, color: item.statusColor,
                    letterSpacing: "1px",
                  }}>{item.status}</span>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "rgba(14,165,233,0.1)", marginBottom: 10 }} />

              {/* Icon + value */}
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round"
                  style={{ flexShrink: 0, marginTop: 2, opacity: 0.7 }}>
                  <path d={item.icon} />
                </svg>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: item.mono ? "monospace" : "'EB Garamond',serif",
                    fontSize: item.mono ? 12 : 14,
                    color: "#94a3b8", textDecoration: "none", lineHeight: 1.6,
                    letterSpacing: item.mono ? "0.5px" : "normal",
                    wordBreak: "break-all",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#0ea5e9"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; }}
                  >{item.value}</a>
                ) : (
                  <span style={{
                    fontFamily: "'EB Garamond',serif", fontSize: 14,
                    color: "#94a3b8", lineHeight: 1.7, whiteSpace: "pre-line",
                  }}>{item.value}</span>
                )}
              </div>
            </div>
          ))}

          {/* ── Phone numbers — terminal-style block ── */}
          <div style={{
            backgroundColor: "#060b14",
            border: "1px solid rgba(14,165,233,0.2)",
            padding: "16px 18px",
            marginBottom: 20,
            position: "relative",
            fontFamily: "monospace",
          }}>
            {/* Corner brackets */}
            {(["tl","tr","bl","br"] as const).map(c => (
              <div key={c} style={{
                position: "absolute",
                top: c.startsWith("t") ? 3 : "auto", bottom: c.startsWith("b") ? 3 : "auto",
                left: c.endsWith("l") ? 3 : "auto", right: c.endsWith("r") ? 3 : "auto",
                width: 7, height: 7,
                borderTop:    c.startsWith("t") ? "1px solid rgba(201,168,76,0.35)" : "none",
                borderBottom: c.startsWith("b") ? "1px solid rgba(201,168,76,0.35)" : "none",
                borderLeft:   c.endsWith("l")   ? "1px solid rgba(201,168,76,0.35)" : "none",
                borderRight:  c.endsWith("r")   ? "1px solid rgba(201,168,76,0.35)" : "none",
              }} />
            ))}

            {/* Terminal header */}
            <div style={{
              display: "flex", justifyContent: "space-between", marginBottom: 10,
            }}>
              <span style={{ fontSize: 9, color: "rgba(14,165,233,0.5)", letterSpacing: "1px" }}>
                [TEL] VOICE_CHANNELS
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{
                  width: 5, height: 5, borderRadius: "50%",
                  backgroundColor: "#22c55e", boxShadow: "0 0 6px #22c55e",
                  display: "inline-block",
                  animation: "blinkCursor 2s step-end infinite",
                }} />
                <span style={{ fontSize: 8, color: "#22c55e", letterSpacing: "1px" }}>ACTIVE</span>
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(14,165,233,0.1)", marginBottom: 12 }} />

            {/* Phone entries */}
            {[
              { label: "primary", num: "+91 88152 88895" },
              { label: "secondary", num: "+91 89990 99822" },
              { label: "tertiary",  num: "+91 73199 56809" },
            ].map((p, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                marginBottom: i < 2 ? 8 : 0,
                paddingBottom: i < 2 ? 8 : 0,
                borderBottom: i < 2 ? "1px solid rgba(14,165,233,0.06)" : "none",
              }}>
                <span style={{ fontSize: 9, color: "rgba(14,165,233,0.35)", minWidth: 64 }}>
                  {`ch_${String(i+1).padStart(2,"0")}:`}
                </span>
                <span style={{ color: "#8b6914", opacity: 0.6, fontSize: 9 }}>
                  [{p.label}]
                </span>
                <a href={`tel:${p.num.replace(/\s/g, "")}`} style={{
                  fontSize: 13, color: "#94a3b8", textDecoration: "none",
                  letterSpacing: "1px", transition: "color 0.15s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "#0ea5e9"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; }}
                >{p.num}</a>
              </div>
            ))}

            {/* Bottom terminal output */}
            <div style={{
              marginTop: 12, paddingTop: 8,
              borderTop: "1px solid rgba(14,165,233,0.08)",
              fontSize: 9, color: "rgba(14,165,233,0.25)", letterSpacing: "1px",
            }}>
              <span style={{ color: "#c9a84c", opacity: 0.4 }}>&gt;</span> conn.encrypt(TLS_1.3) — all channels secured
            </div>
          </div>

          {/* ── Follow The Legacy — cyber social panel ── */}
          <div>
            {/* Section header */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(14,165,233,0.35)", letterSpacing: "1px", marginBottom: 6 }}>
                <span style={{ color: "#c9a84c", opacity: 0.5 }}>&gt;</span> socs.network.connect()
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: 11, color: "#c9a84c", letterSpacing: "2px" }}>
                  FOLLOW THE LEGACY
                </span>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(201,168,76,0.4), transparent)" }} />
              </div>
            </div>

            {/* Social cards grid — 2×2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                {
                  label: "GITHUB",
                  handle: "@socs-ru",
                  tag: "[ CODE ]",
                  href: "https://github.com/Society-of-Cyber-Security",
                  accent: "#94a3b8",
                  icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                },
                {
                  label: "LINKEDIN",
                  handle: "@socs",
                  tag: "[ NETWORK ]",
                  href: "https://www.linkedin.com/company/society-of-cyber-security/",
                  accent: "#0ea5e9",
                  icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                },
                {
                  label: "INSTAGRAM",
                  handle: "@socs_ru",
                  tag: "[ INTEL ]",
                  href: "https://www.instagram.com/socs_ru/",
                  accent: "#a78bfa",
                  icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z",
                },
                {
                  label: "DISCORD",
                  handle: "join server",
                  tag: "[ COMMS ]",
                  href: "https://discord.gg/r8AwjTkaW6",
                  accent: "#c9a84c",
                  icon: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.04.036.052a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
                },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#060b14",
                    border: `1px solid ${s.accent}25`,
                    padding: "12px 10px",
                    textDecoration: "none",
                    display: "flex", flexDirection: "column", gap: 6,
                    position: "relative", overflow: "hidden",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = `${s.accent}10`;
                    el.style.borderColor = `${s.accent}60`;
                    el.style.boxShadow = `0 0 16px ${s.accent}18, inset 0 0 20px ${s.accent}06`;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.backgroundColor = "#060b14";
                    el.style.borderColor = `${s.accent}25`;
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Corner L-brackets */}
                  <div style={{ position:"absolute", top:4, left:4, width:6, height:6, borderTop:`1px solid ${s.accent}50`, borderLeft:`1px solid ${s.accent}50` }} />
                  <div style={{ position:"absolute", bottom:4, right:4, width:6, height:6, borderBottom:`1px solid ${s.accent}50`, borderRight:`1px solid ${s.accent}50` }} />

                  {/* Top row: icon + tag */}
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={s.accent} strokeWidth="1.6" strokeLinecap="round">
                      <path d={s.icon} />
                    </svg>
                    <span style={{ fontFamily:"monospace", fontSize:7, color:`${s.accent}60`, letterSpacing:"0.5px" }}>{s.tag}</span>
                  </div>

                  {/* Platform name */}
                  <div style={{ fontFamily:"'Cinzel',serif", fontSize:10, fontWeight:700, color:s.accent, letterSpacing:"1.5px" }}>
                    {s.label}
                  </div>

                  {/* Handle + live dot */}
                  <div style={{ display:"flex", alignItems:"center", gap:5 }}>
                    <div style={{ width:5, height:5, borderRadius:"50%", backgroundColor:s.accent, opacity:0.6, boxShadow:`0 0 5px ${s.accent}` }} />
                    <span style={{ fontFamily:"monospace", fontSize:8, color:`${s.accent}70`, letterSpacing:"0.5px" }}>{s.handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
