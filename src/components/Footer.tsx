import Link from "next/link";

const GOLD = "#c9a84c";
const GOLD_DK = "#8b6914";
const FOOTER_BG = "#2a1a06";
const WHITE_WM = "#f5e6c8";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: FOOTER_BG,
      backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='t'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23t)' opacity='0.07'/%3E%3C/svg%3E")`,
      borderTop:`2px solid ${GOLD_DK}`,
      padding:"48px 40px 28px",
      position:"relative",
      zIndex:1,
    }}>
      <div style={{ maxWidth:1060, margin:"0 auto", display:"grid", gridTemplateColumns:"1.8fr 1fr 1fr 1.4fr", gap:32, marginBottom:32 }}>

        {/* Logo column */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4">
              <path d="M12 2L20 5.5V12C20 17,16 20,12 22C8 20,4 17,4 12V5.5Z"/>
            </svg>
            <div style={{ fontFamily:"'Cinzel',serif", fontWeight:700, fontSize:14, letterSpacing:"3px", color: GOLD, lineHeight:1.3 }}>
              CODEX<br/>SECURITAS
            </div>
          </div>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color: GOLD, opacity:0.7, lineHeight:1.8 }}>
            Preserving History.<br/>Securing the Future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700, letterSpacing:"2px", color: GOLD, marginBottom:16, textTransform:"uppercase" }}>Quick Links</h4>
          <ul style={{ listStyle:"none" }}>
            {[["Home","/"],["About Event","/about"],["Schedule","/schedule"],["Events","/events"]].map(([name,href])=>(
              <li key={name} style={{ marginBottom:10 }}>
                <Link href={href} style={{ fontFamily:"'EB Garamond',serif", fontSize:14, color: GOLD, opacity:0.75, textDecoration:"none" }}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700, letterSpacing:"2px", color: GOLD, marginBottom:16, textTransform:"uppercase" }}>Support</h4>
          <ul style={{ listStyle:"none" }}>
            {[["FAQ","/contact"],["Contact Us","/contact"],["Venue Map","/contact"],["Code of Conduct","/contact"]].map(([name,href])=>(
              <li key={name} style={{ marginBottom:10 }}>
                <Link href={href} style={{ fontFamily:"'EB Garamond',serif", fontSize:14, color: GOLD, opacity:0.75, textDecoration:"none" }}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontFamily:"'Cinzel',serif", fontSize:11, fontWeight:700, letterSpacing:"2px", color: GOLD, marginBottom:16, textTransform:"uppercase" }}>Newsletter</h4>
          <p style={{ fontFamily:"'EB Garamond',serif", fontSize:13, color: GOLD, opacity:0.7, marginBottom:12 }}>Subscribe for encrypted updates.</p>
          <div style={{ display:"flex", height:36 }}>
            <input type="email" placeholder="ENTER EMAIL"
              style={{ flex:1, backgroundColor:"#1a1008", border:`1px solid ${GOLD_DK}`, borderRight:"none", padding:"0 10px", fontFamily:"'Cinzel',serif", fontSize:10, color: GOLD, outline:"none", borderRadius:0 }}
            />
            <button style={{
              backgroundColor:"#3a2a08", border:`1px solid ${GOLD_DK}`,
              padding:"0 14px", fontFamily:"'Cinzel',serif", fontSize:10, letterSpacing:"1px",
              color: GOLD, cursor:"pointer", height:36
            }}>JOIN</button>
          </div>
          <div style={{ display:"flex", gap:16, marginTop:14 }}>
            {["Privacy Policy","Terms of Service"].map(t=>(
              <a key={t} href="#" style={{ fontFamily:"'Cinzel',serif", fontSize:8.5, color: GOLD, opacity:0.5, letterSpacing:"1.5px", textDecoration:"none", textTransform:"uppercase" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Gold rule + copyright */}
      <div style={{ height:1, background:`linear-gradient(to right, transparent, ${GOLD_DK} 20%, ${GOLD_DK} 80%, transparent)`, marginBottom:16 }}/>
      <div style={{ textAlign:"center", fontFamily:"'Cinzel',serif", fontSize:9, letterSpacing:"2px", color: GOLD, opacity:0.45, textTransform:"uppercase" }}>
        © 2025 Codex Securitas. All Rights Reserved.
      </div>
    </footer>
  );
}
